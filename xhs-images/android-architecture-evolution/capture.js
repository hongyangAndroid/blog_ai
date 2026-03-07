const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const files = [
    '01-cover-android-architecture.html',
    '02-timeline-android-architecture.html',
    '03-guide-android-architecture.html',
    '04-roadmap-android-architecture.html'
];

async function capture() {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    
    for (const file of files) {
        const htmlPath = path.join(__dirname, file);
        const pngName = file.replace('.html', '.png');
        const pngPath = path.join(__dirname, pngName);
        
        console.log(`Capturing ${file}...`);
        
        await page.goto(`file://${htmlPath}`);
        await page.setViewportSize({ width: 900, height: 1200 });
        await page.waitForTimeout(2000); // Wait for fonts to load
        
        await page.screenshot({ 
            path: pngPath,
            fullPage: false,
            type: 'png'
        });
        
        console.log(`✓ Saved ${pngName}`);
    }
    
    await browser.close();
    console.log('\nAll images captured successfully!');
}

capture().catch(console.error);
