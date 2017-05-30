import { FETCH_FIGURE, FETCH_FIGURES } from './types';

export default {

  getFigures() {
    return {
      type: FETCH_FIGURES
    };
  },

  getFigure(id) {
    return {
      type: FETCH_FIGURE,
      id
    };
  }
};