const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'src', 'pages');

fs.readdirSync(pagesDir).forEach(file => {
  if (file.endsWith('.jsx')) {
    const filePath = path.join(pagesDir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // Replace basic section paddings
    content = content.replace(/className="py-24 lg:py-32/g, 'className="py-16 lg:py-32');
    content = content.replace(/className="py-24 lg:py-28/g, 'className="py-16 lg:py-28');
    content = content.replace(/className="py-20 lg:py-24/g, 'className="py-12 lg:py-24');
    
    // Replace hero section paddings (usually py-32)
    content = content.replace(/className="relative z-10 section-container py-32 text-center/g, 'className="relative z-10 section-container py-24 lg:py-32 text-center');

    // Make standalone buttons full width on mobile
    content = content.replace(/className="btn-primary group inline-flex"/g, 'className="btn-primary group inline-flex w-full sm:w-auto justify-center"');
    content = content.replace(/className="btn-primary"/g, 'className="btn-primary w-full sm:w-auto justify-center text-center"');

    // Fix some grid gaps for mobile
    content = content.replace(/gap-16/g, 'gap-10 lg:gap-16');
    content = content.replace(/gap-12 lg:gap-16/g, 'gap-10 lg:gap-16');
    content = content.replace(/gap-20/g, 'gap-12 lg:gap-20');

    fs.writeFileSync(filePath, content, 'utf8');
  }
});
console.log('Mobile adjustments applied.');
