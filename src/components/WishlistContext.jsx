import React, { createContext, useState, useEffect } from "react";

export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState(
    JSON.parse(localStorage.getItem("wishlist")) || []
  );

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const addToWishlist = (product) => {
    if (!wishlist.some((item) => item.id === product.id)) {
      setWishlist((prevWishlist) => [...prevWishlist, product]);
    }
  };

  const removeFromWishlist = (itemId) => {
    setWishlist((prevWishlist) =>
      prevWishlist.filter((item) => item.id !== itemId)
    );
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        wishlistCount: wishlist.length, // Track the count of items in the wishlist
        addToWishlist,
        removeFromWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};
