export const checkValidation = (type: string, value: string) => {
  const pattern: Record<string, RegExp> = {
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    password: /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,16}$/,
    confirmPassword: /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,16}$/,
  };

  return pattern[type].test(value);
};
