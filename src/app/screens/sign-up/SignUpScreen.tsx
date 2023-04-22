import React, { useState, KeyboardEvent, ChangeEvent } from 'react';
import BackgroundAstronaut1 from '@assets/images/backgrounds/signup/background-astronaut1.svg';
import BackgroundPlanet1 from '@assets/images/backgrounds/signup/background-planet1.svg';
import BackgroundPlanet2 from '@assets/images/backgrounds/signup/background-planet2.svg';
import { mq } from '@libs/theme';
import palette from '@libs/theme/palettes';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { DropDown, SkillDropdown } from '@components';
import { FlexBox, UnderlineTitle, Input, SkillTab, ShadowBox } from '@elements';
import { SCHEMA_PASSWORD, SCHEMA_NICKNAME, SCHEMA_CONFIRM_PASSWORD } from '@libs/schema';
import IconPasswordShow from '@assets/images/icons/icon-password-show.svg';
import IconArrowLeft from '@assets/images/icons/icon-arrow-left.svg';
import IconSearch from '@assets/images/icons/icon-search.svg';
import DeleteUrl from '@assets/images/icons/delete-url.svg';
import styled from '@emotion/styled';
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

export type ThirdStepData = {
  searchSkill: string;
  urlString: string;
  selectedJob: string;
  selectedExperience: string;
  selectedSkills: string[];
  urls: string[];
  introduction: string;
};

type ValidationStep1 = {
  email: string;
  code: string;
  password: string;
  confirmPassword: string;
};

type ValidationStep2 = {
  nickname: string;
};

type ValidationStep3 = {
  searchSkill: string;
  urlString: string;
  selectedJob: string;
  selectedExperience: string;
  selectedSkills: string[];
  urls: string[];
  introduction: string;
};

type MessageType = {
  emailMessage: string;
  codeMessage: string;
  confirmPasswordMessage: string;
};

type PrevValueType = {
  prevEmailValue: string;
  prevCodeValue: string;
};

type CharacterProps = {
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
  (props) => ({
    border: props.value ? `2px solid ${palette.secondary.n300}` : `2px solid ${palette.secondary.n60}`,
    color: props.value ? palette.secondary.n300 : palette.secondary.n60,
    backgroundColor: palette.contrastText,
    cursor: props.value ? 'pointer' : 'null',
  })
);

const BottomLineInput = styled('input')({
  border: 'none',
  borderBottom: `2px solid ${palette.secondary.n60}`,
  height: '50px',
  padding: '10px 40px 0px 0px',
  fontSize: '18px',
  '&:focus': {
    outline: 'none',
    borderBottom: `2px solid ${palette.primary.main}`,
  },
  '::placeholder': {
    color: palette.secondary.n60,
    fontWeight: '600',
  },
});

const SignupButton = styled('button')<{ disabled?: boolean }>(
  {
    color: palette.contrastText,
    position: 'absolute',
    top: '400px',
    borderRadius: '32px',
    width: '320px',
    height: '48px',
    fontSize: '20px',
    fontWeight: '600',
    letterSpacing: '0.6px',
  },
  (props) => ({
    backgroundColor: !props.disabled ? palette.primary.main : palette.secondary.n60,
    cursor: !props.disabled ? 'pointer' : 'null',
  })
);

const jobsData = [
  { label: '프론트엔드', value: 'Frontend Developer' },
  { label: '백엔드', value: 'Backend Developer' },
  { label: '디자이너', value: 'Designer' },
  { label: '기획자', value: 'Product Manager' },
  { label: '기타', value: 'Other' },
];

const careersData = [
  { label: '학생/취준생', value: 0 },
  { label: '1~3년차', value: 1 },
  { label: '3~5년차', value: 3 },
  { label: '5~10년차', value: 5 },
  { label: '10년차이상', value: 10 },
];

const schema = [
  yup.object().shape({
    email: yup.string(),
    code: yup.string(),
    password: SCHEMA_PASSWORD,
    confirmPassword: SCHEMA_CONFIRM_PASSWORD,
  }),
  yup.object().shape({
    nickname: SCHEMA_NICKNAME,
  }),
  yup.object().shape({
    searchSkill: yup.string(),
    urlString: yup.string().url(),
    selectedJob: yup.string(),
    selectedExperience: yup.string(),
    selectedSkills: yup.array().of(yup.string()),
    urls: yup.array().of(yup.string().url()),
    introduction: yup.string(),
  }),
];

