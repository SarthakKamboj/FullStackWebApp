import { EntityManager, IDatabaseDriver, Connection } from "@mikro-orm/core";

export type MyContext {
    em: EntityManager<any> & EntityManager<IDatabaseDriver<Connection>>
};

export type CarType {
    yearMade: number,
    company: String,
    name:String, 
    cost:number
    maxSpeed: number
};