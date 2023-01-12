import React from 'react';
import { useLocation } from 'react-router-dom';

function SignUpScreen(props: {}) {
  // prop destruction
  // lib hooks
  const { state } = useLocation();

  // state, ref, querystring hooks
  // form hooks
  // query hooks
  // calculated values
  // effects
  // handlers

  return <div>{JSON.stringify(state, undefined, 2)}</div>;
}

export { SignUpScreen };
