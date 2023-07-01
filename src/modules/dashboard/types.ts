export type OrderTypes = "food" | "drinks" | "snacks" | "packages";

export type Orders = {
  [key: string]: {
    title: string;
    image: string;
    price: string;
  }[];
};
