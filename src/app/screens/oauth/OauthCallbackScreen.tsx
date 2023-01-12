import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';

function OauthCallbackScreen() {
  // prop destruction
  // lib hooks
  const params = useParams();
  const [querystring] = useSearchParams();
  const navigate = useNavigate();

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

    axios
      .post<{ accessToken: string } | { email: string; nickname: string; profileImage: string }>(
        `http://localhost:3000/auth/oauth/${provider}`,
        { code }
      )
      .then(({ data }) => {
        console.log(data);
        if ('accessToken' in data) {
          navigate('/');
        } else {
          navigate('/sign-up', { state: data });
        }
      });
  }, [navigate, params, querystring]);

  // handlers

  return null;
}

export { OauthCallbackScreen };
