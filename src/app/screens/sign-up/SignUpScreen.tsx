import React, { useState, KeyboardEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import BackgroundAstronaut1 from '@assets/images/backgrounds/signup/background-astronaut1.svg';
import BackgroundPlanet1 from '@assets/images/backgrounds/signup/background-planet1.svg';
import BackgroundPlanet2 from '@assets/images/backgrounds/signup/background-planet2.svg';
import { mq, Theme } from '@libs/theme';
import * as yup from 'yup';
import { useFieldArray, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { DropDown, SkillDropdown } from '@components';
import { FlexBox, UnderlineTitle, Input, ShadowBox, TextArea, SkillTab, Button } from '@elements';
import { SCHEMA_PASSWORD, SCHEMA_NICKNAME, SCHEMA_CONFIRM_PASSWORD } from '@libs/schema';
import styled from '@emotion/styled';
import DeleteUrl from '@assets/images/icons/delete-url.svg';
import IconSearch from '@assets/images/icons/icon-search.svg';
import IconArrowLeft from '@assets/images/icons/icon-arrow-left.svg';
import IconPasswordShow from '@assets/images/icons/icon-password-show.svg';
import IconPasswordHide from '@assets/images/icons/icon-password-hide.svg';
import character1 from '@assets/images/icons/character/character1.svg';
import character2 from '@assets/images/icons/character/character2.svg';
import character3 from '@assets/images/icons/character/character3.svg';
import character4 from '@assets/images/icons/character/character4.svg';
import character5 from '@assets/images/icons/character/character5.svg';
import character6 from '@assets/images/icons/character/character6.svg';
import character7 from '@assets/images/icons/character/character7.svg';
import character8 from '@assets/images/icons/character/character8.svg';

export const characters = [
  {
    id: 1,
    src: character1,
    backgroundColor: '#F4F75F',
    width: '50%',
    height: '100%',
    marginTop: '0',
  },
  {
    id: 2,
    src: character2,
    backgroundColor: '#F75F5F',
    width: '60%',
    height: '100%',
    marginTop: '15px',
  },
  {
    id: 3,
    src: character3,
    backgroundColor: '#74F75F',
    width: '80%',
    height: '100%',
    marginTop: '15px',
  },
  {
    id: 4,
    src: character4,
    backgroundColor: '#F7D65F',
    width: '75%',
    height: '100%',
    marginTop: '15px',
  },
  {
    id: 5,
    src: character5,
    backgroundColor: '#5FA5F7',
    width: '90%',
    height: '100%',
    marginTop: '15px',
  },
  {
    id: 6,
    src: character6,
    backgroundColor: '#BD5FF7',
    width: '50%',
    height: '100%',
    marginTop: '10px',
  },
  {
    id: 7,
    src: character7,
    backgroundColor: '#F75FA8',
    width: '50%',
    height: '100%',
    marginTop: '10px',
  },
  {
    id: 8,
    src: character8,
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

const RequestButton = styled(Button)<{ value: string }>(
  {
    width: '94px',
    height: '50px',
    fontSize: '14px',
    fontWeight: '600',
    borderRadius: '8px',
    marginLeft: '10px',
  },
  ({ value, theme }) => ({
    border: value ? `2px solid ${theme.palette.secondary.n300}` : `2px solid ${theme.palette.secondary.n60}`,
    color: value ? theme.palette.secondary.n300 : theme.palette.secondary.n60,
    backgroundColor: theme.palette.contrastText,
    cursor: value ? 'pointer' : 'null',
  })
);

const SignupButton = styled(Button)<{ disabled?: boolean }>(
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
    cursor: !disabled ? 'pointer' : 'null',
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

const schemaStep0 = yup.object().shape({
  email: yup.string().required(),
  code: yup.string().required(),
  password: SCHEMA_PASSWORD.required(),
  confirmPassword: SCHEMA_CONFIRM_PASSWORD.required(),
});

const schemaStep1 = yup.object().shape({
  profileImage: yup.string().required(),
  nickname: SCHEMA_NICKNAME.required(),
});

const schemaStep2 = yup.object().shape({
  job: yup.string().required(),
  career: yup.string().required(),
  stacks: yup.array().of(yup.string()).required(),
  urls: yup.array().of(yup.string().url()),
  introduction: yup.string().required(),
});

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
    getValues,
    watch,
    control,
    formState: { errors, isValid },
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
            return schemaStep0;
          case 1:
            return schemaStep1;
          case 2:
            return schemaStep2;
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
    <FlexBox
      width='100%'
      height='100vh'
      alignItems='center'
      css={{
        backgroundColor: '#2E558E',
        [mq[2]]: {
          alignItems: 'flex-start',
          paddingTop: '40px',
        },
      }}
    >
      <img
        alt='BackgroundAstronaut1'
        src={BackgroundAstronaut1}
        css={{ position: 'fixed', top: '28%', left: '27%', width: '100px', height: '150px', zIndex: '1' }}
      />
      <img
        alt='BackgroundPlanet1'
        src={BackgroundPlanet1}
        css={{ position: 'fixed', top: '40%', left: '10%', width: '700px', height: '700px', zIndex: '0' }}
      />
      <img
        alt='BackgroundPlanet2'
        src={BackgroundPlanet2}
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
        <FlexBox width='100%' direction='column'>
          <FlexBox
            css={{
              position: 'absolute',
              top: '40px',
              left: '40px',
              cursor: 'pointer',
            }}
          >
            <img
              src={IconArrowLeft}
              alt='go back'
              onClick={() => {
                handleMoveStep(-1);
              }}
            />
          </FlexBox>
          <FlexBox width='492px' justifyContent='center'>
            <UnderlineTitle title='회원가입' />
          </FlexBox>
          <FlexBox width='392px' height='100%' css={{ margin: '0 auto' }}>
            {step === 0 && (
              <FlexBox justifyContent='center' width='100%' height='447px' css={{ marginTop: '20px' }}>
                <FlexBox direction='column' spacing={4} css={{ marginTop: '25px' }}>
                  <FlexBox>
                    <Input type='email' placeholder='이메일' css={{ width: '288px' }} {...register('email')} />
                    <RequestButton onClick={() => {}} value={watch('email')}>
                      인증요청
                    </RequestButton>
                  </FlexBox>
                  <FlexBox>
                    <Input type='text' placeholder='코드입력' css={{ width: '288px' }} {...register('code')} />
                    <RequestButton value={watch('code')}>확인</RequestButton>
                  </FlexBox>
                  <FlexBox css={{ position: 'relative' }}>
                    <Input
                      type={isShowPassword ? 'text' : 'password'}
                      placeholder='비밀번호 입력'
                      helperText='영문, 숫자, 특수문자 조합 8~16자리로 입력해주세요.'
                      autoComplete='off'
                      error={errors.password}
                      iconProps={{
                        alt: 'show password',
                        iconImage: isShowPassword ? IconPasswordShow : IconPasswordHide,
                        onClick: () => setIsShowPassword(!isShowPassword),
                      }}
                      css={{ width: '392px' }}
                      {...register('password')}
                    />
                  </FlexBox>
                  <FlexBox css={{ position: 'relative', marginTop: '16px' }}>
                    <Input
                      type={isShowPasswordConfirm ? 'text' : 'password'}
                      placeholder='비밀번호 확인'
                      autoComplete='off'
                      error={errors.confirmPassword}
                      iconProps={{
                        alt: 'show password',
                        iconImage: isShowPasswordConfirm ? IconPasswordShow : IconPasswordHide,
                        onClick: () => setIsShowPasswordConfirm(!isShowPasswordConfirm),
                      }}
                      css={{ width: '392px' }}
                      {...register('confirmPassword')}
                    />
                  </FlexBox>
                </FlexBox>
                <SignupButton
                  onClick={() => {
                    handleMoveStep(1);
                  }}
                  disabled={!isValid}
                >
                  다음
                </SignupButton>
              </FlexBox>
            )}
            {step === 1 && (
              <FlexBox
                width='100%'
                height='447px'
                direction='column'
                alignItems='center'
                spacing={12}
                css={{ marginTop: '20px' }}
              >
                <FlexBox justifyContent='center' css={{ marginTop: '20px' }}>
                  <FlexBox
                    width='100px'
                    height='100px'
                    css={{
                      backgroundColor: characterState.backgroundColor,
                      borderRadius: '50%',
                      border: '2px solid black',
                      overflow: 'hidden',
                      justifyContent: 'center',
                    }}
                  >
                    <img
                      src={characterState.src}
                      alt='selectCharacter'
                      css={{
                        height: characterState.height,
                        width: characterState.width,
                        marginTop: characterState.marginTop,
                      }}
                    />
                  </FlexBox>
                  <FlexBox
                    width='204px'
                    alignContent='space-between'
                    justifyContent='space-between'
                    css={{ flexWrap: 'wrap', marginLeft: '16px' }}
                  >
                    {characters.map((character) => {
                      return (
                        <FlexBox
                          key={character.id}
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
                          <img
                            onClick={() => handleSelectProfileImage(character)}
                            alt='character'
                            src={character.src}
                            css={{ width: '100%', height: character.height, marginTop: character.marginTop }}
                          />
                        </FlexBox>
                      );
                    })}
                  </FlexBox>
                </FlexBox>
                <FlexBox width='324px' justifyContent='center'>
                  <Input
                    helperText='8자이내, 한글, 영문 숫자 혼용 가능'
                    placeholder='닉네임 입력'
                    {...register('nickname')}
                  />
                  <RequestButton onClick={() => {}} value={getValues('nickname')} css={{ width: '93px' }}>
                    중복확인
                  </RequestButton>
                </FlexBox>
                <SignupButton
                  onClick={() => {
                    handleMoveStep(1);
                  }}
                  disabled={!isValid}
                >
                  다음
                </SignupButton>
              </FlexBox>
            )}
            {step === 2 && (
              <FlexBox
                width='100%'
                height='100%'
                direction='column'
                alignItems='center'
                spacing={5}
                css={{ marginTop: '20px' }}
              >
                <FlexBox width='392px' justifyContent='space-between' css={{ marginTop: '15px' }}>
                  <FlexBox width='212px' direction='column'>
                    <DropDown label='직무' options={jobs} required {...register('job')} />
                  </FlexBox>
                  <FlexBox width='168px' direction='column'>
                    <DropDown label='경력' options={careers} required {...register('career')} />
                  </FlexBox>
                </FlexBox>
                <FlexBox width='100%' direction='column' css={{ position: 'relative' }}>
                  <Input
                    bottomLine
                    required
                    label='보유기술'
                    type='text'
                    placeholder='기술 스택 검색'
                    css={{ fontSize: '16px', paddingLeft: '30px' }}
                    {...register('searchSkill')}
                  />
                  <img src={IconSearch} alt='search' css={{ position: 'absolute', top: '44px' }} />
                  {watch('searchSkill') && (
                    <SkillDropdown skills={skills} searchKeyword={watch('searchSkill')} onClick={handleSelectSkill} />
                  )}
                  {stacksFields.length !== 0 && (
                    <FlexBox css={{ height: '30px', flexWrap: 'wrap', overflowY: 'scroll' }}>
                      {stacksFields.map((skill) => (
                        <SkillTab skill={skill} key={skill.value} selected onDeleteClick={handleDeleteSkill}>
                          {skill.value}
                        </SkillTab>
                      ))}
                    </FlexBox>
                  )}
                </FlexBox>
                <FlexBox width='100%' direction='column'>
                  <TextArea
                    label='자기소개'
                    required
                    placeholder='안녕하세욥!'
                    css={{ fontSize: '14px', overflow: 'unset', height: '98px' }}
                    {...register('introduction')}
                  />
                </FlexBox>
                <FlexBox width='100%' direction='column'>
                  <Input
                    bottomLine
                    label='참고 링크'
                    type='text'
                    placeholder='URL을 입력해주세요.'
                    onKeyDown={handlerKeyDown}
                    iconProps={{
                      iconImage: IconSearch,
                      alt: 'search',
                    }}
                    css={{ fontSize: '16px' }}
                    {...register('urlString')}
                  />
                  <FlexBox width='100%' height='50px' direction='column' css={{ overflowY: 'scroll', border: 'none' }}>
                    {urlsFields.map((url, index) => (
                      <FlexBox key={url.id} css={{ padding: '0px 5px' }}>
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
                          {url.value.includes('https://') ? url.value : 'https://' + url.value}
                        </a>
                        <img
                          alt='delete-url'
                          src={DeleteUrl}
                          onClick={() => urlsRemove(index)}
                          css={{ marginLeft: '10px', cursor: 'pointer' }}
                        />
                      </FlexBox>
                    ))}
                  </FlexBox>
                </FlexBox>
                <SignupButton>회원가입</SignupButton>
              </FlexBox>
            )}
          </FlexBox>
        </FlexBox>
      </ShadowBox>
    </FlexBox>
  );
}

export { SignUpScreen };