function SignUpScreen() {
  // prop destruction
  // lib hooks
  // state, ref, querystring hooks
  const [step, setStep] = useState(2);
  const [message, setMessage] = useState<MessageType>({
    emailMessage: '',
    codeMessage: '',
    confirmPasswordMessage: '',
  });

  const [prevValue, setPrevValue] = useState<PrevValueType>({
    prevEmailValue: '',
    prevCodeValue: '',
  });

  const [characterState, setCharacterState] = useState<CharacterProps>(characters[0]);

  const [thirdStepState, setThirdStepState] = useState<ValidationStep3>({
    searchSkill: '',
    urlString: '',
    selectedJob: '',
    selectedExperience: '',
    selectedSkills: [],
    urls: [],
    introduction: '',
  });

  // form hooks

  const {
    register: register1,
    getValues: getValues1,
    watch: watch1,
    formState: { errors: errors1, dirtyFields: dirtyFields1, isValid: isValid1 },
  } = useForm<ValidationStep1>({
    mode: 'onChange',
    resolver: yupResolver(schema[0]),
    defaultValues: {
      email: '',
      code: '',
      password: '',
      confirmPassword: '',
    },
  });

  const {
    register: register2,
    getValues: getValues2,
    watch: watch2,
    formState: { errors: errors2, dirtyFields: dirtyFields2, isValid: isValid2 },
  } = useForm<ValidationStep2>({
    mode: 'onChange',
    resolver: yupResolver(schema[1]),
    defaultValues: {
      nickname: '',
    },
  });
  const {
    register: register3,
    getValues: getValues3,
    watch: watch3,
    formState: { errors: errors3, dirtyFields: dirtyFields3, isValid: isValid3 },
  } = useForm<ValidationStep3>({
    mode: 'onChange',
    resolver: yupResolver(schema[2]),
    defaultValues: {
      searchSkill: '',
      urlString: '',
      selectedJob: '',
      selectedExperience: '',
      selectedSkills: [],
      urls: [],
      introduction: '',
    },
  });
  // query hooks
  // calculated values
  // effects
  // handlers

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void => {
    setThirdStepState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handlerKeyDown = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      setThirdStepState({
        ...thirdStepState,
        urls: [...thirdStepState.urls, thirdStepState.urlString],
        urlString: '',
      });
    }
  };

  const moveNextStep = (): void => {
    if (step < 2) {
      setStep((prevState) => prevState + 1);
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
          margin: '0 auto',
          height: step !== 2 ? '588px' : '718px',
        }}
      >
        <FlexBox width='100%' height='100%' direction='column' css={{ gap: '25px' }}>
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
                setStep((prevState) => (prevState ? prevState - 1 : 0));
              }}
            />
          </FlexBox>
          <UnderlineTitle title='회원가입' />
          <FlexBox width='392px' height='100%' css={{ margin: '0 auto', transform: `translateX(-${step * 482}px)` }}>
            {/* <-- step1 */}
            <FlexBox justifyContent='center' width='100%' height='447px' css={{ margin: '0 auto' }}>
              <FlexBox direction='column' css={{ marginTop: '25px' }}>
                <FlexBox>
                  <Input
                    type='email'
                    placeholder='이메일'
                    message={prevValue.prevEmailValue === watch1('email') ? message.emailMessage : ''}
                    css={{ width: '288px', marginBottom: '16px' }}
                    {...register1('email')}
                  />
                  <RequestButton
                    value={getValues1('email')}
                    onClick={() => {
                      setMessage({
                        ...message,
                        emailMessage: '인증번호를 전송하였습니다.',
                      });
                      setPrevValue({ ...prevValue, prevEmailValue: watch1('email') });
                    }}
                  >
                    인증요청
                  </RequestButton>
                </FlexBox>
                <FlexBox>
                  <Input
                    type='text'
                    placeholder='코드입력'
                    maxLength={6}
                    message={prevValue.prevCodeValue === watch1('code') ? message.codeMessage : ''}
                    css={{ width: '288px', marginBottom: '16px' }}
                    {...register1('code')}
                  />
                  <RequestButton
                    value={watch1('code')}
                    onClick={() => {
                      setMessage({
                        ...message,
                        codeMessage: '인증이 완료되었습니다.',
                      });
                      // setPrevValue({ ...prevValue, prevCodeValue: watch('code') });
                    }}
                  >
                    확인
                  </RequestButton>
                </FlexBox>
                <FlexBox>
                  <Input
                    type='password'
                    placeholder='비밀번호 입력'
                    message='영문, 숫자, 특수문자 조합 8~16자리로 입력해주세요.'
                    autoComplete='off'
                    error={errors1.password}
                    getValues={getValues1('password')}
                    iconProps={{
                      iconImage: IconPasswordShow,
                      alt: 'show password',
                    }}
                    css={{ width: '100%', marginBottom: '16px' }}
                    {...register1('password')}
                  />
                </FlexBox>
                <FlexBox>
                  <Input
                    type='passwrod'
                    placeholder='비밀번호 확인'
                    autoComplete='off'
                    error={errors1.confirmPassword}
                    getValues={getValues1('confirmPassword')}
                    iconProps={{
                      iconImage: IconPasswordShow,
                      alt: 'show password',
                    }}
                    css={{ width: '100%', marginBottom: '16px' }}
                    {...register1('confirmPassword')}
                  />
                </FlexBox>
              </FlexBox>
              <SignupButton onClick={moveNextStep} disabled={!isValid1}>
                다음
              </SignupButton>
            </FlexBox>
            {/* --> */}
            {/* <-- step2 */}
            <FlexBox
              width='100%'
              height='447px'
              direction='column'
              alignItems='center'
              spacing={12}
              css={{ marginLeft: '90px' }}
            >
              <FlexBox width='392px' justifyContent='center' css={{ marginTop: '20px' }}>
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
                          onClick={() => setCharacterState(character)}
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
                  width='227px'
                  message='8자이내, 한글, 영문 숫자 혼용 가능'
                  placeholder='닉네임 입력'
                  {...register2('nickname')}
                />
                <RequestButton onClick={() => {}} value={getValues2('nickname')}>
                  중복확인
                </RequestButton>
              </FlexBox>
              <SignupButton onClick={moveNextStep} disabled={!isValid2}>
                다음
              </SignupButton>
            </FlexBox>
            {/* --> */}

            {/* <-- step3 */}
            <FlexBox width='100%' direction='column' alignItems='center' css={{ gap: '25px', marginLeft: '90px' }}>
              <FlexBox width='392px' justifyContent='space-between' css={{ marginTop: '25px' }}>
                <FlexBox width='212px' direction='column'>
                  <DropDown label='직무' options={jobsData} required />
                </FlexBox>
                <FlexBox width='168px' direction='column'>
                  <DropDown label='경력' options={careersData} required />
                </FlexBox>
              </FlexBox>
              <FlexBox width='100%' direction='column' css={{ position: 'relative' }}>
                <BottomLineInput
                  name='searchSkill'
                  type='text'
                  value={thirdStepState.searchSkill}
                  onChange={handleChange}
                  placeholder='기술 스택 검색'
                  css={{ padding: '10px 40px 0px 40px' }}
                ></BottomLineInput>
                <img
                  alt='search'
                  src={IconSearch}
                  css={{ marginTop: '15px', marginLeft: '5px', position: 'absolute' }}
                />
                <FlexBox
                  css={{
                    flexWrap: 'wrap',
                    maxHeight: '30px',
                    overflowY: 'auto',
                  }}
                >
                  {!!thirdStepState.selectedSkills.length &&
                    thirdStepState.selectedSkills.map((skill) => (
                      <SkillTab
                        css={[
                          { width: '64px' },
                          skill.length > 7 && skill.length < 14 && { width: '136px' },
                          skill.length >= 14 && { width: '208px' },
                        ]}
                        key={skill}
                        skill={skill}
                      >
                        {skill}
                      </SkillTab>
                    ))}
                </FlexBox>
                {thirdStepState.searchSkill && (
                  <SkillDropdown thirdStepState={thirdStepState} onClick={setThirdStepState} skills={skills} />
                )}
              </FlexBox>
              <FlexBox width='100%' direction='column'>
                <textarea
                  onChange={handleChange}
                  value={thirdStepState.introduction}
                  name='introduction'
                  placeholder='안녕하세욥!'
                  css={{
                    marginTop: '8px',
                    width: '100%',
                    height: '98px',
                    fontWeight: '500',
                    fontSize: '14px',
                    borderRadius: 8,
                    border: `2px solid ${palette.secondary.n300}`,
                    padding: '8px 24px 8px 8px',
                    outline: 'none',
                    resize: 'none',
                  }}
                />
              </FlexBox>
              <FlexBox width='100%' direction='column'>
                <BottomLineInput
                  onKeyDown={handlerKeyDown}
                  placeholder='URL을 입력해주세요.'
                  type='text'
                  name='urlString'
                  onChange={handleChange}
                  value={thirdStepState.urlString}
                />
                {thirdStepState.urls.map((url) => (
                  <FlexBox key={url} css={{ padding: '5px' }}>
                    <a
                      css={{
                        color: palette.primary.main,
                        textDecoration: 'underline',
                        fontWeight: '500',
                        display: 'inline-block',
                      }}
                      href={url}
                      target='_blank'
                      rel='noreferrer'
                    >
                      {url.includes('https://') ? url : 'https://' + url}
                    </a>
                    <img
                      alt='delete-url'
                      src={DeleteUrl}
                      css={{ marginLeft: '10px', cursor: 'pointer' }}
                      onClick={() => {
                        setThirdStepState({
                          ...thirdStepState,
                          urls: thirdStepState.urls?.filter((urlName) => urlName !== url),
                        });
                      }}
                    />
                  </FlexBox>
                ))}
              </FlexBox>
              <SignupButton
                css={{ top: '529px' }}
                // Todo: api연결
              >
                회원가입
              </SignupButton>
              {/* --> */}
            </FlexBox>
          </FlexBox>
        </FlexBox>
      </ShadowBox>
    </FlexBox>
  );
}

export { SignUpScreen };
