import { Theme } from '@libs/theme';
import { Stack } from '@mui/material';
import { Typography } from '../Typography';

function Label(props: { id: string; label: string; required: boolean }) {
  // prop destruction
  const { id, label, required } = props;
  // lib hooks
  // state, ref hooks
  // query hooks
  // calculated values
  // effects
  // handlers
  return (
    <Stack
      direction='row'
      alignContent='center'
      css={(theme: Theme) => ({ color: theme.palette.secondary.n500, marginBottom: '16px' })}
    >
      <label htmlFor={id}>
        <Typography variant='h5'>{label}</Typography>
      </label>
      {required && <span css={{ color: '#FF2626 ' }}>*</span>}
    </Stack>
  );
}

export { Label };
