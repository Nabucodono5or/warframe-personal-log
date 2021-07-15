import inquirer from 'inquirer';
import Warframe from '../schemas/warframe';

const index = async () => {
    const warframes = await Warframe.find({}, { name: 1 });

    const questions = [
        {
            type: 'list',
            name: 'options',
            message: 'Choose you warframe',
            choices: warframes,
        },
    ];

    return questions;
};

const secondaryMenu = async (): Promise<void> => {
    const questions = await index();
    const answers = await inquirer.prompt(questions);
    console.log(answers);
};

export default secondaryMenu;
