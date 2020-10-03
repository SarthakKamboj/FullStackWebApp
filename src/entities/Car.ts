import { Field, Int, ObjectType } from "type-graphql";

@ObjectType()
export class Car {
    @Field(()=>Int)
    yearMade!: number;

    @Field(()=>String)
    company!: string;

    @Field(()=>String)
    name!: string;

    @Field(()=>Int)
    cost!:number

    @Field(()=>Int)
    maxSpeed!: number

}
