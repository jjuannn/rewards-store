import AXIOS from "./_index";

export function fetchUserData() {
  return AXIOS.get("/user/me")
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      throw new Error("Failed while getting user data! Try again later :(");
    });
}

export function fetchProductsList() {
  return AXIOS.get("/products")
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      throw new Error("Failed while getting products! Try again later :(");
    });
}

export function redeemProduct(productId) {
  return AXIOS.post("/redeem", { productId })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      throw new Error("Failed while redeeming the product! Try again later :(");
    });
}

export function addCoins(amount) {
  return AXIOS.post("/user/points", { amount })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.error(err.message);
      throw new Error("Failed while adding coins! Try again later :(");
    });
}
