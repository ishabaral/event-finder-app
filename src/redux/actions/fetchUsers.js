import axios from "axios";
import { fetchUserRequest, fetchUsersFailure, fetchUserSuccess } from ".";

export const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchUserRequest());
    axios
      .get("http://localhost:4000/users")
      .then((res) => dispatch(fetchUserSuccess(res.data)))
      .catch((err) => dispatch(fetchUsersFailure(err.message)));
  };
};
