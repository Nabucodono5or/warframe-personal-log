import inquirer from 'inquirer';
import warframesMenu from './warframesMenu';
import primariesMenu from './primaryWeaponsMenu';
import secondariesMenu from './secondaryWeaponsMenu';
import { QuestionsInterface } from '../types/questions';
import { answersInterface } from '../types/answers';

const questions: QuestionsInterface = [
    {
        type: 'list',
        name: 'options',
        message: 'Choose what you want to get informe',
        choices: ['Warframes', 'Primary Weapons', 'Secondary Weapons'],
    },
];

const mainMenu = async (): Promise<void> => {
    const answers: answersInterface<string> = await inquirer.prompt(questions);
    if (answers.options === 'Warframes') await warframesMenu();
    if (answers.options === 'Primary Weapons') await primariesMenu();
    if (answers.options === 'Secondary Weapons') await secondariesMenu();
};

export default mainMenu;
