export default function ToDoReducer(state, { type, payload: { text } }) {
  switch (type) {
    case "add_todo": {
      if (text === "") {
        return state;
      }
      let hasThisText = false;
      state.forEach((e) => {
        if (e.text === text) {
          alert(`There is already a ${todo} on your list`);
          hasThisText = true;
        }
      });
      if (hasThisText) return state;
      return [{ number: 1, text: text, completed: false }];
    }
  }
}
