import { Link, useNavigate } from 'react-router-dom';
import LogoLinkGather from '@assets/logos/logo-link-gather.svg';
import KakaoIcon from '@assets/images/icons/icon-kakao.svg';
import { Menu, MenuItem, Typography } from '@mui/material';
import { Navigation } from '../Navigation';
import { useState } from 'react';
import { PATH_HOME, PATH_LOGIN, PATH_SIGNUP } from '@routes';

function Header() {
  // prop destruction
  // lib hooks
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  // state, ref, querystring hooks
  // form hooks
  // query hooks
  // calculated values
  const open = Boolean(anchorEl);

  // effects
  // handlers
  const handleClose = () => {
    setAnchorEl(null);
  };
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
      <Link to={PATH_HOME}>
        <LogoLinkGather css={{ height: '44px' }} />
      </Link>

      {/* Navigation */}
      <Navigation css={{ marginLeft: '114px' }} />

      {/* Profile */}
      <div
        css={{ padding: '10px 33px 8px 31px', borderRight: '2px solid' }}
        onClick={(e) => setAnchorEl(e.currentTarget)}
      >
        <div css={{ height: '50px', width: '50px' }}>
          <KakaoIcon css={{ height: '50px', width: '50px' }} />
        </div>
        <Menu
          open={open}
          anchorEl={anchorEl}
          onClick={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          css={{
            '& .MuiMenu-paper': {
              borderRadius: '0px',
              border: '2px solid #000',
            },
            '& .MuiMenu-list': {
              padding: 0,
            },
          }}
        >
          <MenuItem css={{ padding: '16px', width: '162px' }} onClick={() => navigate(PATH_LOGIN)}>
            <Typography css={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '14px', lineHeight: '20px' }}>
              로그인
            </Typography>
          </MenuItem>
          <MenuItem css={{ padding: '16px', width: '162px' }} onClick={() => navigate(PATH_SIGNUP)}>
            <Typography css={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '14px', lineHeight: '20px' }}>
              회원가입
            </Typography>
          </MenuItem>
        </Menu>
      </div>
    </header>
  );
}

export { Header };
