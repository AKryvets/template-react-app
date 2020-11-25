import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  app: (state = { test: 'test' }, action) => {
    switch (action.type) {
      default: return state;
    }
  },
});
