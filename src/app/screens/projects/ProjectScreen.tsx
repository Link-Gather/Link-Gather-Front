import { Grid, Stack } from '@mui/material';
import { ProjectCard } from '../../components/ProjectCard/ProjectCard';
import { SingleSelect, Pagination } from '@elements';
import { CSSProperties, useState } from 'react';
import { Project, Role } from '@models';
import HeartIcon from '@assets/images/icons/icon-heart.svg';
import OrderOldIcon from '@assets/images/icons/icon-order-old.svg';
import OrderNewIcon from '@assets/images/icons/icon-recent.svg';
import { Theme } from '@libs/theme';
import { S3_IMAGE_BUCKET } from '../../configs';

const projectList: Project[] = [
  {
    id: '123',
    title: '제목',
    description: 'asdfasdf',
    period: 3,
    stacks: [1, 2, 3, 4],
    purpose: 'improvement',
    status: 'Recruiting',
    leaderJob: 'backendDeveloper',
    recruitMember: {
      frontendDeveloper: 5,
      backendDeveloper: 5,
      designer: 5,
      productManager: 5,
    },
    bookMarkCount: 1,
    members: [
      {
        id: '123',
        email: 'asdf@asdf.com',
        nickname: 'asdf',
        job: 'backendDeveloper',
        profileImage: `${S3_IMAGE_BUCKET}/arthur.svg`,
        provider: 'link-gather',
        type: 'leader',
      },
      {
        id: '1234',
        email: 'asdfg@asdf.com',
        nickname: 'asdfg',
        job: 'backendDeveloper',
        profileImage: `${S3_IMAGE_BUCKET}/duhong.svg`,
        provider: 'link-gather',
        type: 'member',
      },
      {
        id: '12345',
        email: 'asdfg@asdf.com',
        nickname: 'asdfg',
        job: 'backendDeveloper',
        profileImage: `${S3_IMAGE_BUCKET}/duhong.svg`,
        provider: 'link-gather',
        type: 'member',
      },
      {
        id: '12346',
        email: 'asdfg@asdf.com',
        nickname: 'asdfg',
        job: 'frontendDeveloper',
        profileImage: `${S3_IMAGE_BUCKET}/duhong.svg`,
        provider: 'link-gather',
        type: 'member',
      },
      {
        id: '12347',
        email: 'asdfg@asdf.com',
        nickname: 'asdfg',
        job: 'frontendDeveloper',
        profileImage: `${S3_IMAGE_BUCKET}/duhong.svg`,
        provider: 'link-gather',
        type: 'member',
      },
    ],
  },
  {
    id: '1238',
    title: '제목',
    description: 'asdfasdf',
    period: 3,
    stacks: [1, 2, 3, 4],
    purpose: 'fun',
    status: 'Recruiting',
    leaderJob: 'backendDeveloper',
    recruitMember: {
      frontendDeveloper: 5,
      backendDeveloper: 5,
      designer: 5,
      productManager: 5,
    },
    bookMarkCount: 5,
    members: [
      {
        id: '1231',
        email: 'asdf@asdf.com',
        nickname: 'asdf',
        job: 'designer',
        profileImage: `${S3_IMAGE_BUCKET}/arthur.svg`,
        provider: 'link-gather',
        type: 'leader',
      },
      {
        id: '12344',
        email: 'asdfg@asdf.com',
        nickname: 'asdfg',
        job: 'designer',
        profileImage: `${S3_IMAGE_BUCKET}/duhong.svg`,
        provider: 'link-gather',
        type: 'member',
      },
      {
        id: '1234123',
        email: 'asdfg@asdf.com',
        nickname: 'asdfg',
        job: 'productManager',
        profileImage: `${S3_IMAGE_BUCKET}/duhong.svg`,
        provider: 'link-gather',
        type: 'member',
      },
      {
        id: '123423',
        email: 'asdfg@asdf.com',
        nickname: 'asdfg',
        job: 'backendDeveloper',
        profileImage: `${S3_IMAGE_BUCKET}/duhong.svg`,
        provider: 'link-gather',
        type: 'member',
      },
      {
        id: '1234325',
        email: 'asdfg@asdf.com',
        nickname: 'asdfg',
        job: 'productManager',
        profileImage: `${S3_IMAGE_BUCKET}/duhong.svg`,
        provider: 'link-gather',
        type: 'member',
      },
    ],
  },
  {
    id: '123',
    title: '제목',
    description: 'asdfasdf',
    period: 3,
    stacks: [1, 2, 3, 4],
    purpose: 'study',
    status: 'Recruiting',
    leaderJob: 'backendDeveloper',
    recruitMember: {
      frontendDeveloper: 5,
      backendDeveloper: 5,
      designer: 5,
      productManager: 5,
    },
    bookMarkCount: 6,
    members: [
      {
        id: '123642',
        email: 'asdf@asdf.com',
        nickname: 'asdf',
        job: 'backendDeveloper',
        profileImage: `${S3_IMAGE_BUCKET}/arthur.svg`,
        provider: 'link-gather',
        type: 'leader',
      },
      {
        id: '123472',
        email: 'asdfg@asdf.com',
        nickname: 'asdfg',
        job: 'backendDeveloper',
        profileImage: `${S3_IMAGE_BUCKET}/duhong.svg`,
        provider: 'link-gather',
        type: 'member',
      },
      {
        id: '1234275',
        email: 'asdfg@asdf.com',
        nickname: 'asdfg',
        job: 'backendDeveloper',
        profileImage: `${S3_IMAGE_BUCKET}/duhong.svg`,
        provider: 'link-gather',
        type: 'member',
      },
      {
        id: '1234725',
        email: 'asdfg@asdf.com',
        nickname: 'asdfg',
        job: 'backendDeveloper',
        profileImage: `${S3_IMAGE_BUCKET}/duhong.svg`,
        provider: 'link-gather',
        type: 'member',
      },
      {
        id: '1234625',
        email: 'asdfg@asdf.com',
        nickname: 'asdfg',
        job: 'productManager',
        profileImage: `${S3_IMAGE_BUCKET}/duhong.svg`,
        provider: 'link-gather',
        type: 'member',
      },
    ],
  },
  {
    id: '123',
    title: '제목',
    description: 'asdfasdf',
    period: 3,
    stacks: [1, 2, 3, 4],
    purpose: 'business',
    status: 'Finish',
    leaderJob: 'backendDeveloper',
    recruitMember: {
      frontendDeveloper: 5,
      backendDeveloper: 5,
      designer: 5,
      productManager: 5,
    },
    bookMarkCount: 1,
    members: [
      {
        id: '123',
        email: 'asdf@asdf.com',
        nickname: 'asdf',
        job: 'backendDeveloper',
        profileImage: `${S3_IMAGE_BUCKET}/arthur.svg`,
        provider: 'link-gather',
        type: 'leader',
      },
      {
        id: '1234',
        email: 'asdfg@asdf.com',
        nickname: 'asdfg',
        job: 'backendDeveloper',
        profileImage: `${S3_IMAGE_BUCKET}/duhong.svg`,
        provider: 'link-gather',
        type: 'member',
      },
      {
        id: '1234',
        email: 'asdfg@asdf.com',
        nickname: 'asdfg',
        job: 'backendDeveloper',
        profileImage: `${S3_IMAGE_BUCKET}/duhong.svg`,
        provider: 'link-gather',
        type: 'member',
      },
      {
        id: '1234',
        email: 'asdfg@asdf.com',
        nickname: 'asdfg',
        job: 'backendDeveloper',
        profileImage: `${S3_IMAGE_BUCKET}/duhong.svg`,
        provider: 'link-gather',
        type: 'member',
      },
      {
        id: '1234',
        email: 'asdfg@asdf.com',
        nickname: 'asdfg',
        job: 'backendDeveloper',
        profileImage: `${S3_IMAGE_BUCKET}/duhong.svg`,
        provider: 'link-gather',
        type: 'member',
      },
    ],
  },
  {
    id: '123',
    title: '제목',
    description: 'asdfasdf',
    period: 3,
    stacks: [1, 2, 3, 4],
    purpose: 'business',
    status: 'Progressing',
    leaderJob: 'backendDeveloper',
    recruitMember: {
      frontendDeveloper: 5,
      backendDeveloper: 5,
      designer: 5,
      productManager: 5,
    },
    bookMarkCount: 1,
    members: [
      {
        id: '123',
        email: 'asdf@asdf.com',
        nickname: 'asdf',
        job: 'backendDeveloper',
        profileImage: `${S3_IMAGE_BUCKET}/arthur.svg`,
        provider: 'link-gather',
        type: 'leader',
      },
      {
        id: '1234',
        email: 'asdfg@asdf.com',
        nickname: 'asdfg',
        job: 'backendDeveloper',
        profileImage: `${S3_IMAGE_BUCKET}/duhong.svg`,
        provider: 'link-gather',
        type: 'member',
      },
      {
        id: '1234',
        email: 'asdfg@asdf.com',
        nickname: 'asdfg',
        job: 'backendDeveloper',
        profileImage: `${S3_IMAGE_BUCKET}/duhong.svg`,
        provider: 'link-gather',
        type: 'member',
      },
      {
        id: '1234',
        email: 'asdfg@asdf.com',
        nickname: 'asdfg',
        job: 'backendDeveloper',
        profileImage: `${S3_IMAGE_BUCKET}/duhong.svg`,
        provider: 'link-gather',
        type: 'member',
      },
      {
        id: '1234',
        email: 'asdfg@asdf.com',
        nickname: 'asdfg',
        job: 'backendDeveloper',
        profileImage: `${S3_IMAGE_BUCKET}/duhong.svg`,
        provider: 'link-gather',
        type: 'member',
      },
    ],
  },
];

