import { Input, TextArea, Typography, Slider, Section, Label, Button, SingleSelect } from '@elements';
import { Radio } from '@components';
import { IconButton, Stack } from '@mui/material';
import type { Theme } from '@libs/theme';
import * as yup from 'yup';
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object({
  purpose: yup.string().required(),
  title: yup.string().required(),
  description: yup.string().required(),
  period: yup.number().required(),
  compositions: yup.array().of(
    yup.object({
      job: yup.string().required(),
      number: yup.number().max(5).required(),
    })
  ),
});

const maxCompositionLength = 4;
const compositionOptions = [
  { label: '프론트엔드', value: 'front' },
  { label: '백엔드', value: 'back' },
  { label: '디자인', value: 'design' },
  { label: '기획', value: 'pm' },
];

function ProjectAddScreen() {
  // prop destruction
  // lib hooks
  // state, ref, querystring hooks
  // form hooks
  const {
    register,
    handleSubmit,
    getValues,
    control,
    watch,
    formState: { errors, dirtyFields, isValid },
  } = useForm<yup.InferType<typeof schema>>({
    mode: 'onChange',
    resolver: yupResolver(schema),
    defaultValues: {
      purpose: 'portfolio',
      title: '',
      description: '',
      period: 1,
      compositions: [{ job: '', number: 0 }],
    },
  });

  const {
    fields: compositions,
    remove: removeCompositions,
    append: appendCompositions,
  } = useFieldArray({
    control,
    name: 'compositions',
  });
  // query hooks
  // calculated values
  // effects
  // handlers
  return (
    <Section css={{ maxWidth: '896px', width: '100%' }}>
      <Stack direction='column' spacing={10}>
        <Typography variant='h3'>프로젝트 생성</Typography>
        <Stack direction='column' spacing={9}>
          <Controller
            control={control}
            name='purpose'
            render={({ field: { value, onChange } }) => (
              <Radio
                label='프로젝트 목적'
                required
                onChange={onChange}
                value={value}
                options={[
                  { label: '역량 강화/포트폴리오', value: 'portfolio' },
                  { label: '수입 창출/사업', value: 'business' },
                  { label: '재미', value: 'fun' },
                  { label: '스터디', value: 'study' },
                ]}
              />
            )}
          />
          <Input
            {...register('title')}
            defaultValue={getValues('title')}
            label='프로젝트 제목'
            required
            placeholder='인적 기술적 자원의 공유 커뮤니티'
          />
          <TextArea
            {...register('description')}
            css={{
              height: '288px',
              '&::placeholder': {
                fontSize: '16px',
                lineHeight: '32px',
              },
            }}
            defaultValue={getValues('description')}
            label='프로젝트 설명'
            required
            placeholder={`· 동기 및 타겟층 
  프로젝트를 기획한 배경을 작성해 주세요. 어떤 사용자를 타겟하고 있는지, 기획한 서비스만의 차별점 및 
  매력은 무엇인지 설명해주세요! 
· 진행 방식 
  회의와 모임 장소 및 주기, 협업 방식에 대해 설명해주세요. 
· 달성하고 싶은 목표 
  프로젝트를 통해 달성하고 싶은 목표와 마일스톤 및 일정이 있다면 설명해주세요. 팀원들과 함께 만들어가
  고 싶다면 해당 내용을 작성해주세요.`}
          />
          <Controller
            control={control}
            name='period'
            render={({ field: { value, onChange } }) => (
              <Slider
                label='에상 기간'
                required
                min={1}
                max={12}
                step={1}
                value={value}
                onChange={onChange}
                marks={[
                  { label: '1개월 이하', value: 1 },
                  { label: '2개월', value: 2 },
                  { label: '3개월', value: 3 },
                  { label: '4개월', value: 4 },
                  { label: '5개월', value: 5 },
                  { label: '6개월', value: 6 },
                  { label: '7개월', value: 7 },
                  { label: '8개월', value: 8 },
                  { label: '9개월', value: 9 },
                  { label: '10개월', value: 10 },
                  { label: '11개월', value: 11 },
                  { label: '1년', value: 12 },
                ]}
              />
            )}
          />
          <Stack direction='column' spacing={4}>
            <Stack direction='row' justifyContent='space-between' alignItems='center'>
              <Label css={{ marginBottom: 0 }} id='TeamCompositionSection' label='팀 구성' required />
              <Button
                css={{
                  fontWeight: 700,
                  fontSize: '16px',
                }}
                onClick={() => appendCompositions({ job: '', number: 0 })}
                disabled={maxCompositionLength <= compositions.length}
              >
                추가
              </Button>
            </Stack>
            <hr css={{ border: '1px solid #000' }} />
            <SingleSelect
              label='리더 직무 선택'
              css={{ width: '326px' }}
              options={[
                { label: '프론트엔드', value: 'front' },
                { label: '백엔드', value: 'back' },
                { label: '디자인', value: 'design' },
                { label: '기획', value: 'pm' },
              ]}
            />
            {compositions.map((composition, idx) => (
              <Stack key={composition.id} direction='row' justifyContent='space-between'>
                <Stack direction='row' spacing={4}>
                  <Controller
                    control={control}
                    name={`compositions.${idx}.job`}
                    render={({ field: { value, onChange } }) => (
                      <SingleSelect
                        css={{ width: '326px' }}
                        onChange={onChange}
                        label='직무 선택'
                        value={value}
                        options={compositionOptions}
                      />
                    )}
                  />
                  <Controller
                    control={control}
                    name={`compositions.${idx}.number`}
                    render={({ field: { value, onChange } }) => (
                      <SingleSelect
                        css={{ width: '326px' }}
                        label='인원 수'
                        value={value}
                        onChange={onChange}
                        options={[
                          { label: '1', value: 1 },
                          { label: '2', value: 2 },
                          { label: '3', value: 3 },
                          { label: '4', value: 4 },
                          { label: '5', value: 5 },
                        ]}
                      />
                    )}
                  />
                </Stack>
                {compositions.length !== 1 && <IconButton onClick={() => removeCompositions(idx)}>-</IconButton>}
              </Stack>
            ))}
          </Stack>
          {/* TODO: 기술스택 검색 컴포넌트 따로 만들어야될 것 같음. */}
          <Input variant='underline' placeholder='기술 스택 검색' />
        </Stack>
      </Stack>
      <Stack direction='row' spacing='16px' justifyContent='flex-end' css={{ marginTop: '60px' }}>
        <Button css={{ width: '98px', height: '48px' }}>임시 저장</Button>
        <Button
          variant='filled'
          onClick={() => {
            handleSubmit(({ title, description, period, purpose, compositions }) => {
              //TODO: api연결필요
            });
          }}
          css={{ width: '212px', height: '48px' }}
          // disabled={!isValid}
        >
          등록
        </Button>
      </Stack>
    </Section>
  );
}

export { ProjectAddScreen };
