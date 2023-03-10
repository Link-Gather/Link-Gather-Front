import { useSignUp } from '../../useSignUp';
import { FlexBox, RequestButton, Input } from '@elements';

const Step1 = () => {
  // prop destruction
  const { label, inputs, onChange, sendCode, passwordValidation, confirmErrorCheck } = useSignUp();
  const { email, code, password, confirmPassword } = inputs;
  // lib hooks
  // state, ref, querystring hooks
  // form hooks
  // query hooks
  // calculated values
  // effects
  // handlers
  return (
    <FlexBox width='100%' height='100%' direction='column' alignItems='center' css={{ gap: '25px' }}>
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
          />
        </FlexBox>
      </form>
    </FlexBox>
  );
};

export { Step1 };
