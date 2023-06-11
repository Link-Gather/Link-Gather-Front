import { Link } from 'react-router-dom';

function HomeScreen() {
  // prop destruction
  // lib hooks

  // state, ref hooks
  // form hook
  // query hooks
  // calculated values
  // effects
  // handlers

  return (
    <div>
      <span>홈페이지</span>
      <button>
        <Link to='/login'>로그인화면으로 이동</Link>
      </button>
    </div>
  );
}

export { HomeScreen };
