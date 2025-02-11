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
