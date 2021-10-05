import { WarframeInterface } from '../schemas/warframe';
import { PrimaryInterface } from '../schemas/primary';
import { SecondaryInterface } from '../schemas/secondary';

export type QuestionsInterface = [
    {
        type: string;
        name: string;
        message: string;
        choices?: WarframeInterface[] | PrimaryInterface[] | SecondaryInterface[] | Array<string>;
    },
];
