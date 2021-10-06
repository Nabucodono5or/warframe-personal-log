import mongoose from 'mongoose';
import { Primary, PrimaryInterface } from '../schemas/primary';

const lineInfo = (): void => {
    console.log('');
    console.log('-------------------------------------------------------------');
    console.log('');
};

const listDamage = (element: PrimaryInterface): string => {
    let answer = '';
    element.damage.forEach((dmg) => {
        answer += `${dmg}; `;
    });

    return answer;
};

const listMods = (element: PrimaryInterface): void => {
    element.mods.forEach((mod) => {
        console.log(`=> ${mod}`);
    });
};

const displayInfo = (element: PrimaryInterface): void => {
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

const primaryInfo = async (primaryName: string): Promise<void> => {
    const primaries: PrimaryInterface[] = await Primary.find({ name: primaryName });
    primaries.forEach(displayInfo);
    mongoose.connection.close();
};

export default primaryInfo;
