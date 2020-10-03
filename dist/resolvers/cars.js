"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarResolver = void 0;
const Car_1 = require("./../entities/Car");
const type_graphql_1 = require("type-graphql");
let cars = [
    { yearMade: 2002, company: 'Honda', name: 'Civic', cost: 15000, maxSpeed: 100 },
    { yearMade: 2014, company: 'Toyota', name: 'Rav4', cost: 20000, maxSpeed: 120 },
    { yearMade: 2020, company: 'Mercedes', name: 'Benz', cost: 75000, maxSpeed: 180 }
];
let CarResolver = class CarResolver {
    cars({ em }) {
        return cars;
    }
    car(yearMade) {
        return cars.find((car) => car.yearMade === yearMade);
    }
    createCar(yearMade, company, name, cost, maxSpeed) {
        const car = {
            yearMade,
            company,
            name,
            cost,
            maxSpeed
        };
        cars.push(car);
        return car;
    }
    updateCar(yearMade, cost) {
        const car = cars.find((c) => c.yearMade === yearMade);
        if (!car) {
            return null;
        }
        car.cost = cost;
        return car;
    }
    deleteCar(yearMade) {
        cars = cars.filter((c) => c.yearMade !== yearMade);
        return true;
    }
};
__decorate([
    type_graphql_1.Query(() => [Car_1.Car]),
    __param(0, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CarResolver.prototype, "cars", null);
__decorate([
    type_graphql_1.Query(() => Car_1.Car),
    __param(0, type_graphql_1.Arg('yearMade', () => type_graphql_1.Int)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CarResolver.prototype, "car", null);
__decorate([
    type_graphql_1.Mutation(() => Car_1.Car),
    __param(0, type_graphql_1.Arg('yearMade', () => type_graphql_1.Int)),
    __param(1, type_graphql_1.Arg('company', () => String)),
    __param(2, type_graphql_1.Arg('name', () => String)),
    __param(3, type_graphql_1.Arg('cost', () => type_graphql_1.Int)),
    __param(4, type_graphql_1.Arg('maxSpeed', () => type_graphql_1.Int)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, String, Number, Number]),
    __metadata("design:returntype", void 0)
], CarResolver.prototype, "createCar", null);
__decorate([
    type_graphql_1.Mutation(() => Car_1.Car, { nullable: true }),
    __param(0, type_graphql_1.Arg('yearMade', () => type_graphql_1.Int)),
    __param(1, type_graphql_1.Arg('cost', () => type_graphql_1.Int)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Object)
], CarResolver.prototype, "updateCar", null);
__decorate([
    type_graphql_1.Mutation(() => Boolean),
    __param(0, type_graphql_1.Arg('yearMade', () => type_graphql_1.Int)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CarResolver.prototype, "deleteCar", null);
CarResolver = __decorate([
    type_graphql_1.Resolver()
], CarResolver);
exports.CarResolver = CarResolver;
//# sourceMappingURL=cars.js.map