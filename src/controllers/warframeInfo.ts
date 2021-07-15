import { Warframe, WarframeInterface } from '../schemas/warframe';

const warframeInfo = async (warframeName: string): Promise<void> => {
    const warframe: WarframeInterface[] = await Warframe.find({ name: warframeName });
    console.log(warframe);
};

export default warframeInfo;