const purposeOptions = [{ label: '전체', value: '' }, ...Project.getPurposeOptions()];
const jobOptions = [{ label: '전체', value: '' }, ...Role.getJobOptions()];
const statusOptions = [{ label: '전체', value: '' }, ...Project.getStatusOptions()];

function ProjectScreen(props: {}) {
  // prop destruction
  // lib hooks
  // state, ref hooks
  const [page, setPage] = useState(1);
  const [filterModel, setFilterModel] = useState<{
    purpose: PurposeType | '';
    status: ProjectStatus | '';
    job: JobType | '';
  }>({
    purpose: '',
    status: '',
    job: '',
  });
  const [order, setOrder] = useState<'recent' | 'hot' | 'old'>('recent');
  // query hooks
  // calculated values
  // effects
  // handlers
  return (
    <Stack
      width={'100%'}
      direction={'row'}
      justifyContent={'center'}
      css={(theme: Theme) => ({
        backgroundColor: `${theme.palette.secondary.n20}`,
        padding: '82px 0',
        minHeight: '100vh',
      })}
    >
      <Stack
        width={'100%'}
        direction={'column'}
        css={{
          maxWidth: '1352px',
        }}
      >
        <Stack width='100%' direction='row' justifyContent='space-between' alignItems='center' marginBottom='48px'>
          <Stack direction='row' spacing='16px'>
            {/* TODO:변경 필요 */}
            <input style={{ width: '100%' }} placeholder={'기술 스택 검색'} />
            <SingleSelect
              css={{ width: '166px', backgroundColor: '#fff' }}
              placeholder='프로젝트 목적'
              options={purposeOptions}
              value={filterModel.purpose}
              onChange={(value) => setFilterModel((prev) => ({ ...prev, purpose: value as PurposeType | '' }))}
            />
            <SingleSelect
              css={{ width: '166px', backgroundColor: '#fff' }}
              placeholder='직무'
              options={jobOptions}
              value={filterModel.purpose}
              onChange={(value) => setFilterModel((prev) => ({ ...prev, purpose: value as PurposeType | '' }))}
            />
            <SingleSelect
              css={{ width: '166px', backgroundColor: '#fff' }}
              placeholder='진행상태'
              options={statusOptions}
              value={filterModel.purpose}
              onChange={(value) => setFilterModel((prev) => ({ ...prev, purpose: value as PurposeType | '' }))}
            />
          </Stack>
          <Stack direction={'row'} alignItems={'center'}>
            <SingleSelect
              variant='text'
              css={{ width: '90px' }}
              options={[
                //HACK: hover는 타입에러가 난다. svg 구조가 지멋대로라 일일이 하드코딩해줘야한다...
                {
                  label: '최신순',
                  value: 'recent',
                  Icon: <OrderNewIcon css={{ width: '20px' }} />,
                  style: {
                    '&:hover': {
                      color: '#5555FF',
                      '& > svg > g > path': { fill: '#5555FF' },
                    },
                  } as CSSProperties,
                },
                {
                  label: '인기순',
                  value: 'hot',
                  style: {
                    '&:hover': {
                      color: '#FF2626',
                      '& > svg > path': { stroke: '#FF2626' },
                    },
                  } as CSSProperties,
                  Icon: <HeartIcon css={{ width: '20px' }} />,
                },
                {
                  label: '오래된 순',
                  value: 'old',
                  style: {
                    '&:hover': {
                      color: '#8993A3',
                      '& > svg > g > path': { fill: '#8993A3' },
                    },
                  } as CSSProperties,
                  Icon: <OrderOldIcon css={{ width: '20px' }} />,
                },
              ]}
              value={order}
              onChange={(value) => setOrder(value)}
            />
          </Stack>
        </Stack>
        <Grid container columnSpacing={'16px'} rowSpacing={'48px'}>
          {projectList.map((project) => {
            return (
              <Grid item xs={12} sm={6} lg={4} xl={3}>
                <ProjectCard project={project} />
              </Grid>
            );
          })}
        </Grid>
        <Pagination
          page={page}
          //FIXME:
          count={200}
          onChange={setPage}
        />
      </Stack>
    </Stack>
  );
}

export { ProjectScreen };
