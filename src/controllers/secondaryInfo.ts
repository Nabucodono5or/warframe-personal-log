import mongoose from 'mongoose';
import { Secondary, SecondaryInterface } from '../schemas/secondary';

const lineInfo = (): void => {
    console.log('');
    console.log('-------------------------------------------------------------');
    console.log('');
};

const listDamage = (element: SecondaryInterface): string => {
    let answer = '';
    element.damage.forEach((dmg) => {
        answer += `${dmg}; `;
    });

    return answer;
};

const listMods = (element: SecondaryInterface): void => {
    element.mods.forEach((mod) => {
        console.log(`=> ${mod}`);
    });
};

const displayInfo = (element: SecondaryInterface): void => {
    console.log('');
    console.log('===================================================================');
    console.log(element.name);
    console.log('===================================================================');

    console.log(`Magazine: ${element.magazine[0]}/${element.magazine[1]}        Damage: ${listDamage(element)}`);

    lineInfo();

    console.log(` | Fire Rate | ${element.fireRate}`);
    console.log(` | Multishot | ${element.multishot}`);
    console.log(` | Accuracy  | ${element.accuracy}`);
    console.log(` | Reload    | ${element.reload}`);

    console.log('');
    console.log(`--- Noise ${element.noise}`);
    console.log('');

    lineInfo();

    console.log(` | Critical Chance    | ${element.criticalChance}%`);
    console.log(` | Critical Multiplier| ${element.criticalMultiplier}`);
    console.log(` | Chance de Status   | ${element.status}%`);

    lineInfo();

    console.log('******** Lista de Mods **********');
    listMods(element);
    console.log('');
    console.log('');
    console.log(`Arcane => ${element.arcane}`);
    console.log('');
};

const secondaryInfo = async (secondaryName: string): Promise<void> => {
    const secondaries: SecondaryInterface[] = await Secondary.find({ name: secondaryName });
    secondaries.forEach(displayInfo);
    mongoose.connection.close();
};

export default secondaryInfo;
