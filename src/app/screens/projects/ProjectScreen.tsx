import palette from '@libs/theme/palettes/default';
import { Grid, Stack } from '@mui/material';
import { ProjectCard } from '../../components/ProjectCard/ProjectCard';
import { SingleSelect } from '@elements';
import { CSSProperties, useState } from 'react';
import { Project } from '../../models';
import HeartIcon from '@assets/images/icons/icon-heart.svg';
import OrderOldIcon from '@assets/images/icons/icon-order-old.svg';
import OrderNewIcon from '@assets/images/icons/icon-recent.svg';

// TODO: 실데이터로 교체필요 - 목데이터 일단 여따 둡니다
export type ProjectListType = {
  title: string;
  purpose: string;
  status: string;
  likes: number;
  expectedPeriod: string;
  members: { label: string; target: number; capacity: number }[];
  technology: string[];
};

const projectList = [
  {
    title: '인적, 기술적 자원의 공유 커뮤니티',
    purpose: '수익 창출/창업',
    status: '모집 중',
    likes: 3,
    expectedPeriod: '3개월',
    members: [
      { label: '프론트엔드', target: 4, capacity: 5 },
      { label: '백엔드', target: 2, capacity: 2 },
      { label: '기획', target: 1, capacity: 2 },
      { label: '디자인', target: 1, capacity: 2 },
    ],
    technology: [
      'Javascript',
      'Typescript',
      'React',
      'Next',
      'Nest',
      'Redux',
      'Ethan',
      'Auther',
      'Sarah',
      'Windy',
      'Lui',
      'Liz',
      'Javascript',
      'Typescript',
      'React',
      'Next',
      'Nest',
      'Redux',
      'Ethan',
      'Auther',
      'Sarah',
      'Windy',
      'Lui',
      'Liz',
    ],
  },
  {
    title: '인적, 기술적 자원의 공유 커뮤니티 입니다아아아ㅏㅏ',
    purpose: '스터디',
    status: '진행 중',
    likes: 3,
    expectedPeriod: '3개월',
    members: [
      { label: '프론트엔드', target: 5, capacity: 5 },
      { label: '백엔드', target: 4, capacity: 5 },
      { label: '기획', target: 1, capacity: 2 },
      { label: '디자인', target: 1, capacity: 2 },
    ],
    technology: ['Javascript'],
  },
  {
    title: '인적, 기술적 자원의 공유 커뮤니티',
    purpose: '역량강화/포트폴리오',
    status: '추가 모집 중',
    likes: 3,
    expectedPeriod: '3개월',
    members: [
      { label: '프론트엔드', target: 2, capacity: 5 },
      { label: '백엔드', target: 2, capacity: 2 },
      { label: '기획', target: 1, capacity: 2 },
      { label: '디자인', target: 1, capacity: 2 },
    ],
    technology: ['Javascript', 'Typescript', 'React', 'Next'],
  },
  {
    title: '인적, 기술적 자원의 공유 커뮤니티',
    purpose: '수익 창출/창업',
    status: '완료',
    likes: 3,
    expectedPeriod: '3개월',
    members: [
      { label: '프론트엔드', target: 1, capacity: 5 },
      { label: '백엔드', target: 2, capacity: 2 },
      { label: '기획', target: 1, capacity: 2 },
      { label: '디자인', target: 1, capacity: 2 },
    ],
    technology: ['Javascript', 'Typescript', 'React', 'Next', 'Nest', 'Redux'],
  },
  {
    title: '인적, 기술적 자원의 공유 커뮤니티',
    purpose: '재미',
    status: '모집 중',
    likes: 3,
    expectedPeriod: '3개월',
    members: [
      { label: '프론트엔드', target: 0, capacity: 5 },
      { label: '백엔드', target: 2, capacity: 2 },
      { label: '기획', target: 1, capacity: 2 },
      { label: '디자인', target: 1, capacity: 2 },
    ],
    technology: ['Javascript', 'Typescript', 'React', 'Next', 'Nest', 'Redux'],
  },
  {
    title: '인적, 기술적 자원의 공유 커뮤니티',
    purpose: '수익 창출/창업',
    status: '모집 중',
    likes: 3,
    expectedPeriod: '3개월',
    members: [
      { label: '프론트엔드', target: 3, capacity: 5 },
      { label: '백엔드', target: 2, capacity: 2 },
      { label: '기획', target: 1, capacity: 2 },
      { label: '디자인', target: 1, capacity: 2 },
    ],
    technology: ['Javascript', 'Typescript', 'React', 'Next', 'Nest', 'Redux'],
  },
  {
    title: '인적, 기술적 자원의 공유 커뮤니티',
    purpose: '수익 창출/창업',
    status: '모집 중',
    likes: 3,
    expectedPeriod: '3개월',
    members: [
      { label: '프론트엔드', target: 3, capacity: 5 },
      { label: '백엔드', target: 2, capacity: 2 },
      { label: '기획', target: 1, capacity: 2 },
      { label: '디자인', target: 1, capacity: 2 },
    ],
    technology: ['Javascript', 'Typescript', 'React', 'Next', 'Nest', 'Redux'],
  },
  {
    title: '인적, 기술적 자원의 공유 커뮤니티',
    purpose: '수익 창출/창업',
    status: '모집 중',
    likes: 3,
    expectedPeriod: '3개월',
    members: [
      { label: '프론트엔드', target: 3, capacity: 5 },
      { label: '백엔드', target: 2, capacity: 2 },
      { label: '기획', target: 1, capacity: 2 },
      { label: '디자인', target: 1, capacity: 2 },
    ],
    technology: ['Javascript', 'Typescript', 'React', 'Next', 'Nest', 'Redux'],
  },
  {
    title: '인적, 기술적 자원의 공유 커뮤니티',
    purpose: '수익 창출/창업',
    status: '모집 중',
    likes: 3,
    expectedPeriod: '3개월',
    members: [
      { label: '프론트엔드', target: 3, capacity: 5 },
      { label: '백엔드', target: 2, capacity: 2 },
      { label: '기획', target: 1, capacity: 2 },
      { label: '디자인', target: 1, capacity: 2 },
    ],
    technology: ['Javascript', 'Typescript', 'React', 'Next', 'Nest', 'Redux'],
  },
  {
    title: '인적, 기술적 자원의 공유 커뮤니티',
    purpose: '수익 창출/창업',
    status: '모집 중',
    likes: 3,
    expectedPeriod: '3개월',
    members: [
      { label: '프론트엔드', target: 3, capacity: 5 },
      { label: '백엔드', target: 2, capacity: 2 },
      { label: '기획', target: 1, capacity: 2 },
      { label: '디자인', target: 1, capacity: 2 },
    ],
    technology: ['Javascript', 'Typescript', 'React', 'Next', 'Nest', 'Redux'],
  },
  {
    title: '인적, 기술적 자원의 공유 커뮤니티',
    purpose: '수익 창출/창업',
    status: '모집 중',
    likes: 3,
    expectedPeriod: '3개월',
    members: [
      { label: '프론트엔드', target: 3, capacity: 5 },
      { label: '백엔드', target: 2, capacity: 2 },
      { label: '기획', target: 1, capacity: 2 },
      { label: '디자인', target: 1, capacity: 2 },
    ],
    technology: ['Javascript', 'Typescript', 'React', 'Next', 'Nest', 'Redux'],
  },
  {
    title: '인적, 기술적 자원의 공유 커뮤니티',
    purpose: '수익 창출/창업',
    status: '모집 중',
    likes: 3,
    expectedPeriod: '3개월',
    members: [
      { label: '프론트엔드', target: 3, capacity: 5 },
      { label: '백엔드', target: 2, capacity: 2 },
      { label: '기획', target: 1, capacity: 2 },
      { label: '디자인', target: 1, capacity: 2 },
    ],
    technology: ['Javascript', 'Typescript', 'React', 'Next', 'Nest', 'Redux'],
  },
  {
    title: '인적, 기술적 자원의 공유 커뮤니티',
    purpose: '수익 창출/창업',
    status: '모집 중',
    likes: 3,
    expectedPeriod: '3개월',
    members: [
      { label: '프론트엔드', target: 3, capacity: 5 },
      { label: '백엔드', target: 2, capacity: 2 },
      { label: '기획', target: 1, capacity: 2 },
      { label: '디자인', target: 1, capacity: 2 },
    ],
    technology: ['Javascript', 'Typescript', 'React', 'Next', 'Nest', 'Redux'],
  },
  {
    title: '인적, 기술적 자원의 공유 커뮤니티',
    purpose: '수익 창출/창업',
    status: '모집 중',
    likes: 3,
    expectedPeriod: '3개월',
    members: [
      { label: '프론트엔드', target: 3, capacity: 5 },
      { label: '백엔드', target: 2, capacity: 2 },
      { label: '기획', target: 1, capacity: 2 },
      { label: '디자인', target: 1, capacity: 2 },
    ],
    technology: ['Javascript', 'Typescript', 'React', 'Next', 'Nest', 'Redux'],
  },
];

