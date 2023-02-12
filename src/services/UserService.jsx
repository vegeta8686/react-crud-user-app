import Axios from "axios";

//fetchs all the users
export const getUsers = async () => {
  try {
    return await Axios.get(`/getUsers`);
  } catch (err) {
    console.log("error calling" + { error: err.message });
  }
};

//fetchs the single user
export const getUser = async (id) => {
  try {
    return await Axios.get(`/getUser/${id}`);
  } catch (err) {
    console.log("error caling");
  }
};

// calling update user api and updates single user
export const updateUser = async (id, payload) => {
  try {
    return await Axios.put(`/updateUser/${id}`, payload);
  } catch (err) {
    console.log("error occured");
  }
};

//calling the add user api and adds single user
export const addUser = async (payload) => {
  try {
    return await Axios.post("/createUser", payload);
  } catch (err) {
    console.log("error occured");
  }
};

//calling the delete user api and remove single user
export const removeUser = async (id) => {
  try {
    return await Axios.delete(`/deleteUser/${id}`);
  } catch (err) {
    console.log("error occured");
  }
};
