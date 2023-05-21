import { Typography } from '@elements';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Stack } from '@mui/material';
import palette from '@libs/theme/palettes';
import LikeIcon from '@assets/images/icons/icon-like.svg';
import ArrowDownIcon from '@assets/images/icons/icon-arrow-down.svg';
import ArrowUpIcon from '@assets/images/icons/icon-arrow-up.svg';
import { ProjectListType } from '../../screens/projects/ProjectScreen';

const MemberProfile = ({
  member,
}: {
  member: {
    label: string;
    target: number;
    capacity: number;
  };
}) => {
  switch (member.target) {
    case 0:
      return <></>;
    case 1:
      return (
        <Stack
          direction={'row'}
          width={'24px'}
          height={'24px'}
          css={{ border: `1px solid ${palette.black.main}`, borderRadius: '50%', backgroundColor: 'white' }}
        />
      );
    case 2:
      return (
        <Stack direction={'row'} position='relative'>
          <Stack
            direction={'row'}
            width={'24px'}
            height={'24px'}
            css={{ border: `1px solid ${palette.black.main}`, borderRadius: '50%', backgroundColor: 'white' }}
          />
          <Stack
            direction={'row'}
            width={'24px'}
            height={'24px'}
            position='absolute'
            left={'12px'}
            css={{ border: `1px solid ${palette.black.main}`, borderRadius: '50%', backgroundColor: 'white' }}
          />
        </Stack>
      );
    default:
      return (
        <Stack direction={'row'} position='relative'>
          <Stack
            direction={'row'}
            width={'24px'}
            height={'24px'}
            css={{ border: `1px solid ${palette.black.main}`, borderRadius: '50%', backgroundColor: 'white' }}
          />
          <Stack
            direction={'row'}
            width={'24px'}
            height={'24px'}
            position='absolute'
            left={'12px'}
            css={{ border: `1px solid ${palette.black.main}`, borderRadius: '50%', backgroundColor: 'white' }}
          />
          <Stack
            direction={'row'}
            width={'24px'}
            height={'24px'}
            position='absolute'
            left={'24px'}
            alignItems={'center'}
            justifyContent={'center'}
            css={{ border: `1px solid ${palette.black.main}`, borderRadius: '50%', backgroundColor: 'white' }}
          >
            <Typography variant='span' css={{ fontWeight: '400', color: `${palette.black.main}` }}>
              {member.target > 3 ? `+${member.target - 2}` : ''}
            </Typography>
          </Stack>
        </Stack>
      );
  }
};

const TechStacksModal = ({ techStacks }: { techStacks: string[] }) => {
  return (
    <Stack
      direction={'row'}
      position={'absolute'}
      top={'250px'}
      right={'10px'}
      left={'10px'}
      width={'300px'}
      zIndex={20}
    >
      <Box
        display={'grid'}
        maxHeight={'98px'}
        gridTemplateColumns={'repeat(4, 1fr)'}
        columnGap={'4px'}
        rowGap={'8px'}
        zIndex={30}
        css={{
          border: `1px solid ${palette.black.main}`,
          borderRadius: '4px',
          padding: '8px 12px',
          background: palette.contrastText,
          overflow: 'scroll',
        }}
      >
        {techStacks.map((techStack) => {
          return (
            <Stack
              direction={'row'}
              width={'67px'}
              height={'22px'}
              justifyContent={'center'}
              alignItems={'center'}
              css={{
                border: `1px solid ${palette.black.main}`,
                borderRadius: '20px',
                padding: '0 8px',
                backgroundColor: `${palette.secondary.n30}`,
              }}
            >
              <Typography
                variant='h6'
                css={{
                  fontWeight: '500',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  cursor: 'pointer',
                }}
              >
                {techStack}
              </Typography>
            </Stack>
          );
        })}
      </Box>
      <Box
        display={'grid'}
        position={'absolute'}
        width={'100%'}
        height={'100%'}
        left={'4px'}
        top={'4px'}
        css={{
          borderRadius: '4px',
          padding: '8px 12px',
          background: palette.black.main,
        }}
      />
    </Stack>
  );
};

