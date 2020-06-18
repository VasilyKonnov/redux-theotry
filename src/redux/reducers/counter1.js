const initialState = {
  counter: 10,
};

export default function counter1(state = initialState, action) {
  switch (action.type) {
    case "ADD":
      return {
        counter: state.counter + 1,
      };
    case "SUB":
      return {
        counter: state.counter - 1,
      };
    case "PLUS10":
      return {
        counter: state.counter + 10,
      };
    case "ADDNAMB":
      return {
        counter: state.counter + action.payload,
      };
    default:
      return state;
  }
}
