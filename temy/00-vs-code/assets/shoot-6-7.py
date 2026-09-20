"""Снимки для §6 «Папка проекта» и §7 «Первый файл и запуск кнопкой».

    python3 shoot-6-7.py prepare     поднять чистый экземпляр VS Code
    python3 shoot-6-7.py file        значки, имя файла, точка на вкладке, сохранение
    python3 shoot-6-7.py run X Y     запуск кнопкой ▷ и вывод в терминале
    python3 shoot-6-7.py menu        меню File и диалог выбора папки
    python3 shoot-6-7.py unhide      вернуть скрытые приложения

Снимается отдельный экземпляр редактора с чистым профилем (`--user-data-dir`):
в рабочем VS Code открыты Claude Code, Copilot и лишние панели, а студент
видит окно без них. В профиль ставятся те же четыре расширения Python.

Про предохранители. Рабочее окно на этой машине развёрнуто на весь экран,
то есть живёт на отдельном рабочем столе macOS, и фокус between переключениями
уходил в чужие окна — нажатия попадали в браузер и мессенджер. Поэтому здесь
перед каждым нажатием и кликом проверяется, что впереди процесс съёмки
и что под курсором окно этого же процесса; иначе работа прекращается
без единого нажатия. На время съёмки прочие программы прячутся.
"""
import subprocess
import sys
import time

import Quartz

PROFILE = "/private/tmp/vsc-shots"
DEMO_ROOT = "/private/tmp/student"
DEMO = f"{DEMO_ROOT}/python/zayavki"
CODE = "/Applications/Visual Studio Code.app/Contents/Resources/app/bin/code"
PIDFILE = ".shot-pid"
WIN = (100, 60, 1200, 680)          # x, y, ширина, высота — логические точки


def osa(script: str) -> str:
    r = subprocess.run(["osascript", "-e", script], capture_output=True, text=True)
    return r.stdout.strip()


def pid() -> str:
    return open(PIDFILE).read().strip()


def front_pid() -> str:
    return osa('tell application "System Events" to return unix id of '
               '(first application process whose frontmost is true)')


def raise_window() -> None:
    osa(f'''tell application "System Events" to tell (first process whose unix id is {pid()})
      set frontmost to true
      delay 0.6
      repeat with w in windows
        set position of w to {{{WIN[0]}, {WIN[1]}}}
        delay 0.2
        set size of w to {{{WIN[2]}, {WIN[3]}}}
        delay 0.2
        perform action "AXRaise" of w
      end repeat
    end tell''')
    time.sleep(0.8)


def activate() -> None:
    """Рабочее окно развёрнуто на весь экран и лежит на своём рабочем столе,
    поэтому одной активации мало: проверяем, что наше окно и правда сверху."""
    centre = (WIN[0] + WIN[2] / 2, WIN[1] + WIN[3] / 2)
    for attempt in range(5):
        raise_window()
        if front_pid() == pid() and str(owner_at(*centre)) == pid():
            return
        time.sleep(1.2)
    stop(f"окно съёмки не удалось вывести вперёд: впереди {front_pid()}, "
         f"в центре кадра окно процесса {owner_at(*centre)}")


def owner_at(x: float, y: float) -> int:
    """PID окна, которое лежит сверху в точке экрана."""
    wl = Quartz.CGWindowListCopyWindowInfo(
        Quartz.kCGWindowListOptionOnScreenOnly | Quartz.kCGWindowListExcludeDesktopElements,
        Quartz.kCGNullWindowID)
    for w in wl:                     # список идёт сверху вниз по слоям
        b = w.get("kCGWindowBounds")
        if not b or w.get("kCGWindowAlpha", 1) == 0:
            continue
        # слои выше нуля — меню, Dock и служебный оверлей «Снимок экрана»:
        # они лежат поверх всего и к принадлежности точки отношения не имеют
        if w.get("kCGWindowLayer", 0) != 0:
            continue
        if b["X"] <= x <= b["X"] + b["Width"] and b["Y"] <= y <= b["Y"] + b["Height"]:
            return int(w.get("kCGWindowOwnerPID", 0))
    return 0


