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
  async EDIT(item = {}) {
    const result = callApi(
      {
        key: item.key,
        name: item.name,
        status: item.status,
        order: item.order
      },
      {
        endpoint: `categories/${item.id}`,
        method: "PUT"
      }
    );
    if (result) return result;
  },
  async DELETE(id = "") {
    const result = callApi(
      {},
      {
        endpoint: `categories/${id}`,
        method: "DELETE"
      }
    );
    if (result) return result;
  },
  async ADD(item = {}) {
    const result = callApi(
      {
        key: item.key,
        name: item.name,
        status: item.status,
        order: item.order
      },
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
