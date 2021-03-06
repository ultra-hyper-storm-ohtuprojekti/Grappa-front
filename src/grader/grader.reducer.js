import { fromJS } from "immutable";

const INITIAL_STATE = fromJS({
  graders: [],
});

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case "GRADER_GET_ALL_SUCCESS":
      // if (!action.payload || action.payload === null) {
      //   return state.mergeIn(["graders"], fromJS([]));
      // }
      const graders = action.payload.sort((a, b) => {
        if (`${a.title} ${a.name}` < `${b.title} ${b.name}`) {
          return -1;
        } else {
          return 1;
        }
      })
      return state.mergeIn(["graders"], fromJS(action.payload));
    case "GRADER_GET_ALL_FAILURE":
      return state;
    case "GRADER_SAVE_ONE_SUCCESS":
      // for stopping duplicates due to socket-server sending the stuff
      const exists = state.get("graders").find(grader => {
        return grader.get("id") === action.payload.id;
      })
      if (exists) return state;
      return state.updateIn(["graders"], graders => fromJS([...graders, action.payload]));
    case "GRADER_SAVE_ONE_FAILURE":
      return state;
    case "GRADER_UPDATE_ONE_SUCCESS":
      return state.updateIn(["graders"], grader =>
        grader.map(grader => {
          if (grader.get("id") === action.payload.id) {
            return fromJS(action.payload);
          }
          return grader;
        })
      );
    case "GRADER_UPDATE_ONE_FAILURE":
      return state;
    case "GRADER_DELETE_ONE_SUCCESS":
      return state.updateIn(["graders"], list =>
        list.filter(grader => {
          if (grader.get("id") !== action.payload.id) {
            return grader;
          }
        })
      );
    case "GRADER_DELETE_ONE_FAILURE":
      return state;
    default:
      return state;
  }
}
