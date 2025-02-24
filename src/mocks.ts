import { Comment } from "@/src/app/models/review";
import { faker } from "@faker-js/faker";

export const mockComment = (): Comment => {
  return {
    content: faker.lorem.sentences(4),
    id: faker.string.uuid(),
    user: {
      email: faker.internet.email(),
      id: faker.string.uuid(),
      phone: faker.string.numeric(11),
      profilePhoto: null,
      username: faker.internet.userName(),
      address: null,
    },
  };
};