const purposeOptions = Project.getPurposeOptions();

function ProjectScreen(props: {}) {
  // prop destruction
  // lib hooks
  // state, ref hooks
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
      css={{
        backgroundColor: `${palette.secondary.n20}`,
        padding: '82px 0',
        minHeight: '100vh',
      }}
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
              options={[
                { label: '전체', value: '' },
                { label: '역량 강화/포트폴리오', value: 'Improvement' },
                { label: '수익 창출/사업', value: 'Business' },
                { label: '재미', value: 'Fun' },
                { label: '스터디', value: 'Study' },
              ]}
              value={filterModel.purpose}
              onChange={(value) => setFilterModel((prev) => ({ ...prev, purpose: value as PurposeType | '' }))}
            />
            <SingleSelect
              css={{ width: '166px', backgroundColor: '#fff' }}
              placeholder='직무'
              options={[{ label: '전체', value: '' }, ...purposeOptions]}
              value={filterModel.purpose}
              onChange={(value) => setFilterModel((prev) => ({ ...prev, purpose: value as PurposeType | '' }))}
            />
            <SingleSelect
              css={{ width: '166px', backgroundColor: '#fff' }}
              placeholder='진행상태'
              options={[
                { label: '전체', value: '' },
                { label: '프론트엔드 개발', value: 'Back' },
                { label: '백엔드 개발', value: 'Business' },
                { label: '디자인', value: 'Fun' },
                { label: '기획', value: 'Study' },
              ]}
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
          {projectList.map((projectInfo, projectIdx) => {
            return (
              <Grid item xs={12} sm={6} lg={4} xl={3}>
                <ProjectCard projectInfo={projectInfo} projectIdx={projectIdx} />
              </Grid>
            );
          })}
        </Grid>
      </Stack>
    </Stack>
  );
}

export { ProjectScreen };
