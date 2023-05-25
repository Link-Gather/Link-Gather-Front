import { useState, KeyboardEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import BackgroundAstronaut1 from '@assets/images/backgrounds/signup/background-astronaut1.svg';
import BackgroundPlanet1 from '@assets/images/backgrounds/signup/background-planet1.svg';
import BackgroundPlanet2 from '@assets/images/backgrounds/signup/background-planet2.svg';
import { mq, type Theme } from '@libs/theme';
import { Grid, Stack as MuiStack, Tooltip } from '@mui/material';
import * as yup from 'yup';
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { SearchStackInput } from '@components';
import { UnderlineTitle, Input, ShadowBox, TextArea, Button, StackChip, SingleSelect, ClickAway } from '@elements';
import { SCHEMA_PASSWORD, SCHEMA_NICKNAME, SCHEMA_CONFIRM_PASSWORD, SCHEMA_EMAIL } from '@libs/schema';
import styled from '@emotion/styled';
import DeleteUrl from '@assets/images/icons/delete-url.svg';
import IconArrowLeft from '@assets/images/icons/icon-arrow-left.svg';
import IconPasswordShow from '@assets/images/icons/icon-password-show.svg';
import IconPasswordHide from '@assets/images/icons/icon-password-hide.svg';
import Character1 from '@assets/images/icons/character/character1.svg';
import Character2 from '@assets/images/icons/character/character2.svg';
import Character3 from '@assets/images/icons/character/character3.svg';
import Character4 from '@assets/images/icons/character/character4.svg';
import Character5 from '@assets/images/icons/character/character5.svg';
import Character6 from '@assets/images/icons/character/character6.svg';
import Character7 from '@assets/images/icons/character/character7.svg';
import Character8 from '@assets/images/icons/character/character8.svg';
import { Stack } from '@models';
import IconArrowDown from '@assets/images/icons/icon-arrow-down.svg';

export const characters = [
  {
    id: 1,
    src: Character1,
    backgroundColor: '#F4F75F',
    width: '50%',
    height: '100%',
    marginTop: '0',
  },
  {
    id: 2,
    src: Character2,
    backgroundColor: '#F75F5F',
    width: '60%',
    height: '100%',
    marginTop: '15px',
  },
  {
    id: 3,
    src: Character3,
    backgroundColor: '#74F75F',
    width: '80%',
    height: '100%',
    marginTop: '15px',
  },
  {
    id: 4,
    src: Character4,
    backgroundColor: '#F7D65F',
    width: '75%',
    height: '100%',
    marginTop: '15px',
  },
  {
    id: 5,
    src: Character5,
    backgroundColor: '#5FA5F7',
    width: '90%',
    height: '100%',
    marginTop: '15px',
  },
  {
    id: 6,
    src: Character6,
    backgroundColor: '#BD5FF7',
    width: '50%',
    height: '100%',
    marginTop: '10px',
  },
  {
    id: 7,
    src: Character7,
    backgroundColor: '#F75FA8',
    width: '50%',
    height: '100%',
    marginTop: '10px',
  },
  {
    id: 8,
    src: Character8,
    backgroundColor: '#5555FF',
    width: '50%',
    height: '100%',
    marginTop: '5px',
  },
];

type ValidationType = {
  email: string;
  code: string;
  password: string;
  confirmPassword: string;
  nickname: string;
  searchSkill: string;
  enterUrl: string;
  job: string;
  career: number;
  stacks: Stack[];
  urls: { value: string }[];
  introduction: string;
  profileImage: string;
};

type CharacterType = {
  id: number;
  src: string;
  backgroundColor: string;
  width: string;
  height: string;
  marginTop: string;
};

const RequestButton = styled('button')(
  {
    width: '94px',
    height: '50px',
    fontSize: '14px',
    fontWeight: '800',
    borderRadius: '8px',
    padding: '15px',
    fontFamily: 'Montserrat',
  },
  ({ disabled, theme }) => ({
    border: `2px solid ${theme.palette.secondary.n60}`,
    color: !disabled ? theme.palette.secondary.n300 : theme.palette.secondary.n60,
    backgroundColor: theme.palette.contrastText,
    cursor: !disabled ? 'pointer' : undefined,
    ':hover': {
      border: !disabled ? `2px solid ${theme.palette.secondary.n300}` : undefined,
    },
  })
);

const SignupButton = styled(Button)(
  {
    borderRadius: '32px',
    width: '320px',
    height: '48px',
    fontSize: '20px',
    fontWeight: '600',
    letterSpacing: '0.6px',
    color: '#fff',
  },
  ({ disabled, theme }) => ({
    backgroundColor: disabled ? theme.palette.secondary.n40 : theme.palette.primary.main,
    cursor: disabled ? 'default' : 'pointer',
  })
);

const jobs = [
  { label: '프론트엔드', value: 'Frontend Developer' },
  { label: '백엔드', value: 'Backend Developer' },
  { label: '디자이너', value: 'Designer' },
  { label: '기획자', value: 'Product Manager' },
  { label: '기타', value: 'Other' },
];

const careers = [
  { label: '학생/취준생', value: 0 },
  { label: '1~3년차', value: 1 },
  { label: '3~5년차', value: 3 },
  { label: '5~10년차', value: 5 },
  { label: '10년차이상', value: 10 },
];

const schema = [
  // step 1
  yup.object().shape({
    email: SCHEMA_EMAIL.required(),
    code: yup.string().required(),
    password: SCHEMA_PASSWORD.required(),
    confirmPassword: SCHEMA_CONFIRM_PASSWORD.required(),
  }),
  // step 2
  yup.object().shape({
    profileImage: yup.string().required(),
    nickname: SCHEMA_NICKNAME.required(),
  }),
  // step 3
  yup.object().shape({
    job: yup.string().required(),
    career: yup.string().required(),
    stacks: yup.array().of(yup.mixed<Stack>().required()).min(0),
    urls: yup.array().of(yup.string().url()),
    introduction: yup.string().required(),
  }),
];

function SignUpScreen() {
  // prop destruction
  // lib hooks
  const navigate = useNavigate();
  // state, ref, querystring hooks
  const [step, setStep] = useState(2);
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowPasswordConfirm, setIsShowPasswordConfirm] = useState(false);
  const [characterState, setCharacterState] = useState<CharacterType>(characters[0]);
  const [isExpand, setIsExpand] = useState(false);
  // form hooks
  const {
    register,
    watch,
    control,
    getValues,
    formState: { errors, isValid, dirtyFields },
    setValue,
    setError,
  } = useForm<ValidationType>({
    mode: 'onChange',
    defaultValues: {
      email: '',
      code: '',
      password: '',
      confirmPassword: '',
      nickname: '',
      searchSkill: '',
      enterUrl: '',
      job: 'Frontend Developer',
      career: 0,
      stacks: [],
      urls: [],
      introduction: '',
      profileImage: '/e2142093cc89c41037a7.svg',
    },
    resolver: yupResolver(schema[step]),
  });
  const { fields: stacks, append: appendStack, remove: removeStack } = useFieldArray({ control, name: 'stacks' });
  const { fields: urlsFields, append: urlsAppend, remove: urlsRemove } = useFieldArray({ control, name: 'urls' });
  // query hooks
  // calculated values
  // effects
  // handlers
  const handlerKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const value = e.currentTarget.value;
      const httpsValue = value.includes('https://') ? value : 'https://' + value;
      urlsAppend({ value: httpsValue });
      setValue('enterUrl', '');
    }
  };

  const handleSelectProfileImage = (character: CharacterType) => {
    setValue('profileImage', character.src);
    setCharacterState(character);
  };

  const handleMoveStep = (stepChangeNumber: number) => {
    if (stepChangeNumber === 1 && step < 2) setStep((prevStep) => prevStep + stepChangeNumber);
    if (stepChangeNumber === -1) {
      step === 0 ? navigate('/login') : setStep((prevStep) => prevStep + stepChangeNumber);
    }
  };

  return (
    <MuiStack
      width='100%'
      height='100vh'
      alignItems='center'
      direction='row'
      css={{
        backgroundColor: '#2E558E',
        [mq[2]]: {
          alignItems: 'flex-start',
          paddingTop: '40px',
        },
      }}
    >
      <BackgroundAstronaut1
        css={{ position: 'fixed', top: '28%', left: '27%', width: '100px', height: '150px', zIndex: '1' }}
      />
      <BackgroundPlanet1
        css={{ position: 'fixed', top: '40%', left: '10%', width: '700px', height: '700px', zIndex: '0' }}
      />
      <BackgroundPlanet2
        css={{ position: 'fixed', top: '-13%', left: '70%', width: '300px', height: '500px', zIndex: '0' }}
      />
      <ShadowBox
        css={{
          padding: '40px',
          width: '576px',
          margin: '0 auto',
          justifyContent: 'space-between',
        }}
      >
        {/* Header */}
        <MuiStack width='492px' direction='row' justifyContent='center'>
          <UnderlineTitle title='회원가입' />
          <IconArrowLeft
            onClick={() => {
              handleMoveStep(-1);
            }}
            css={{
              position: 'absolute',
              top: '40px',
              left: '40px',
              cursor: 'pointer',
              width: '35px',
              height: '35px',
            }}
          />
        </MuiStack>
        {/* Content */}
        <MuiStack direction='row'>
          {step === 0 && (
            <MuiStack
              direction='row'
              justifyContent='center'
              width='100%'
              height='447px'
              css={{ padding: '40px 52px' }}
            >
              <MuiStack direction='column' spacing='16px'>
                <MuiStack direction='row' spacing='8px'>
                  <Input
                    type='email'
                    placeholder='이메일'
                    defaultValue={getValues('email')}
                    css={{ width: '288px' }}
                    error={errors.email}
                    {...register('email')}
                  />
                  <RequestButton disabled={!!errors.email || dirtyFields.email}>인증요청</RequestButton>
                </MuiStack>
                <MuiStack direction='row' spacing='8px'>
                  <Input
                    type='text'
                    placeholder='코드입력'
                    defaultValue={getValues('code')}
                    css={{ width: '288px' }}
                    {...register('code')}
                    error={errors.code}
                  />
                  <RequestButton disabled={!!errors.code || dirtyFields.code}>확인</RequestButton>
                </MuiStack>
                <MuiStack direction='row'>
                  <Input
                    type={isShowPassword ? 'text' : 'password'}
                    placeholder='비밀번호 입력'
                    helperText='영문, 숫자, 특수문자 조합 8~16자리로 입력해주세요.'
                    autoComplete='off'
                    defaultValue={getValues('password')}
                    error={errors.password}
                    IconProps={{
                      EndIcon: dirtyFields.password && isShowPassword ? <IconPasswordHide /> : <IconPasswordShow />,
                      onClick: () => setIsShowPassword(!isShowPassword),
                    }}
                    css={{ width: '392px' }}
                    {...register('password')}
                  />
                </MuiStack>
                <MuiStack direction='row'>
                  <Input
                    type={isShowPasswordConfirm ? 'text' : 'password'}
                    placeholder='비밀번호 확인'
                    autoComplete='off'
                    defaultValue={getValues('confirmPassword')}
                    error={errors.confirmPassword}
                    IconProps={{
                      onClick: () => setIsShowPasswordConfirm(!isShowPasswordConfirm),
                      EndIcon:
                        dirtyFields.confirmPassword && isShowPasswordConfirm ? (
                          <IconPasswordHide />
                        ) : (
                          <IconPasswordShow />
                        ),
                    }}
                    css={{ width: '392px' }}
                    {...register('confirmPassword')}
                  />
                </MuiStack>
              </MuiStack>
            </MuiStack>
          )}

          {step === 1 && (
            <MuiStack direction='column' spacing={12} css={{ padding: '40px 86px' }}>
              {/* FIXME: 컴포넌트 교체 필요 */}
              <MuiStack direction='row' justifyContent='center'>
                <MuiStack
                  width='100px'
                  direction='row'
                  css={{
                    backgroundColor: characterState.backgroundColor,
                    borderRadius: '50%',
                    border: '2px solid black',
                    overflow: 'hidden',
                    justifyContent: 'center',
                  }}
                >
                  <Character1
                    css={{
                      height: characterState.height,
                      width: characterState.width,
                      marginTop: characterState.marginTop,
                    }}
                  />
                </MuiStack>
                <MuiStack
                  direction='row'
                  alignContent='space-between'
                  justifyContent='space-between'
                  css={{ flexWrap: 'wrap', marginLeft: '16px' }}
                >
                  {characters.map((character, index) => {
                    const CharacterComponent = [
                      Character1,
                      Character2,
                      Character3,
                      Character4,
                      Character5,
                      Character6,
                      Character7,
                      Character8,
                    ][index];
                    return (
                      <MuiStack
                        key={character.id}
                        direction='row'
                        width='48px'
                        height='48px'
                        justifyContent='center'
                        alignItems='center'
                        css={{
                          border: character.id === characterState.id ? '2px solid #00CA20' : '1px solid black',
                          borderRadius: '50%',
                          overflow: 'hidden',
                          backgroundColor: character.backgroundColor,
                          cursor: 'pointer',
                          '&:hover': {
                            border: '2px solid #00CA20',
                          },
                        }}
                      >
                        <CharacterComponent
                          onClick={() => handleSelectProfileImage(character)}
                          css={{ width: '100%', height: character.height, marginTop: character.marginTop }}
                        />
                      </MuiStack>
                    );
                  })}
                </MuiStack>
              </MuiStack>
              <MuiStack direction='row' width='324px' spacing='8px'>
                <Input
                  helperText='8자이내, 한글, 영문 숫자 혼용 가능'
                  defaultValue={getValues('nickname')}
                  error={errors.nickname}
                  placeholder='닉네임 입력'
                  {...register('nickname')}
                />
                <RequestButton disabled={!isValid} css={{ width: '93px' }}>
                  중복확인
                </RequestButton>
              </MuiStack>
            </MuiStack>
          )}
          {step === 2 && (
            <MuiStack direction='column' alignItems='center' spacing={5} css={{ padding: '40px 52px' }}>
              <MuiStack direction='row' width='392px' spacing='12px'>
                <SingleSelect
                  css={{ flex: 1 }}
                  label='직무'
                  options={jobs}
                  defaultValue={getValues('job')}
                  required
                  {...register('job')}
                />
                <SingleSelect
                  css={{ flex: 0.79 }}
                  label='경력'
                  options={careers}
                  defaultValue={getValues('career')}
                  required
                  {...register('career')}
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
              <MuiStack width='100%' direction='column'>
                <TextArea
                  label='자기소개'
                  required
                  placeholder='안녕하세욥!'
                  defaultValue={getValues('introduction')}
                  css={{ fontSize: '14px', overflow: 'unset', height: '98px' }}
                  {...register('introduction')}
                />
              </MuiStack>
              <MuiStack width='100%' direction='column'>
                <Input
                  variant='underline'
                  label='참고 링크'
                  type='text'
                  placeholder='URL을 입력해주세요.'
                  defaultValue={getValues('enterUrl')}
                  onKeyDown={handlerKeyDown}
                  css={{ fontSize: '16px' }}
                  {...register('enterUrl')}
                />
                {!!urlsFields.length && (
                  <MuiStack
                    width='100%'
                    direction='column'
                    css={{ height: '50px', overflowY: 'scroll', border: 'none' }}
                  >
                    {urlsFields.map((url, index) => (
                      <MuiStack key={url.id} direction='row' css={{ padding: '0px 5px' }}>
                        <a
                          css={(theme: Theme) => ({
                            color: theme.palette.primary.main,
                            textDecoration: 'underline',
                            fontWeight: '500',
                            display: 'inline-block',
                          })}
                          href={url.value}
                          target='_blank'
                          rel='noreferrer'
                        >
                          {url.value.includes('https://') ? url.value : `https://${url.value}`}
                        </a>
                        <DeleteUrl
                          onClick={() => urlsRemove(index)}
                          css={{ width: '15px', marginLeft: '5px', cursor: 'pointer' }}
                        />
                      </MuiStack>
                    ))}
                  </MuiStack>
                )}
              </MuiStack>
            </MuiStack>
          )}
        </MuiStack>

        {/* Action */}
        <MuiStack direction='row' css={{ justifyContent: 'center', alignItems: 'center' }}>
          <SignupButton disabled={!isValid} onClick={() => console.log(getValues())}>
            {step === 2 ? '회원가입' : '다음'}
          </SignupButton>
        </MuiStack>
      </ShadowBox>
    </MuiStack>
  );
}

export { SignUpScreen };
