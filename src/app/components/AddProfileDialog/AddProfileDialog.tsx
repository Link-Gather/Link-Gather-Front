import * as yup from 'yup';
import { Profile, Stack } from '@models';
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Dialog, DialogContent, DialogTitle, Stack as MuiStack, DialogActions, Grid, Tooltip } from '@mui/material';
import { SingleSelect, TextArea, UnderlineTitle, Input, Button, StackChip, ClickAway } from '@elements';
import CloseIcon from '@assets/images/icons/icon-close.svg';
import DeleteUrl from '@assets/images/icons/delete-url.svg';
import { useState } from 'react';
import { Theme } from '../../libs/theme';
import { SearchStackInput } from '../SearchStackInput';
import IconArrowDown from '@assets/images/icons/icon-arrow-down.svg';
import { useMutation } from '../../libs/query';
import { profileRepository } from '../../repositories';

const schema = yup.object({
  job: yup.mixed<JobType>().required(),
  career: yup.number().required(),
  stacks: yup.array().of(yup.mixed<Stack>().required(' ')).min(0).required(),
  urls: yup
    .array()
    .of(yup.object({ value: yup.string().url().required() }))
    .min(0),
  introduction: yup.string().required(' '),
});

const jobOptions = Profile.getJobOptions();
const careerOptions = Profile.getCareerOptions();

