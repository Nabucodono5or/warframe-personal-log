import inquirer from 'inquirer';
import secondaryMenu from './secondaryMenu';

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
    if (answers.options === 'Warframes') secondaryMenu();
};

export default mainMenu;
