const fs = require('fs');
const https = require('https');

const cdnUrls = {
  IBM: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/ibm.svg',
  Oracle: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/oracle.svg',
  OpenAI: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/openai.svg'
};

Promise.all(Object.entries(cdnUrls).map(([name, url]) => {
  return new Promise(resolve => {
    https.get(url, res => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => resolve({name, data}));
    });
  });
})).then(results => {
  let fileContent = 'import React from "react";\n\n';
  results.forEach(({name, data}) => {
    const pathMatch = data.match(/<path d="([^"]+)"/);
    if(pathMatch) {
      fileContent += `export const ${name}Icon = ({ color }) => (\n  <svg fill={color || "currentColor"} viewBox="0 0 24 24" width="1em" height="1em" xmlns="http://www.w3.org/2000/svg">\n    <path d="${pathMatch[1]}" />\n  </svg>\n);\n\n`;
    }
  });
  fs.writeFileSync('src/components/BrandIcons.jsx', fileContent);
  console.log('Successfully wrote src/components/BrandIcons.jsx');
}).catch(err => console.error(err));
