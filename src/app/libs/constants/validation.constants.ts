export const VALIDATION_PATTERN: Record<string, RegExp> = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  password: /^(?=.*\d)(?=.*[a-zA-Z])(?=.*\W)(?!.*\s).{8,16}$/,
};
