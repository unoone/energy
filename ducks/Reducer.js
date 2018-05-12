import * as types from "./ActionTypes";
const initialState = {
	currentState: "objects"
  };
  

export default (state = initialState, action) => {
	switch (action.type) {
		case SET_MODE: {
			return {...state,
				currentState: action.mode
			};
		}
		default:
			return state
	}
};