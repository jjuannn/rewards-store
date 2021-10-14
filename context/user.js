import { createContext, useReducer } from "react";

export const userContext = createContext({});

const INITIAL_VALUES = {
  userValues: { data: null, loading: false, error: null },
  userRedeem: { loading: false, success: false, error: null },
};

export default function UserContextProvider({ children }) {
  const [user, userDispatch] = useReducer(userReducer, INITIAL_VALUES);

  return (
    <userContext.Provider value={{ user, userDispatch }}>
      {children}
    </userContext.Provider>
  );
}

function userReducer(state, { type, payload }) {
  switch (type) {
    case "SET_USER":
      return {
        ...state,
        userValues: {
          data: payload,
          loading: false,
          error: null,
        },
      };
    case "SET_USER_LOADING":
      return {
        ...state,
        userValues: {
          data: null,
          loading: true,
          error: null,
        },
      };
    case "SET_USER_FAILURE":
      return {
        ...state,
        userValues: {
          data: null,
          loading: false,
          error: payload,
        },
      };
    case "CLAIM_POINTS_LOADING":
      return {
        ...state,
        userRedeem: {
          loading: true,
          error: null,
          success: false,
        },
      };
    case "CLAIM_POINTS_ERROR":
      return {
        ...state,
        userRedeem: {
          loading: false,
          error: payload,
          success: false,
        },
      };
    case "CLAIM_POINTS_SUCCESS":
      return {
        ...state,
        userRedeem: {
          loading: false,
          error: null,
          success: true,
        },
      };
    default:
      return state;
  }
}
