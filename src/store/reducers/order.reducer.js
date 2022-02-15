import {DELETE_ORDER, GET_ORDERS} from '../actions/order.action';

const initialState = {
  orders: [],
};

const OrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDERS:
      return {
        ...state,
        orders: action.payload,
      };
    case DELETE_ORDER:
      return {
        ...state,
        orders: state.orders.filter(order => order.id !== action.orderId),
      };
    default:
      return state;
  }
};
export default OrderReducer;
