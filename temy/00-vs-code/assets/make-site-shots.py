"""Настоящие снимки страниц загрузки Python и VS Code.

Это именно снимки сайтов, а не макеты: страницы открываются в браузере и
сохраняются как есть. Сайты меняются, поэтому снимки полезно переснимать
перед началом учебного года.

Запуск: python3 make-site-shots.py
"""
from pathlib import Path

from playwright.sync_api import sync_playwright

HERE = Path(__file__).resolve().parent

with sync_playwright() as p:
    browser = p.chromium.launch()
    ctx = browser.new_context(viewport={"width": 1280, "height": 820},
                              device_scale_factor=2, locale="ru-RU")
    page = ctx.new_page()

    page.goto("https://www.python.org/downloads/", wait_until="networkidle", timeout=60000)
    page.wait_for_timeout(1200)
    page.locator(".download-for-current-os").first.screenshot(path=str(HERE / "site-python-download.png"))

    page.goto("https://www.python.org/downloads/windows/", wait_until="networkidle", timeout=60000)
    page.wait_for_timeout(1200)
    page.screenshot(path=str(HERE / "site-python-windows.png"))

    page.goto("https://code.visualstudio.com/", wait_until="networkidle", timeout=60000)
    for label in ("Reject", "Accept"):          # баннер о cookie закрывает шапку
        button = page.get_by_role("button", name=label, exact=True)
        if button.count():
            button.first.click()
            break
    page.wait_for_timeout(1500)
    page.screenshot(path=str(HERE / "site-vscode-home.png"))

    page.goto("https://code.visualstudio.com/Download", wait_until="networkidle", timeout=60000)
    page.wait_for_timeout(1500)
    page.screenshot(path=str(HERE / "site-vscode-download.png"))

    ctx.close()
    browser.close()
print("Сняты четыре страницы загрузки")
