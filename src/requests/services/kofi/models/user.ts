import { Address } from "@/src/requests/services/kofi/models/address";
import { Photo } from "@/src/requests/services/kofi/models/post";

export interface User {
  id: string;
  email: string;
  username: string;
  phone: string | null;
  address: Address | null;
  profilePhoto: Photo | null;
}
