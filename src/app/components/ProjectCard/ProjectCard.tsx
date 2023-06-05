import { Grid, Stack, Tooltip, Typography } from '@mui/material';
import { Chip, ProfileImage, StackChip } from '@elements';
import { Project, ProjectPurpose } from '@models';
import HeartIcon from '@assets/images/icons/icon-heart.svg';
import { useStacks } from '../../libs/stacks';
import { useState } from 'react';
import ArrowDownIcon from '@assets/images/icons/icon-arrow-down.svg';
import { Theme } from '../../libs/theme';

function filterMemberJob(members: Project['members'], job: JobType) {
  return members.filter((member) => member.job === job);
}

function ProjectCard(props: { project: Project }) {
  // prop destruction
  const { project } = props;
  // lib hooks
  const stacks = useStacks(project.stacks);
  // state, ref hooks
  const [isExpand, setIsExpand] = useState(false);
  // query hooks
  // calculated values
  const [formattedStatus, statusStyle] = Project.getInfo(project.status);
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
      }}
      spacing='28px'
    >
      <Stack direction='row' justifyContent='space-between'>
        <Stack direction='row' spacing='8px'>
          <Chip
            css={{ fontSize: '12px', fontWeight: 400, padding: '5px 16px' }}
            label={ProjectPurpose[project.purpose]}
          />
          <Chip
            label={formattedStatus}
            css={{ fontSize: '12px', fontWeight: 400, padding: '5px 12px', ...statusStyle }}
          />
        </Stack>
        <Stack direction='row' spacing='4px' alignItems='center'>
          <HeartIcon
            css={{ width: '20px', cursor: 'pointer' }}
            onClick={() => {
              // TODO: 북마크 기능 구현
            }}
          />
          <span css={{ fontFamily: 'Montserrat', fontWeight: 500 }}>{project.bookMarkCount}</span>
        </Stack>
      </Stack>
      <Stack direction='column' spacing='10px'>
        <Typography
          variant='h5'
          css={{
            fontWeight: 700,
            lineHeight: '120%',
            fontFamily: 'Noto Sans',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            cursor: 'pointer',
          }}
        >
          {project.title}
        </Typography>
        <Typography variant='body2' css={{ fontWeight: 400, color: '#979797' }}>
          예상기간: {Project.formattedPeriod(project.period)}
        </Typography>
      </Stack>
      <Stack direction='column' spacing='10px'>
        <Typography variant='body1' css={{ fontFamily: 'Noto Sans', fontWeight: 700, lineHeight: '120%' }}>
          참여현황
        </Typography>
        <Stack direction='row' spacing='20px'>
          <Stack direction='column' spacing='8px'>
            <Stack direction='row' css={{ width: '150px', alignItems: 'center' }} spacing='8px'>
              <Typography variant='body2' css={{}}>
                프론트엔드: {filterMemberJob(project.members, 'frontendDeveloper').length}/
                {project.recruitMember.frontendDeveloper}
              </Typography>
              <Stack direction='row'>
                {filterMemberJob(project.members, 'frontendDeveloper').map((member, i) => (
                  <ProfileImage
                    src={member.profileImage}
                    css={[{ width: '24px', height: '24px' }, i !== 0 && { marginLeft: '-12px' }]}
                  />
                ))}
              </Stack>
            </Stack>

            <Stack direction='row' css={{ width: '150px', alignItems: 'center' }} spacing='8px'>
              <Typography variant='body2' css={{}}>
                백엔드: {filterMemberJob(project.members, 'backendDeveloper').length}/
                {project.recruitMember.backendDeveloper}
              </Typography>
              <Stack direction='row'>
                {filterMemberJob(project.members, 'backendDeveloper').map((member, i) => (
                  <ProfileImage
                    src={member.profileImage}
                    css={[{ width: '24px', height: '24px' }, i !== 0 && { marginLeft: '-12px' }]}
                  />
                ))}
              </Stack>
            </Stack>
          </Stack>
          <Stack direction='column' spacing='8px'>
            <Stack direction='row' css={{ width: '150px', alignItems: 'center' }} spacing='8px'>
              <Typography variant='body2' css={{}}>
                기획: {filterMemberJob(project.members, 'productManager').length}/{project.recruitMember.productManager}
              </Typography>
              <Stack direction='row'>
                {filterMemberJob(project.members, 'productManager').map((member, i) => (
                  <ProfileImage
                    src={member.profileImage}
                    css={[{ width: '24px', height: '24px' }, i !== 0 && { marginLeft: '-12px' }]}
                  />
                ))}
              </Stack>
            </Stack>
            <Stack direction='row' css={{ width: '150px', alignItems: 'center' }} spacing='8px'>
              <Typography variant='body2' css={{}}>
                디자인: {filterMemberJob(project.members, 'designer').length}/{project.recruitMember.designer}
              </Typography>
              <Stack direction='row'>
                {filterMemberJob(project.members, 'designer').map((member, i) => (
                  <ProfileImage
                    src={member.profileImage}
                    css={[{ width: '24px', height: '24px' }, i !== 0 && { marginLeft: '-12px' }]}
                  />
                ))}
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Stack direction='row' spacing='4px' css={{ position: 'relative' }}>
        {stacks.slice(undefined, 3).map((stack) => (
          <StackChip name={stack.name} length={1} />
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
    </Stack>
  );
}

export { ProjectCard };
