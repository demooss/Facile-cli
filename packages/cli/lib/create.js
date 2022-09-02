const chalk = require('chalk');
const fs = require('fs-extra');
const path = require("path");
const progress = require('./util/progressbar');

async function create(projectName){
    console.clear();
    console.log(chalk.bold.yellow('< Facile.js CLI >'));
    progress.create(2);

    const cwd = process.cwd();
    const inCurrent = projectName === '.';
    const targetDir = path.resolve(cwd, projectName || '.');
    const makeDirectory = (name) => {
        if(!fs.existsSync(name)){
            fs.mkdirSync(name);
            progress.update(1);
        }else{
            console.clear();
            console.log(chalk.bold.yellow('< Facile.js CLI >'));
            console.log(chalk.bold.red('Error: The project has already been created.'));
        }
    };

    if(inCurrent){

    }else{
        makeDirectory(projectName);
    };

    progress.stop();
};

module.exports = (...args) => {
    return create(...args).catch(error => {
        console.log(chalk.bold.red('Error: An error occurred while processing the command.'));
        console.error(error);
    })
};