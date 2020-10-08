import { Car } from './../entities/Car';
import { MyContext, CarType } from './../types';
import { Arg, Ctx, Field, InputType, Int, Mutation, Query, Resolver } from 'type-graphql';

let cars: CarType[] = [
	{ yearMade: 2002, company: 'Honda', name: 'Civic', cost: 15000, maxSpeed: 100 },
	{ yearMade: 2014, company: 'Toyota', name: 'Rav4', cost: 20000, maxSpeed: 120 },
	{ yearMade: 2020, company: 'Mercedes', name: 'Benz', cost: 75000, maxSpeed: 180 }
];

@InputType()
class createCarInputType {
	@Field(()=>Int)
	yearMade!: number,

	@Field(()=>String)
	company: string,

	@Field(()=>String)
	name: string,

	@Field(()=>Int)
	cost:number,

	@Field(()=>Int)
	maxSpeed: number,	
}

@Resolver()
export class CarResolver {
	@Query(() => [ Car ])
	cars(@Ctx() { em }: MyContext) {
		return cars;
	}

	@Query(() => Car)
	car(
		@Arg('yearMade', () => Int)
		yearMade: number
	) {
		return cars.find((car) => car.yearMade === yearMade);
	}

	@Mutation(() => Car)
	createCar(
		@Arg("options",()=>createCarInputType) options:createCarInputType 
	) {
		const car: CarType = {
			yearMade: options.yearMade,
			company: options.company,
			name: options.name,
			cost: options.cost,
			maxSpeed: options.maxSpeed
		};

		cars.push(car);
		return car;
	}

	@Mutation(() => Car, { nullable: true })
	updateCar(
		@Arg('yearMade', () => Int)
		yearMade: number,
		@Arg('cost', () => Int)
		cost: number
	): CarType | null {
		const car = cars.find((c) => c.yearMade === yearMade);
		if (!car) {
			return null;
		}

		car.cost = cost;
		return car;
	}

	@Mutation(() => Boolean)
	deleteCar(
		@Arg('yearMade', () => Int)
		yearMade: number
	) {
		cars = cars.filter((c) => c.yearMade !== yearMade);
		return true;
	}
}
