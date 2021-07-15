import { WarframeInterface } from '../schemas/warframe';

export type QuestionsInterface = [
    {
        type: string;
        name: string;
        message: string;
        choices?: WarframeInterface[] | Array<string>;
    },
];
