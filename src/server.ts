#! /usr/bin/env node

import { Command, Option } from 'commander';

const program = new Command();

program.version('0.0.1');

function myToUpperCase(dummyValue: string, previous: string): string {
    const common: string = dummyValue.toUpperCase();
    return common;
}

program
    .option('--no-sauce', 'Remove sauce')
    .option('--cheese <flavour>', 'cheese flavour', 'mozzarella')
    .option('--no-cheese', 'plain with no cheese')
    .option('-d, --debug', 'output extra debugging')
    .option('-s, --small', 'small pizza size')
    .requiredOption('-p, --pizza-type <type>', 'flavour of pizza', myToUpperCase, '');

program.parse(process.argv);

const options = program.opts();
const sauceStr = options.sauce ? 'sauce' : 'no sauce';
const cheeseStr = options.cheese === false ? 'no cheese' : `${options.cheese} cheese`;

if (options.debug) console.log(options);
console.log('pizza details:');

if (options.small) console.log('- small pizza size');
if (options.pizzaType) console.log(`- ${options.pizzaType}`);
if (options.size) console.log(`- size ${options.size}`);

console.log(`You ordered a pizza with ${sauceStr} and ${cheeseStr}`);
