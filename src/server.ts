#! /usr/bin/env node
import mongoose from 'mongoose';
import mainMenu from './controllers/menu';

async function database() {
    await mongoose.connect('mongodb://127.0.0.1:27017/warframe', { useUnifiedTopology: true, useNewUrlParser: true });
}

async function run() {
    console.log('Welcome to test of the personal managemente itens warframe');
    console.log();
    await database();
    mainMenu();
}

run();
