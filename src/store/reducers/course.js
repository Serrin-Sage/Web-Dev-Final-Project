import * as at from "../actions/actionTypes";


const initialState = {
  instructor: {},
};

// REDUCER;
const course = (state = initialState, action) => {
  switch (action.type) {
      case at.DELETE_INSTRUCTOR:
          return {
              ...state,
              instructor: initialState.instructor
          };
      case at.EDIT_INSTRUCTOR:
          return action.payload.id === state.instructorId ? {
              ...state,
              instructor: action.payload
          } : state;
      case at.FETCH_COURSE:
      case at.EDIT_COURSE:
          return action.payload;
      case at.DELETE_COURSE:
          return initialState;
      default:
          return state;
  }
};



export default course;