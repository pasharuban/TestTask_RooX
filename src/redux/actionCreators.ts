import { SET_SORT_TYPE, UPDATE_EDITING_STATUS } from "./actionTypes";

export const setSortType = (sortType: string) => ({
  type: SET_SORT_TYPE,
  payload: sortType,
});

export const updateEditingStatus = () => ({
  type: UPDATE_EDITING_STATUS,
});
