from playwright.sync_api import sync_playwright
import os

PAGES = [
    ("home", "https://nosuhealth.com/"),
    ("about", "https://nosuhealth.com/about/"),
    ("science", "https://nosuhealth.com/science/"),
    ("contact", "https://nosuhealth.com/contact/"),
]

VIEWPORTS = [
    ("desktop", 1920, 1080),
    ("mobile", 375, 812),
]

OUTPUT_DIR = "/Volumes/Eligens/HideInMoscow-Projects/sanar-peru/screenshots"
os.makedirs(OUTPUT_DIR, exist_ok=True)

def capture(url, output_path, width, height):
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page(viewport={"width": width, "height": height})
        page.goto(url, wait_until="networkidle", timeout=60000)
        # Wait extra for animations/fonts
        page.wait_for_timeout(2000)
        page.screenshot(path=output_path, full_page=True)
        browser.close()
        print(f"Saved: {output_path}")

for slug, url in PAGES:
    for device, w, h in VIEWPORTS:
        out = f"{OUTPUT_DIR}/{slug}_{device}.png"
        print(f"Capturing {url} @ {w}x{h} -> {out}")
        capture(url, out, w, h)

print("All screenshots captured.")
