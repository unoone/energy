import * as types from "./actionTypes";
const initialState = {
	currentState: "objects"
  };
  

export const reducer =  (state = initialState, action) => {
	switch (action.type) {
		case types.SET_MODE: {
			return {...state,
				currentState: action.mode
			};
		}
		default:
			return state
	}
};