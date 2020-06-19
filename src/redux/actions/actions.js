import { ADD, SUB, ADD2, ADD_NUMBER, PLUSTEN } from "./actionTypes";

export function add() {
  return {
    type: ADD,
  };
}

export function sub() {
  return {
    type: SUB,
  };
}

export function plusTen() {
  return {
    type: PLUSTEN,
  };
}

export function add2(number) {
  return {
    type: ADD2,
    payload: number,
  };
}

export function addNumber(number) {
  return {
    type: ADD_NUMBER,
    payload: number,
  };
}
