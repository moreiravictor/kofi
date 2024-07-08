import { User } from "@/requests/models/user";

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

export const mockedReviews = [
  {
    id: "1223",
    content: `O Café Três R's, de Carmo de Minas/MG, é vendido pelo Robson Ribeiro (IG: robsonrribeiro28).

Comprei recentemente com ele 2kg, que vêm em embalagens de 500g, e gostei muito do café.

Segundo ele, que é Q-Grader, é um café de 86 pontos e tem por características:

"Bom corpo, acidez média cítrica, sabor caramelo, retrogosto longo, 86 pontos. Nosso padrão de torra é a média para escura, ideal para máquinas de café expresso ou filtro."

Veio por PAC para o Rio e chegou em 5 dias (torra dia 21/02, chegou 26/02).

Gostei muito do café no espresso, com boa doçura, acidez equilibrada e sabor caramelo e chocolate ao leite. Particularmente, achei o café no espresso muito equilibrado. Uma boa opção pra comprar pela internet.`,
    title: "Café Três R's",
    photo: "",
  },
  {
    id: "1243",
    content: `Recebi essa semana uma família de Tucanos que prometem, até agora só abri o da embalagem rosa, que eles chamam de Fruity Coffee e é muito bom! Pena que minha máquina de espresso me deixou na mão e estou apenas nos coados que não são minha preferência...

Esse café me lembrou muito o DESEJO da Encantos do Café, mas com um preço muito mais convidativo. Não torram sob-demanda, mas me informaram que torram semanalmente.

Recebi com 01 semana de torra (frete grátis no PAC demora bastante), comprei no sábado e me enviaram na segunda-feira no final do dia com data de torra da segunda-feira mesmo. Com o cupom de 1ª compra, o kit com 5 pacotes saiu por R$126,00 com frete grátis.`,
    title: "Café Black Tucano",
    photo: "",
  },
  {
    id: "125223",
    content: `Provei todos, sensacionais. Um deles um pouco pesado demais no mangericao / sálvia para o meu paladar.  vale pela experiência.
Meu preferido foi o Gabriel Nunes.


https://fiveroasters.com.br/produtos/lancamento-nosso-talhao/`,
    title: "Kit geisha five roasters",
    photo: "",
  },
  {
    id: "125234343",
    content: `Adquiri um Café especial exótico do Vale do Caxixe (Castelo - ES) com o Mário Zardo. Gente, o café mais doce que já havia provado. Além do sabor e aroma que muito me agradaram.



Fica a dica para quem quer um bom café com torra super nova e a preço bastante justo. Recomendadíssimo.`,
    title: "Seleção do Mário",
    photo: "",
  },
  {
    id: "123433443",
    content: `Recebi essa semana uma família de Tucanos que prometem, até agora só abri o da embalagem rosa, que eles chamam de Fruity Coffee e é muito bom! Pena que minha máquina de espresso me deixou na mão e estou apenas nos coados que não são minha preferência...

Esse café me lembrou muito o DESEJO da Encantos do Café, mas com um preço muito mais convidativo. Não torram sob-demanda, mas me informaram que torram semanalmente.

Recebi com 01 semana de torra (frete grátis no PAC demora bastante), comprei no sábado e me enviaram na segunda-feira no final do dia com data de torra da segunda-feira mesmo. Com o cupom de 1ª compra, o kit com 5 pacotes saiu por R$126,00 com frete grátis.`,
    title: "Café Black Tucano",
    photo: "",
  },
  {
    id: "12454643",
    content: `Recebi essa semana uma família de Tucanos que prometem, até agora só abri o da embalagem rosa, que eles chamam de Fruity Coffee e é muito bom! Pena que minha máquina de espresso me deixou na mão e estou apenas nos coados que não são minha preferência...

Esse café me lembrou muito o DESEJO da Encantos do Café, mas com um preço muito mais convidativo. Não torram sob-demanda, mas me informaram que torram semanalmente.

Recebi com 01 semana de torra (frete grátis no PAC demora bastante), comprei no sábado e me enviaram na segunda-feira no final do dia com data de torra da segunda-feira mesmo. Com o cupom de 1ª compra, o kit com 5 pacotes saiu por R$126,00 com frete grátis.`,
    title: "Café Black Tucano",
    photo: "",
  },
  {
    id: "12766543",
    content: `Recebi essa semana uma família de Tucanos que prometem, até agora só abri o da embalagem rosa, que eles chamam de Fruity Coffee e é muito bom! Pena que minha máquina de espresso me deixou na mão e estou apenas nos coados que não são minha preferência...

Esse café me lembrou muito o DESEJO da Encantos do Café, mas com um preço muito mais convidativo. Não torram sob-demanda, mas me informaram que torram semanalmente.

Recebi com 01 semana de torra (frete grátis no PAC demora bastante), comprei no sábado e me enviaram na segunda-feira no final do dia com data de torra da segunda-feira mesmo. Com o cupom de 1ª compra, o kit com 5 pacotes saiu por R$126,00 com frete grátis.`,
    title: "Café Black Tucano",
    photo: "",
  },
  {
    id: "1243453",
    content: `Recebi essa semana uma família de Tucanos que prometem, até agora só abri o da embalagem rosa, que eles chamam de Fruity Coffee e é muito bom! Pena que minha máquina de espresso me deixou na mão e estou apenas nos coados que não são minha preferência...

Esse café me lembrou muito o DESEJO da Encantos do Café, mas com um preço muito mais convidativo. Não torram sob-demanda, mas me informaram que torram semanalmente.

Recebi com 01 semana de torra (frete grátis no PAC demora bastante), comprei no sábado e me enviaram na segunda-feira no final do dia com data de torra da segunda-feira mesmo. Com o cupom de 1ª compra, o kit com 5 pacotes saiu por R$126,00 com frete grátis.`,
    title: "Café Black Tucano",
    photo: "",
  },
  {
    id: "1223243",
    content: `Recebi essa semana uma família de Tucanos que prometem, até agora só abri o da embalagem rosa, que eles chamam de Fruity Coffee e é muito bom! Pena que minha máquina de espresso me deixou na mão e estou apenas nos coados que não são minha preferência...

Esse café me lembrou muito o DESEJO da Encantos do Café, mas com um preço muito mais convidativo. Não torram sob-demanda, mas me informaram que torram semanalmente.

Recebi com 01 semana de torra (frete grátis no PAC demora bastante), comprei no sábado e me enviaram na segunda-feira no final do dia com data de torra da segunda-feira mesmo. Com o cupom de 1ª compra, o kit com 5 pacotes saiu por R$126,00 com frete grátis.`,
    title: "Café Black Tucano",
    photo: "",
  },
];
