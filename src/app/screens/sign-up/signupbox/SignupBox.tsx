import { useState, KeyboardEvent, ChangeEvent } from 'react';
import palette from '@libs/theme/palettes';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { characters, skills } from '@screens';
import { DropDown, SkillDropdown } from '@components';
import { FlexBox, UnderlineTitle, Input, RequestButton, CategoryTitle, SkillTab, ShadowBox } from '@elements';
import { MessageType, prevValueType, ValidationSignup, CharacterProps, ThirdStepData } from './types';
import { VALIDATION_PATTERN } from '@libs/constants/validation.constants';
import IconArrowLeft from '@assets/images/icons/icon-arrow-left.svg';
import IconSearch from '@assets/images/icons/icon-search.svg';
import styled from '@emotion/styled';

const SignupBox = () => {
  // prop destruction
  // lib hooks
  // state, ref, querystring hooks
  const [step, setStep] = useState<number>(0);
  const [message, setMessage] = useState<MessageType>({
    emailMessage: '',
    codeMessage: '',
    confirmPasswordMessage: '',
  });
  const [prevValue, setPrevValue] = useState<prevValueType>({
    prevEmailValue: '',
    prevCodeValue: '',
  });
  const [characterState, setCharacterState] = useState<CharacterProps>(characters[0]);
  const [thirdStepState, setThirdStepState] = useState<ThirdStepData>({
    searchSkill: '',
    urlString: '',
    selectJob: '',
    selectExperience: '',
    selectSkill: [],
    urlArray: [],
    introduction: '',
  });

  // form hooks
  const schema = yup.object().shape({
    email: yup.string(),
    code: yup.string(),
    password: yup.string().matches(VALIDATION_PATTERN.password),
    confirmPassword: yup.string().oneOf([yup.ref('password'), '']),
    nickname: yup.string().matches(VALIDATION_PATTERN.nickname),
  });

  const {
    register,
    getValues,
    watch,
    formState: { errors, dirtyFields },
  } = useForm<ValidationSignup>({
    mode: 'onChange',
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      code: '',
      password: '',
      confirmPassword: '',
      nickname: '',
    },
  });
  // query hooks
  // calculated values
  const jobData = ['프론트엔드', '백엔드', '디자이너', '기획자'];
  const experienceData = ['학생/취준생', '1~3년차', '3~5년차', '5~10년차', '10년차이상'];
  const canMoveStep2 = !!(
    getValues('email') &&
    getValues('code') &&
    getValues('password') &&
    getValues('confirmPassword')
  );
  const canMoveStep3 = getValues('nickname');
  // effects
  // handlers

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void => {
    setThirdStepState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      setThirdStepState({
        ...thirdStepState,
        urlArray: [...thirdStepState.urlArray, thirdStepState.urlString],
        urlString: '',
      });
    }
  };

  const onDeleteUrl = (url: string) => {
    setThirdStepState({ ...thirdStepState, urlArray: thirdStepState.urlArray?.filter((urlName) => urlName !== url) });
  };

  const moveNextStep = (): void => {
    if (step < 2) {
      setStep((prevState) => prevState + 1);
    }
  };
  return (
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
              setStep((prevState) => (prevState !== 0 ? prevState - 1 : 0));
            }}
          />
        </FlexBox>
        <UnderlineTitle title='회원가입' />
        <FlexBox width='392px' height='100%' css={{ margin: '0 auto', transform: `translateX(-${step * 482}px)` }}>
          {/* step111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111 */}
          <FlexBox justifyContent='center' width='100%' height='447px' css={{ margin: '0 auto' }}>
            <FlexBox direction='column' css={{ marginTop: '25px' }}>
              <FlexBox>
                <Input
                  type='email'
                  placeholder='이메일'
                  message={prevValue.prevEmailValue === watch('email') ? message.emailMessage : ''}
                  css={{ width: '288px', marginBottom: '16px' }}
                  {...register('email')}
                />
                <RequestButton
                  value={getValues('email')}
                  onClick={() => {
                    setMessage({
                      ...message,
                      emailMessage: '인증번호를 전송하였습니다.',
                    });
                    setPrevValue({ ...prevValue, prevEmailValue: watch('email') });
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
                  message={prevValue.prevCodeValue === watch('code') ? message.codeMessage : ''}
                  css={{ width: '288px', marginBottom: '16px' }}
                  {...register('code')}
                />
                <RequestButton
                  value={watch('code')}
                  onClick={() => {
                    setMessage({
                      ...message,
                      codeMessage: '인증이 완료되었습니다.',
                    });
                    setPrevValue({ ...prevValue, prevCodeValue: watch('code') });
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
                  error={errors.password}
                  css={{ width: '100%', marginBottom: '16px' }}
                  {...register('password')}
                />
              </FlexBox>
              <FlexBox>
                <Input
                  type='password'
                  placeholder='비밀번호 확인'
                  autoComplete='off'
                  error={errors.confirmPassword}
                  message={
                    !dirtyFields.confirmPassword
                      ? ''
                      : errors.confirmPassword
                      ? '비밀번호가 일치하지 않습니다.'
                      : '비밀번호가 일치합니다.'
                  }
                  css={{ width: '100%', marginBottom: '16px' }}
                  {...register('confirmPassword')}
                />
              </FlexBox>
            </FlexBox>
            <SignupButton
              onClick={moveNextStep}
              disabled={!canMoveStep2}
              css={{
                backgroundColor: !canMoveStep2 ? palette.secondary.n60 : palette.primary.main,
                cursor: !canMoveStep2 ? 'default' : 'pointer',
              }}
            >
              다음
            </SignupButton>
          </FlexBox>
          {/* step111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111 */}
          {/* step111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111 */}

          {/* step222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222 */}
          {/* step222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222 */}
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
                ></img>
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
                {...register('nickname')}
              ></Input>
              <RequestButton
                onClick={() => {}}
                fontSize='14px'
                value={getValues('nickname')}
                marginLeft='4px'
                height='50px'
                width='93px'
              >
                중복확인
              </RequestButton>
            </FlexBox>
            <SignupButton
              onClick={moveNextStep}
              disabled={!canMoveStep3}
              css={{
                backgroundColor: !canMoveStep3 ? palette.secondary.n60 : palette.primary.main,
                cursor: !canMoveStep3 ? 'default' : 'pointer',
              }}
            >
              다음
            </SignupButton>
          </FlexBox>
          {/* step222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222 */}
          {/* step222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222 */}

          {/* step333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333 */}
          {/* step333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333 */}
          <FlexBox width='100%' direction='column' alignItems='center' css={{ gap: '25px', marginLeft: '90px' }}>
            <FlexBox width='392px' justifyContent='space-between' css={{ marginTop: '25px' }}>
              <FlexBox width='212px' direction='column'>
                <CategoryTitle label='직무*' />
                <DropDown
                  value='기획자'
                  data={jobData}
                  selectItem={thirdStepState.selectJob}
                  thirdStepState={thirdStepState}
                  setThirdStepState={setThirdStepState}
                ></DropDown>
              </FlexBox>
              <FlexBox width='168px' direction='column'>
                <CategoryTitle label='경력*' />
                <DropDown
                  value='1~3년차'
                  data={experienceData}
                  selectItem={thirdStepState.selectExperience}
                  thirdStepState={thirdStepState}
                  setThirdStepState={setThirdStepState}
                ></DropDown>
              </FlexBox>
            </FlexBox>
            <FlexBox width='100%' direction='column' css={{ position: 'relative' }}>
              <CategoryTitle label='보유기술*' />
              <BottomLineInput
                name='searchSkill'
                type='text'
                value={thirdStepState.searchSkill}
                onChange={handleChange}
                placeholder='기술 스택 검색'
                css={{ padding: '10px 40px 0px 40px' }}
              ></BottomLineInput>
              <img
                alt={'search'}
                src={IconSearch}
                css={{ widht: '25px', marginTop: '37px', marginLeft: '5px', position: 'absolute' }}
              ></img>
              <FlexBox
                css={{
                  flexWrap: 'wrap',
                  maxHeight: '30px',
                  overflowY: 'auto',
                }}
              >
                {thirdStepState.selectSkill.length !== 0 &&
                  thirdStepState.selectSkill.map((skill) => (
                    <SkillTab
                      css={{
                        width: skill.length < 7 ? '64px' : skill.length < 14 ? '136px' : '208px',
                      }}
                      key={skill}
                    >
                      {skill}
                    </SkillTab>
                  ))}
              </FlexBox>
              {thirdStepState.searchSkill && (
                <SkillDropdown thirdStepState={thirdStepState} setThirdStepState={setThirdStepState} skills={skills} />
              )}
            </FlexBox>
            <FlexBox width='100%' direction='column'>
              <CategoryTitle label='자기소개 *' />
              <textarea
                onChange={handleChange}
                value={thirdStepState.introduction}
                name='introduction'
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
              ></textarea>
            </FlexBox>
            <FlexBox width='100%' direction='column'>
              <CategoryTitle label='참고 링크' />
              <BottomLineInput
                onKeyDown={onKeyDown}
                placeholder='URL을 입력해주세요.'
                type='text'
                name='urlString'
                onChange={handleChange}
                value={thirdStepState.urlString}
              />
              {thirdStepState.urlArray.map((url) => (
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
                  <button
                    css={{
                      width: '20px',
                      height: '20px',
                      marginLeft: '20px',
                      backgroundColor: palette.secondary.n90,
                      borderRadius: '20px',
                      color: 'white',
                      fontSize: '14px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      '&:hover': {
                        backgroundColor: palette.primary.main,
                      },
                    }}
                    onClick={() => {
                      onDeleteUrl(url);
                    }}
                  >
                    x
                  </button>
                </FlexBox>
              ))}
            </FlexBox>
            {/* step333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333 */}
            {/* step333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333 */}
            <SignupButton css={{ top: '529px' }} onClick={moveNextStep}>
              회원가입
            </SignupButton>
          </FlexBox>
        </FlexBox>
      </FlexBox>
    </ShadowBox>
  );
};

export { SignupBox };

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

const SignupButton = styled('button')({
  color: palette.contrastText,
  position: 'absolute',
  top: '400px',
  borderRadius: '32px',
  backgroundColor: palette.primary.main,
  width: '320px',
  height: '48px',
  fontSize: '20px',
  fontWeight: '600',
  letterSpacing: '0.6px',
  cursor: 'pointer',
});
