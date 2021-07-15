import { Schema, model, Document } from 'mongoose';

export interface WarframeInterface extends Document {
    name: string;
    nameCommon: string;
    helth: number;
    shield: number;
    armor: number;
    energy: number;
    sprint: string;
    duration: number;
    efficiency: number;
    range: number;
    strength: number;
    mods: string[];
    arcanes: string[];
}

const WarframeSchema = new Schema(
    {
        name: String,
        nameCommon: String,
        helth: Number,
        shield: Number,
        armor: Number,
        energy: Number,
        sprint: String,
        duration: Number,
        efficiency: Number,
        range: Number,
        strength: Number,
        mods: Array,
        arcanes: Array,
    },
    {
        timestamps: true,
    },
);

export const Warframe = model<WarframeInterface>('Warframe', WarframeSchema);
