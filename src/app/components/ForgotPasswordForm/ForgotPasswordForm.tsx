import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FlexBox, UnderlineTitle, Input, Button, InputStatus } from '@elements';
import IconArrowRight from '@assets/images/icons/icon-arrow-right-white.svg';
import IconArrowLeft from '@assets/images/icons/icon-arrow-left.svg';
import IconCheckGreen from '@assets/images/icons/icon-check-green.svg';
import IconPasswordShow from '@assets/images/icons/icon-password-show.svg';
import IconPasswordHide from '@assets/images/icons/icon-password-hide.svg';
import palette from '@libs/theme/palettes';
import { ROUTE_PATHS } from '@routes';

interface Props {
  step: number;
}

interface IForgotPasswordInfo {
  name: string;
  type: 'email' | 'password' | 'text';
  status: InputStatus;
  isValidated: boolean;
  value: string;
  icon: string[];
  errorMessage: string;
  inActiveMessage: string;
  activeMessage: string;
  step: number;
  placeholder: string;
}

const FORGOT_PASSWORD_INFO: IForgotPasswordInfo[] = [
  {
    name: 'email',
    type: 'email',
    status: 'inActive',
    isValidated: false,
    value: '',
    icon: [IconCheckGreen],
    errorMessage: '올바른 이메일 형식을 입력해주세요.',
    inActiveMessage: '',
    activeMessage: '',
    step: 1,
    placeholder: '이메일',
  },
  {
    name: 'password',
    type: 'password',
    status: 'inActive',
    isValidated: false,
    value: '',
    icon: [IconPasswordHide, IconPasswordShow],
    errorMessage: '',
    inActiveMessage: '영문, 숫자, 특수문자 조합 8~20자리로 입력해주세요.',
    activeMessage: '',
    step: 2,
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
    step: 2,
    placeholder: '비밀번호 확인',
  },
];

const checkValidation = (type: string, value: string) => {
  const pattern: Record<string, RegExp> = {
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    password: /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,16}$/,
    confirmPassword: /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,16}$/,
  };

  return pattern[type].test(value);
};

function ForgotPasswordForm(props: Props) {
  // prop destruction
  const { step } = props;
  // lib hooks
  // state, ref, querystring hooks
  const inputRef = useRef<HTMLInputElement>(null);
  const [forgotPasswordInfo, setForgotPasswordInfo] = useState<IForgotPasswordInfo[]>(FORGOT_PASSWORD_INFO);
  // form hooks
  // query hooks
  // calculated values
  // effects
  // handlers

  const checkInputInfo = (event: React.ChangeEvent<HTMLInputElement>, inputName: string) => {
    const targetValue = event.currentTarget.value;
    const isValidated = checkValidation(inputName, targetValue);
    const isPasswordSame = forgotPasswordInfo.filter((item) => item.name === 'password')[0].value === targetValue;

    setForgotPasswordInfo(
      forgotPasswordInfo.map((info) =>
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

  const handlePasswordVisible = (inputName: string) => {
    setForgotPasswordInfo(
      forgotPasswordInfo.map((info) =>
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
    <FlexBox width={320} direction='column' css={{ minWidth: '320px', gap: '40px' }}>
      <Link
        to={ROUTE_PATHS.logIn}
        css={{
          position: 'absolute',
          top: '40px',
          left: '40px',
        }}
      >
        <img src={IconArrowLeft} alt='go back' />
      </Link>
      <UnderlineTitle title={step === 1 ? '비밀번호 찾기' : '비밀번호 재설정'} />
      <FlexBox direction='column' spacing={4}>
        {forgotPasswordInfo.map((info) =>
          info.step === step ? (
            <Input
              key={info.name}
              type={info.type}
              width='100%'
              height={50}
              placeholder={info.placeholder}
              onChange={(event) => checkInputInfo(event, info.name)}
              inputStatus={info.status}
              onClick={
                ['password', 'confirmPassword'].includes(info.name) ? () => handlePasswordVisible(info.name) : () => {}
              }
              message={info[`${info.status}Message`]}
              ref={inputRef}
            >
              {info.isValidated && info.type === 'email' ? (
                <img src={info.icon[0]} alt={`checked ${info.name}`} />
              ) : null}
              {info.value.length > 0 && ['password', 'confirmPassword'].includes(info.name) ? (
                <img src={info.type === 'password' ? info.icon[0] : info.icon[1]} alt={`checked ${info.name}`} />
              ) : null}
            </Input>
          ) : null
        )}

        <Button
          width='100%'
          height={48}
          fontSize={20}
          color={palette.contrastText}
          backgroundColor={palette.primary.main}
          onClick={() => console.log('forgot password')}
          css={{
            marginTop: 24,
          }}
          disabled={
            forgotPasswordInfo.filter((info) => info.step === step && info.isValidated).length !==
            forgotPasswordInfo.filter((info) => info.step === step).length
          }
        >
          {step === 1 ? (
            <>
              인증하기 <img src={IconArrowRight} alt='go next' />
            </>
          ) : (
            '비밀번호 변경하기'
          )}
        </Button>
      </FlexBox>
    </FlexBox>
  );
}

export { ForgotPasswordForm };
