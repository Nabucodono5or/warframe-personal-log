import inquirer from 'inquirer';
import { Warframe, WarframeInterface } from '../schemas/warframe';
import { QuestionsInterface } from '../types/questions';
import { answersInterface } from '../types/answers';
import warframeInfo from './warframeInfo';

const indexQuestion = async (): Promise<QuestionsInterface> => {
    const warframes: WarframeInterface[] = await Warframe.find({}, { name: 1 });

    const questions: QuestionsInterface = [
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
    const questions: QuestionsInterface = await indexQuestion();
    const answers: answersInterface<string> = await inquirer.prompt(questions);
    warframeInfo(answers.options);
};

export default warframesMenu;
