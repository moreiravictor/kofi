export interface Address {
  id: string;
  city: string;
  uf: string;
  streetName: string | null;
  number: string | null;
  zipCode: string | null;
  complement: string | null;
  neighborhood: string | null;
}

export interface Photo {
  id: string;
  url: string;
}

export interface User {
  id: string;
  email: string;
  username: string;
  phone: string | null;
  address: Address | null;
  profilePhoto: Photo | null;
}
