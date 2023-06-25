import type { User } from '@models';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IconButton, Menu, MenuItem as MuiMenuItem, Stack, Typography as MuiTypography } from '@mui/material';
import MemberProfileIcon from '@assets/images/icons/icon-member-profile.svg';
import NoMemberProfileIcon from '@assets/images/icons/icon-no-member-profile.svg';
import LogoutIcon from '@assets/images/icons/icon-logout.svg';
import { PATH_LOGIN, PATH_SIGNUP } from '@routes';
import styled from '@emotion/styled';
import { useSignOut } from '@libs/auth';

const MenuItem = styled(MuiMenuItem)({
  padding: '0.83vw',
  width: '8.44vw',
});

const Typography = styled(MuiTypography)({
  fontFamily: 'Inter',
  fontWeight: 500,
  fontSize: '0.73vw',
  color: '#5E6C83',
});

function ProfileMenu(props: { user?: User }) {
  // prop destruction
  const { user } = props;

  // lib hooks
  const navigate = useNavigate();
  const signOut = useSignOut();

  // state, ref, querystring hooks
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  // form hooks
  // query hooks
  // calculated values
  const open = Boolean(anchorEl);

  // effects
  // handlers
  return (
    <>
      <div
        css={{ padding: '0.5vw 1.72vw 0.4vw 1.61vw', borderRight: '2px solid' }}
        onClick={(e) => setAnchorEl(e.currentTarget)}
      >
        <IconButton disableRipple css={{ padding: '0', height: '2.6vw', width: '2.6vw' }}>
          {user ? (
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
          horizontal: user ? 'left' : 'right',
        }}
        transformOrigin={{ vertical: 'top', horizontal: user ? 'left' : 'right' }}
        css={{
          '& .MuiMenu-paper': {
            borderRadius: '0px',
            border: '2px solid #000',
            boxShadow: 'none',
          },
          '& .MuiMenu-list': {
            padding: '8px',
          },
        }}
      >
        {user ? (
          <div>
            {/* FIXME: 경로 다 설정해야함. */}
            <Stack direction='row' spacing='8px' css={{ alignItems: 'center', marginBottom: '24px' }}>
              <MemberProfileIcon css={{ height: '1.6vw', width: '1.6vw' }} />
              <Typography css={{ fontWeight: 700, fontFamily: 'Noto Sans', fontSize: '14px' }}>
                {user.nickname}
              </Typography>
            </Stack>
            <MenuItem onClick={() => navigate(PATH_LOGIN)}>
              <Typography>내 정보</Typography>
            </MenuItem>
            <MenuItem onClick={() => navigate(PATH_SIGNUP)}>
              <Typography>좋아요 현황</Typography>
            </MenuItem>
            <MenuItem onClick={() => navigate(PATH_SIGNUP)}>
              <Typography>지원 현황</Typography>
            </MenuItem>
            <MenuItem onClick={() => navigate(PATH_SIGNUP)}>
              <Typography>받은 제안 현황</Typography>
            </MenuItem>
            <MenuItem onClick={() => navigate(PATH_SIGNUP)}>
              <Typography>참여 현황</Typography>
            </MenuItem>
            <MenuItem onClick={signOut}>
              <Stack direction='row' spacing='8px'>
                <LogoutIcon css={{ width: '20px', height: '20px' }} />
                <Typography>로그아웃</Typography>
              </Stack>
            </MenuItem>
          </div>
        ) : (
          <div>
            <MenuItem onClick={() => navigate(PATH_LOGIN)}>
              <Typography>로그인</Typography>
            </MenuItem>
            <MenuItem onClick={() => navigate(PATH_SIGNUP)}>
              <Typography>회원가입</Typography>
            </MenuItem>
          </div>
        )}
      </Menu>
    </>
  );
}

export { ProfileMenu };
