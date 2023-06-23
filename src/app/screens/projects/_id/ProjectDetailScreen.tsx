import { CircularProgress, Divider, Grid, Stack as MuiStack, Typography } from '@mui/material';
import { useLocation, useParams } from 'react-router-dom';
import { useQuery } from '../../../libs/query';
import { projectRepository } from '../../../repositories';
import { Project, ProjectPurpose, Stack } from '../../../models';
import { Button, Chip, ProfileImage, StackChip, TextArea } from '../../../elements';
import HeartIcon from '@assets/images/icons/icon-heart.svg';
import ShareIcon from '@assets/images/icons/icon-share.svg';
import { useStacks } from '../../../libs/stacks';
import { ProjectRole } from '../../../components';
import { Theme } from '../../../libs/theme';

function ProjectDetailScreen(props: {}) {
  // prop destruction
  // lib hooks
  const { id } = useParams();
  const { pathname } = useLocation();
  const stacks = useStacks();
  // state, ref hooks
  // query hooks
  const { data: project, isLoading } = useQuery(projectRepository.retrieve, {
    variables: {
      id: id!,
    },
  });
  // const {data: comment} = useQuery(commentRepository.list,{
  //   variables: {
  //     projectId: id!,
  //   }
  // })
  // calculated values
  const loading = isLoading || !project;
  const projectStacks = stacks.filter((stack) => project?.stacks.includes(stack.id));
  // effects
  // handlers
  return loading ? (
    <CircularProgress />
  ) : (
    <MuiStack
      direction='column'
      css={{ width: '782px', margin: 'auto', position: 'relative', marginTop: '80px' }}
      spacing='60px'
    >
      <MuiStack direction='column' spacing='36px'>
        <MuiStack direction='row' justifyContent='space-between'>
          <MuiStack direction='row' spacing='16px'>
            <Chip
              css={{ fontSize: '16px', fontWeight: 400, padding: '5px 16px', width: 'max-content' }}
              label={ProjectPurpose[project.purpose]}
            />
            <Chip
              label={Project.getInfo(project.status)[0]}
              css={{
                fontSize: '16px',
                fontWeight: 400,
                padding: '5px 12px',
                ...Project.getInfo(project.status)[1],
                width: 'max-content',
              }}
            />
            <MuiStack direction='row' spacing='4px' alignItems='center' onClick={(e) => e.stopPropagation()}>
              <HeartIcon
                css={{ width: '24px', cursor: 'pointer' }}
                onClick={() => {
                  // TODO: 북마크 기능 구현
                }}
              />
              <span css={{ fontFamily: 'Montserrat', fontWeight: 500 }}>{project.bookMarkCount}</span>
            </MuiStack>
          </MuiStack>
          <ShareIcon
            css={{ width: '28px', cursor: 'pointer' }}
            onClick={async () => {
              await navigator.clipboard.writeText(`https://www.linkgather.co.kr${pathname}`).then(() => {
                // TODO: 토스트
                alert('링크가 복사되었습니다.');
              });
            }}
          />
        </MuiStack>
        <Typography variant='h5' css={{ fontWeight: 700, fontFamily: 'Noto Sans' }}>
          {project.title}
        </Typography>
        <MuiStack direction='column' spacing='26px'>
          <Typography variant='h6'>| 프로젝트 설명</Typography>
          <Typography variant='body2' css={{ fontWeight: 400, fontFamily: 'Noto Sans' }}>
            {project.description}
          </Typography>
        </MuiStack>
        <MuiStack direction='column' spacing='16px'>
          <Typography variant='h6'>| 목표 기간</Typography>
          <Typography variant='body2' css={{ fontWeight: 400, fontFamily: 'Noto Sans' }}>
            약 {Project.formattedPeriod(project.period)}
          </Typography>
        </MuiStack>
        <MuiStack direction='column' spacing='16px'>
          <Typography variant='h6'>| 모집 현황</Typography>
          <MuiStack direction='row' css={{ alignItems: 'center' }} spacing='16px'>
            <Typography variant='body2' css={{ fontWeight: 400, fontFamily: 'Noto Sans' }}>
              기획: {Project.filterMemberJob(project.members, 'productManager').length}/
              {project.recruitMember.productManager}
            </Typography>
            <MuiStack direction='row' spacing='4px'>
              {Project.filterMemberJob(project.members, 'productManager').map((member, i) => (
                <ProfileImage key={member.id} src={member.profileImage} css={{ width: '24px', height: '24px' }} />
              ))}
            </MuiStack>
          </MuiStack>
          <MuiStack direction='row' css={{ alignItems: 'center' }} spacing='16px'>
            <Typography variant='body2' css={{ fontWeight: 400, fontFamily: 'Noto Sans' }}>
              프론트엔드: {Project.filterMemberJob(project.members, 'frontendDeveloper').length}/
              {project.recruitMember.frontendDeveloper}
            </Typography>
            <MuiStack direction='row' spacing='4px'>
              {Project.filterMemberJob(project.members, 'frontendDeveloper').map((member, i) => (
                <ProfileImage key={member.id} src={member.profileImage} css={{ width: '24px', height: '24px' }} />
              ))}
            </MuiStack>
          </MuiStack>
          <MuiStack direction='row' css={{ alignItems: 'center' }} spacing='16px'>
            <Typography variant='body2' css={{ fontWeight: 400, fontFamily: 'Noto Sans' }}>
              디자인: {Project.filterMemberJob(project.members, 'designer').length}/{project.recruitMember.designer}
            </Typography>
            <MuiStack direction='row' spacing='4px'>
              {Project.filterMemberJob(project.members, 'designer').map((member, i) => (
                <ProfileImage key={member.id} src={member.profileImage} css={{ width: '24px', height: '24px' }} />
              ))}
            </MuiStack>
          </MuiStack>
          <MuiStack direction='row' css={{ alignItems: 'center' }} spacing='16px'>
            <Typography variant='body2' css={{ fontWeight: 400, fontFamily: 'Noto Sans' }}>
              백엔드: {Project.filterMemberJob(project.members, 'backendDeveloper').length}/
              {project.recruitMember.backendDeveloper}
            </Typography>
            <MuiStack direction='row' spacing='4px'>
              {Project.filterMemberJob(project.members, 'backendDeveloper').map((member, i) => (
                <ProfileImage key={member.id} src={member.profileImage} css={{ width: '24px', height: '24px' }} />
              ))}
            </MuiStack>
          </MuiStack>
        </MuiStack>
        <MuiStack direction='column' spacing='12px'>
          <Typography variant='h6'>기술 스택</Typography>
          <Grid
            container
            css={{
              marginLeft: '-4px !important',
            }}
            rowSpacing='8px'
            columnSpacing='4px'
          >
            {projectStacks.map((stack) => (
              <Grid item key={stack.id}>
                <StackChip name={stack.name} length={Stack.getLength(stack.name)} />
              </Grid>
            ))}
          </Grid>
        </MuiStack>
      </MuiStack>
      <MuiStack direction='column'>
        <MuiStack direction='row' justifyContent='space-between'>
          <Typography>댓글{}</Typography>
          <Button variant='outlined'>프로젝트 구경가기</Button>
        </MuiStack>

        <MuiStack direction='row'>
          <TextArea css={{ flex: 1 }} />
          <Button variant='filled'>등록</Button>
        </MuiStack>
        <MuiStack direction='row' justifyContent='space-between'>
          <MuiStack direction='row'>비공개</MuiStack>
          <Typography>{}/300</Typography>
        </MuiStack>
        <MuiStack
          direction='column'
          css={(theme: Theme) => ({ backgroundColor: theme.palette.secondary.n300 })}
        ></MuiStack>
      </MuiStack>
      {/* 지원하기 */}
      <MuiStack direction='column' css={{ position: 'fixed', left: '80%', marginTop: '0 !important' }} spacing='36px'>
        <Button variant='filled' onClick={() => {}} css={{ borderRadius: '999px', border: '2px solid #000' }}>
          지원하기
        </Button>
        <ProjectRole
          user={project.members.find((member) => member.type === 'leader')!}
          css={{ marginTop: '80px !important' }}
        />
        <Divider css={(theme: Theme) => ({ color: theme.palette.secondary.n300 })} />
        {project.members
          .filter((member) => member.type !== 'leader')
          .map((member) => (
            <ProjectRole key={member.id} user={member} />
          ))}
      </MuiStack>
    </MuiStack>
  );
}

export { ProjectDetailScreen };
