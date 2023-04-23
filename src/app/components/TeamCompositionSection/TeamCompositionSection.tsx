import { Button, FlexBox, Typography } from '@elements';
import { Theme } from '@libs/theme';

//TODO: react-hook-form을 사용하게되면 합치면 되려나... 일단 잘 모르겠다.
function TeamCompositionSection(props: { required?: boolean }) {
  // prop destruction
  const { required = false } = props;
  // lib hooks
  // state, ref hooks
  // query hooks
  // calculated values
  // effects
  // handlers
  return (
    <FlexBox direction='column'>
      <FlexBox direction='row' justifyContent='space-between'>
        <Typography
          variant='h5'
          css={(theme: Theme) => ({ color: theme.palette.secondary.n500, marginBottom: '16px' })}
        >
          팀원 구성
        </Typography>
        {required && <span css={{ color: '#FF2626 ' }}> *</span>}
        <Button
          css={(theme: Theme) => ({
            border: `2px solid ${theme.palette.secondary.n60}`,
            borderRadius: '6px',
            padding: '6px 16px',
            fontWeight: 700,
            fontSize: '16px',
          })}
        >
          추가
        </Button>
      </FlexBox>
    </FlexBox>
  );
}

export { TeamCompositionSection };
