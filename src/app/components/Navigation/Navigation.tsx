import { MenuItem as MuiMenuItem, menuItemClasses, Stack } from '@mui/material';
import styled from '@emotion/styled';
import { useNavigate, useLocation } from 'react-router-dom';
import { PATH_COLLEAGUES, PATH_PROJECTS, PATH_PROJECTS_ADD, PATH_PROJECTS_MANAGE } from '@routes';

const MenuItem = styled(MuiMenuItem)({
  padding: '1.3vw 3.07vw 1.25vw 3.07vw',
  minHeight: 0,
  height: '100%',
  maxHeight: '3.54vw',
  fontSize: '0.83vw',
  fontWeight: 700,
  lineHeight: 1.2,
  '&:hover': {
    backgroundColor: '#FFFFFF',
  },
  [`&.${menuItemClasses.selected}`]: {
    backgroundColor: '#FFFFFF',
    borderBottom: '4px solid #5555FF',
    '&:hover': {
      backgroundColor: '#FFFFFF',
    },
  },
});

function Navigation(props: { className?: string }) {
  // prop destruction
  const { className } = props;

  // lib hooks
  const navigate = useNavigate();
  const location = useLocation();

  // state, ref, querystring hooks
  // form hooks
  // query hooks
  // calculated values
  // effects
  // handlers

  return (
    <Stack direction='row' className={className}>
      <Stack direction='row' spacing='16px'>
        <MenuItem selected={location.pathname === PATH_PROJECTS} onClick={() => navigate(PATH_PROJECTS)}>
          프로젝트 찾기
        </MenuItem>
        <MenuItem selected={location.pathname === PATH_COLLEAGUES} onClick={() => navigate(PATH_COLLEAGUES)}>
          동료 찾기
        </MenuItem>
        <MenuItem selected={location.pathname === PATH_PROJECTS_MANAGE} onClick={() => navigate(PATH_PROJECTS_MANAGE)}>
          프로젝트 관리
        </MenuItem>
      </Stack>
      <MenuItem
        css={(theme) => ({
          backgroundColor: theme.palette.primary.main,
          height: '3.65vw',
          marginLeft: '6.77vw',
          color: '#FFFFFF',
          borderRight: '2px solid #000',
          borderLeft: '2px solid #000',
          '&:hover': {
            backgroundColor: theme.palette.primary.main,
          },
        })}
        onClick={() => navigate(PATH_PROJECTS_ADD)}
      >
        프로젝트 생성
      </MenuItem>
    </Stack>
  );
}

export { Navigation };
