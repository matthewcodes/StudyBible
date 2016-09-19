(function(){

  var fs = require('fs')
  var path = require('path')

  angular.module('studyBibleControllers').controller('bibleController', ['$timeout',function($timeout) {

    this.book = '';
    this.contents = '';
    controller = this;

    fs.readFile(path.join(__dirname,'..','data','kjv','Gen.json'), (err, data) => {
      if (err) throw err;
      $timeout(function() {
        controller.book = JSON.parse(data);
        controller.book.name="Genesis"
      })
    });

    fs.readFile(path.join(__dirname,'..','data','contents.json'), (err, data) => {
      if (err) throw err;
      $timeout(function() {
        controller.contents = JSON.parse(data);
      })
    });


  }]);

})();
