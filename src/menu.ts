import inquirer from 'inquirer';

const questions = [
    {
        type: 'list',
        name: 'options',
        message: 'Choose what you want to get informe',
        choices: ['Warframes', 'Primary Weapons', 'Secondary Weapons'],
    },
];

const mainMenu = async function () {
    const answers = await inquirer.prompt(questions);
    console.log(JSON.stringify(answers, null, '  '));
};

export default mainMenu;
