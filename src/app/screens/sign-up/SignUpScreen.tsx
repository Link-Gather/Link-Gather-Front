import { useState, KeyboardEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import BackgroundAstronaut1 from '@assets/images/backgrounds/signup/background-astronaut1.svg';
import BackgroundPlanet1 from '@assets/images/backgrounds/signup/background-planet1.svg';
import BackgroundPlanet2 from '@assets/images/backgrounds/signup/background-planet2.svg';
import { mq, type Theme } from '@libs/theme';
import { Stack } from '@mui/material';
import * as yup from 'yup';
import { useFieldArray, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { DropDown, SkillDropdown } from '@components';
import { UnderlineTitle, Input, ShadowBox, TextArea, SkillTab, Button } from '@elements';
import { SCHEMA_PASSWORD, SCHEMA_NICKNAME, SCHEMA_CONFIRM_PASSWORD } from '@libs/schema';
import { userRepository, authRepository } from '@repositories';
import { useMutation, useQuery } from '@libs/query';
import styled from '@emotion/styled';
import DeleteUrl from '@assets/images/icons/delete-url.svg';
import IconSearch from '@assets/images/icons/icon-search.svg';
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

export const skills = [
  { value: 'Figma', length: 1 },
  { value: 'Java', length: 1 },
  { value: 'Adobe Illustration', length: 3 },
  { value: 'Spring', length: 1 },
  { value: 'HTML', length: 1 },
  { value: 'CSS', length: 1 },
  { value: 'Spring Boot', length: 2 },
  { value: 'Python', length: 1 },
  { value: 'Node.js', length: 2 },
  { value: 'React Native', length: 2 },
  { value: 'PHP', length: 1 },
  { value: 'C#', length: 1 },
  { value: 'Vue.js', length: 1 },
  { value: 'React.js', length: 2 },
  { value: 'TypeScript', length: 2 },
  { value: 'Styled-Components', length: 3 },
  { value: 'OpenGL', length: 1 },
  { value: 'Storybook', length: 2 },
  { value: 'Recoil', length: 1 },
  { value: 'CassandraDB', length: 2 },
  { value: 'Google Firebase', length: 3 },
  { value: 'Google BigQuery', length: 3 },
  { value: 'AWS DynamoDB', length: 2 },
  { value: 'AWS CodePipeline', length: 3 },
];

type ValidationType = {
  email: string;
  code: string;
  password: string;
  confirmPassword: string;
  nickname: string;
  searchSkill: string;
  urlString: string;
  job: string;
  career: number;
  stacks: { value: string; length: number }[];
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
    fontWeight: '600',
    borderRadius: '8px',
    marginLeft: '10px',
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
    position: 'absolute',
    bottom: '40px',
    borderRadius: '32px',
    width: '320px',
    height: '48px',
    fontSize: '20px',
    fontWeight: '600',
    letterSpacing: '0.6px',
  },
  ({ disabled, theme }) => ({
    color: theme.palette.contrastText,
    backgroundColor: !disabled ? theme.palette.primary.main : theme.palette.secondary.n60,
    cursor: !disabled ? 'pointer' : 'default',
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
  yup.object().shape({
    email: yup.string().required(),
    code: yup.string().required(),
    password: SCHEMA_PASSWORD.required(),
    confirmPassword: SCHEMA_CONFIRM_PASSWORD.required(),
  }),
  yup.object().shape({
    profileImage: yup.string().required(),
    nickname: SCHEMA_NICKNAME.required(),
  }),
  yup.object().shape({
    job: yup.string().required(),
    career: yup.string().required(),
    stacks: yup.array().of(yup.string()).required(),
    urls: yup.array().of(yup.string().url()),
    introduction: yup.string().required(),
  }),
];

function SignUpScreen() {
  // prop destruction
  // lib hooks
  const navigate = useNavigate();
  // state, ref, querystring hooks
  const [step, setStep] = useState(0);
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowPasswordConfirm, setIsShowPasswordConfirm] = useState(false);
  const [characterState, setCharacterState] = useState<CharacterType>(characters[0]);
  // form hooks
  const {
    register,
    watch,
    control,
    getValues,
    handleSubmit,
    formState: { errors, isValid, dirtyFields },
    setValue,
  } = useForm<ValidationType>({
    mode: 'onChange',
    defaultValues: {
      email: '',
      code: '',
      password: '',
      confirmPassword: '',
      nickname: '',
      searchSkill: '',
      urlString: '',
      job: 'Frontend Developer',
      career: 0,
      stacks: [],
      urls: [],
      introduction: '',
      profileImage: '/e2142093cc89c41037a7.svg', //임시로 넣어놓은 초기 이미지 src
    },
    resolver: yupResolver(
      (() => {
        switch (step) {
          case 0:
            return schema[step];
          case 1:
            return schema[step];
          case 2:
            return schema[step];
          default:
            return yup.object();
        }
      })()
    ),
  });
  const {
    fields: stacksFields,
    append: stacksAppend,
    remove: stacksRemove,
  } = useFieldArray({ control, name: 'stacks' });
  const { fields: urlsFields, append: urlsAppend, remove: urlsRemove } = useFieldArray({ control, name: 'urls' });

  // query hooks
  const { mutateAsync: verifyEmailMutation } = useMutation(authRepository.emailVerification);
  // const { mutateAsync: verifyCodeMutation } = useMutation(authRepository.checkedVerificationCode);

  // const { data, isLoading, isError, error, refetch } = useQuery(userRepository.checkNickname, {
  //   variables: 'windy',
  //   skip: false,
  //   onSuccess: (result) => {
  //     console.log(result);
  //   },
  //   onError: (err) => {
  //     console.log(err);
  //   },
  // });

  // calculated values
  // effects
  // handlers
  const handlerKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const value = e.currentTarget.value;
      const httpsValue = value.includes('https://') ? value : 'https://' + value;
      urlsAppend({ value: httpsValue });
      setValue('urlString', '');
    }
  };

  const handleSelectProfileImage = (character: CharacterType) => {
    setValue('profileImage', character.src);
    setCharacterState(character);
  };

  const handleSelectSkill = (skill: { value: string; length: number }) => {
    stacksAppend({ value: skill.value, length: skill.length });
    setValue('searchSkill', '');
  };

  const handleDeleteSkill = (skill: string) => {
    stacksRemove(stacksFields.findIndex((item) => item.value === skill));
  };
  // useFieldArray remove함수는 index(number)를 파라미터로 받아야하는데
  // handleDeleteSkill를 SkillTab컴포넌트에 props로 넘기고있어서 index를 같이넘기는게 나을까요?

  const handleMoveStep = (stepChangeNumber: number) => {
    if (stepChangeNumber === 1 && step < 2) setStep((prevStep) => prevStep + stepChangeNumber);
    if (stepChangeNumber === -1) {
      step === 0 ? navigate('/login') : setStep((prevStep) => prevStep + stepChangeNumber);
    }
  };

  return (
    <Stack
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
          height: step !== 2 ? '588px' : '718px',
          margin: '0 auto',
        }}
      >
        <Stack width='100%' direction='column'>
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

          <Stack width='492px' direction='row' justifyContent='center'>
            <UnderlineTitle title='회원가입' />
          </Stack>
          <Stack width='392px' height='100%' direction='row' css={{ margin: '0 auto' }}>
            {step === 0 && (
              <Stack direction='row' justifyContent='center' width='100%' height='447px' css={{ marginTop: '20px' }}>
                <Stack direction='column' spacing={4} css={{ marginTop: '25px' }}>
                  <Stack direction='row'>
                    <Input type='email' placeholder='이메일' css={{ width: '288px' }} {...register('email')} />
                    <RequestButton
                      disabled={!watch('email')}
                      onClick={async () => await verifyEmailMutation({ email: getValues('email'), type: 'signup' })}
                    >
                      인증요청
                    </RequestButton>
                  </Stack>
                  <Stack direction='row'>
                    <Input type='text' placeholder='코드입력' css={{ width: '288px' }} {...register('code')} />
                    <RequestButton
                      disabled={!watch('code')}
                      // onClick={handleSubmit(async ({ code }) => await verifyCodeMutation({ code }))}
                    >
                      확인
                    </RequestButton>
                  </Stack>
                  <Stack direction='row'>
                    <Input
                      type={isShowPassword ? 'text' : 'password'}
                      placeholder='비밀번호 입력'
                      helperText='영문, 숫자, 특수문자 조합 8~16자리로 입력해주세요.'
                      autoComplete='off'
                      error={errors.password}
                      IconProps={{
                        Icon: dirtyFields.password && isShowPassword ? <IconPasswordHide /> : <IconPasswordShow />,
                        onClick: () => setIsShowPassword(!isShowPassword),
                      }}
                      css={{ width: '392px' }}
                      {...register('password')}
                    />
                  </Stack>
                  <Stack direction='row' css={{ marginTop: '16px' }}>
                    <Input
                      type={isShowPasswordConfirm ? 'text' : 'password'}
                      placeholder='비밀번호 확인'
                      autoComplete='off'
                      error={errors.confirmPassword}
                      IconProps={{
                        onClick: () => setIsShowPasswordConfirm(!isShowPasswordConfirm),
                        Icon:
                          dirtyFields.confirmPassword && isShowPasswordConfirm ? (
                            <IconPasswordHide />
                          ) : (
                            <IconPasswordShow />
                          ),
                      }}
                      css={{ width: '392px' }}
                      {...register('confirmPassword')}
                    />
                  </Stack>
                </Stack>
                <SignupButton
                  onClick={() => {
                    handleMoveStep(1);
                  }}
                  disabled={!isValid}
                >
                  다음
                </SignupButton>
              </Stack>
            )}
            {step === 1 && (
              <Stack
                width='100%'
                height='447px'
                direction='column'
                alignItems='center'
                spacing={12}
                css={{ marginTop: '20px' }}
              >
                <Stack direction='row' justifyContent='center' css={{ marginTop: '20px' }}>
                  <Stack
                    width='100px'
                    height='100px'
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
                  </Stack>
                  <Stack
                    width='204px'
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
                        <Stack
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
                        </Stack>
                      );
                    })}
                  </Stack>
                </Stack>
                <Stack direction='row' width='324px' justifyContent='center'>
                  <Input
                    helperText='8자이내, 한글, 영문 숫자 혼용 가능'
                    error={errors.nickname}
                    placeholder='닉네임 입력'
                    {...register('nickname')}
                  />
                  <RequestButton
                    disabled={!isValid}
                    css={{ width: '93px' }}
                    onClick={() => userRepository.checkNickname(getValues('nickname'))}
                  >
                    중복확인
                  </RequestButton>
                </Stack>
                <SignupButton
                  onClick={() => {
                    handleMoveStep(1);
                  }}
                  disabled={!isValid}
                >
                  다음
                </SignupButton>
              </Stack>
            )}
            {step === 2 && (
              <Stack
                width='100%'
                height='100%'
                direction='column'
                alignItems='center'
                spacing={5}
                css={{ marginTop: '20px' }}
              >
                <Stack direction='row' width='392px' justifyContent='space-between' css={{ marginTop: '15px' }}>
                  <Stack width='212px' direction='column'>
                    <DropDown label='직무' options={jobs} required {...register('job')} />
                  </Stack>
                  <Stack width='168px' direction='column'>
                    <DropDown label='경력' options={careers} required {...register('career')} />
                  </Stack>
                </Stack>
                <Stack width='100%' direction='column' css={{ position: 'relative' }}>
                  <Input
                    variant='underline'
                    required
                    label='보유기술'
                    type='text'
                    placeholder='기술 스택 검색'
                    IconProps={{
                      Icon: <IconSearch css={{ position: 'absolute', top: '43px' }} />,
                    }}
                    css={{ fontSize: '16px', paddingLeft: '30px' }}
                    {...register('searchSkill')}
                  />
                  {watch('searchSkill') && (
                    <SkillDropdown skills={skills} searchKeyword={watch('searchSkill')} onClick={handleSelectSkill} />
                  )}
                  {!!stacksFields.length && (
                    <Stack direction='row' css={{ height: '30px', flexWrap: 'wrap', overflowY: 'scroll' }}>
                      {stacksFields.map((skill) => (
                        <SkillTab skill={skill} key={skill.id} selected onDelete={handleDeleteSkill}>
                          {skill.value}
                        </SkillTab>
                      ))}
                    </Stack>
                  )}
                </Stack>
                <Stack width='100%' direction='column'>
                  <TextArea
                    label='자기소개'
                    required
                    placeholder='안녕하세욥!'
                    css={{ fontSize: '14px', overflow: 'unset', height: '98px' }}
                    {...register('introduction')}
                  />
                </Stack>
                <Stack width='100%' direction='column'>
                  <Input
                    variant='underline'
                    label='참고 링크'
                    type='text'
                    placeholder='URL을 입력해주세요.'
                    onKeyDown={handlerKeyDown}
                    css={{ fontSize: '16px' }}
                    {...register('urlString')}
                  />
                  {!!urlsFields.length && (
                    <Stack
                      width='100%'
                      direction='column'
                      css={{ height: '50px', overflowY: 'scroll', border: 'none' }}
                    >
                      {urlsFields.map((url, index) => (
                        <Stack key={url.id} direction='row' css={{ padding: '0px 5px' }}>
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
                        </Stack>
                      ))}
                    </Stack>
                  )}
                </Stack>
                <SignupButton onClick={() => console.log(getValues())}>회원가입</SignupButton>
              </Stack>
            )}
          </Stack>
        </Stack>
      </ShadowBox>
    </Stack>
  );
}

export { SignUpScreen };
