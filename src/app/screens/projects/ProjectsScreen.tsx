import { CircularProgress, Grid, Stack as MuiStack } from '@mui/material';
import { SingleSelect, Pagination, StackChip } from '@elements';
import { CSSProperties, useState } from 'react';
import { Project, Role, Stack } from '@models';
import HeartIcon from '@assets/images/icons/icon-heart.svg';
import OrderOldIcon from '@assets/images/icons/icon-order-old.svg';
import OrderNewIcon from '@assets/images/icons/icon-recent.svg';
import { Theme } from '@libs/theme';
import { SearchStackInput, ProjectCard } from '@components';
import { projectRepository } from '../../repositories/project-repository';
import { useQuery } from '../../libs/query';

const purposeOptions = [{ label: '전체', value: '' }, ...Project.getPurposeOptions()];
const jobOptions = [{ label: '전체', value: '' }, ...Role.getJobOptions()];
const statusOptions = [{ label: '전체', value: '' }, ...Project.getStatusOptions()];

function ProjectsScreen(props: {}) {
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
  const [order, setOrder] = useState<'latest' | 'popularity' | 'oldest'>('latest');
  const [selectedStacks, setSelectedStacks] = useState<Stack[]>([]);
  // query hooks
  const { data, isLoading } = useQuery(projectRepository.list, {
    variables: {
      ...Object.fromEntries(Object.entries(filterModel).filter(([_, value]) => value !== '')),
      order,
      stacks: selectedStacks.map(({ id }) => id),
      page,
      limit: 8,
    },
  });
  // calculated values
  // effects
  // handlers
  return (
    <MuiStack
      width={'100%'}
      direction={'row'}
      justifyContent={'center'}
      css={(theme: Theme) => ({
        backgroundColor: theme.palette.secondary.n20,
        padding: '80px 0',
        minHeight: '100vh',
      })}
    >
      {isLoading ? (
        <CircularProgress />
      ) : (
        <MuiStack
          width={'100%'}
          direction={'column'}
          css={{
            maxWidth: '1352px',
          }}
        >
          <MuiStack direction='column'>
            <MuiStack direction='column' spacing='8px' css={{ marginBottom: selectedStacks.length ? '18px' : '40px' }}>
              <MuiStack width='100%' direction='row' justifyContent='space-between' alignItems='center'>
                <MuiStack direction='row' spacing='16px'>
                  {/* TODO: 회원가입 머지 후 확인 필요 */}
                  <SearchStackInput
                    disabled={selectedStacks.length >= 6}
                    placeholder={selectedStacks.length >= 6 ? '기술 스택은 최대 6개까지 가능합니다.' : undefined}
                    css={{ width: '362px' }}
                    type='signup'
                    onAdd={(stack) => setSelectedStacks((prev) => [...prev, stack])}
                  />
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
                </MuiStack>
                <MuiStack direction={'row'} alignItems={'center'}>
                  <SingleSelect
                    variant='text'
                    css={{ width: '90px' }}
                    options={[
                      //HACK: hover는 타입에러가 난다. svg 구조가 지멋대로라 일일이 하드코딩해줘야한다...
                      {
                        label: '최신순',
                        value: 'latest',
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
                        value: 'popularity',
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
                        value: 'oldest',
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
                </MuiStack>
              </MuiStack>
              <MuiStack direction='row' spacing='4px'>
                {selectedStacks.map((stack) => (
                  <StackChip
                    key={stack.id}
                    selected
                    name={stack.name}
                    length={Stack.getLength(stack.name)}
                    onClick={() => setSelectedStacks((prev) => prev.filter(({ id }) => id !== stack.id))}
                  />
                ))}
              </MuiStack>
            </MuiStack>
            <Grid container columnSpacing={'16px'} rowSpacing={'48px'}>
              {data?.data.map((project) => {
                return (
                  <Grid key={project.id} item xs={12} sm={6} lg={3}>
                    <ProjectCard project={project} />
                  </Grid>
                );
              })}
            </Grid>
            <Pagination css={{ marginTop: '80px' }} page={page} count={data?.count} onChange={setPage} />
          </MuiStack>
        </MuiStack>
      )}
    </MuiStack>
  );
}

export { ProjectsScreen };
