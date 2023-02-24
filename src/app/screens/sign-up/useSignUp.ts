import React, { ChangeEvent, useState } from 'react';

export function useSignUp() {
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
  const { email, code, password, confirmPassword } = inputs;

  const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

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

  return {
    label,
    inputs,
    onChange,
    checkNull,
    sendCode,
  };
}
