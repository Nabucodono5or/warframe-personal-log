import { Schema, model, Document } from 'mongoose';

export interface PrimaryInterface extends Document {
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

const PrimarySchema = new Schema(
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
        timestamps: true,
    },
);

export const Primary = model<PrimaryInterface>('Primary', PrimarySchema);
