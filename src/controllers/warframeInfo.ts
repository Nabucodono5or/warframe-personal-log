import { Warframe, WarframeInterface } from '../schemas/warframe';

const lineInfo = (): void => {
    console.log('');
    console.log('-------------------------------------------------------------');
    console.log('');
};

const listAcanes = (element: WarframeInterface): void => {
    element.arcanes.forEach((arcane) => {
        console.log(`Arcane => ${arcane}`);
    });
};

const listMods = (element: WarframeInterface): void => {
    element.mods.forEach((mod) => {
        console.log(`=> ${mod}`);
    });
};

const displayInfo = (element: WarframeInterface): void => {
    console.log('');
    console.log('===================================================================');
    console.log(element.name);
    console.log('===================================================================');
    console.log(
        ` Health: ${element.helth}     `,
        `Shield: ${element.shield}     `,
        `Armor: ${element.armor}       `,
        `Energy: ${element.energy}`,
    );

    lineInfo();

    listAcanes(element);

    lineInfo();

    console.log(` | Efficiency | ${element.efficiency}`);
    console.log(` | Strength:  | ${element.strength}`);
    console.log(` | Range:     | ${element.range}`);
    console.log(` | Duration:  | ${element.duration}`);

    lineInfo();

    console.log('******** Lista de Mods **********');
    listMods(element);
};

const warframeInfo = async (warframeName: string): Promise<void> => {
    const warframe: WarframeInterface[] = await Warframe.find({ name: warframeName });
    warframe.forEach(displayInfo);
};

export default warframeInfo;
