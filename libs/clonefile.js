const fs = require('fs')

export function cloneAFile(src, dest){

  fs.readFile(src, 'utf8', function(err, data){
      
    fs.writeFile(dest, data, (err) => {
      if (err)
        console.warn(err);
      else {
        // console.log("File written successfully\n");
        null
      }
    });
  });

  // const dynamicContent = fs.readFile('copyme.txt', 'utf8')
  // fs.writeFile('ZZZTHISISCOPIEDFILE.txt', dynamicContent)
  
}
