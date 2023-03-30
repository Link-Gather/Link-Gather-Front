import { useState, KeyboardEvent, ChangeEvent } from 'react';
import palette from '@libs/theme/palettes';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { characters, skills } from '@screens';
import { ShadowBox, DropDown, SkillDropdown } from '@components';
import { FlexBox, UnderlineTitle, Input, RequestButton, CategoryTitle, Button, ImageBox, SkillTab } from '@elements';
import { VALIDATION_PATTERN } from '@libs/constants';
import IconArrowLeft from '@assets/images/icons/icon-arrow-left.svg';
import IconSearch from '@assets/images/icons/icon-search.svg';
import styled from '@emotion/styled';

interface ValidationSignup {
  email: string;
  code: string;
  password: string;
  confirmPassword: string;
  nickname: string;
}
interface MessageType {
  emailMessage: string;
  codeMessage: string;
  confirmPasswordMessage: string;
}
interface prevValueType {
  prevEmailValue: string;
  prevCodeValue: string;
}

interface Props {
  id: number;
  src: string;
  backgroundColor: string;
  width: string;
  height: string;
  marginTop: string;
}

const SignupBox = () => {
  // prop destruction
  // lib hooks
  // state, ref, querystring hooks

  const [message, setMessage] = useState<MessageType>({
    emailMessage: '',
    codeMessage: '',
    confirmPasswordMessage: '',
  });
  const [prevValue, setPrevValue] = useState<prevValueType>({
    prevEmailValue: '',
    prevCodeValue: '',
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
    formState: { errors, dirtyFields, isValid },
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

  const [characterState, setCharacterState] = useState<Props>(characters[0]);
  // form hooks

  const [searchSkill, setSearchSkill] = useState<string>('');
  const [urlString, setUrlString] = useState<string>('');
  const [selectSkill, setSelectSkill] = useState<string[]>([]);
  const [urlArray, setUrlArray] = useState<string[]>([]);
  // form hooks
  // query hooks
  // calculated values
  const jobData = ['프론트엔드', '백엔드', '디자이너', '기획자'];
  const experienceData = ['학생/취준생', '1~3년차', '3~5년차', '5~10년차', '10년차이상'];
  // effects
  // handlers
  const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearchSkill(e.target.value);
  };

  const onChangeUrl = (e: ChangeEvent<HTMLInputElement>): void => {
    setUrlString(e.target.value);
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      setUrlArray([...urlArray, urlString]);
      setUrlString('');
    }
  };

  const onDeleteUrl = (url: string) => {
    setUrlArray(urlArray?.filter((urlName) => urlName !== url));
  };

  const [step, setStep] = useState<number>(0);
  // form hooks
  // query hooks
  // calculated values
  // effects
  // handlers
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
          {/* step111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111 */}
          <FlexBox justifyContent='center' css={{ width: '100%', margin: '0 auto' }}>
            <FlexBox direction='column' css={{ marginTop: '25px' }}>
              <FlexBox>
                <Input
                  type='email'
                  placeholder='이메일'
                  message={prevValue.prevEmailValue === getValues('email') ? message.emailMessage : ''}
                  inputStatus={getValues('email') ? 'active' : 'inActive'}
                  css={{ width: '288px', marginBottom: '16px' }}
                  {...register('email')}
                />
                <RequestButton
                  value={watch('email')}
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
                  message={prevValue.prevCodeValue === getValues('code') ? message.codeMessage : ''}
                  inputStatus={dirtyFields.code ? 'active' : 'inActive'}
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
                  inputStatus={!dirtyFields.password ? 'inActive' : errors.password || !isValid ? 'error' : 'active'}
                  css={{ width: '100%', marginBottom: '16px' }}
                  {...register('password')}
                />
              </FlexBox>
              <FlexBox>
                <Input
                  type='password'
                  placeholder='비밀번호 확인'
                  autoComplete='off'
                  inputStatus={
                    !dirtyFields.confirmPassword ? 'inActive' : errors.confirmPassword || !isValid ? 'error' : 'active'
                  }
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
            <SignupButton onClick={moveNextStep}>다음</SignupButton>
          </FlexBox>
          {/* step111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111 */}
          {/* step111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111 */}

          {/* step222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222 */}
          {/* step222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222 */}
          <FlexBox width='100%' direction='column' alignItems='center' spacing={12} css={{ marginLeft: '90px' }}>
            <FlexBox width='392px' height='100px' justifyContent='center' css={{ marginTop: '20px' }}>
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
                <ImageBox
                  imageSrc={characterState.src}
                  width='50%'
                  alt='selectCharacter'
                  css={{
                    height: characterState.height,
                    width: characterState.width,
                    marginTop: characterState.marginTop,
                  }}
                ></ImageBox>
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
                      onClick={() => setCharacterState(character)}
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
                      <ImageBox
                        alt='character'
                        width={character.width}
                        height={character.height}
                        imageSrc={character.src}
                        css={{ marginTop: character.marginTop }}
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
                inputStatus={!dirtyFields.nickname ? 'inActive' : errors.nickname ? 'error' : 'active'}
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
            <SignupButton onClick={moveNextStep}>다음</SignupButton>
          </FlexBox>
          {/* step222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222 */}
          {/* step222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222 */}

          {/* step333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333 */}
          {/* step333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333 */}
          <FlexBox width='100%' direction='column' alignItems='center' css={{ gap: '25px', marginLeft: '90px' }}>
            <FlexBox width='392px' justifyContent='space-between' css={{ marginTop: '25px' }}>
              <FlexBox width='212px' direction='column'>
                <CategoryTitle label='직무*' />
                <DropDown value='기획자' data={jobData}></DropDown>
              </FlexBox>
              <FlexBox width='168px' direction='column'>
                <CategoryTitle label='경력*' />
                <DropDown value='1~3년차' data={experienceData}></DropDown>
              </FlexBox>
            </FlexBox>
            <FlexBox width='100%' direction='column' css={{ position: 'relative' }}>
              <CategoryTitle label='보유기술*' />
              <BottomLineInput
                name='searchSkill'
                type='text'
                value={searchSkill}
                onChange={onChange}
                placeholder='기술 스택 검색'
                css={{ padding: '10px 40px 0px 40px' }}
              ></BottomLineInput>
              <ImageBox
                alt={'search'}
                imageSrc={IconSearch}
                position='absolute'
                width='25px'
                css={{ marginTop: '37px', marginLeft: '5px' }}
              ></ImageBox>
              <FlexBox
                css={{
                  flexWrap: 'wrap',
                  maxHeight: '30px',
                  overflowY: 'auto',
                }}
              >
                {selectSkill.length !== 0 &&
                  selectSkill.map((skill) => (
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
              {searchSkill ? (
                <SkillDropdown
                  searchSkill={searchSkill}
                  selectSkill={selectSkill}
                  setSelectSkill={setSelectSkill}
                  setSearchSkill={setSearchSkill}
                  skills={skills}
                />
              ) : null}
            </FlexBox>
            <FlexBox width='100%' direction='column'>
              <CategoryTitle label='자기소개 *' />
              <textarea
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
                onChange={onChangeUrl}
                value={urlString}
              />
              {urlArray.map((url) => (
                <FlexBox css={{ padding: '5px' }}>
                  <a
                    css={{
                      color: palette.primary.main,
                      textDecoration: 'underline',
                      fontWeight: '500',
                      display: 'inline-block',
                    }}
                    key={url}
                    href={url}
                    target='_blank'
                    rel='noreferrer'
                  >
                    {url}
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
            <SignupButton onClick={moveNextStep}>회원가입</SignupButton>
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
  bottom: '0',
  borderRadius: '32px',
  backgroundColor: palette.primary.main,
  width: '320px',
  height: '48px',
  fontSize: '20px',
  fontWeight: '600',
  letterSpacing: '0.6px',
  cursor: 'pointer',
});
