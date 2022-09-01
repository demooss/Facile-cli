#!/usr/bin/env node
const { program } = require('commander');
let chalk = require('chalk');
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
    .action((cmd, args)=>{
        if(args){
            console.log(chalk.bold.red('The command could not be found.'));
        }
    })
    .parse(process.argv);