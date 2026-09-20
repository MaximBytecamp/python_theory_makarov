"""Схемы интерфейса VS Code: рендерим mockup.html и режем по элементам.

НЕ ЗАПУСКАТЬ ДЛЯ ГЛАВЫ 0. С сентября 2026 в главе стоят настоящие снимки
окна VS Code — их делают shoot-vscode.sh и crop-vscode.py. Этот скрипт пишет
файлы с теми же именами (vscode-zones.png и остальные) и затрёт их макетами.

Скрипт оставлен как заготовка: из него удобно собрать схему там, где снимок
показывать нельзя — например, для интерфейса, которого нет под рукой.

Запуск: python3 make-shots.py
"""
from pathlib import Path

from playwright.sync_api import sync_playwright

HERE = Path(__file__).resolve().parent
SHOTS = ["zones", "folder", "ext", "palette", "interp", "error", "statusbar"]

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page(viewport={"width": 1180, "height": 900}, device_scale_factor=2)
    page.goto((HERE / "mockup.html").as_uri())
    page.wait_for_timeout(400)
    for name in SHOTS:
        page.locator("#" + name).screenshot(path=str(HERE / f"vscode-{name}.png"))
        print("vscode-" + name + ".png")
    browser.close()
