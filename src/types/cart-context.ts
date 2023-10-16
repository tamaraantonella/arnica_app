import { Cart } from "./cart";
import { CartItem } from "./cart-item";

export type CartContextType ={
  cart: Cart;
  addItem: (item: CartItem, count: number) => void;
  isItemInCart: (id: string) => boolean;
  removeItem: (id: string) => void;
  emptyCart: () => void;
  getProductQuantity: (id: string) => number | undefined;
  getTotalPrice: () => number;
  getTotalProducts: () => number;
}
