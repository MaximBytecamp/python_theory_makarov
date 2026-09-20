#!/bin/bash
# Снимки окна VS Code для главы 0.
#
#   bash shoot-vscode.sh
#
# Все состояния снимаются одним запуском: между запусками bash фокус уходит
# в окно терминала, и нажатия улетают не в редактор.
#
# Нужны разрешения в «Системные настройки → Конфиденциальность и безопасность»:
# «Запись экрана» и «Универсальный доступ» для терминала и для VS Code.
#
# Кадры кладутся в raw/, дальше их режет crop-vscode.py.
set -u

HERE="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
# Короткий путь: длинный уезжает в перенос внутри сообщения об ошибке
# и засоряет кадр служебными каталогами.
PROJ="/private/tmp/zayavki"
CODE="/Applications/Visual Studio Code.app/Contents/Resources/app/bin/code"
WIN_X=100; WIN_Y=60; WIN_W=1200; WIN_H=680

se()  { osascript -e "tell application \"System Events\" to $1" >/dev/null 2>&1; }

# Вернуть фокус окну проекта, не перезапуская редактор: соседние окна
# VS Code перехватывают его сами, когда в них приходит фоновая работа.
focus() {
  local pid; pid=$(vscode_pid)
  [ "$pid" = "0" ] && return 1
  osascript >/dev/null 2>&1 <<EOF
tell application "System Events"
  set p to first application process whose unix id is $pid
  set frontmost of p to true
  repeat with w in windows of p
    if (name of w) contains "zayavki" then
      perform action "AXRaise" of w
      exit repeat
    end if
  end repeat
end tell
EOF
  sleep 0.7
}

# Перед каждым нажатием убеждаемся, что впереди окно проекта. Без этой
# проверки потерянный фокус означает, что текст команд уедет в чужое окно.
guard() {
  case "$(frontwin)" in
    *zayavki*) return 0 ;;
  esac
  focus
  case "$(frontwin)" in
    *zayavki*) return 0 ;;
    *) echo "СТОП: фокус ушёл в «$(frontwin)» и не вернулся, ввод прекращён"; exit 1 ;;
  esac
}
k()   { guard; se "key code $1"; sleep "${2:-0.55}"; }
typ() { guard; osascript -e "tell application \"System Events\" to keystroke \"$1\"" >/dev/null 2>&1; sleep "${2:-0.8}"; }
pal() { k "35 using {command down, shift down}" 1.0; typ "$1" 1.4; k 36 "${2:-1.3}"; }

# unix id окна VS Code: привязка к номеру из прошлого запуска ломается
# при каждом перезапуске редактора, поэтому ищем процесс заново.
vscode_pid() {
  osascript -e 'tell application "System Events"
    repeat with p in (every application process whose background only is false)
      try
        if (name of p is "Code") or (name of p is "Electron") then
          repeat with w in windows of p
            if (name of w) contains "zayavki" then return unix id of p
          end repeat
        end if
      end try
    end repeat
    return "0"
  end tell' 2>/dev/null
}

frontwin() {
  osascript -e 'tell application "System Events"
    set fp to first application process whose frontmost is true
    try
      return name of first window of fp whose value of attribute "AXMain" is true
    end try
    return "БЕЗ ОКНА"
  end tell' 2>/dev/null
}

raise() {
  "$CODE" "$PROJ" >/dev/null 2>&1
  sleep 3.5
  local pid; pid=$(vscode_pid)
  if [ "$pid" = "0" ] || [ -z "$pid" ]; then
    echo "ОТМЕНА: окно проекта zayavki не найдено"; exit 1
  fi
  osascript >/dev/null 2>&1 <<EOF
tell application "System Events"
  set p to first application process whose unix id is $pid
  set frontmost of p to true
  repeat with w in windows of p
    if (name of w) contains "zayavki" then
      -- развёрнутое окно не принимает position/size, пока не снят zoom
      try
        if (value of attribute "AXFullScreen" of w) then set value of attribute "AXFullScreen" of w to false
      end try
      try
        if (value of attribute "AXZoomed" of w) then set value of attribute "AXZoomed" of w to false
      end try
      delay 0.5
      set position of w to {$WIN_X, $WIN_Y}
      delay 0.3
      set size of w to {$WIN_W, $WIN_H}
      delay 0.3
      set position of w to {$WIN_X, $WIN_Y}
      exit repeat
    end if
  end repeat
end tell
EOF
  sleep 0.8
  case "$(frontwin)" in
    *zayavki*) ;;
    *) echo "ОТМЕНА: впереди окно «$(frontwin)», а не проект"; exit 1 ;;
  esac
}

