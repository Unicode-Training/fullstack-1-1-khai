//Chứa reducer

export const counterReducer = (state, action) => {
  //   console.log(`prevValue: ${prevValue}, newValue: ${newValue}`);
  //   return "An";
  //action: Mô tả hành động muốn cập nhật
  // {type: "ten-hanh-dong", payload: giatri}
  switch (action.type) {
    case "INCREMENT": {
      return {
        ...state,
        count: state.count + 1,
      };
    }

    case "DECREMENT": {
      return {
        ...state,
        count: state.count - 1,
      };
    }

    case "PUSH_MESSAGE": {
      return {
        ...state,
        message: action.payload,
      };
    }
  }
};

export const initialState = {
  count: 0,
  message: "",
};
