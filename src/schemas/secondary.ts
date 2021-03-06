import { Schema, model, Document } from 'mongoose';

export interface SecondaryInterface extends Document {
    name: string;
    accuracy: number;
    criticalChance: number;
    criticalMultiplier: number;
    fireRate: number;
    magazine: number[];
    multishot: number;
    noise: string;
    reload: number;
    status: number;
    damage: string[];
    mods: string[];
    arcane: string;
}

const SecondarySchema = new Schema(
    {
        name: String,
        accuracy: Number,
        criticalChance: Number,
        criticalMultiplier: Number,
        fireRate: Number,
        magazine: Array,
        multishot: Number,
        noise: String,
        reload: Number,
        status: Number,
        damage: Array,
        mods: Array,
        arcane: String,
    },
    {
        collection: 'secondary',
    },
);

export const Secondary = model<SecondaryInterface>('Secondary', SecondarySchema);
