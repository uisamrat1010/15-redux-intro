const initialCustomerState = {
  fullName: "",
  nationalID: "",

  createdAt: "",
};

export default function customerReducer(state = initialCustomerState, action) {
  switch (action.type) {
    case "create/customer":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalID: action.payload.nationalID,
        createdAt: action.payload.createdAt,
      };
    case "customer/updateName":
      return { ...state, fullName: action.payload };

    default:
      return state;
  }
}

// Action creators

export function createCustomer(fullName, nationalID) {
  return {
    type: "create/customer",
    payload: { fullName, nationalID, createdAt: new Date().toISOString() },
  };
}

export function updateName(fullName) {
  return { type: "customer/updateName", payload: fullName };
}
