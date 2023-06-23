import { Link, useNavigate } from 'react-router-dom';
import MemberProfileIcon from '@assets/images/icons/icon-member-profile.svg';
import NoMemberProfileIcon from '@assets/images/icons/icon-no-member-profile.svg';
import { IconButton, Menu, MenuItem, Typography } from '@mui/material';
import { Navigation } from '../Navigation';
import { useState } from 'react';
import { PATH_HOME, PATH_LOGIN, PATH_SIGNUP } from '@routes';
import { isToken } from '@libs/util';
import { S3_IMAGE_BUCKET } from '@configs';

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
      <div css={{ paddingTop: '8px' }}>
        <Link to={PATH_HOME}>
          <img src={`${S3_IMAGE_BUCKET}/Link+gather_logo-01+1.png`} alt='logo' css={{ width: '5.16vw' }} />
        </Link>
      </div>

      {/* Navigation */}
      <Navigation css={{ marginLeft: '5.94vw', height: '3.54vw' }} />

      {/* Profile */}
      <div
        css={{ padding: '0.5vw 1.72vw 0.4vw 1.61vw', borderRight: '2px solid' }}
        onClick={(e) => setAnchorEl(e.currentTarget)}
      >
        <IconButton disableRipple css={{ padding: '0', height: '2.6vw', width: '2.6vw' }}>
          {isToken() ? (
            <MemberProfileIcon css={{ height: '2.6vw', width: '2.6vw' }} />
          ) : (
            <NoMemberProfileIcon css={{ height: '2.6vw', width: '2.6vw' }} />
          )}
        </IconButton>
      </div>
      <Menu
        open={open}
        anchorEl={anchorEl}
        onClick={() => setAnchorEl(null)}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        css={{
          '& .MuiMenu-paper': {
            borderRadius: '0px',
            border: '2px solid #000',
            boxShadow: 'none',
          },
          '& .MuiMenu-list': {
            padding: 0,
          },
        }}
      >
        <MenuItem css={{ padding: '0.83vw', width: '8.44vw' }} onClick={() => navigate(PATH_LOGIN)}>
          <Typography css={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '14px', lineHeight: '20px' }}>
            로그인
          </Typography>
        </MenuItem>
        <MenuItem css={{ padding: '0.83vw', width: '8.44vw' }} onClick={() => navigate(PATH_SIGNUP)}>
          <Typography css={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '14px', lineHeight: '20px' }}>
            회원가입
          </Typography>
        </MenuItem>
      </Menu>
    </header>
  );
}

export { Header };
