import { MenuItem as MuiMenuItem, Stack } from '@mui/material';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { PATH_PROJECTS } from '@routes';

const MenuItem = styled(MuiMenuItem)({
  padding: '25px 59px 24px 59px',
  fontSize: '16px',
  fontWeight: 700,
  lineHeight: 1.2,
  '&:hover': {
    backgroundColor: '#9090FF',
  },
});

function Navigation(props: { className?: string }) {
  // prop destruction
  const { className } = props;

  // lib hooks
  const navigate = useNavigate();

  // state, ref, querystring hooks
  // form hooks
  // query hooks
  // calculated values
  // effects
  // handlers

  return (
    <Stack direction='row' className={className}>
      <Stack direction='row' spacing='16px'>
        <MenuItem disableRipple onClick={() => navigate(PATH_PROJECTS)}>
          프로젝트 찾기
        </MenuItem>
        {/* TODO: 어느 경로로 가야하는가 ? */}
        <MenuItem disableRipple>동료 찾기</MenuItem>
        <MenuItem disableRipple>프로젝트 관리</MenuItem>
      </Stack>
      <MenuItem
        css={(theme) => ({
          backgroundColor: theme.palette.primary.main,
          marginLeft: '130px',
          color: '#FFFFFF',
        })}
      >
        프로젝트 생성
      </MenuItem>
    </Stack>
  );
}

export { Navigation };
