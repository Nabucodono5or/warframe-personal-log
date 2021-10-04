import { Warframe, WarframeInterface } from '../schemas/warframe';

const lineInfo = (): void => {
    console.log('');
    console.log('-------------------------------------------------------------');
    console.log('');
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

    element.arcanes.forEach((arcane) => {
        console.log(`Arcane => ${arcane}`);
    });

    lineInfo();

    console.log(` | Efficiency | ${element.efficiency}`);
    console.log(` | Strength:  | ${element.strength}`);
    console.log(` | Range:     | ${element.range}`);
    console.log(` | Duration:  | ${element.duration}`);

    lineInfo();

    console.log('******** Lista de Mods **********');

    element.mods.forEach((mod) => {
        console.log(`=> ${mod}`);
    });
};

const warframeInfo = async (warframeName: string): Promise<void> => {
    const warframe: WarframeInterface[] = await Warframe.find({ name: warframeName });
    warframe.forEach(displayInfo);
};

export default warframeInfo;

/*
[
  {
    mods: [
      'swift momentum',
      'handspring',
      'overextended',
      'augur reach',
      'venari bodyguard',
      'primed continuity',
      'fleeting expertise',
      'primed flow',
      'accumulating whipclaw',
      'rolling guard'
    ],
    arcanes: [ 'arcane energize', 'arcane fury' ],
    _id: 60f03be56f94621bf3fed20e,
    name: 'Khora',
    helth: 375,
    shield: 300,
    armor: 275,
    energy: 531,
    sprint: '1.05',
    duration: 95,
    efficiency: 160,
    range: 220,
    strength: 40,
    date: 'Thu Jul 15 2021 10:45:09 GMT-0300 (-03)',
    nameCommon: 'khora'
  }
]

*/
