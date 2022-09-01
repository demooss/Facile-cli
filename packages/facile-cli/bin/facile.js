#!/usr/bin/env node

/**
 * Copyright (c) 2022 DE:MO
 * 
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 * 
 * Repository : https://github.com/demooss/undefined
*/

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// /!\ check the current Node and NPM version before performing any operation.
//
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// Recommended version to use the Facele CLI
// > Node.js : v16.16.0
// > NPM : v8.11.0
//
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


const { program } = require('commander');
const chalk = require('chalk');
const packageJson = require('../package.json');

program
    .version(packageJson.version, '-v, --version')
    .name('facile');

program
    .command('run')
    .usage('--directory [path] --port [port]')
    .description('Execute the file in that path.')
    .option('-d, --directory [path]','Specifies the path.','./src')
    .option('-p, --port [port]','Specifies the port.','8080')
    .action((option)=>{
        console.log(option.directory);
        console.log(option.port);
    });

program
    .command('create <name>')
    .usage('<name>')
    .description('Create a new project.')
    .action((name)=>{
        console.log(name);
    });


program
    .action((cmd, args)=>{
        if(args){
            console.log(chalk.bold.red('The command could not be found.'));
        }
    })
    .parse(process.argv);