from playwright.sync_api import sync_playwright
import os

OUTPUT_DIR = "/Volumes/Eligens/HideInMoscow-Projects/sanar-peru/screenshots"
os.makedirs(OUTPUT_DIR, exist_ok=True)

def capture_section(page_slug, url, clip, label, width=1440, height=900):
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page(viewport={"width": width, "height": height})
        page.goto(url, wait_until="networkidle", timeout=60000)
        page.wait_for_timeout(2000)
        out = f"{OUTPUT_DIR}/{page_slug}_{label}.png"
        page.screenshot(path=out, clip=clip)
        browser.close()
        print(f"Saved: {out}")

def capture_fullpage_1440(page_slug, url):
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page(viewport={"width": 1440, "height": 900})
        page.goto(url, wait_until="networkidle", timeout=60000)
        page.wait_for_timeout(2000)
        out = f"{OUTPUT_DIR}/{page_slug}_1440.png"
        page.screenshot(path=out, full_page=True)
        browser.close()
        print(f"Saved: {out}")

pages = [
    ("home",    "https://nosuhealth.com/"),
    ("about",   "https://nosuhealth.com/about/"),
    ("science", "https://nosuhealth.com/science/"),
    ("contact", "https://nosuhealth.com/contact/"),
]

# Full-page at 1440 for all
for slug, url in pages:
    capture_fullpage_1440(slug, url)

# Close-up: navbar (top 90px)
for slug, url in pages:
    capture_section(slug, url, {"x": 0, "y": 0, "width": 1440, "height": 90}, "navbar")

# Home hero (top 700px)
capture_section("home", "https://nosuhealth.com/", {"x": 0, "y": 0, "width": 1440, "height": 700}, "hero")

# Contact: top form area
capture_section("contact", "https://nosuhealth.com/contact/", {"x": 0, "y": 0, "width": 1440, "height": 700}, "form_top")

print("Section captures done.")
