#! /usr/bin/env node

import { Command } from 'commander';

const program = new Command();

program.version('0.0.1');

// program
//     .command('clone <source> [destination]')
//     .description('clone a repository into a newly created directory')
//     .action((source, destination) => {
//         console.log(`cloned from ${source} to destination ${destination}`);
//     });

program
    .version('0.1.0')
    .command('user')
    .arguments('<name>')
    .option('-U, --upper', 'convert name to upper case')
    .option('-l, --lower', 'convert name to lower case')
    .description('test command', {
        name: 'display simple name',
    })
    .action((name, options, command) => {
        let inputName: string = name;
        if (options.upper) inputName = name.toUpperCase();
        if (options.lower) inputName = name.toLowerCase();
        console.log('My name is ', inputName);
        console.log('Executado por ', command);
    });

program.parse(process.argv);
