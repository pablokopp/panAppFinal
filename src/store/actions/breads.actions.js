export const SELECT_BREAD = 'SELECT_BREAD';
export const FILTER_BREADS = 'FILTER_BREADS';

export const selectBread = id => ({
  type: SELECT_BREAD,
  breadID: id,
});

export const filterBreads = id => ({
  type: FILTER_BREADS,
  categoryID: id,
});
