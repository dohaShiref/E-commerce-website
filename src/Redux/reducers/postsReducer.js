export default function todosReducer(state = [], action) {
  if (action.type == "TODOS-LIST") return action.payload;
  return state;
}
