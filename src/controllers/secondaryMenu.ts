import inquirer from 'inquirer';
import Warframe from '../schemas/warframe';

// pegar os warframes do banco de dados retornando aqui

const warframes = Warframe.find({}, { name: 1 });

const questions = [
    {
        type: 'list',
        name: 'options',
        message: 'Choose you warframe',
        choices: warframes,
    },
];

const secondaryMenu = async (): Promise<void> => {
    const answers = await inquirer.prompt(questions);
    console.log(answers);
};

export default secondaryMenu;
