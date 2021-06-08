#! /usr/bin/env node
import mainMenu from './controllers/menu';

function run() {
    console.log('Welcome to test of the personal managemente itens warframe');
    console.log();
    mainMenu();
}

run();

// inquirer.prompt(questions).then((answers) => {
//     if (answers.toBeDelivered) console.log('so wait for you travel...');
// });