# macOS помнит раскладку для каждой программы отдельно: у VS Code она бывает
# русской, а палитра команд ищет по английским названиям.
abc_now() {
  osascript -e 'tell application "System Events" to return description of menu bar item 1 of menu bar 2 of (first process whose name is "TextInputMenuAgent")' 2>/dev/null
}
ensure_abc() {
  local cur; cur=$(abc_now)
  echo "  раскладка: ${cur:-неизвестна}"
  [ "$cur" = "ABC" ] && return 0
  osascript -e 'tell application "System Events" to tell (first process whose name is "TextInputMenuAgent") to tell menu bar item 1 of menu bar 2 to perform action "AXPress"' >/dev/null 2>&1
  sleep 1.2
  osascript -e 'tell application "System Events" to tell (first process whose name is "TextInputMenuAgent") to click menu item "ABC" of menu 1 of menu bar item 1 of menu bar 2' >/dev/null 2>&1
  sleep 1.5
  echo "  раскладка после переключения: $(abc_now)"
  raise
}

shot() {
  # Указатель, зависший над кнопкой, через секунду вызывает подсказку —
  # в кадре она выглядит как случайный ярлык поверх интерфейса.
  python3 -c "import Quartz; Quartz.CGWarpMouseCursorPosition((20, 1010))" 2>/dev/null
  sleep "${2:-1.0}"
  guard
  screencapture -R$WIN_X,$WIN_Y,$WIN_W,$WIN_H -x "$HERE/raw/$1.png"
  echo "  ✓ raw/$1.png"
}

# Правая панель (Claude Code, Copilot и прочее) занимает половину кадра и к главе
# отношения не имеет. Закрываем её перед каждым снимком, а не один раз:
# часть команд открывает её заново.
clean() {
  # ⌥⌘B — переключатель правой панели. Команда палитры в этой сборке
  # называется по-разному от версии к версии, горячая клавиша стабильнее.
  # Открыта панель или нет, видно по ширине редактора, поэтому просто
  # закрываем её каждый раз заново: повторное нажатие вернёт её обратно,
  # поэтому проверяем результат по кадру, а не вслепую.
  k "11 using {command down, option down}" 0.9
  k 53 0.3
}

# Терминал между состояниями копит историю прошлых запусков: в кадр
# попадает то, чего в тексте главы нет. Перед каждым снимком поднимаем
# чистый терминал.
fresh_term() {
  pal "terminal kill all terminals" 1.2
  k "50 using {control down}" 2.5
}

mkdir -p "$HERE/raw"
echo "Открываю проект…"
raise
ensure_abc
k 53 0.4                          # Esc — закрыть всё висящее
pal "view close all editors" 1.2  # убрать вкладку Welcome с первого запуска
clean

echo "Снимаю состояния:"

# --- зоны окна: открыт main.py, в терминале виден запуск
pal "view close secondary side bar" 1.0
pal "view show explorer" 1.2
k "35 using {command down}" 1.0; typ "main.py" 1.2; k 36 1.8
fresh_term
typ "python3 main.py" 1.0; k 36 2.5
shot zones 1.2

clean

# --- папка проекта: три файла, запущен zayavka.py с вводом
k "35 using {command down}" 1.0; typ "zayavka.py" 1.2; k 36 1.8
fresh_term
typ "python3 zayavka.py" 1.0; k 36 2.0
typ "Maria" 1.0; k 36 1.2
typ "19" 0.8; k 36 2.0
shot folder 1.2

clean

# --- ошибка: NameError в терминале
k "35 using {command down}" 1.0; typ "oshibka.py" 1.2; k 36 1.8
fresh_term
typ "python3 oshibka.py" 1.0; k 36 2.0
typ "Maria" 1.0; k 36 2.5
shot error 1.3

# --- строка состояния: отдельный кадр снимет crop, но лишний мусор убираем
k 53 0.4

clean

# --- расширения: поиск python
pal "view close secondary side bar" 1.0
k "7 using {command down, shift down}" 2.0    # ⌘⇧X
k "0 using {command down}" 0.6                # ⌘A — выделить прошлый запрос
typ "python" 3.0                              # ввод заменит выделенное
shot ext 1.5

clean

# --- палитра команд с набранной командой
k 53 0.5
pal "view show explorer" 1.2
k "35 using {command down}" 1.0; typ "main.py" 1.2; k 36 1.6
k "35 using {command down, shift down}" 1.0
typ "Python: Select Interpreter" 1.8
shot palette 1.2

# --- список интерпретаторов
k 36 2.5
shot interp 1.5
k 53 0.5

echo "Готово. Кадры в raw/ — дальше: python3 crop-vscode.py"
