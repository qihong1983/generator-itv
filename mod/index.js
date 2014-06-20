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
 
    // Have Yeoman greet the user.
    //this.log(yosay('Welcome to the marvelous Itv generator!'));
  var defaultGreeting = 
    chalk.red('\n    _   _____   _     _  ') +
    chalk.red('\n   | | |_   _| | |   / / ') +
    chalk.yellow('\n   | |   | |   | |  / / ') +
    chalk.green('\n   | |   | |   | | / /') +
    chalk.cyan('\n   | |   | |   | |/ / ') + 
    chalk.blue('\n   |_|   |_|   |___/ ') + chalk.yellow('     create mod demo') + '\n' +
    chalk.cyan('\n______________________________________________________________________\n\n\n');


    this.log(defaultGreeting);

    this.copy('src/config.js','../../../src/config.js');
   

/*
  this.log(yosay(' Welcome'));
*/  



    var prompts = [{
      // type: 'confirm',
      // name: 'someOption',
      // message: 'Would you like to enable this option?',
      // default: true
      name: 'name',
      message: 'Name of mod',
      default: 'demo'
    }];

    this.prompt(prompts, function (props) {
      this.someOption = props.someOption;

      this.name = props.name;

      done();
    }.bind(this));
  },

  app: function () {
    


    this.copy('src/mods/demo/index.html','src/mods/'+this.name+'/index.html');
    this.copy('src/mods/demo/index.css','src/mods/'+this.name+'/index.css');
    this.copy('src/mods/demo/index.js','src/mods/'+this.name+'/index.js');
    this.copy('src/mods/demo/demo.html','src/mods/'+this.name+'/demo.html');
    this.mkdir('src/mods/'+this.name+'/img');
    this.mkdir('src/mods/'+this.name+'/mock');

  },

  projectfiles: function () {
    
  }
});

module.exports = ItvGenerator;
