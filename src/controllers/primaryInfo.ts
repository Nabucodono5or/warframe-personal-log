import mongoose from 'mongoose';
import { Primary, PrimaryInterface } from '../schemas/primary';

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

const displayInfo = (element: PrimaryInterface): void => {
    console.log(element);
};

const primaryInfo = async (primaryName: string): Promise<void> => {
    const primaries: PrimaryInterface[] = await Primary.find({ name: primaryName });
    primaries.forEach(displayInfo);
    mongoose.connection.close();
};

export default primaryInfo;
