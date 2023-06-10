import { Profile, Role } from '@models';
import { Grid, Stack, Tooltip, Typography } from '@mui/material';
import { Button, ProfileImage, StackChip } from '@elements';
import { useStacks } from '@libs/stacks';
import { Theme } from '@libs/theme';
import ArrowDownIcon from '@assets/images/icons/icon-arrow-down.svg';
import { useState } from 'react';
import { useDialog } from '../../hooks';
import { ProfileDetailDialog } from '@components';

function ProfileCard(props: { profile: Profile }) {
  // prop destruction
  const { profile } = props;
  // lib hooks
  const stacks = useStacks(profile.stacks);
  const { isOpenDialog, openDialog, closeDialog } = useDialog();
  // state, ref hooks
  const [isExpand, setIsExpand] = useState(false);
  // query hooks
  // calculated values
  const { formattedJob, backgroundColor } = Role.getInfo(profile.job);
  // effects
  // handlers

  return (
    <Stack
      css={{
        maxWidth: '326px',
        border: '2px solid #000',
        borderRadius: '16px',
        padding: '20px',
        backgroundColor: '#fff',
        '&:hover': {
          boxShadow: '8px 8px 0px #000000;',
          marginTop: '-8px',
          marginLeft: '-8px',
        },
      }}
      spacing='28px'
    >
      <Stack direction='row' spacing='16px'>
        <ProfileImage
          src={profile.profileImage}
          css={{ width: '80px', height: '80px', cursor: 'pointer' }}
          onClick={openDialog}
        />
        <Stack direction='column' spacing='16px'>
          <Typography
            variant='body1'
            css={{ fontFamily: 'Noto Sans', fontWeight: 700, cursor: 'pointer' }}
            onClick={openDialog}
          >
            {profile.nickname}
          </Typography>
          <Stack direction='row' spacing='8px'>
            <Stack css={{ border: '1px solid #000', backgroundColor, padding: '4px 8px' }}>{formattedJob}</Stack>
            <Stack css={{ border: '1px solid #000', padding: '4px 8px' }}>
              {Profile.getFormattedCareer(profile.career)}
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Typography variant='body2' css={{ fontSize: '12px', fontWeight: 500 }}>
        {profile.introduction}
      </Typography>
      <Stack direction='row' spacing='4px' css={{ position: 'relative' }}>
        {stacks.slice(undefined, 3).map((stack) => (
          <StackChip key={stack.id} name={stack.name} length={1} />
        ))}
        {stacks.length > 3 && (
          <StackChip
            name={
              <Stack direction='row'>
                <span>+{stacks.length - 3}</span>
                <ArrowDownIcon css={{ width: '16px' }} />
              </Stack>
            }
            length={1}
            onClick={() => setIsExpand((prev) => !prev)}
          />
        )}
        {isExpand && (
          <>
            {/* <ClickAway onClick={() => setIsExpand(false)} /> */}
            <Grid
              container
              css={(theme: Theme) => ({
                border: `1px solid ${theme.palette.black.main}`,
                borderRadius: '8px',
                boxShadow: '4px 4px 0px #000',
                position: 'absolute',
                top: 'calc(100% + 6px)',
                marginLeft: '0 !important',
                padding: '0 4px 8px',
                left: '-3%',
                zIndex: 2,
                backgroundColor: theme.palette.paper,
                width: '106%',
              })}
              rowSpacing='8px'
              columnSpacing='4px'
            >
              {stacks.map((stack) => (
                <Grid item key={stack.id}>
                  <Tooltip title={stack.name}>
                    <div>
                      <StackChip name={stack.name} length={1} />
                    </div>
                  </Tooltip>
                </Grid>
              ))}
            </Grid>
          </>
        )}
      </Stack>
      <Button
        css={(theme: Theme) => ({
          border: `1px solid ${theme.palette.primary.main}`,
          color: theme.palette.primary.main,
          fontWeight: 500,
          fontFamily: 'Noto Sans',
          fontSize: '14px',
          '&:hover': {
            backgroundColor: theme.palette.primary.main,
            color: '#fff',
          },
        })}
        onClick={() => {
          // TODO: 프로젝트 제안 api 연결
        }}
      >
        프로젝트 제안
      </Button>
      {/* Detail Dialog */}
      {isOpenDialog && <ProfileDetailDialog onClose={closeDialog} profile={profile} />}
    </Stack>
  );
}

export { ProfileCard };
