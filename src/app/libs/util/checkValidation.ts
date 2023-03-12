export const checkValidation = (type: string, value: string) => {
  const pattern: Record<string, RegExp> = {
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    password: /^(?=.*\d)(?=.*[a-zA-Z])(?=.*\W)(?!.*\s).{8,16}$/,
    confirmPassword: /^(?=.*\d)(?=.*[a-zA-Z])(?=.*\W)(?!.*\s).{8,16}$/,
  };

  return pattern[type].test(value);
};
