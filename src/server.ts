#! /usr/bin/env node
import inquirer from 'inquirer';

const questions = [
    {
        type: 'confirm',
        name: 'toBeDelivered',
        message: 'Is this for delivery?',
        default: false,
    },
    {
        type: 'list',
        name: 'size',
        message: 'What size do you need?',
        choices: ['Large', 'Medium', 'Small'],
        filter(val: string) {
            return val.toLowerCase();
        },
    },
];

async function run() {
    const answers = await inquirer.prompt(questions);
    if (answers.toBeDelivered) console.log('so wait for you travel...');
    console.log(JSON.stringify(answers, null, '  '));
}

run();

// inquirer.prompt(questions).then((answers) => {
//     if (answers.toBeDelivered) console.log('so wait for you travel...');
// });
