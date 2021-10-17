import { useContext } from "react";
import {
  fetchUserData,
  redeemProduct,
  addCoins as addCoinsService,
} from "services/api";
import { userContext } from "/context/user";

export default function useUser() {
  const { user, userDispatch } = useContext(userContext);
  const { userValues, userRedeem, userAddCoins } = user;

  const getUserData = async () => {
    userDispatch({ type: "SET_USER_LOADING" });
    try {
      const data = await fetchUserData();
      userDispatch({ type: "SET_USER", payload: data });
    } catch (err) {
      userDispatch({ type: "SET_USER_FAILURE", payload: err });
    }
  };

  const redeemPoints = async (_id, cost) => {
    userDispatch({ type: "CLAIM_POINTS_LOADING" });
    try {
      await redeemProduct(_id);
      userDispatch({ type: "CLAIM_POINTS_SUCCESS" });
      userDispatch({
        type: "SET_USER",
        payload: { ...userValues.data, points: userValues.data.points - cost },
      });
    } catch (err) {
      userDispatch({ type: "CLAIM_POINTS_ERROR", payload: err });
    }
  };

  const addCoins = async (amount) => {
    userDispatch({ type: "ADD_POINTS_LOADING" });
    try {
      await addCoinsService(amount);
      userDispatch({ type: "ADD_POINTS_SUCCESS" });
      userDispatch({
        type: "SET_USER",
        payload: {
          ...userValues.data,
          points: userValues.data.points + amount,
        },
      });
    } catch (err) {
      userDispatch({ type: "ADD_POINTS_ERROR", payload: err });
    }
  };

  const clearUserRedeem = () => {
    userDispatch({ type: "CLAIM_POINTS_DEFAULT" });
  };

  const clearUserAddCoins = () => {
    userDispatch({ type: "ADD_POINTS_DEFAULT" });
  };

  return {
    userData: userValues.data,
    userError: userValues.error,
    userLoading: userValues.loading,
    userRedeemLoading: userRedeem.loading,
    userRedeemError: userRedeem.error,
    userRedeemSuccess: userRedeem.success,
    userAddCoinsSuccess: userAddCoins.success,
    userAddCoinsError: userAddCoins.error,
    userAddCoinsLoading: userAddCoins.loading,
    addCoins,
    getUserData,
    redeemPoints,
    clearUserRedeem,
    clearUserAddCoins,
  };
}
