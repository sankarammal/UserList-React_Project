import React, { useReducer, useEffect } from "react";
import axios from "axios";
import Header from "./Header";
import User from "./User";
import Search from "./Search";
import "../Style/UserList.css";

const initialState = {
  loading: true,
  users: [],
  errorMessage: null
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_USERS_REQUEST":
      return {
        ...state,
        loading: true,
        errorMessage: null
      };
    case "FETCH_USERS_SUCCESS":
      return {
        ...state,
        loading: false,
        users: action.payload
      };

    case "FETCH_USERS_FAILURE":
      return {
        ...state,
        loading: false,
        errorMessage: action.ErrorInfo
      };
    default:
      return state;
  }
};

const UserList = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    getUserDetails();
  }, []);

  const search = (searchValue) => {
    let selectedUser;
    if (searchValue !== "") {
      selectedUser = users.filter(
        (x) =>
          x.name.toUpperCase().includes(searchValue.toUpperCase()) ||
          x.email.toUpperCase().includes(searchValue.toUpperCase()) ||
          x.phone.toUpperCase().includes(searchValue.toUpperCase())
      );

      if (selectedUser != null) {
        dispatch({
          type: "FETCH_USERS_SUCCESS",
          payload: selectedUser
        });
      }
    } else {
      getUserDetails();
    }
  };

  const getUserDetails = () => {
    dispatch({
      type: "FETCH_USERS_REQUEST"
    });

    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        dispatch({
          type: "FETCH_USERS_SUCCESS",
          payload: response.data
        });
      })
      .catch((error) => {
        dispatch({
          type: "FETCH_USERS_FAILURE",
          ErrorInfo: error
        });
      });
  };
  const { users, errorMessage, loading } = state;
  return (
    <div className="Home">
      <div className="Nav">
        <Header text="User List" />
        <Search search={search} />
      </div>
      <div className="users">
        {loading && !errorMessage ? (
          <span className="loader"></span>
        ) : errorMessage ? (
          <div className="errorMessage">{errorMessage}</div>
        ) : (
          users.length &&
          users.map((user, index) => <User key={index} user={user} />)
        )}
      </div>
    </div>
  );
};

export default UserList;
