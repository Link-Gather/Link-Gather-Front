export interface ValidationSignup {
  email: string;
  code: string;
  password: string;
  confirmPassword: string;
  nickname: string;
}
export interface MessageType {
  emailMessage: string;
  codeMessage: string;
  confirmPasswordMessage: string;
}
export interface prevValueType {
  prevEmailValue: string;
  prevCodeValue: string;
}

export interface CharacterProps {
  id: number;
  src: string;
  backgroundColor: string;
  width: string;
  height: string;
  marginTop: string;
}
