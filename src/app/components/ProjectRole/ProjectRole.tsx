import { Stack } from '@mui/material';
import { MemberType, Role } from '@models';
import CrownIcon from '@assets/images/icons/icon-crown.svg';
import { ProfileImage } from '@elements';

function ProjectRole(props: { user: MemberType; className?: string }) {
  // prop destruction
  const { user, className } = props;
  // lib hooks
  // state, ref hooks
  // query hooks
  // calculated values
  const { backgroundColor, formattedJob } = Role.getInfo(user.job);
  // effects
  // handlers
  return (
    <Stack
      className={className}
      direction='row'
      spacing='16px'
      css={{ border: '1px solid #000', borderRadius: '20px', padding: '16px', width: '100%' }}
    >
      {/* TODO: 링크 수정 */}
      <Stack component='a' href={`/user/${user.id}`} css={{ position: 'relative' }}>
        <ProfileImage src={user.profileImage} />
        {user.type === 'leader' && (
          <CrownIcon css={{ position: 'absolute', bottom: '100%', left: 'calc(50% - 6px)', width: '12px' }} />
        )}
      </Stack>
      <Stack spacing='8px'>
        <a
          //TODO: 링크 수정
          href={`/user/${user.id}`}
          css={{ fontWeight: 600, fontSize: '14px', fontFamily: 'Noto Sans', lineHeight: '120%' }}
        >
          {user.nickname}
        </a>
        <Stack
          css={{
            width: '116px',
            height: '22px',
            fontSize: '12px',
            fontWeight: 500,
            border: '1px solid #000',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor,
          }}
        >
          {formattedJob}
        </Stack>
      </Stack>
    </Stack>
  );
}

export { ProjectRole };
