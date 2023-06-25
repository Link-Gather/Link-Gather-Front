import { Link } from 'react-router-dom';
import { Navigation } from '../Navigation';
import { PATH_HOME } from '@routes';
import { S3_IMAGE_BUCKET } from '@configs';
import { useUser } from '@libs/auth';
import { ProfileMenu } from './ProfileMenu';

function Header() {
  // prop destruction
  // lib hooks
  const [user] = useUser();

  // state, ref, querystring hooks
  // form hooks
  // query hooks
  // calculated values
  // effects
  // handlers

  return (
    <header
      css={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottom: '2px solid #000',
      }}
    >
      {/* Link Gather Logo*/}
      <div>
        <Link to={PATH_HOME}>
          <img src={`${S3_IMAGE_BUCKET}/Link+gather_logo-01+1.png`} alt='logo' css={{ width: '5.16vw' }} />
        </Link>
      </div>

      {/* Navigation */}
      <Navigation css={{ marginLeft: '5.94vw' }} />

      {/* Profile */}
      <ProfileMenu user={user} />
    </header>
  );
}

export { Header };
