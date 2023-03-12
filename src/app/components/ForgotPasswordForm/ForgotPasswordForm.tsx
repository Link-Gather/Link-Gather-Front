import React, { useState, useRef } from 'react';
import IconArrowRight from '@assets/images/icons/icon-arrow-right-white.svg';
import IconArrowLeft from '@assets/images/icons/icon-arrow-left.svg';
import { FlexBox, UnderlineTitle, Input, Button } from '@elements';
import palette from '@libs/theme/palettes';
import { ROUTE_PATHS } from '@routes';
import { FORGOT_PASSWORD_INFO, type IForgotPasswordInfo } from './forgotPasswordForm.data';
import { checkValidation } from '@libs/util';

function ForgotPasswordForm(props: { step: number }) {
  // prop destruction
  const { step } = props;
  // lib hooks
  // state, ref, querystring hooks
  const inputRef = useRef<HTMLInputElement>(null);
  const [forgotPasswordInfo, setForgotPasswordInfo] = useState<IForgotPasswordInfo[]>(FORGOT_PASSWORD_INFO);
  // form hooks
  // query hooks
  // calculated values
  const isPassAllValidated =
    forgotPasswordInfo.filter((info) => info.step === step && info.isValidated).length ===
    forgotPasswordInfo.filter((info) => info.step === step).length;
  // effects
  // handlers

  const handleInputCheck = (event: React.ChangeEvent<HTMLInputElement>, inputName: string) => {
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
    <FlexBox width='320px' direction='column' css={{ minWidth: '320px', gap: '40px' }}>
      <a
        href={ROUTE_PATHS.logIn}
        css={{
          position: 'absolute',
          top: '40px',
          left: '40px',
        }}
      >
        <img src={IconArrowLeft} alt='go back' />
      </a>
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
              onChange={(event) => handleInputCheck(event, info.name)}
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
          height='48px'
          fontSize='20px'
          color={palette.contrastText}
          backgroundColor={palette.primary.main}
          borderRadius='32px'
          // TODO: 버튼 클릭 시 비밀번호 찾기, 비밀번호 재설정 API 호출
          css={{
            marginTop: '24px',
          }}
          disabled={!isPassAllValidated}
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
