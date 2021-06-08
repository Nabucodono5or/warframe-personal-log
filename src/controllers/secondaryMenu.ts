import inquirer from 'inquirer';

// pegar os warframes do banco de dados retornando aqui

const warframes = ['Valkyr', 'Nezha', 'Wukong', 'Octavia'];

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