function AddProfileDialog(props: { onClose: () => void }) {
  // prop destruction
  const { onClose } = props;
  // lib hooks
  const {
    register,
    handleSubmit,
    getValues,
    control,
    formState: { isValid },
  } = useForm<yup.InferType<typeof schema>>({
    mode: 'onChange',
    resolver: yupResolver(schema),
    defaultValues: {
      stacks: [],
      urls: [],
      introduction: '',
    },
  });
  const { fields: urls, append: appendUrl, remove: removeUrl } = useFieldArray({ control, name: 'urls' });
  const {
    fields: stacks,
    remove: removeStack,
    append: appendStack,
  } = useFieldArray({
    control,
    name: 'stacks',
  });
  // state, ref hooks
  const [url, setUrl] = useState('');
  const [isExpand, setIsExpand] = useState(false);
  // query hooks
  const { mutateAsync: createProfile, isLoading } = useMutation(profileRepository.create);
  // calculated values
  // effects
  // handlers
  return (
    <Dialog open>
      <DialogTitle>
        <MuiStack direction='row' justifyContent='flex-end'>
          <CloseIcon onClick={onClose} css={{ width: '32px' }} />
        </MuiStack>
        <MuiStack direction='row' justifyContent='center'>
          <UnderlineTitle title='프로필 등록' css={{ marginTop: '-16px' }} />
        </MuiStack>
      </DialogTitle>
      <DialogContent>
        <MuiStack direction='column' spacing='24px' css={{ width: '456px', padding: '16px 32px 42px' }}>
          <MuiStack direction='row' spacing='12px' flex={1}>
            <Controller
              name='job'
              control={control}
              render={({ field: { onChange, value } }) => (
                <SingleSelect
                  label='직군'
                  placeholder='직무 선택'
                  required
                  value={value}
                  onChange={onChange}
                  options={jobOptions}
                  css={{ width: '180px', height: '34px' }}
                />
              )}
            />
            <Controller
              name='career'
              control={control}
              render={({ field: { onChange, value } }) => (
                <SingleSelect
                  label='경력'
                  placeholder='경력 선택'
                  required
                  value={value}
                  onChange={onChange}
                  options={careerOptions}
                  css={{ width: '136px', height: '34px' }}
                />
              )}
            />
          </MuiStack>
          <MuiStack direction='column' spacing='8px' css={{ width: '100%' }}>
            <Controller
              control={control}
              name='stacks'
              render={({ field: { value, onChange } }) => (
                <SearchStackInput
                  type='signup'
                  label='기술 스택'
                  required
                  value={value}
                  onAdd={appendStack}
                  onChange={onChange}
                />
              )}
            />
            {stacks.length <= 5 ? (
              <MuiStack direction='row' spacing='4px'>
                {stacks.map((stack, i) => (
                  <StackChip selected key={stack.id} length={1} name={stack.name} onClick={() => removeStack(i)} />
                ))}
              </MuiStack>
            ) : (
              <MuiStack direction='row' spacing='4px' css={{ position: 'relative' }}>
                {stacks.slice(0, 5).map((stack, i) => (
                  <StackChip selected key={stack.id} length={1} name={stack.name} onClick={() => removeStack(i)} />
                ))}
                <IconArrowDown
                  css={(theme: Theme) => [
                    { width: '24px', cursor: 'pointer' },
                    isExpand && {
                      transform: 'rotate(180deg)',
                      '& > path': { stroke: `${theme.palette.primary.main}` },
                    },
                  ]}
                  onClick={() => setIsExpand((prev) => !prev)}
                />
                {isExpand && (
                  <>
                    <ClickAway onClick={() => setIsExpand(false)} />
                    <Grid
                      container
                      css={(theme: Theme) => ({
                        border: `1px solid ${theme.palette.black.main}`,
                        borderRadius: '8px',
                        boxShadow: '4px 4px 0px #000',
                        position: 'absolute',
                        top: '100%',
                        marginLeft: '0 !important',
                        padding: '8px',
                        left: 0,
                        zIndex: 2,
                        backgroundColor: theme.palette.paper,
                      })}
                      rowSpacing='8px'
                      columnSpacing='4px'
                    >
                      {stacks.map((stack, i) => (
                        <Grid item key={stack.id}>
                          <Tooltip title={stack.name}>
                            <div>
                              <StackChip selected name={stack.name} length={1} onClick={() => removeStack(i)} />
                            </div>
                          </Tooltip>
                        </Grid>
                      ))}
                    </Grid>
                  </>
                )}
              </MuiStack>
            )}
          </MuiStack>
          <TextArea
            label='자기소개'
            required
            placeholder='자신을 소개하는 글을 써주세요!'
            {...register('introduction')}
            defaultValue={getValues('introduction')}
          />
          <MuiStack width='100%' direction='column' spacing='8px'>
            <Input
              variant='underline'
              label='참고 링크'
              type='text'
              placeholder='URL을 입력해주세요.'
              css={{ fontSize: '16px' }}
              onChange={(e) => setUrl(e.target.value)}
              value={url}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  if (url.slice(0, 9).includes('https://') || url.slice(0, 8).includes('http://')) {
                    appendUrl({ value: url });
                  } else {
                    appendUrl({ value: `https://${url}` });
                  }
                  setUrl('');
                }
              }}
            />
            <MuiStack direction='column' spacing='4px'>
              {urls.map((url, i) => (
                <MuiStack key={url.value} direction='row'>
                  <a
                    href={url.value}
                    css={(theme: Theme) => ({
                      color: theme.palette.primary.main,
                      cursor: 'pointer',
                    })}
                    target='_blank'
                    rel='noreferrer'
                  >
                    {url.value}
                  </a>
                  <DeleteUrl css={{ width: '20px', cursor: 'pointer' }} onClick={() => removeUrl(i)} />
                </MuiStack>
              ))}
            </MuiStack>
          </MuiStack>
        </MuiStack>
      </DialogContent>
      <DialogActions>
        <Button
          disabled={!isValid}
          variant='filled'
          loading={isLoading}
          css={{ margin: '0 64px', width: '100%', height: '48px', borderRadius: '32px' }}
          onClick={handleSubmit(async ({ job, career, stacks, introduction, urls }) => {
            await createProfile({
              job,
              career,
              stacks: stacks.map((stack) => stack.id),
              introduction,
              urls: urls?.map((url) => url.value),
            });
          })}
        >
          프로필 등록
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export { AddProfileDialog };