def stop(why: str) -> None:
    print(f"СТОП: {why}. Ввод прекращён, кадры не сняты.")
    sys.exit(1)


def guard(point=None) -> None:
    if front_pid() != pid():
        activate()
    if front_pid() != pid():
        stop(f"впереди процесс {front_pid()}, а не окно съёмки {pid()}")
    if point is not None:
        owner = owner_at(*point)
        if str(owner) != pid():
            stop(f"под курсором окно процесса {owner}, а не окно съёмки {pid()}")


def key(code: int, mods: str = "", wait: float = 0.7) -> None:
    guard()
    osa(f'tell application "System Events" to key code {code}{mods}')
    time.sleep(wait)


def typ(text: str, wait: float = 0.9) -> None:
    guard()
    osa(f'tell application "System Events" to keystroke "{text}"')
    time.sleep(wait)


def move(x: float, y: float, wait: float = 0.5) -> None:
    """Значки в строке проводника появляются только под курсором, а перенос
    курсора сам по себе события «мышь поехала» не создаёт: без него редактор
    о наведении не знает. Поэтому шлём настоящие mouseMoved, несколькими шагами."""
    cur = Quartz.CGEventGetLocation(Quartz.CGEventCreate(None))
    for i in range(1, 6):
        px = cur.x + (x - cur.x) * i / 5
        py = cur.y + (y - cur.y) * i / 5
        Quartz.CGEventPost(Quartz.kCGHIDEventTap,
                           Quartz.CGEventCreateMouseEvent(None, Quartz.kCGEventMouseMoved,
                                                          (px, py), Quartz.kCGMouseButtonLeft))
        time.sleep(0.05)
    time.sleep(wait)


def click(x: float, y: float, wait: float = 1.2) -> None:
    guard((x, y))
    move(x, y, 0.4)
    time.sleep(0.3)
    guard((x, y))                    # окно могло смениться, пока ехал курсор
    for t in (Quartz.kCGEventLeftMouseDown, Quartz.kCGEventLeftMouseUp):
        Quartz.CGEventPost(Quartz.kCGHIDEventTap,
                           Quartz.CGEventCreateMouseEvent(None, t, (x, y), Quartz.kCGMouseButtonLeft))
        time.sleep(0.06)
    time.sleep(wait)


def park() -> None:
    Quartz.CGWarpMouseCursorPosition((20, 1010))
    time.sleep(0.5)


def shot(name: str, wait: float = 0.8, keep_cursor=False) -> None:
    guard()
    if not keep_cursor:
        park()
    time.sleep(wait)
    subprocess.run(["screencapture", f"-R{WIN[0]},{WIN[1]},{WIN[2]},{WIN[3]}", "-x", f"raw/{name}.png"])
    print(f"  ✓ raw/{name}.png")


def shot_full(name: str, wait: float = 0.8) -> None:
    guard()
    park()
    time.sleep(wait)
    subprocess.run(["screencapture", "-x", f"raw/{name}.png"])
    print(f"  ✓ raw/{name}.png (экран)")


def ensure_abc() -> None:
    """Раскладка запоминается для каждой программы: палитра ждёт латиницу."""
    cur = osa('tell application "System Events" to return description of menu bar item 1 '
              'of menu bar 2 of (first process whose name is "TextInputMenuAgent")')
    if cur == "ABC":
        return
    osa('tell application "System Events" to tell (first process whose name is "TextInputMenuAgent") '
        'to tell menu bar item 1 of menu bar 2 to perform action "AXPress"')
    time.sleep(1.2)
    osa('tell application "System Events" to tell (first process whose name is "TextInputMenuAgent") '
        'to click menu item "ABC" of menu 1 of menu bar item 1 of menu bar 2')
    time.sleep(1.5)
    print(f"  раскладка: {cur} → ABC")


