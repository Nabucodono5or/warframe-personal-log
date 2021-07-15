import Warframe from '../schemas/warframe';

const warframeInfo = async (warframeName: string) => {
    const warframe = await Warframe.find({ name: warframeName });
    console.log(warframe);
};

export default warframeInfo;
