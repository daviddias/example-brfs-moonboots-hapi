var fs = require('fs');

window.app = {
  init: function () {
    var pkg = fs.readFileSync('./package.json');
    console.log(pkg);
  }
};

window.app.init();