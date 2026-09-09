export type BurgerRow = {
  name: string;
  ingredients: string;
  prices: [number, number, number, number]; // Double, Triple, DoubleDouble, TripleDouble
};

export const burgers: BurgerRow[] = [
  {
    name: "EL CLASICO",
    ingredients: "burger sos, kiseli krastavci, crveni luk, 100% junetina, cheddar, kečap",
    prices: [750, 950, 1150, 1350],
  },
  {
    name: "NORTE",
    ingredients: "burger sos, kiseli krastavci, iceberg, 100% junetina, cheddar, hrskava slaninica",
    prices: [790, 990, 1150, 1390],
  },
  {
    name: "MATADOR",
    ingredients: "BBQ sos, iceberg, 100% junetina, cheddar, jalapeño, hrskava slaninica",
    prices: [850, 1050, 1250, 1450],
  },
  {
    name: "TRUFFLE",
    ingredients: "truffle mayo, karamelizovani luk, 100% junetina, cheddar",
    prices: [890, 1090, 1290, 1490],
  },
  {
    name: "EL PATRON",
    ingredients: "bacon mayo, hrskava slaninica, cheddar, karamelizovani luk, 100% junetina",
    prices: [890, 1090, 1290, 1490],
  },
  {
    name: "BLUE CHEESE",
    ingredients: "bacon mayo, iceberg, 100% junetina, ementaler, gorgonzola, cheddar",
    prices: [920, 1120, 1320, 1520],
  },
];

export const snacks: Array<{ name: string; price: number }> = [
  { name: "CHEESE BALLS", price: 420 },
  { name: "ONION RINGS", price: 360 },
  { name: "MOZZARELA STICKS", price: 390 },
];

export const pomfriti: Array<{ name: string; price: string }> = [
  { name: "CLASSIC", price: "140 / 200" },
  { name: "CHEDDAR", price: "380" },
  { name: "CHEDDAR BACON", price: "420" },
  { name: "TARTUF PARMEZAN", price: "390" },
];

export const palacinke: Array<{ name: string; price: number }> = [
  { name: "NUTELA PLAZMA", price: 290 },
  { name: "NUTELA PLAZMA U MLEKU", price: 340 },
  { name: "ŠVARCVALD", price: 380 },
];

export const sosevi: string[] = [
  "TRUFFLE MAYO",
  "BACON MAYO",
  "BBQ",
  "KETCHUP",
  "BURGER SOS",
  "HONEY MUSTARD",
  "SLANINICA",
  "JALAPEÑO",
  "KARAMEL LUK",
];

export const priceColumns = ["DOUBLE", "TRIPLE", "DOUBLE DOUBLE", "TRIPLE DOUBLE"] as const;

export const WOLT_RESTAURANT_URL = "https://wolt.com/en/srb/novi_sad/restaurant/norte-smash";
export const GLOVO_RESTAURANT_URL = "https://glovoapp.com/en/rs/novi-sad/stores/norte-street-food-qnd";
export const INSTAGRAM_URL = "https://www.instagram.com/nortesmash/";
export const WOLT_TRACK_URL = "https://wolt.com/me/orders";
export const GLOVO_TRACK_URL = "https://glovoapp.com/rs/sr/orders/";