const TechStack = ({
  techStacks,
  techStacksModal,
  setTechStacksModal,
}: {
  techStacks: string[];
  techStacksModal: boolean;
  setTechStacksModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <Box display={'grid'} gridTemplateColumns={'repeat(4, 1fr)'} columnGap={'4px'}>
      {techStacks.length <= 4 ? (
        <>
          {techStacks.map((techStack) => {
            return (
              <Stack
                direction={'row'}
                width={'67px'}
                height={'22px'}
                justifyContent={'center'}
                alignItems={'center'}
                css={{
                  border: `1px solid ${palette.black.main}`,
                  borderRadius: '20px',
                  padding: '0 8px',
                  backgroundColor: `${palette.secondary.n30}`,
                }}
              >
                <Typography
                  variant='h6'
                  css={{
                    fontWeight: '500',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    cursor: 'pointer',
                  }}
                >
                  {techStack}
                </Typography>
              </Stack>
            );
          })}
        </>
      ) : (
        <>
          {techStacks.map((techStack, idx) => {
            if (idx > 2) return;
            return (
              <Stack
                direction={'row'}
                width={'67px'}
                height={'22px'}
                justifyContent={'center'}
                alignItems={'center'}
                css={{
                  border: `1px solid ${palette.black.main}`,
                  borderRadius: '20px',
                  padding: '0 8px',
                  backgroundColor: `${palette.secondary.n30}`,
                }}
              >
                <Typography
                  variant='h6'
                  css={{
                    fontWeight: '500',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    cursor: 'pointer',
                  }}
                >
                  {techStack}
                </Typography>
              </Stack>
            );
          })}
          <Stack
            direction={'row'}
            width={'67px'}
            height={'22px'}
            justifyContent={'center'}
            alignItems={'center'}
            css={{
              border: `1px solid ${palette.black.main}`,
              borderRadius: '20px',
              padding: '0 8px',
              backgroundColor: `${palette.secondary.n30}`,
              cursor: 'pointer',
            }}
            onClick={() => setTechStacksModal(techStacksModal ? false : true)}
          >
            <Typography
              variant='h6'
              css={{
                fontWeight: '500',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                cursor: 'pointer',
              }}
            >
              +{techStacks.length - 3}
            </Typography>
            {techStacksModal ? <ArrowUpIcon width={'16px'} /> : <ArrowDownIcon width={'16px'} />}
          </Stack>
        </>
      )}
    </Box>
  );
};

function ProjectCard(props: { projectInfo: ProjectListType; projectIdx: number }) {
  const [isLike, setIsLike] = useState<boolean>(false);
  const [techStacksModal, setTechStacksModal] = useState<boolean>(false);

  const getStatusColor = (status: string) => {
    switch (status) {
      case '진행 중':
        return palette.primary.p20;
      case '추가 모집 중':
        return palette.secondary.beige;
      case '완료':
        return palette.secondary.n60;
      default:
        return palette.primary.main;
    }
  };

  return (
    <Stack
      direction={'column'}
      width={'326px'}
      spacing={'24px'}
      position={'relative'}
      css={{ border: '2px solid #000', borderRadius: '16px', padding: '20px' }}
    >
      <Stack direction={'row'} width={'100%'} justifyContent={'space-between'}>
        <Stack direction={'row'} spacing={'8px'}>
          <Typography
            variant='h6'
            css={{
              border: `1px solid ${palette.black.main}`,
              borderRadius: '16px',
              padding: '4px 16px',
            }}
          >
            {props.projectInfo.purpose}
          </Typography>
          <Typography
            variant='h6'
            css={{
              border: `1px solid ${palette.black.main}`,
              borderRadius: '16px',
              padding: '4px 16px',
              backgroundColor: `${getStatusColor(props.projectInfo.status)}`,
              color: `${props.projectInfo.status === '모집 중' ? palette.contrastText : palette.black.main}`,
            }}
          >
            {props.projectInfo.status}
          </Typography>
        </Stack>
        <Stack
          direction={'row'}
          alignItems={'center'}
          css={{ cursor: 'pointer' }}
          onClick={() => setIsLike(isLike ? false : true)}
        >
          <LikeIcon
            fill={isLike ? palette.secondary.red : 'none'}
            css={{
              width: '20px',
              marginRight: '4px',
            }}
          />
          <Typography
            variant='h5'
            css={{
              fontWeight: '600',
            }}
          >
            {props.projectInfo.likes}
          </Typography>
        </Stack>
      </Stack>
      <Stack direction={'column'}>
        <Link to={`/project/${props.projectIdx}`}>
          <Typography
            variant='h4'
            css={{
              height: '24px',
              fontWeight: '700',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              cursor: 'pointer',
            }}
          >
            {props.projectInfo.title}
          </Typography>
        </Link>
        <Typography
          variant='h6'
          css={{
            color: '#979797',
            fontWeight: '600',
          }}
        >
          {props.projectInfo.expectedPeriod}
        </Typography>
      </Stack>
      <Stack direction={'column'}>
        <Typography
          variant='h6'
          css={{
            fontWeight: '700',
          }}
        >
          참여 현황
        </Typography>
        <Box display={'grid'} gridTemplateColumns={'repeat(2, 1fr)'} columnGap={'30px'} rowGap={'8px'}>
          {props.projectInfo.members.map((member) => {
            return (
              <Stack direction={'row'} spacing={'8px'}>
                <Typography variant='span' css={{ fontWeight: '400', color: `${palette.black.main}` }}>
                  {member.label}: {member.target}/{member.capacity}
                </Typography>
                <MemberProfile member={member} />
              </Stack>
            );
          })}
        </Box>
      </Stack>
      <TechStack
        techStacks={props.projectInfo.technology}
        techStacksModal={techStacksModal}
        setTechStacksModal={setTechStacksModal}
      />
      {techStacksModal && (
        <>
          <TechStacksModal techStacks={props.projectInfo.technology} />
          <Stack
            direction={'row'}
            position={'fixed'}
            top={'0'}
            right={'0'}
            left={'0'}
            bottom={'0'}
            zIndex={10}
            onClick={() => setTechStacksModal(false)}
          />
        </>
      )}
    </Stack>
  );
}

export { ProjectCard };
