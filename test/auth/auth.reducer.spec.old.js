import { fromJS } from "immutable";
import { expect } from "chai";
import reducer from "../../src/auth/auth.reducer";
import { loggedInUsers, tokens } from "../mockdata";

const initialState = fromJS({
  user: {},
  token: "",
  expires: undefined,
});

const stateWithUserLoggedIn = fromJS({
  user: loggedInUsers[0],
  token: tokens[0],
  expires: 1000,
});

describe("Auth reducer", () => {
  describe("when receiving LOGIN_USER_SUCCESS type of action", () => {
    it("should update the state with the received data", () => {
      const newState = reducer(initialState, {
        type: "LOGIN_USER_SUCCESS",
        payload: {
          user: loggedInUsers[0],
          token: tokens[0],
          expires: 1000
        },
      });
      expect(newState).to.equal(stateWithUserLoggedIn);
    });
  });
  // otherwise good test but the current way of resetting all reducers also resets auth reducer
  // so no need for this special thing
  xdescribe("when receiving LOGOUT_USER type of action", () => {
    it("should return the state back to the initial state", () => {
      const newState = reducer(stateWithUserLoggedIn, {
        type: "LOGOUT_USER",
      });
      expect(newState).to.equal(initialState);
    });
  });
});