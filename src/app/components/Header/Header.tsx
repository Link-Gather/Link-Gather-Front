import { Link, NavLink } from 'react-router-dom';
import { Button } from '@elements';
import LogoHeader from '@assets/images/logos/logo-header.svg'; // TODO: 이미지 경로 SW-90에서 수정 될 예정
import ProfileDefault from '@assets/images/profiles/profile-default.svg'; // TODO: 이미지 경로 SW-90에서 수정 될 예정
import styled from '@emotion/styled';
import { Stack } from '@mui/material';
import type { Theme } from '@libs/theme';

function Header() {
  return (
    <Stack
      width='100%'
      height='70px'
      alignItems='center'
      justifyContent='center'
      css={(theme: Theme) => ({
        borderBottom: `2px solid ${theme.palette.black.main}`,
      })}
    >
      <Stack
        width='100%'
        height='100%'
        flexDirection='row'
        alignItems='center'
        justifyContent='space-between'
        css={{
          maxWidth: '1352px',
        }}
      >
        <Link
          to='/'
          css={{
            height: '100%',
          }}
        >
          <h1
            css={{
              display: 'flex',
              alignItems: 'center',
              height: '100%',
            }}
          >
            <LogoHeader css={{ height: '44px' }} />
          </h1>
        </Link>
        <Stack height='100%' flexDirection='row' alignItems='center' gap='16px'>
          <Nav to='/projects'>프로젝트 찾기</Nav>
          <Nav to='/find-co-workers'>동료 찾기</Nav>
          <Nav to='/manage-projects'>프로젝트 관리</Nav>
        </Stack>
        <Stack height='100%' flexDirection='row' alignItems='center'>
          <Button
            css={(theme: Theme) => ({
              width: '212px',
              height: '100%',
              fontFamily: '"Noto Sans KR", sans-serif',
              fontSize: '16px',
              fontWeight: '700',
              color: theme.palette.paper,
              borderLeft: `2px solid ${theme.palette.black.main}`,
              borderRight: `2px solid ${theme.palette.black.main}`,
              backgroundColor: theme.palette.primary.main,
              '&:hover': {
                textDecoration: 'underline',
                backgroundColor: theme.palette.black.main,
              },
            })}
          >
            프로젝트생성
          </Button>
          <Stack
            width='112px'
            height='100%'
            flexDirection='row'
            alignItems='center'
            justifyContent='center'
            css={(theme: Theme) => ({
              borderRight: `2px solid ${theme.palette.black.main}`,
            })}
          >
            <Button
              css={(theme: Theme) => ({
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                border: `2px solid ${theme.palette.black.main}`,
                backgroundColor: theme.palette.primary.main,
                overflow: 'hidden',
              })}
            >
              <ProfileDefault
                css={{
                  width: '200%',
                  height: '200%',
                  objectFit: 'contain',
                  transform: 'translate(25%, 20%)',
                }}
              />
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

export { Header };

const Nav = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 215px;
  height: 100%;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.palette.black.main};
  border-bottom: 4px solid transparent;

  &.active,
  &:hover {
    color: ${({ theme }) => theme.palette.primary.main};
    border-bottom: 4px solid ${({ theme }) => theme.palette.primary.main};
  }
`;
