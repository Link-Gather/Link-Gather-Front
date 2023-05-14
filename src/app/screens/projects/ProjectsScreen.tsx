import palette from '@libs/theme/palettes/default';
import { Box, Stack } from '@mui/material';
import { ProjectCard } from './ProjectCard';

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

const filterList = [
  {
    placeHolder: '프로젝트 목적',
    options: ['역량 강화/포트폴리오', '수익 창출/사업', '재미', '스터디'],
  },
  {
    placeHolder: '직무',
    options: ['프론트엔드 개발', '백엔드 개발', '디자인', '기획'],
  },
  {
    placeHolder: '진행상태',
    options: ['모집 중', '진행 중', '추가 모집 중', '완료'],
  },
];

const sortingOptions = ['최신순', '인기순', '오래된 순'];

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

function ProjectsScreen() {
  return (
    // TODO: project list api 뚫리면 corsor 기반 무한스크롤 적용
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
        <Stack
          width={'100%'}
          direction={'row'}
          justifyContent={'space-between'}
          alignItems={'center'}
          marginBottom={'48px'}
        >
          <Stack direction={'row'} spacing={'24px'}>
            {/* 개발된 내용이 있는 것으로 알아서 힘들이지 않고 이대로 둡니다. */}
            <input style={{ width: '100%' }} placeholder={'기술 스택 검색'} />
            {filterList.map((filter) => {
              return (
                <select>
                  <option value='' selected>
                    {filter.placeHolder}
                  </option>
                  {filter.options.map((option) => {
                    return <option>{option}</option>;
                  })}
                </select>
              );
            })}
          </Stack>
          <Stack direction={'row'} alignItems={'center'}>
            <select>
              {sortingOptions.map((option) => {
                return <option defaultChecked={option === '최신순' ? true : false}>{option}</option>;
              })}
            </select>
          </Stack>
        </Stack>
        <Box
          display={'grid'}
          gridTemplateColumns={{ xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }}
          columnGap={'16px'}
          rowGap={'48px'}
        >
          {projectList.map((projectInfo, projectIdx) => {
            return <ProjectCard projectInfo={projectInfo} projectIdx={projectIdx} />;
          })}
        </Box>
      </Stack>
    </Stack>
  );
}

export { ProjectsScreen };
