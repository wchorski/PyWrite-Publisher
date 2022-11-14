// import {} from 'dotenv/config'

const cAccent = process.env.NEXT_PUBLIC_STYLE_ACCENT

export function initialTheme(){
  console.log('cAccent, ', cAccent);
  (cAccent) ? updateSheet('--c-1', cAccent) : null
}



function updateSheet(key, value){
  // const sheet = document.styleSheets[0];
  // console.log('sheet, ', sheet);
  // sheet.insertRule(`:root{${key}: ${value}}`);
  // document.documentElement.style.setProperty(key, value);
}