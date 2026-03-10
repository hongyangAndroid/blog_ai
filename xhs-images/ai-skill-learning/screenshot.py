from playwright.sync_api import sync_playwright

files = [
    '01-cover-ai-skill-learning.html',
    '02-content-ai-skill-learning.html',
    '03-content-ai-skill-learning.html',
    '04-content-ai-skill-learning.html',
    '05-ending-ai-skill-learning.html'
]

with sync_playwright() as p:
    browser = p.chromium.launch()
    
    for file in files:
        page = browser.new_page(viewport={'width': 1080, 'height': 1440})
        page.goto(f'file:///Users/zhy/zhy/blog_ai/xhs-images/ai-skill-learning/{file}')
        page.wait_for_timeout(1000)
        
        screenshot_name = file.replace('.html', '.png')
        page.screenshot(path=screenshot_name)
        print(f'Saved: {screenshot_name}')
        page.close()
    
    browser.close()

print('All screenshots done!')
