import { User } from "./user";


export interface ReviewTag {
    id: string;
    name: string;
    type: string;
}

export interface CoffeeMethod {
    name: string;
    id: string;
    waterTemperatureInCelsius: number;
    grindSize: number;
    grinder: string;
}

export interface Brand {
    id: string;
    name: string;
}

export interface Coffee {
    name: string;
    roast: string;
    roastDate: string;
    brand: Brand;
}

export interface Review {
    title: string;
    content: string;
    coffee: Coffee;
    user: User;
    grade: number;
    tags: ReviewTag[];
}