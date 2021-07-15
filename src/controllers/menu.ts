import inquirer from 'inquirer';
import secondaryWarframesMenu from './secondaryMenu';

const questions = [
    {
        type: 'list',
        name: 'options',
        message: 'Choose what you want to get informe',
        choices: ['Warframes', 'Primary Weapons', 'Secondary Weapons'],
    },
];

const mainMenu = async (): Promise<void> => {
    const answers = await inquirer.prompt(questions);
    if (answers.options === 'Warframes') secondaryWarframesMenu();
};

export default mainMenu;
