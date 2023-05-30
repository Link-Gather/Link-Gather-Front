import { useState } from 'react';
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
import {
  UnderlineTitle,
  Input,
  ShadowBox,
  TextArea,
  Button,
  StackChip,
  SingleSelect,
  ClickAway,
  Timer,
} from '@elements';
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
import { Stack, User } from '@models';
import IconArrowDown from '@assets/images/icons/icon-arrow-down.svg';
import { useMutation } from '@libs/query';
import { authRepository, userRepository } from '@repositories';

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

const RequestButton = styled(Button)(
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

//TODO: 수정 필요
const jobs = [
  { label: '프론트엔드', value: 'Frontend Developer' },
  { label: '백엔드', value: 'Backend Developer' },
  { label: '디자이너', value: 'Designer' },
  { label: '기획자', value: 'Product Manager' },
  { label: '기타', value: 'Other' },
];

const careerOptions = User.getJobOptions();

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
  const [step, setStep] = useState(0);
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowPasswordConfirm, setIsShowPasswordConfirm] = useState(false);
  const [characterState, setCharacterState] = useState<CharacterType>(characters[0]);
  const [isExpand, setIsExpand] = useState(false);
  const [url, setUrl] = useState('');
  const [lastVerificationId, setLastVerificationId] = useState('');
  const [isVerified, setIsVerified] = useState({
    email: false,
    nickname: false,
  });
  const [time, setTime] = useState<number>();
  // form hooks
  const {
    register,
    control,
    getValues,
    formState: { errors, isValid, dirtyFields },
    setValue,
    handleSubmit,
    //TODO: api연결 후 에러 시 사용할 수 있다.
    setError,
  } = useForm<ValidationType>({
    mode: 'onChange',
    defaultValues: {
      email: '',
      code: '',
      password: '',
      confirmPassword: '',
      nickname: '',
      job: 'Frontend Developer',
      career: 100,
      stacks: [],
      urls: [],
      introduction: '',
      profileImage: '/e2142093cc89c41037a7.svg',
    },
    resolver: yupResolver(schema[step]),
  });
  const { fields: stacks, append: appendStack, remove: removeStack } = useFieldArray({ control, name: 'stacks' });
  const { fields: urls, append: appendUrl, remove: removeUrl } = useFieldArray({ control, name: 'urls' });
  // query hooks
  const { mutateAsync: emailVerification, isLoading: isEmailVerificationLoading } = useMutation(
    authRepository.emailVerification,
    {
      onCompleted: (data) => {
        //@ts-expect-error
        setLastVerificationId(data.data.id);
        // setLastVerificationId(data.id);
        setTime(180);
      },
      onError: (err) => {
        setError('email', { message: err.message });
      },
    }
  );
  const { mutateAsync: verify, isLoading: isVerifyLoading } = useMutation(authRepository.verify, {
    onCompleted: () => {
      setIsVerified((prev) => ({ ...prev, email: true }));
    },
    onError: (err) => {
      setError('code', { message: err.message });
    },
  });
  const { mutateAsync: checkDuplicateNickname, isLoading: isCheckDuplicateNicknameLoading } = useMutation(
    userRepository.checkDuplicateNickname,
    {
      onCompleted: () => {
        setIsVerified((prev) => ({ ...prev, nickname: true }));
      },
      onError: (err) => {
        setError('nickname', { message: err.message });
      },
    }
  );
  // calculated values
  // effects
  // handlers

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
                    onChange={(e) => {
                      register('email').onChange(e);
                      setIsVerified((prev) => ({ ...prev, email: false }));
                    }}
                    helperText={lastVerificationId ? '인증번호를 전송하였습니다.' : errors.code?.message}
                  />
                  <RequestButton
                    loading={isEmailVerificationLoading}
                    disabled={!!errors.email || !dirtyFields.email || isVerified.email}
                    onClick={async () =>
                      await emailVerification({
                        email: getValues('email'),
                        type: 'signup',
                      })
                    }
                  >
                    인증요청
                  </RequestButton>
                </MuiStack>
                <MuiStack direction='row' spacing='8px'>
                  <Input
                    type='text'
                    placeholder='코드입력'
                    defaultValue={getValues('code')}
                    css={{ width: '288px' }}
                    {...register('code')}
                    error={errors.code}
                    disabled={isVerified.email}
                    helperText={errors.code?.message}
                  />
                  <RequestButton
                    disabled={!!errors.code || !dirtyFields.code || isVerified.email}
                    loading={isVerifyLoading}
                    onClick={async () => {
                      await verify({ id: lastVerificationId, code: getValues('code') });
                    }}
                  >
                    확인
                  </RequestButton>
                </MuiStack>
                {/* TODO: 위치 수정 필요 */}
                {time && <Timer seconds={time} onChange={setTime} />}
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
                  helperText={
                    errors.nickname?.message ||
                    (isVerified.nickname ? '사용할 수 있는 닉네임입니다.' : '8자이내, 한글, 영문 숫자 혼용 가능')
                  }
                  defaultValue={getValues('nickname')}
                  error={errors.nickname}
                  placeholder='닉네임 입력'
                  {...register('nickname')}
                  onChange={(e) => {
                    register('nickname').onChange(e);
                    setIsVerified((prev) => ({ ...prev, nickname: false }));
                  }}
                />
                <RequestButton
                  loading={isCheckDuplicateNicknameLoading}
                  disabled={!isValid}
                  css={{ width: '93px' }}
                  onClick={async () => {
                    await checkDuplicateNickname({ nickname: getValues('nickname') });
                  }}
                >
                  중복확인
                </RequestButton>
              </MuiStack>
            </MuiStack>
          )}
          {step === 2 && (
            <MuiStack direction='column' alignItems='center' spacing={5} css={{ padding: '40px 52px' }}>
              <MuiStack direction='row' width='392px' spacing='12px'>
                <Controller
                  control={control}
                  name='job'
                  render={({ field: { value, onChange } }) => (
                    <SingleSelect
                      css={{ flex: 1 }}
                      label='직무'
                      options={jobs}
                      required
                      value={value}
                      onChange={onChange}
                    />
                  )}
                />
                <Controller
                  control={control}
                  name='career'
                  render={({ field: { value, onChange } }) => (
                    <SingleSelect
                      css={{ flex: 0.79 }}
                      label='경력'
                      options={careerOptions}
                      required
                      value={value}
                      onChange={onChange}
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
          )}
        </MuiStack>

        {/* Action */}
        <MuiStack direction='row' css={{ justifyContent: 'center', alignItems: 'center' }}>
          <SignupButton
            disabled={!isValid || !isVerified.email || !isVerified.nickname}
            onClick={() => {
              step === 2 //TODO: 회원가입 api 연결
                ? handleSubmit(() => {})
                : handleMoveStep(1);
            }}
          >
            {step === 2 ? '회원가입' : '다음'}
          </SignupButton>
        </MuiStack>
      </ShadowBox>
    </MuiStack>
  );
}

export { SignUpScreen };
