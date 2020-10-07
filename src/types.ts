import { EntityManager, IDatabaseDriver, Connection } from "@mikro-orm/core";
import e from "express";

export type MyContext = {
    em: EntityManager<any> & EntityManager<IDatabaseDriver<Connection>>,
    payload?: {userId: string},
    req: e.Request,
    res: e.Response,
};

export type CarType = {
    yearMade: number,
    company: string,
    name:string, 
    cost:number
    maxSpeed: number
};