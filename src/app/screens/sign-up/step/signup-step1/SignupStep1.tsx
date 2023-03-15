import { useState, useCallback, ChangeEvent } from 'react';
import { FlexBox, RequestButton, Input, Button } from '@elements';
import { useForm } from 'react-hook-form';
import palette from '@libs/theme/palettes';
// import

const SignupStep1 = ({ moveNextStep }: { moveNextStep: () => void }) => {
  // prop destruction
  // lib hooks
  const { register, handleSubmit } = useForm();
  // state, ref, querystring hooks
  const [label, setLabel] = useState({
    firstLabel: '',
    secondLabel: '',
  });
  const [inputs, setInputs] = useState({
    email: '',
    code: '',
    password: '',
    confirmPassword: '',
  });

  // form hooks
  // query hooks
  // calculated values
  // effects
  // handlers
  const { email, code, password, confirmPassword } = inputs;

  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>): void => {
      setInputs({
        ...inputs,
        [e.target.name]: e.target.value,
      });
    },
    [inputs]
  );

  // const checkNull = () => {
  //   if (email !== '' && code !== '' && password !== '' && confirmPassword !== '') {
  //     if (password === confirmPassword) return true;
  //   }
  // };

  const sendCode = (labelNumber: string) => {
    if (labelNumber === 'firstLabel') {
      setLabel({ ...label, firstLabel: `${label.firstLabel ? '코드를 재전송했습니다.' : '코드를 전송했습니다.'}` });
    } else {
      setLabel({ ...label, secondLabel: '인증이 완료되었습니다' });
    }
  };
  // const passwordValidation = (password: string) => {
  //   let reg = new RegExp(/^(?=.*[a-zA-Z])(?=.*[0-9]).{8,16}$/);
  //   if (
  //     (password.length > 0 && !reg.test(password)) ||
  //     (password.length > 0 && (password.length < 8 || password.length > 16))
  //   ) {
  //     return 'error';
  //   }
  // };

  // const confirmErrorCheck = () => {
  //   if (password !== confirmPassword) return 'error';
  //   return;
  // };

  return (
    <FlexBox position='relative' justifyContent='center'>
      <form onSubmit={handleSubmit((data) => alert(JSON.stringify(data)))}>
        <FlexBox spacing={2} direction='column' marginTop='25px'>
          <FlexBox>
            <Input
              name='email'
              value={email}
              placeholder='이메일'
              width='100%'
              height={50}
              onChange={onChange}
              message={label.firstLabel}
              inputStatus='inActive'
              // {...register('email')}
            />
            <RequestButton
              width='94px'
              height='50px'
              fontSize='14px'
              marginLeft='10px'
              onClick={(e) => {
                // e.preventDefault();
                sendCode('firstLabel');
              }}
              value={email}
            >
              인증요청
            </RequestButton>
          </FlexBox>
          <FlexBox>
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
              width='94px'
              height='50px'
              fontSize='14px'
              marginLeft='10px'
              onClick={(e) => {
                // e.preventDefault();
                sendCode('secondLabel');
              }}
              value={code}
            >
              확인
            </RequestButton>
          </FlexBox>
          <FlexBox>
            <Input
              name='password'
              value={password}
              type='password'
              placeholder='비밀번호 입력'
              height={50}
              width='369px'
              message='8~16자리, 영문과 숫자로 입력해주세요'
              onChange={onChange}
              autoComplete='off'
              inputStatus='inActive'
            />
          </FlexBox>
          <FlexBox>
            <Input
              name='confirmPassword'
              value={confirmPassword}
              type='password'
              placeholder='비밀번호 확인'
              height={50}
              width='369px'
              onChange={onChange}
              autoComplete='off'
              inputStatus='inActive'
            />
          </FlexBox>
        </FlexBox>
      </form>
      <Button
        onClick={moveNextStep}
        color={palette.contrastText}
        backgroundColor={palette.primary.main}
        width={320}
        height={48}
        fontSize={20}
        css={{ position: 'absolute', top: '90%' }}
        // disabled={checkNull() ? false : true}
      >
        다음
      </Button>
    </FlexBox>
  );
};

export { SignupStep1 };
