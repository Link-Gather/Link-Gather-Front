import { useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

function OauthCallbackScreen() {
  // prop destruction
  // lib hooks
  const params = useParams();
  const [querystring] = useSearchParams();

  // state, ref, querystring hooks
  // form hooks
  // query hooks
  // calculated values
  // effects
  useEffect(() => {
    const { provider } = params;
    const code = querystring.get('code');

    console.log(provider);
    console.log(code);
  }, [params, querystring]);

  // handlers

  return null;
}

export { OauthCallbackScreen };
