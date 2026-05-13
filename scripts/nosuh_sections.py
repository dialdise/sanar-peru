from playwright.sync_api import sync_playwright

SCREENSHOTS_DIR = "/Volumes/Eligens/HideInMoscow-Projects/sanar-peru/screenshots"

def capture_sections():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page(viewport={'width': 1440, 'height': 900})
        page.goto('https://nosuhealth.com/', wait_until='networkidle', timeout=60000)
        page.wait_for_timeout(2000)

        # Dismiss cookie banner if present
        try:
            page.click('button:has-text("Accept All")', timeout=3000)
            page.wait_for_timeout(800)
        except:
            pass

        # Section 1 - Hero (top of page)
        page.evaluate("window.scrollTo(0, 0)")
        page.wait_for_timeout(500)
        page.screenshot(path=f"{SCREENSHOTS_DIR}/nosuh_s1_hero.png", full_page=False)

        # Section 2 - Features strip (scroll down ~800px)
        page.evaluate("window.scrollTo(0, 800)")
        page.wait_for_timeout(500)
        page.screenshot(path=f"{SCREENSHOTS_DIR}/nosuh_s2_features.png", full_page=False)

        # Section 3
        page.evaluate("window.scrollTo(0, 1600)")
        page.wait_for_timeout(500)
        page.screenshot(path=f"{SCREENSHOTS_DIR}/nosuh_s3.png", full_page=False)

        # Section 4
        page.evaluate("window.scrollTo(0, 2400)")
        page.wait_for_timeout(500)
        page.screenshot(path=f"{SCREENSHOTS_DIR}/nosuh_s4.png", full_page=False)

        # Section 5
        page.evaluate("window.scrollTo(0, 3200)")
        page.wait_for_timeout(500)
        page.screenshot(path=f"{SCREENSHOTS_DIR}/nosuh_s5.png", full_page=False)

        # Section 6
        page.evaluate("window.scrollTo(0, 4000)")
        page.wait_for_timeout(500)
        page.screenshot(path=f"{SCREENSHOTS_DIR}/nosuh_s6.png", full_page=False)

        # Section 7
        page.evaluate("window.scrollTo(0, 4800)")
        page.wait_for_timeout(500)
        page.screenshot(path=f"{SCREENSHOTS_DIR}/nosuh_s7.png", full_page=False)

        # Section 8
        page.evaluate("window.scrollTo(0, 5600)")
        page.wait_for_timeout(500)
        page.screenshot(path=f"{SCREENSHOTS_DIR}/nosuh_s8.png", full_page=False)

        # Section 9 - Footer area
        page.evaluate("window.scrollTo(0, 9999999)")
        page.wait_for_timeout(500)
        page.screenshot(path=f"{SCREENSHOTS_DIR}/nosuh_s9_footer.png", full_page=False)

        # Extra: get total page height and color data with cookie dismissed
        extra = page.evaluate("""
        () => {
          const allEls = [...document.querySelectorAll('*')];
          // find non-transparent backgrounds
          const coloredEls = allEls
            .filter(el => {
              const bg = window.getComputedStyle(el).backgroundColor;
              return bg && bg !== 'rgba(0, 0, 0, 0)' && bg !== 'transparent';
            })
            .slice(0, 30)
            .map(el => ({
              tag: el.tagName,
              id: el.id ? el.id.slice(0,30) : '',
              class: el.className && typeof el.className === 'string' ? el.className.slice(0,60) : '',
              bg: window.getComputedStyle(el).backgroundColor,
              w: el.offsetWidth,
              h: el.offsetHeight,
            }));

          // get page total height
          const pageH = document.body.scrollHeight;

          // All distinct bg colors on the page
          const bgSet = new Set();
          allEls.forEach(el => {
            const bg = window.getComputedStyle(el).backgroundColor;
            if (bg && bg !== 'rgba(0, 0, 0, 0)') bgSet.add(bg);
          });

          // Scroll-linked sections: get direct children of body or main
          const mainEl = document.querySelector('main') || document.body;
          const topChildren = [...mainEl.children].map(el => ({
            tag: el.tagName,
            class: el.className && typeof el.className === 'string' ? el.className.slice(0,80) : '',
            bg: window.getComputedStyle(el).backgroundColor,
            h: el.offsetHeight,
          }));

          return {pageH, coloredEls, distinctBgs: [...bgSet], topChildren};
        }
        """)
        import json
        print(json.dumps(extra, indent=2))

        browser.close()

capture_sections()
