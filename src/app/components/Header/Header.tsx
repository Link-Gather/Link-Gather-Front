import { Link, NavLink } from 'react-router-dom';
import { Button } from '@elements';
import LogoHeader from '@assets/images/logos/logo-header.svg';
import ProfileDefault from '@assets/images/profiles/profile-default.svg';
import ProfileNoUser from '@assets/images/profiles/profile-no-user.svg';
import styled from '@emotion/styled';
import { Stack } from '@mui/material';
import { isToken } from '@libs/util';
import { PATH_LOGIN, PATH_PROJECTS, PATH_PROJECTS_ADD, PATH_SIGNUP } from '@routes';
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
          <Nav to={PATH_PROJECTS}>프로젝트 찾기</Nav>
          <Nav to='/find-co-workers'>동료 찾기</Nav>
          <Nav to='/manage-projects'>프로젝트 관리</Nav>
        </Stack>
        <Stack height='100%' flexDirection='row' alignItems='center'>
          <Link to={isToken() ? PATH_PROJECTS_ADD : PATH_LOGIN} css={{ height: '100%' }}>
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
              {isToken() ? '프로젝트생성' : '로그인'}
            </Button>
          </Link>
          <Stack
            width='112px'
            height='100%'
            flexDirection='row'
            alignItems='center'
            justifyContent='center'
            css={(theme: Theme) => ({
              position: 'relative',
              borderRight: `2px solid ${theme.palette.black.main}`,
            })}
          >
            <Button
              css={(theme: Theme) => ({
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                border: `2px solid ${isToken() ? theme.palette.black.main : theme.palette.secondary.n300}`,
                backgroundColor: isToken() ? theme.palette.primary.main : theme.palette.secondary.n30,
                overflow: 'hidden',
              })}
            >
              {isToken() ? (
                <ProfileDefault
                  css={{
                    width: '200%',
                    height: '200%',
                    objectFit: 'contain',
                    transform: 'translate(25%, 20%)',
                  }}
                />
              ) : (
                <ProfileNoUser
                  css={{
                    width: '11px',
                    height: '20px',
                  }}
                />
              )}
            </Button>
            {!isToken() && (
              <ul
                css={(theme: Theme) => ({
                  position: 'absolute',
                  top: '100%',
                  right: '-2px',
                  borderLeft: `2px solid ${theme.palette.black.main}`,
                  borderRight: `2px solid ${theme.palette.black.main}`,
                  borderBottom: `2px solid ${theme.palette.black.main}`,
                })}
              >
                <DropDownNav>
                  <Link to={PATH_LOGIN}>로그인</Link>
                </DropDownNav>
                <DropDownNav>
                  <Link to={PATH_SIGNUP}>회원가입</Link>
                </DropDownNav>
              </ul>
            )}
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

const DropDownNav = styled.li`
  display: flex;
  align-items: center;
  width: 182px;
  height: 52px;
  border-bottom: 1px solid ${({ theme }) => theme.palette.black.main};
  cursor: pointer;

  &:last-child {
    border-bottom: none;
  }

  & > a {
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.palette.black.main};
    padding: 0 1.6rem;
  }

  &:hover > a {
    color: ${({ theme }) => theme.palette.primary.main};
  }
`;