def hide_others() -> None:
    """Чужое окно под курсором — главная причина промахов. Прячем всё лишнее."""
    osa('''tell application "System Events"
      repeat with p in (every application process whose background only is false)
        try
          if (name of p is not "Code") and (name of p is not "Finder") then set visible of p to false
        end try
      end repeat
    end tell''')
    time.sleep(1.5)


def main() -> None:
    stage = sys.argv[1] if len(sys.argv) > 1 else ""

    if stage == "prepare":
        subprocess.run(["pkill", "-f", f"user-data-dir {PROFILE}/data"], capture_output=True)
        time.sleep(1)
        subprocess.run(["rm", "-rf", DEMO_ROOT])
        subprocess.run(["mkdir", "-p", DEMO])
        subprocess.Popen([CODE, "--user-data-dir", f"{PROFILE}/data",
                          "--extensions-dir", f"{PROFILE}/ext", "--new-window", DEMO],
                         stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
        time.sleep(10)
        out = subprocess.run(["pgrep", "-f", f"user-data-dir {PROFILE}/data --extensions-dir"],
                             capture_output=True, text=True).stdout.split()
        open(PIDFILE, "w").write(out[0])
        print("PID экземпляра:", out[0])
        hide_others()
        ensure_abc()
        activate()
        return

    if stage == "unhide":
        osa('''tell application "System Events"
          repeat with p in (every application process whose background only is false)
            try
              set visible of p to true
            end try
          end repeat
        end tell''')
        print("Приложения возвращены.")
        return

    if stage == "file":
        hide_others()
        ensure_abc()
        activate()
        row = (200, 142)             # строка папки zayavki в проводнике
        icon = (357, 142)            # первый значок — «Создать файл»
        key(14, " using {command down, shift down}", 1.0)   # ⇧⌘E — проводник
        key(124, "", 0.6)                                   # → развернуть папку
        print("Значки на строке папки:")
        guard(row)
        move(*row, 0.6)
        shot("new-file-icons", 0.3, keep_cursor=True)
        print("Имя файла в поле проводника:")
        click(*icon)
        typ("main.py", 1.0)
        shot("new-file-name", 0.4, keep_cursor=True)
        key(36, "", 2.5)             # Enter — файл создан и открыт
        print("Несохранённый файл — точка на вкладке:")
        subprocess.run('printf %s \'print("Hello, world!")\' | pbcopy', shell=True)
        key(9, " using {command down}", 1.2)     # ⌘V
        shot("tab-dirty", 1.0)
        key(1, " using {command down}", 1.8)     # ⌘S
        print("Файл сохранён:")
        shot("saved", 1.2)
        return

    if stage == "run":
        x, y = float(sys.argv[2]), float(sys.argv[3])
        hide_others()
        activate()
        print("Запуск кнопкой ▷:")
        click(x, y, 5.0)
        shot("run-result", 2.0)
        return

    if stage == "menu":
        hide_others()
        ensure_abc()
        activate()
        print("Меню File:")
        osa(f'tell application "System Events" to tell (first process whose unix id is {pid()}) '
            'to click menu bar item "File" of menu bar 1')
        time.sleep(1.3)
        shot_full("menu-file", 0.5)
        print("Диалог выбора папки:")
        osa(f'tell application "System Events" to tell (first process whose unix id is {pid()}) '
            'to click menu item "Open Folder…" of menu 1 of menu bar item "File" of menu bar 1')
        time.sleep(2.5)
        key(5, " using {command down, shift down}", 1.2)   # ⌘⇧G — переход к папке
        typ("~/python", 1.0)
        key(36, "", 2.0)
        key(125, "", 1.0)                                  # ↓ — выбрать zayavki
        shot_full("dialog-open", 1.0)
        key(53, "", 1.0)                                   # Esc
        return

    print(__doc__)


if __name__ == "__main__":
    main()
