import { ActionTypes } from "../types/types";

import { SET_SORT_TYPE, UPDATE_EDITING_STATUS } from "./actionTypes";

export type initialStateType = {
  sortType: string;
  editingStatus: boolean;
};

const initialState: initialStateType = {
  sortType: "",
  editingStatus: true,
};

const reducer = (
  state = initialState,
  action: ActionTypes
): initialStateType => {
  switch (action.type) {
    case SET_SORT_TYPE:
      return { ...state, sortType: action.payload };
    case UPDATE_EDITING_STATUS:
      return { ...state, editingStatus: !state.editingStatus };
    default:
      return state;
  }
};

export default reducer;
