import { Dialog, DialogActions, DialogContent, DialogTitle, Grid, Stack as MuiStack, Typography } from '@mui/material';
import UserDetailIcon from '@assets/images/icons/icon-user-detail.svg';
import CloseIcon from '@assets/images/icons/icon-close.svg';
import UrlLinkIcon from '@assets/images/icons/icon-url-link.svg';
import { Profile, Role, Stack } from '@models';
import { Button, ProfileImage, StackChip } from '@elements';
import { useStacks } from '@libs/stacks';

function ProfileDetailDialog(props: { profile: Profile; onClose: () => void }) {
  // prop destruction
  const { onClose, profile } = props;
  // lib hooks
  const stacks = useStacks(profile.stacks);
  // state, ref hooks
  // query hooks
  // calculated values
  const { formattedJob, backgroundColor } = Role.getInfo(profile.job);
  // effects
  // handlers
  return (
    <Dialog open>
      <DialogTitle>
        <MuiStack direction='row' spacing='12px' justifyContent='flex-end'>
          <UserDetailIcon css={{ width: '28px', cursor: 'pointer' }} />
          <CloseIcon css={{ width: '28px', cursor: 'pointer' }} onClick={onClose} />
        </MuiStack>
      </DialogTitle>
      <DialogContent>
        <MuiStack direction='column' spacing='24px' css={{ width: '576px' }}>
          <MuiStack direction='row' spacing='16px'>
            <ProfileImage src={profile.profileImage} css={{ width: '80px', height: '80px' }} />
            <MuiStack direction='column' spacing='16px'>
              <Typography variant='body1' css={{ fontFamily: 'Noto Sans', fontWeight: 700 }}>
                {profile.nickname}
              </Typography>
              <MuiStack direction='row' spacing='8px'>
                <MuiStack css={{ border: '1px solid #000', backgroundColor, padding: '4px 8px' }}>
                  {formattedJob}
                </MuiStack>
                <MuiStack css={{ border: '1px solid #000', padding: '4px 8px' }}>
                  {Profile.getFormattedCareer(profile.career)}
                </MuiStack>
              </MuiStack>
            </MuiStack>
          </MuiStack>
          <MuiStack direction='column' spacing='8px' css={{ marginTop: '40px !important' }}>
            <Typography variant='h6' css={{ fontSize: '16px', fontWeight: 600, fontFamily: 'Inter' }}>
              자기소개
            </Typography>
            <Typography variant='body2' css={{ fontSize: '12px' }}>
              {profile.introduction}
            </Typography>
          </MuiStack>

          <MuiStack direction='column' spacing='8px'>
            <Typography variant='h6' css={{ fontSize: '16px', fontWeight: 600, fontFamily: 'Inter' }}>
              보유기술
            </Typography>
            <Grid
              container
              direction='row'
              spacing='8px'
              css={{ marginLeft: '-8px !important', marginTop: '-8px !important' }}
            >
              {stacks.map((stack) => (
                <Grid item key={stack.id}>
                  <StackChip name={stack.name} length={Stack.getLength(stack.name)} />
                </Grid>
              ))}
            </Grid>
          </MuiStack>
          <MuiStack direction='column' spacing='8px'>
            <Typography variant='h6' css={{ fontSize: '16px', fontWeight: 600, fontFamily: 'Inter' }}>
              참고 링크
            </Typography>
            <MuiStack direction='column' spacing='4px'>
              {profile.urls.map((url) => (
                <MuiStack component='a' key={url} direction='row' spacing='8px' href={url} target='_blank'>
                  <UrlLinkIcon css={{ width: '20px' }} />
                  {url}
                </MuiStack>
              ))}
            </MuiStack>
          </MuiStack>
        </MuiStack>
      </DialogContent>
      <DialogActions>
        <Button css={{ width: '100%', height: '48px', borderRadius: 999 }} variant='filled'>
          제안하기
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export { ProfileDetailDialog };
