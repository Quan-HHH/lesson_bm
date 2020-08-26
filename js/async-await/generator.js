const fs = require('fs');

const readFile = function (fileName) {
    console.log(222)
  return new Promise(function (resolve, reject) {
    fs.readFile(fileName, function(error, data) {
      if (error) return reject(error);
      resolve(data);
    });
  });
};

const gen = function* () {
  console.log(111)
  const f1 = yield readFile('./etc/fstab.txt');
  console.log(1)
  const f2 = yield readFile('./etc/shells.md');
  console.log(f1.toString());
  // console.log(f2.toString());
};
let i = gen();
i.next();
i.next();
i.next()