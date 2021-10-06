import mongoose from 'mongoose';
import { Secondary, SecondaryInterface } from '../schemas/secondary';

// const lineInfo = (): void => {
//     console.log('');
//     console.log('-------------------------------------------------------------');
//     console.log('');
// };

// const listMods = (element: PrimaryInterface): void => {
//     element.mods.forEach((mod) => {
//         console.log(`=> ${mod}`);
//     });
// };

const displayInfo = (element: SecondaryInterface): void => {
    console.log(element);
};

const secondaryInfo = async (primaryName: string): Promise<void> => {
    const primaries: SecondaryInterface[] = await Secondary.find({ name: primaryName });
    primaries.forEach(displayInfo);
    mongoose.connection.close();
};

export default secondaryInfo;
