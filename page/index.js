'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var fs = require('fs');  
//var yosay = require('yosay');
var chalk = require('chalk');


var ItvGenerator = yeoman.generators.Base.extend({
  init: function () {
    this.pkg = require('../package.json');

    this.on('end', function () {
      if (!this.options['skip-install']) {
        this.installDependencies();
      }
    });
  },

  askFor: function () {
    var done = this.async();
 
  var defaultGreeting = 
    chalk.red('\n    _   _____   _     _  ') +
    chalk.red('\n   | | |_   _| | |   / / ') +
    chalk.yellow('\n   | |   | |   | |  / / ') +
    chalk.green('\n   | |   | |   | | / /') +
    chalk.cyan('\n   | |   | |   | |/ / ') + 
    chalk.blue('\n   |_|   |_|   |___/ ') + chalk.yellow('     create page demo') + '\n' +
    chalk.cyan('\n______________________________________________________________________\n\n\n');

    this.log(defaultGreeting);

    this.copy('src/config.js','../../../src/config.js');
   
    var prompts = [{
      // type: 'confirm',
      // name: 'someOption',
      // message: 'Would you like to enable this option?',
      // default: true
      name: 'name',
      message: 'Name of page',
      default: 'demo'
    }];

    this.prompt(prompts, function (props) {
      this.someOption = props.someOption;

      this.name = props.name;

      //console.log(this.someOption);
      done();
    }.bind(this));
  },

  app: function () {
    
    this.copy('src/pages/demo/index.html','src/pages/'+this.name+'/index.html');
    this.copy('src/pages/demo/index.css','src/pages/'+this.name+'/index.css');
    this.copy('src/pages/demo/index.js','src/pages/'+this.name+'/index.js');
    this.mkdir('src/mods/'+this.name+'/img');
    
  },

  projectfiles: function () {

  }
});

module.exports = ItvGenerator;
