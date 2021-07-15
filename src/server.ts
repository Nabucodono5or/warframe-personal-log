#! /usr/bin/env node
import mongoose from 'mongoose';
import mainMenu from './controllers/menu';

function database() {
    mongoose.connect('mongodb://127.0.0.1:27017/warframe', { useNewUrlParser: true });
}

function run() {
    console.log('Welcome to test of the personal managemente itens warframe');
    console.log();
    database();
    mainMenu();
}

run();

// inquirer.prompt(questions).then((answers) => {
//     if (answers.toBeDelivered) console.log('so wait for you travel...');
// });
