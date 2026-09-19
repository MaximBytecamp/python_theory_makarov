"""Схемы интерфейса VS Code для главы 0: рендерим mockup.html и режем по элементам.

Это макеты, а не снимки чужого экрана: ни одного личного файла и проекта в кадр не попадает.
Текст ошибок в макетах взят из настоящего запуска Python 3.12 (см. главу).

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
