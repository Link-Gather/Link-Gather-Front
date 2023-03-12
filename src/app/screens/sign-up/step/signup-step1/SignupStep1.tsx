import { useState, useCallback, ChangeEvent, useEffect, useRef } from 'react';
import { FlexBox, RequestButton, Input, Button, type InputStatus } from '@elements';
import IconPasswordShow from '@assets/images/icons/icon-password-show.svg';
import IconPasswordHide from '@assets/images/icons/icon-password-hide.svg';
import palette from '@libs/theme/palettes';

const SignupStep1 = ({ moveNextStep }: { moveNextStep: () => void }) => {
  // prop destruction
  // lib hooks
  // state, ref, querystring hooks
  const [signupInfo, setSignupInfo] = useState<ISignupInfo[]>(SIGNUP_INFO);
  // form hooks
  // query hooks
  // calculated values
  // effects
  // handlers
  const checkValidation = (type: string, value: string) => {
    const pattern: Record<string, RegExp> = {
      email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      password: /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,16}$/,
      confirmPassword: /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,16}$/,
    };

    return pattern[type].test(value);
  };
  const checkInputInfo = (event: React.ChangeEvent<HTMLInputElement>, inputName: string) => {
    const targetValue = event.currentTarget.value;
    const isValidated = checkValidation(inputName, targetValue);
    const isPasswordSame = signupInfo.filter((item) => item.name === 'password')[0].value === targetValue;

    setSignupInfo(
      signupInfo.map((info) =>
        info.name === inputName
          ? {
              ...info,
              status: isValidated
                ? info.name === 'confirmPassword'
                  ? isPasswordSame
                    ? 'active'
                    : 'error'
                  : 'active'
                : targetValue.length > 0
                ? 'error'
                : 'inActive',
              isValidated: info.name === 'confirmPassword' ? isPasswordSame : isValidated,
              value: targetValue,
            }
          : info
      )
    );
  };
  const handlePasswordVisible = (inputName: string): void => {
    setSignupInfo(
      signupInfo.map((info) =>
        info.name === inputName
          ? {
              ...info,
              type: info.type === 'password' ? 'text' : 'password',
            }
          : info
      )
    );
  };

  return (
    <FlexBox position='relative' width='100%' direction='column' marginTop='25px' css={{ gap: '25px' }}>
      {/* <FlexBox direction='column' width='100%' spacing={6}> */}
      {signupInfo.map((info) => (
        <FlexBox key={info.name} position='relative'>
          <Input
            type={info.type}
            width={info.name === 'email' || info.name === 'code' ? '100%' : '369px'}
            height={50}
            placeholder={info.placeholder}
            onChange={(event) => checkInputInfo(event, info.name)}
            inputStatus={info.status}
            onClick={
              ['password', 'confirmPassword'].includes(info.name) ? () => handlePasswordVisible(info.name) : () => {}
            }
            message={info[`${info.status}Message`]}
            autoComplete='off'
          >
            {info.value.length > 0 && ['password', 'confirmPassword'].includes(info.name) ? (
              <img src={info.type === 'password' ? info.icon[0] : info.icon[1]} alt={`checked ${info.name}`} />
            ) : null}
          </Input>
          {info.name === 'email' || info.name === 'code' ? (
            <RequestButton onClick={() => {}}>확인</RequestButton>
          ) : null}
        </FlexBox>
      ))}
      {/* <FlexBox width='100%' marginTop='25px'>
          <Input
            name='email'
            value={email}
            placeholder='이메일'
            width='100%'
            height={50}
            onChange={onChange}
            message={label.firstLabel}
            inputStatus='inActive'
          />
          <RequestButton
            onClick={() => {
              sendCode('firstLabel');
            }}
            value={email}
          >
            인증요청
          </RequestButton>
        </FlexBox>
        <FlexBox width='100%' marginTop='25px'>
          <Input
            name='code'
            value={code}
            placeholder='코드입력'
            width='100%'
            height={50}
            onChange={onChange}
            message={label.secondLabel}
            inputStatus='inActive'
          />
          <RequestButton
            onClick={() => {
              sendCode('secondLabel');
            }}
            value={code}
          >
            확인
          </RequestButton>
        </FlexBox>
        <FlexBox width='100%' marginTop='25px'>
          <Input
            name='password'
            value={password}
            type='password'
            placeholder='비밀번호 입력'
            height={50}
            width='369px'
            message='8~16자리, 영문과 숫자로 입력해주세요'
            onChange={onChange}
            inputStatus='inActive'
          />
        </FlexBox>
        <FlexBox width='100%' marginTop='25px'>
          <Input
            name='confirmPassword'
            value={confirmPassword}
            type='password'
            placeholder='비밀번호 확인'
            height={50}
            width='369px'
            onChange={onChange}
            inputStatus='inActive'
          />
        </FlexBox> */}
      {/* </FlexBox> */}
      <FlexBox width='100%' position='absolute' css={{ top: '90%' }}>
        <Button
          onClick={moveNextStep}
          color={palette.contrastText}
          backgroundColor={palette.primary.main}
          width={320}
          height={48}
          fontSize={20}
          css={{ margin: '0 auto' }}
          // disabled={checkNull() ? false : true}
        >
          다음
        </Button>
      </FlexBox>
    </FlexBox>
  );
};

export { SignupStep1 };

interface ISignupInfo {
  name: string;
  type: 'email' | 'password' | 'text';
  status: InputStatus;
  isValidated: boolean;
  value: string;
  icon: string[];
  errorMessage: string;
  inActiveMessage: string;
  activeMessage: string;
  placeholder: string;
}

const SIGNUP_INFO: ISignupInfo[] = [
  {
    name: 'email',
    type: 'email',
    status: 'inActive',
    isValidated: false,
    value: '',
    icon: [],
    errorMessage: '',
    inActiveMessage: '',
    activeMessage: '코드를 전송했습니다.',
    placeholder: '이메일',
  },
  {
    name: 'code',
    type: 'text',
    status: 'inActive',
    isValidated: false,
    value: '',
    icon: [],
    errorMessage: '',
    inActiveMessage: '',
    activeMessage: '인증이 완료되었습니다.',
    placeholder: '코드입력',
  },
  {
    name: 'password',
    type: 'password',
    status: 'inActive',
    isValidated: false,
    value: '',
    icon: [IconPasswordHide, IconPasswordShow],
    errorMessage: '',
    inActiveMessage: '8~16자리, 영문과 숫자로 입력해주세요',
    activeMessage: '',
    placeholder: '비밀번호',
  },
  {
    name: 'confirmPassword',
    type: 'password',
    status: 'inActive',
    isValidated: false,
    value: '',
    icon: [IconPasswordHide, IconPasswordShow],
    errorMessage: '비밀번호가 일치하지 않습니다 :(',
    inActiveMessage: '비밀번호를 한번 더 입력해주세요.',
    activeMessage: '비밀번호가 일치합니다 :)',
    placeholder: '비밀번호 확인',
  },
];
