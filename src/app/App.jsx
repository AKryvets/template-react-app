import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route } from 'react-router-dom';
import { actions } from '../redux/actions';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.testAction());
  }, []);

  return (
    <>
      <Route exact path="/" render={<div>hello</div>} />
    </>
  );
};
