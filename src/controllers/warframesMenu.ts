import inquirer from 'inquirer';
import Warframe from '../schemas/warframe';

const indexQuestion = async () => {
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

const warframesMenu = async (): Promise<void> => {
    const questions = await indexQuestion();
    const answers = await inquirer.prompt(questions);
    console.log(answers);
};

export default warframesMenu;
