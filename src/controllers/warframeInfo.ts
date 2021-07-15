import Warframe from '../schemas/warframe';

const warframeInfo = async (warframeName: string): Promise<void> => {
    const warframe = await Warframe.find({ name: warframeName });
    console.log(warframe);
};

export default warframeInfo;
