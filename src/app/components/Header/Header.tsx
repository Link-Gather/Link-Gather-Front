import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Button, FlexBox } from '@elements';
import palette from '@libs/theme/palettes';
import LogoHeader from '@assets/images/logos/logo-header.svg';

function Header() {
  return (
    <FlexBox
      width='100%'
      height='70px'
      alignItems='center'
      justifyContent='center'
      css={{
        borderBottom: `2px solid ${palette.black.main}`,
      }}
    >
      <FlexBox
        width='100%'
        height='100%'
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
            <img src={LogoHeader} alt='link gather' />
          </h1>
        </Link>
        <FlexBox height='100%' spacing={4}>
          <NavLink
            to='/' // TODO: 프로젝트 찾기 페이지 만들면 해당 경로로 변경
            css={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '215px',
              height: '100%',
              fontFamily: '"Noto Sans KR", sans-serif',
              fontSize: '16px',
              fontWeight: '700',
              color: palette.black.main,
              borderBottom: '4px solid transparent',
              '&.active, &:hover': {
                color: palette.primary.main,
                borderBottom: `4px solid ${palette.primary.main}`,
              },
            }}
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            프로젝트 찾기
          </NavLink>
          <NavLink
            to='/find-co-workers' // TODO: 동료찾기 페이지 만들면 해당 경로로 변경
            css={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '215px',
              height: '100%',
              fontFamily: '"Noto Sans KR", sans-serif',
              fontSize: '16px',
              fontWeight: '700',
              color: palette.black.main,
              borderBottom: '4px solid transparent',
              '&.active, &:hover': {
                color: palette.primary.main,
                borderBottom: `4px solid ${palette.primary.main}`,
              },
            }}
          >
            동료 찾기
          </NavLink>
          <NavLink
            to='/manage-projects' // TODO: 프로젝트 관리 페이지 만들면 해당 경로로 변경
            css={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '215px',
              height: '100%',
              fontFamily: '"Noto Sans KR", sans-serif',
              fontSize: '16px',
              fontWeight: '700',
              color: palette.black.main,
              borderBottom: '4px solid transparent',
              '&.active, &:hover': {
                color: palette.primary.main,
                borderBottom: `4px solid ${palette.primary.main}`,
              },
            }}
          >
            프로젝트 관리
          </NavLink>
        </FlexBox>
        <FlexBox height='100%'>
          <Button
            // TODO: onClick event 생성 / 로그인 여부에 따라 로그인 안내 alert or 프로젝트 생성 페이지로 이동
            css={{
              width: '212px',
              height: '100%',
              fontFamily: '"Noto Sans KR", sans-serif',
              fontSize: '16px',
              fontWeight: '700',
              color: palette.paper,
              borderLeft: `2px solid ${palette.black.main}`,
              borderRight: `2px solid ${palette.black.main}`,
              backgroundColor: palette.primary.main,
              '&:hover': {
                textDecoration: 'underline',
                backgroundColor: palette.black.main,
              },
            }}
          >
            프로젝트생성
          </Button>
          <FlexBox
            width='112px'
            height='100%'
            alignItems='center'
            justifyContent='center'
            css={{
              borderRight: `2px solid ${palette.black.main}`,
            }}
          >
            <Button
              css={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                border: `2px solid ${palette.secondary.green}`,
                overflow: 'hidden',
              }}
            >
              <img src={LogoHeader} alt='link gather' />
            </Button>
          </FlexBox>
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
}

export { Header };
