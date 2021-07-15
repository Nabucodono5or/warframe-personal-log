import inquirer from 'inquirer';
import warframesMenu from './warframesMenu';

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
    if (answers.options === 'Warframes') warframesMenu();
};

export default mainMenu;
