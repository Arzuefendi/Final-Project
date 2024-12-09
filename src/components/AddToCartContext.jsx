import React, { createContext, useReducer, useEffect } from "react";

export const CartContext = createContext();

const initialState = {
  cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
  cartCount: JSON.parse(localStorage.getItem("cartCount")) || 0,
  wishlistItems: JSON.parse(localStorage.getItem("wishlistItems")) || [],
};

const updateLocalStorage = (state) => {
  localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
  localStorage.setItem("cartCount", JSON.stringify(state.cartCount));
  localStorage.setItem("wishlistItems", JSON.stringify(state.wishlistItems));
};

const calculateCartCount = (cartItems) => {
  return cartItems.reduce((total, item) => total + item.quantity, 0);
};

const cartReducer = (state, action) => {
  let updatedState;
  switch (action.type) {
    case "ADD_TO_CART": {
      const existingItemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
    
      let updatedCartItems;
      if (existingItemIndex !== -1) {
        updatedCartItems = state.cartItems.map((item, index) =>
          index === existingItemIndex
            ? { 
                ...item, 
                quantity: (item.quantity || 1) + (action.payload.quantity || 1),
                price: item.price || action.payload.price, // Ensure price is carried forward
              }
            : item
        );
      } else {
        updatedCartItems = [
          ...state.cartItems,
          { 
            ...action.payload, 
            quantity: action.payload.quantity || 1, // Default to 1 if undefined
            price: action.payload.price || 0, // Default to 0 if undefined
          },
        ];
      }
    
      updatedState = {
        ...state,
        cartItems: updatedCartItems,
        cartCount: calculateCartCount(updatedCartItems),
      };
      break;
    }
    

    case "REMOVE_FROM_CART": {
      const itemToRemove = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      let updatedCartItems;
      if (itemToRemove.quantity > 1) {
        updatedCartItems = state.cartItems.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      } else {
        updatedCartItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );
      }

      updatedState = {
        ...state,
        cartItems: updatedCartItems,
        cartCount: calculateCartCount(updatedCartItems),
      };
      break;
    }

    case "ADD_TO_WISHLIST": {
      const existingWishlistItem = state.wishlistItems.find(
        (item) => item.id === action.payload.id
      );

      let updatedWishlistItems;
      if (!existingWishlistItem) {
        updatedWishlistItems = [...state.wishlistItems, action.payload];
      } else {
        updatedWishlistItems = state.wishlistItems;
      }

      updatedState = {
        ...state,
        wishlistItems: updatedWishlistItems,
        wishlistCount: updatedWishlistItems.length,
      };
      break;
    }

    default:
      return state;
  }

  updateLocalStorage(updatedState);
  return updatedState;
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    updateLocalStorage(state);
  }, [state]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
