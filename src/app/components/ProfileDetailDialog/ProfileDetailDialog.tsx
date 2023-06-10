import { Dialog, DialogActions, DialogContent, DialogTitle, Stack as MuiStack, Typography } from '@mui/material';
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
          <MuiStack direction='column' spacing='8px'>
            <Typography variant='h5'>자기소개</Typography>
            <Typography variant='body2'>{profile.introduction}</Typography>
          </MuiStack>

          <MuiStack direction='column' spacing='8px'>
            <Typography variant='h5'>보유기술</Typography>
            {stacks.map((stack) => (
              <StackChip key={stack.id} name={stack.name} length={Stack.getLength(stack.name)} />
            ))}
          </MuiStack>
          <MuiStack direction='column' spacing='8px'>
            <Typography variant='h5'>참고 링크</Typography>
            <MuiStack direction='column' spacing='4px'>
              {profile.urls.map((url) => (
                <MuiStack key={url} direction='row' spacing='8px'>
                  <UrlLinkIcon css={{ width: '20px' }} />
                  {url}
                </MuiStack>
              ))}
            </MuiStack>
          </MuiStack>
        </MuiStack>
      </DialogContent>
      <DialogActions>
        <Button css={{ width: '100%' }} variant='filled'>
          제안하기
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export { ProfileDetailDialog };
