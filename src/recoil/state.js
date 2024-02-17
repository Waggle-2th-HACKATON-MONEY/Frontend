import { atom } from "recoil";
//recoil state 생성
export const scoreState = atom({
  key: "score",
  default: [],
});

export const types = atom({
  key: "type",
  default: {},
});

export const board = atom({
  key: "type",
  default: [],
});
