import { ActionTypes } from "../Constant/ActionTypes";

const initialState = {
    products: [
        {
            id: 1,
            title: "aman",
            category: "Programmer"

        }
    ]
}

export const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PRODUCT:
            return state;

        case ActionTypes.SELECTED_PRODUCT:
            return state;

        default:
            return state;
    }

}