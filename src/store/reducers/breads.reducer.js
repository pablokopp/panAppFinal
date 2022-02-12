import {FILTER_BREADS, SELECT_BREAD} from '../actions/breads.actions';

import {BREADS} from '../../utils/data/breads';

const initialState = {
  breads: BREADS,
  filteredBread: [],
  selected: null,
};

const BreadsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_BREAD:
      return {
        ...state,
        selected: state.breads.find(bread => bread.id === action.breadID),
      };
    case FILTER_BREADS:
      return {
        ...state,
        filteredBread: state.breads.filter(
          bread => bread.category === action.categoryID,
        ),
      };
    default:
      return state;
  }
};

export default BreadsReducer;
