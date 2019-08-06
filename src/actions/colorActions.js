import { CHANGE_COLOR } from "../constants/action-types";

export function changeColor(payload) {
    return { type: CHANGE_COLOR, payload }
  };