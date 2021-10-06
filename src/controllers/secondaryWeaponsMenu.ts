import inquirer from 'inquirer';
import { Secondary, SecondaryInterface } from '../schemas/secondary';
import { QuestionsInterface } from '../types/questions';
import { answersInterface } from '../types/answers';
// import primaryInfo from './primaryInfo';

const onlyNamesForMenu = (secondaries: SecondaryInterface[]): string[] => {
    const namesOfSecondaries: string[] = [];
    secondaries.forEach((secondary) => namesOfSecondaries.push(secondary.name));
    return namesOfSecondaries;
};

const indexQuestion = async (): Promise<QuestionsInterface> => {
    const secondaries: SecondaryInterface[] = await Secondary.find({}, { name: 1 });
    const secondariesNames: string[] = onlyNamesForMenu(secondaries);

    const questions: QuestionsInterface = [
        {
            type: 'list',
            name: 'options',
            message: 'Choose you primary weapon',
            choices: secondariesNames,
        },
    ];

    return questions;
};

const secondariesMenu = async (): Promise<void> => {
    const questions: QuestionsInterface = await indexQuestion();
    const answers: answersInterface<string> = await inquirer.prompt(questions);
    console.log(answers.options);
    // primaryInfo(answers.options);
};

export default secondariesMenu;
