const fs = require('fs');
const https = require('https');

const urls = {
  IBM: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/ibm.svg',
  Oracle: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/oracle.svg',
  OpenAI: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/openai.svg',
  Cpp: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/cplusplus.svg',
  Azure: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/microsoftazure.svg'
};

Promise.all(Object.entries(urls).map(([name, url]) => {
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

  // Add Matlab and Gazebo
  fileContent += `
export const MatlabIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 128 128"><defs><linearGradient id="SVGjM30PecW" x1="16.803" x2="15.013" y1="16.631" y2="22.411" gradientTransform="matrix(4 0 0 -4 0 128)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#512"/><stop offset=".23" stopColor="#523"/><stop offset=".36" stopColor="#534"/><stop offset=".51" stopColor="#645"/><stop offset=".66" stopColor="#568"/><stop offset=".84" stopColor="#29d"/></linearGradient><linearGradient id="SVGAN4uibUM" x1="29.71" x2="11.71" y1="18.983" y2="14.563" gradientTransform="scale(4)" gradientUnits="userSpaceOnUse"><stop offset=".081" stopColor="#c33"/><stop offset=".189" stopColor="#de5239"/><stop offset=".313" stopColor="#f06e3e"/><stop offset=".421" stopColor="#fa8042"/><stop offset=".5" stopColor="#fe8643"/><stop offset=".58" stopColor="#fa7f42"/><stop offset=".696" stopColor="#ef6c3e"/><stop offset=".833" stopColor="#dc4c37"/><stop offset=".916" stopColor="#cf3633"/></linearGradient></defs><path fill="#49d" d="m8 70.2l31.879-12.88a82.6 82.6 0 0 1 10.883-11.8c2.636-1.399 7.597-.641 16.68-11.918c8.796-11 11.597-20.403 15.718-20.403c6.52 0 11.32 14.082 18.602 35.403A462 462 0 0 0 120 96.48c-7.602-7.082-14.078-14.718-21.48-14.52c-6.88.161-14.52 8.321-22.88 18.802C69 109.16 60.2 114.922 56.763 114.8c0 0-8.883-25.121-16.32-29.2a10.56 10.56 0 0 0-9.563.797L8 70.16zm0 0"/><path fill="url(#SVGjM30PecW)" d="M79.2 16.078c-2.68 3.602-5.92 10.203-11.76 17.524c-9.082 11.277-14 10.52-16.68 11.918a78.7 78.7 0 0 0-10.882 11.8l13.2 9.64C64.28 51.68 70.28 35.122 74.96 24.399a54.7 54.7 0 0 1 4.238-8.32zm0 0"/><path fill="url(#SVGAN4uibUM)" d="M83.2 13.2c-8.72 0-14.68 45.921-46.88 71.562c9.04-1.48 16.88 20.957 20.48 30.039c16-2.723 28.802-33.32 41.72-32.84c7.402.277 13.878 7.437 21.48 14.52C102.64 60 94.52 13.198 83.2 13.198zm0 0"/></svg>
);

export const GazeboIcon = ({ color, size = 24 }) => (
  <svg viewBox="0 0 100 100" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
    <path d="M50 5 L90 25 L90 75 L50 95 L10 75 L10 25 Z" fill={color || "#F15A24"} />
    <path d="M50 5 L90 25 L50 45 L10 25 Z" fill="#ffffff" opacity="0.4" />
    <path d="M10 25 L50 45 L50 95 L10 75 Z" fill="#000000" opacity="0.2" />
    <path d="M35 45 L45 50 L45 65 L65 55 L65 35 L55 30 L55 45 L45 40 L45 45 L35 50 Z" fill="#ffffff" />
  </svg>
);
`;
  fs.writeFileSync('src/components/BrandIcons.jsx', fileContent);
  console.log('Successfully wrote full untruncated icons to src/components/BrandIcons.jsx');
});
