import { EntityManager, IDatabaseDriver, Connection } from "@mikro-orm/core";
import e from "express";

type Payload = {
    userId: string,
    tokenVersion?:number,
}

export type MyContext = {
    em: EntityManager<any> & EntityManager<IDatabaseDriver<Connection>>,
    payload?: Payload,
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