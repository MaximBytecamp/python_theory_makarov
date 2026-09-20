"""Режет кадры §6–§7 из raw/ по тому, о чём идёт речь в тексте.

    python3 crop-6-7.py

Кадры окна сняты при 1200×680 логических (2400×1360 в пикселях), меню и диалог —
со всего экрана. Координаты ниже — в пикселях файлов raw/.

Кадры «окно целиком» склеиваются из верха окна и строки состояния: нижняя
половина терминала в кадре пустая, а версия Python в строке состояния нужна.
"""
from pathlib import Path

from PIL import Image

HERE = Path(__file__).resolve().parent
RAW = HERE / "raw"

STATUS_TOP, STATUS_BOTTOM = 1300, 1356

# имя: (источник, высота верхнего куска, подклеивать ли строку состояния)
WINDOW_SHOTS = {
    "vscode-folder-open": ("empty-folder", 560, False),
    "vscode-trust": ("trust", 1100, False),
    "vscode-run-button": ("tab-dirty", 480, False),
}

# имя: (источник, левый, верхний, правый, нижний)
AREA_SHOTS = {
    "vscode-new-file": ("new-file-name", 0, 60, 1300, 500),
    "vscode-menu-folder": ("menu-file", 0, 0, 800, 600),
    "vscode-open-dialog": ("dialog-open", 510, 345, 2290, 1255),
    # проводник обрезан: в нём видна папка .vscode, которая появляется
    # только после выбора интерпретатора, а это §9 — позже по тексту
    "vscode-run-terminal": ("run-result", 712, 0, 2400, 1010),
}


def save(img: Image.Image, name: str) -> None:
    out = HERE / f"{name}.png"
    img.save(out)
    print(f"  ✓ {name}.png  {img.width}×{img.height}")


def window_shot(src: str, top_height: int, with_status: bool) -> Image.Image:
    full = Image.open(RAW / f"{src}.png")
    top = full.crop((0, 0, full.width, top_height))
    if not with_status:
        return top
    status = full.crop((0, STATUS_TOP, full.width, STATUS_BOTTOM))
    out = Image.new("RGB", (full.width, top.height + status.height))
    out.paste(top, (0, 0))
    out.paste(status, (0, top.height))
    return out


def main() -> None:
    missing = [s for s, *_ in list(WINDOW_SHOTS.values()) + list(AREA_SHOTS.values())
               if not (RAW / f"{s}.png").exists()]
    if missing:
        raise SystemExit(f"нет кадров в raw/: {', '.join(sorted(set(missing)))} — сначала python3 shoot-6-7.py")

    print("Режу кадры:")
    for name, (src, top_height, with_status) in WINDOW_SHOTS.items():
        save(window_shot(src, top_height, with_status), name)
    for name, (src, left, top, right, bottom) in AREA_SHOTS.items():
        save(Image.open(RAW / f"{src}.png").crop((left, top, right, bottom)), name)


if __name__ == "__main__":
    main()
