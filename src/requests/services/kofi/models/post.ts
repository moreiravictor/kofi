import { Address } from "@/src/requests/services/kofi/models/address";
import { User } from "@/src/requests/services/kofi/models/user";

export enum PostType {
  TIP = "tip",
  REVIEW = "review",
  COMPARISON = "comparison",
  RECIPE = "recipe",
}

export interface Photo {
  id: string;
  url: string;
}

export interface Comment {
  id: string;
  content: string;
  user?: User;
}

export interface Brand {
  id: string;
  name: string;
  cnpj: string;
}

export enum TopicType {
  COFFEE = "coffee",
  GRINDER = "grinder",
  BREWING_METHOD = "brewingMethod",
  CAFETERIA = "cafeteria",
}

export interface Topic {
  id: string;
  name: string;
  photo: Photo;
  posts?: Post[];
  topicType: TopicType;
}

export enum GrinderType {
  HAND = "hand",
  ELECTRIC = "electric",
}

export interface Grinder extends Topic {
  type: GrinderType;
  clicks: number;
  buildMaterial: string;
  weight: number;
  cutter: string | null;
  beanVolume: number | null;
  size: string | null;
  color: string | null;
  brand: Brand;
  topicType: TopicType.GRINDER;
}

export interface Coffee extends Topic {
  roast: string;
  tasteNotes: string;
  elevation?: number;
  processingMethod?: string;
  generalGrade?: number;
  internalGrade: number;
  acidity: number;
  body: number;
  sweetness: number;
  afterTaste?: string;
  category: string;
  brand: Brand;
  topicType: TopicType.COFFEE;
}

export interface BrewingMethod extends Topic {
  brand: Brand;
  topicType: TopicType.BREWING_METHOD;
}

export enum CafeteriaType {
  REGULAR = "regular",
  SPECIALTY = "specialty",
}

export interface Cafeteria extends Topic {
  type: CafeteriaType;
  address: Address;
  topicType: TopicType.CAFETERIA;
}

export type PossibleTopic =
  | ({ topicType: TopicType.GRINDER } & Grinder)
  | ({ topicType: TopicType.COFFEE } & Coffee)
  | ({ topicType: TopicType.BREWING_METHOD } & BrewingMethod)
  | ({ topicType: TopicType.CAFETERIA } & Cafeteria);

export interface Post {
  id: string;
  title: string;
  content: string;
  likesAmount: number;
  user: User;
  type: PostType;
  photos: Photo[];
  comments?: Comment[];
  topics: PossibleTopic[];
}
