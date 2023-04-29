import React, { useState, KeyboardEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import BackgroundAstronaut1 from '@assets/images/backgrounds/signup/background-astronaut1.svg';
import BackgroundPlanet1 from '@assets/images/backgrounds/signup/background-planet1.svg';
import BackgroundPlanet2 from '@assets/images/backgrounds/signup/background-planet2.svg';
import { mq, Theme } from '@libs/theme';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { DropDown, SkillDropdown } from '@components';
import { FlexBox, UnderlineTitle, Input, ShadowBox, TextArea, SkillTab } from '@elements';
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
  'Figma',
  'Java',
  'Adobe Illustration',
  'Spring',
  'HTML',
  'CSS',
  'Spring Boot',
  'Python',
  'Node.js',
  'React Native',
  'PHP',
  'C#',
  'Vue.js',
  'React.js',
  'TypeScript',
  'A Really Long Name Stack',
  'Styled-Components',
  'OpenGL',
  'Storybook',
  'Recoil',
  'CassandraDB',
  'Google Firebase',
  'Google BigQuery',
  'AWS DynamoDB',
  'AWS CodePipeline',
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
  stacks: string[];
  urls: string[];
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

const RequestButton = styled('button')<{ value: string }>(
  {
    width: '94px',
    height: '50px',
    fontSize: '14px',
    textAlign: 'center',
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

const SignupButton = styled('button')<{ disabled?: boolean }>(
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

function SignUpScreen() {
  // prop destruction
  // lib hooks
  const navigate = useNavigate();
  // state, ref, querystring hooks
  const [step, setStep] = useState(0);
  const [isCheckedCode, setIsCheckedCode] = useState(false);
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowPasswordConfirm, setIsShowPasswordConfirm] = useState(false);
  const [characterState, setCharacterState] = useState<CharacterType>(characters[0]);
  // form hooks
  const {
    register,
    getValues,
    watch,
    formState: { errors, dirtyFields, isValid },
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
      profileImage: '',
    },
    resolver: yupResolver(
      (() => {
        switch (step) {
          case 0:
            return yup.object().shape({
              email: yup.string(),
              code: yup.string(),
              password: SCHEMA_PASSWORD,
              confirmPassword: SCHEMA_CONFIRM_PASSWORD,
            });
          case 1:
            return yup.object().shape({
              nickname: SCHEMA_NICKNAME,
            });
          case 2:
            return yup.object().shape({
              searchSkill: yup.string(),
              urlString: yup.string().url(),
              selectedJob: yup.string(),
              selectedExperience: yup.string(),
              selectedSkills: yup.array().of(yup.string()),
              urls: yup.array().of(yup.string().url()),
              introduction: yup.string(),
            });
          default:
            return yup.object();
        }
      })()
    ),
  });

  // query hooks
  // calculated values
  // effects
  // handlers
  const handlerKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const value = e.currentTarget.value;
      const httpsValue = value.includes('https://') ? value : 'https://' + value;
      const urls = getValues('urls') || [];
      setValue('urls', [...urls, httpsValue]);
      setValue('urlString', '');
    }
  };

  const handleSelectProfileImage = (character: CharacterType) => {
    setValue('profileImage', character.src);
    setCharacterState(character);
  };

  const handleSelectSkill = (skill: string) => {
    const skills = getValues('stacks') || [];
    setValue('stacks', [...skills, skill]);
    setValue('searchSkill', '');
  };

  const handleDeleteSkill = (skill: string) => {
    const deletedSkills = getValues('stacks').filter((item) => item !== skill);
    setValue('stacks', deletedSkills);
  };

  const handleDeleteUrl = (url: string) => {
    const deletedUrls = getValues('urls').filter((item) => item !== url);
    setValue('urls', deletedUrls);
  };

  const handleNextStep = () => {
    if (step < 2) setStep((prevState) => prevState + 1);
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
          margin: '0 auto',
          height: step !== 2 ? '588px' : '718px',
        }}
      >
        <FlexBox width='100%' height='100%' direction='column'>
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
                if (step) setStep((prevState) => prevState - 1);
                else navigate('/login');
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
                    <Input
                      type='email'
                      placeholder='이메일'
                      value={getValues('email')}
                      css={{ width: '288px' }}
                      {...register('email')}
                    />
                    <RequestButton value={watch('email')}>인증요청</RequestButton>
                  </FlexBox>
                  <FlexBox>
                    <Input
                      type='text'
                      placeholder='코드입력'
                      value={getValues('code')}
                      css={{ width: '288px' }}
                      {...register('code')}
                    />
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
                <SignupButton onClick={handleNextStep} disabled={!isValid}>
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
                <SignupButton onClick={handleNextStep} disabled={!isValid}>
                  다음
                </SignupButton>
              </FlexBox>
            )}
            {step === 2 && (
              <FlexBox
                width='100%'
                direction='column'
                alignItems='center'
                spacing={5}
                css={{ marginTop: '20px', position: 'relative' }}
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
                  {watch('stacks').length !== 0 && (
                    <FlexBox css={{ height: '30px', flexWrap: 'wrap', overflowY: 'scroll' }}>
                      {watch('stacks').map((skill) => (
                        <SkillTab skill={skill} key={skill} selected onDeleteClick={handleDeleteSkill}>
                          {skill}
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
                    {watch('urls').map((url) => (
                      <FlexBox key={url} css={{ padding: '0px 5px' }}>
                        <a
                          css={(theme: Theme) => ({
                            color: theme.palette.primary.main,
                            textDecoration: 'underline',
                            fontWeight: '500',
                            display: 'inline-block',
                          })}
                          href={url}
                          target='_blank'
                          rel='noreferrer'
                        >
                          {url.includes('https://') ? url : 'https://' + url}
                        </a>
                        <img
                          alt='delete-url'
                          src={DeleteUrl}
                          onClick={() => handleDeleteUrl(url)}
                          css={{ marginLeft: '10px', cursor: 'pointer' }}
                        />
                      </FlexBox>
                    ))}
                  </FlexBox>
                </FlexBox>
                <SignupButton css={{ top: '529px' }}>회원가입</SignupButton>
              </FlexBox>
            )}
          </FlexBox>
        </FlexBox>
      </ShadowBox>
    </FlexBox>
  );
}

export { SignUpScreen };
