import React from 'react';
import { useLocation } from 'react-router-dom';

function ForgotPasswordScreen(props: {}) {
  // prop destruction
  // lib hooks
  const { pathname } = useLocation();

  // state, ref, querystring hooks
  // form hooks
  // query hooks
  // calculated values
  // effects
  // handlers

  return <div>{JSON.stringify(pathname)}</div>;
}

export { ForgotPasswordScreen };
