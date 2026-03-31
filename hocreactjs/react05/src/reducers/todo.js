export const todoReducer = (state, action) => {
  switch (action.type) {
    case "TODO_ADD": {
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };
    }

    case "TODO_REMOVE": {
      return {
        ...state,
        todoList: state.todoList.filter((_, index) => index !== action.payload),
      };
    }

    case "TODO_COMPLETED": {
      return {
        ...state,
        todoList: state.todoList.map((todo, index) => {
          if (index === action.payload) {
            return {
              ...todo,
              completed: !todo.completed,
            };
          }
          return todo;
        }),
      };
    }
  }
};

export const initialState = {
  todoList: [
    // {
    //   title: "Todo 1",
    //   completed: false,
    // },
    // {
    //   title: "Todo 2",
    //   completed: false,
    // },
  ],
};
