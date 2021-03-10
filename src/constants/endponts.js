import { callApi } from "../helpers/callApi";

export const CATEGORIES = {
  async GET_LIST() {
    const result = callApi(
      {},
      {
        endpoint: `categories`,
        method: "GET"
      }
    );
    if (result) return result;
  },
  async CREATE() {
    const result = callApi(
      {},
      {
        endpoint: `categories`,
        method: "POST"
      }
    );
    if (result) return result;
  }
};

export const AUTH = {
  async LOGIN({ email = "", password = "" }) {
    const result = callApi(
      { email: email, password: password },
      {
        endpoint: `login`,
        method: "POST"
      }
    );
    if (result) return result;
  },
  async USER_ME() {
    const result = callApi(
      {},
      {
        endpoint: `user`,
        method: "GET"
      }
    );
    if (result) return result;
  }
};
