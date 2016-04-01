import { fromJS } from "immutable";

import {
  THESIS_GET_ALL_SUCCESS,
  // THESIS_GET_ALL_FAILURE,
  THESIS_RESET_ALL_REQUEST,
  THESIS_SAVE_ONE_REQUEST,
  THESIS_SAVE_ONE_SUCCESS,
  THESIS_SAVE_ONE_FAILURE,
} from "./thesis.actions";

const INITIAL_STATE = fromJS({
  theseslist: [
    {
      id: 1,
      author: "matti meikäläinen",
      email: "matti@gmail.com",
      title: "päällikkö",
      urkund: "http://matti.com",
      ethesis: "https://ethesis.com/matti",
      abstract: "matti on mies",
      grade: "L",
    },
    {
      id: 2,
      author: "vesa keskinen",
      email: "vesa@gmail.com",
      title: "kyläkauppias",
      urkund: "http://vesa.com",
      ethesis: "https://ethesis.com/vesa",
      abstract: "Vesalla on ferrari",
      grade: "A",
    },
    {
      id: 3,
      author: "urho kekkonen",
      email: "urkki@gmail.com",
      title: "presidentt",
      urkund: "http://urkki.com",
      ethesis: "https://ethesis.com/urkki",
      abstract: "urkki on jo kuollut heh",
      grade: "E",
    },
  ],
});

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case THESIS_GET_ALL_SUCCESS:
      return state.merge({
        theseslist: action.payload,
      });
    case THESIS_RESET_ALL_REQUEST:
      return state.merge(INITIAL_STATE);
    case THESIS_SAVE_ONE_REQUEST:
      return state.merge({
        theseslist: state.get("theseslist").push(
          action.body
        ),
      });
    case THESIS_SAVE_ONE_SUCCESS:
      return state.merge().theseslist.push(action.payload);
    default:
      return state;
  }
}