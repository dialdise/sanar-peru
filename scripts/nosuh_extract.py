from playwright.sync_api import sync_playwright
import json

SCREENSHOTS_DIR = "/Volumes/Eligens/HideInMoscow-Projects/sanar-peru/screenshots"

JS = """
() => {
  const body = document.body;
  const main = document.querySelector('main') || document.querySelector('[class*="main"]');
  const nav = document.querySelector('nav, header, [class*="nav"], [class*="header"]');
  const h1 = document.querySelector('h1');
  const heroSection = h1 ? (h1.closest('section') || h1.parentElement) : null;
  const sections = document.querySelectorAll('section');
  const sectionBgs = [...sections].slice(0,8).map(s => ({
    class: s.className.slice(0,80),
    bg: window.getComputedStyle(s).backgroundColor,
    padding: window.getComputedStyle(s).padding,
  }));
  const bodyStyle = window.getComputedStyle(document.body);
  const btn = document.querySelector('a[class*="btn"], button, a[class*="button"]');

  // Extra: collect all distinct bg colors across major containers
  const allBgs = [...document.querySelectorAll('section, div[class*="section"], div[class*="hero"], div[class*="feature"], div[class*="banner"]')]
    .slice(0, 20)
    .map(el => ({
      tag: el.tagName,
      class: el.className.slice(0, 80),
      bg: window.getComputedStyle(el).backgroundColor,
    }))
    .filter(x => x.bg !== 'rgba(0, 0, 0, 0)');

  // Extra: all headings
  const headings = [...document.querySelectorAll('h1,h2,h3')].slice(0,15).map(h => ({
    tag: h.tagName,
    text: h.textContent.trim().slice(0, 80),
    fontSize: window.getComputedStyle(h).fontSize,
    color: window.getComputedStyle(h).color,
    fontFamily: window.getComputedStyle(h).fontFamily,
    fontWeight: window.getComputedStyle(h).fontWeight,
  }));

  // Extra: all buttons/CTAs
  const btns = [...document.querySelectorAll('a[class*="btn"], button, a[class*="button"], [class*="cta"]')].slice(0,8).map(b => ({
    text: b.textContent.trim().slice(0, 40),
    bg: window.getComputedStyle(b).backgroundColor,
    color: window.getComputedStyle(b).color,
    borderRadius: window.getComputedStyle(b).borderRadius,
    padding: window.getComputedStyle(b).padding,
    fontSize: window.getComputedStyle(b).fontSize,
    border: window.getComputedStyle(b).border,
  }));

  // Nav links
  const navLinks = [...document.querySelectorAll('nav a, header a')].slice(0,10).map(a => ({
    text: a.textContent.trim().slice(0,30),
    color: window.getComputedStyle(a).color,
    fontSize: window.getComputedStyle(a).fontSize,
  }));

  // Hero section detail
  const heroStyle = heroSection ? window.getComputedStyle(heroSection) : {};

  return {
    bodyFont: bodyStyle.fontFamily,
    bodyBg: bodyStyle.backgroundColor,
    navBg: nav ? window.getComputedStyle(nav).backgroundColor : 'none',
    navHeight: nav ? nav.getBoundingClientRect().height : 'none',
    h1Text: h1 ? h1.textContent.trim().slice(0, 60) : 'none',
    h1Size: h1 ? window.getComputedStyle(h1).fontSize : 'none',
    h1Font: h1 ? window.getComputedStyle(h1).fontFamily : 'none',
    h1Color: h1 ? window.getComputedStyle(h1).color : 'none',
    h1LineHeight: h1 ? window.getComputedStyle(h1).lineHeight : 'none',
    h1FontWeight: h1 ? window.getComputedStyle(h1).fontWeight : 'none',
    heroBg: heroSection ? window.getComputedStyle(heroSection).backgroundColor : 'none',
    heroPadding: heroSection ? window.getComputedStyle(heroSection).padding : 'none',
    sectionBgs,
    allBgs,
    headings,
    btns,
    navLinks,
    btnBg: btn ? window.getComputedStyle(btn).backgroundColor : 'none',
    btnColor: btn ? window.getComputedStyle(btn).color : 'none',
    btnRadius: btn ? window.getComputedStyle(btn).borderRadius : 'none',
    btnPadding: btn ? window.getComputedStyle(btn).padding : 'none',
  };
}
"""

def capture():
    with sync_playwright() as p:
        browser = p.chromium.launch()

        # --- Desktop 1920 ---
        page = browser.new_page(viewport={'width': 1920, 'height': 1080})
        page.goto('https://nosuhealth.com/', wait_until='networkidle', timeout=60000)
        page.wait_for_timeout(2000)
        page.screenshot(path=f"{SCREENSHOTS_DIR}/nosuh_desktop_1920.png", full_page=False)
        page.screenshot(path=f"{SCREENSHOTS_DIR}/nosuh_desktop_1920_full.png", full_page=True)

        css_data = page.evaluate(JS)
        page.close()

        # --- Laptop 1366 ---
        page2 = browser.new_page(viewport={'width': 1366, 'height': 768})
        page2.goto('https://nosuhealth.com/', wait_until='networkidle', timeout=60000)
        page2.wait_for_timeout(1500)
        page2.screenshot(path=f"{SCREENSHOTS_DIR}/nosuh_laptop_1366.png", full_page=False)
        page2.screenshot(path=f"{SCREENSHOTS_DIR}/nosuh_laptop_1366_full.png", full_page=True)
        page2.close()

        # --- Mobile 375 ---
        page3 = browser.new_page(viewport={'width': 375, 'height': 812})
        page3.goto('https://nosuhealth.com/', wait_until='networkidle', timeout=60000)
        page3.wait_for_timeout(1500)
        page3.screenshot(path=f"{SCREENSHOTS_DIR}/nosuh_mobile_375.png", full_page=False)
        page3.screenshot(path=f"{SCREENSHOTS_DIR}/nosuh_mobile_375_full.png", full_page=True)
        page3.close()

        browser.close()
        return css_data

data = capture()
print(json.dumps(data, indent=2))
