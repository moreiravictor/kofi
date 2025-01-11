import { Photo, User } from "@/src/requests/models/user";
import { faker } from "@faker-js/faker";

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
  id: string;
  title: string;
  content: string;
  user: User;
  photos: Photo[];
  grade: number;
  likesAmount: number;
  comments: string[];
  topics: { name: string }[];
}

export const mockedReviews: Review[] = faker.helpers.multiple(
  () => ({
    id: faker.string.uuid(),
    content: faker.lorem.paragraphs(5),
    title: faker.lorem.words(3),
    photos:
      Math.random() > 0.5
        ? [{ id: faker.string.uuid(), url: "https://i.imgur.com/VQEsGHz.jpeg" }]
        : [],
    grade: faker.number.float({ min: 1, max: 5, fractionDigits: 1 }),
    comments: faker.helpers.multiple(() => faker.lorem.paragraph(1)),
    likesAmount: faker.number.int({ min: 10, max: 4000 }),
    topics: faker.helpers.multiple(() => ({ name: faker.lorem.word() })),
    user: {
      email: faker.internet.email(),
      id: faker.string.uuid(),
      username: faker.internet.userName(),
      address: null,
      phone: null,
      profilePhoto: {
        id: faker.string.uuid(),
        url: "https://i.imgur.com/tMy28ZH.jpeg",
      },
    },
  }),
  { count: 10 }
);
