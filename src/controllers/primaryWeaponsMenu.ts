import inquirer from 'inquirer';
import { PrimaryInterface, Primary } from '../schemas/primary';
import { QuestionsInterface } from '../types/questions';
import { answersInterface } from '../types/answers';
import primaryInfo from './primaryInfo';

const indexQuestion = async (): Promise<QuestionsInterface> => {
    const primaries: PrimaryInterface[] = await Primary.find({}, { name: 1 });

    const questions: QuestionsInterface = [
        {
            type: 'list',
            name: 'options',
            message: 'Choose you primary weapon',
            choices: primaries,
        },
    ];

    return questions;
};

const primariesMenu = async (): Promise<void> => {
    const questions: QuestionsInterface = await indexQuestion();
    const answers: answersInterface<string> = await inquirer.prompt(questions);
    console.log(answers.options);
    primaryInfo(answers.options);
};

export default primariesMenu;
