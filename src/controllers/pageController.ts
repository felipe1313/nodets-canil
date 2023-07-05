import {Request,Response } from 'express';
export const home = (req : Request,res : Response) =>{
    res.send('home controller');
}

export const dogs = (req : Request,res : Response) =>{
    res.send('dog controller');
}

export const cats = (req : Request,res : Response) =>{
    res.send('gato controller');
}

export const fishes = (req : Request,res : Response) =>{
    res.send('peixes controller');
}