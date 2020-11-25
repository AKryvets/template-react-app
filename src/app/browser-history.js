import { createBrowserHistory } from 'history';

let history = null;

export const getHistory = () => {
  if (!history) {
    history = createBrowserHistory();
  }
  return history;
};
