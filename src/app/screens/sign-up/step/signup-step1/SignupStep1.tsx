import { useState, useCallback, ChangeEvent, useEffect, useRef } from 'react';
import { FlexBox, RequestButton, Input, Button } from '@elements';
import palette from '@libs/theme/palettes';

interface Props {
  email: string;
  code: string;
  password: string;
  confirmPassword: string;
}

const SignupStep1 = ({
  moveNextStep,
  inputs,
  setInputs,
}: {
  moveNextStep: () => void;
  inputs: Props;
  setInputs: React.Dispatch<React.SetStateAction<Props>>;
}) => {
  // prop destruction
  // lib hooks
  // state, ref, querystring hooks
  const [label, setLabel] = useState({
    firstLabel: '',
    secondLabel: '',
  });

  // const inputRef1 = useRef<HTMLInputElement>(null);
  // const inputRef2 = useRef<HTMLInputElement>(null);
  // const inputRef3 = useRef<HTMLInputElement>(null);
  // const inputRef4 = useRef<HTMLInputElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  // const inputRef2 = useRef<HTMLInputElement>(null);
  // const inputRef3 = useRef<HTMLInputElement>(null);
  // const inputRef4 = useRef<HTMLInputElement>(null);
  const { email, code, password, confirmPassword } = inputs;
  // form hooks
  // query hooks
  // calculated values
  const checkNull = () => {
    if (email !== '' && code !== '' && password !== '' && confirmPassword !== '') {
      if (password === confirmPassword) return true;
    }
  };
  const sendCode = (labelNumber: string) => {
    if (labelNumber === 'firstLabel') {
      setLabel({ ...label, firstLabel: `${label.firstLabel ? '코드를 재전송했습니다.' : '코드를 전송했습니다.'}` });
    } else {
      setLabel({ ...label, secondLabel: '인증이 완료되었습니다' });
    }
  };
  const passwordValidation = (password: string) => {
    let reg = new RegExp(/^(?=.*[a-zA-Z])(?=.*[0-9]).{8,16}$/);
    if (
      (password.length > 0 && !reg.test(password)) ||
      (password.length > 0 && (password.length < 8 || password.length > 16))
    ) {
      return 'error';
    }
  };

  const confirmErrorCheck = () => {
    if (password !== confirmPassword) return 'error';
    return;
  };
  // effects
  useEffect(() => {
    // for (let i = 0; i < inputRef.current.length; i++) {
    if (inputRef.current !== null) {
      inputRef.current.value = email;
      // inputRef.current[i].value = email;
    }
    // }
    // }
  }, [code, confirmPassword, email, password]);
  // handlers
  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>): void => {
      setInputs({
        ...inputs,
        [e.target.name]: e.target.value,
      });
    },
    [inputs, setInputs]
  );

  return (
    <FlexBox
      width='100%'
      height='100%'
      direction='column'
      alignItems='center'
      position='relative'
      css={{ gap: '25px' }}
    >
      <form css={{ height: '100%' }}>
        <FlexBox width='100%' marginTop='25px'>
          <Input
            name='email'
            value={email}
            placeholder='이메일'
            width='100%'
            height={50}
            onChange={onChange}
            message={label.firstLabel}
            ref={inputRef}
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
            // ref={inputRef2}
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
            inputType={passwordValidation(password)}
            autoComplete='off'
            // ref={inputRef3}
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
            inputType={confirmErrorCheck()}
            autoComplete='off'
            // ref={inputRef4}
          />
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
        disabled={checkNull() ? false : true}
      >
        다음
      </Button>
    </FlexBox>
  );
};

export { SignupStep1 };
