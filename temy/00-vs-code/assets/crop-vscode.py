"""Режет снимки окна VS Code из raw/ по участкам, о которых идёт речь в главе.

    python3 crop-vscode.py

Окно снимается целиком (1200×680 логических, 2400×1360 в пикселях), но в кадре
всегда остаётся пустая нижняя половина терминала. Кадры «окно целиком» поэтому
склеиваются из двух кусков: верх окна и строка состояния. Так на снимке видны
все зоны и нет пустой полосы в треть высоты.

Координаты — в пикселях файла raw/ (то есть логические × 2).
"""
from pathlib import Path

from PIL import Image

HERE = Path(__file__).resolve().parent
RAW = HERE / "raw"

# Окно снято при высоте 680 pt: верх кончается там, где в терминале
# перестаёт идти вывод, строка состояния лежит последними 52 px.
STATUS_TOP = 1300
STATUS_BOTTOM = 1356

# name: (источник, высота верхнего куска, подклеить ли строку состояния)
WINDOW_SHOTS = {
    "vscode-zones": ("zones", 700, True),
    "vscode-folder": ("folder", 700, True),
    "vscode-error": ("error", 740, True),
}

# name: (источник, левый, верхний, правый, нижний)
AREA_SHOTS = {
    "vscode-ext": ("ext", 95, 140, 685, 800),
    "vscode-palette": ("palette", 600, 20, 1800, 310),
    "vscode-interp": ("interp", 600, 20, 1800, 420),
    "vscode-statusbar": ("zones", 0, STATUS_TOP, 2400, STATUS_BOTTOM),
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
        raise SystemExit(f"нет кадров в raw/: {', '.join(sorted(set(missing)))} — сначала bash shoot-vscode.sh")

    print("Режу кадры:")
    for name, (src, top_height, with_status) in WINDOW_SHOTS.items():
        save(window_shot(src, top_height, with_status), name)
    for name, (src, left, top, right, bottom) in AREA_SHOTS.items():
        save(Image.open(RAW / f"{src}.png").crop((left, top, right, bottom)), name)


if __name__ == "__main__":
    main()
