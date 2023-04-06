export type ValidationSignup = {
  email: string;
  code: string;
  password: string;
  confirmPassword: string;
  nickname: string;
};

export type MessageType = {
  emailMessage: string;
  codeMessage: string;
  confirmPasswordMessage: string;
};

export type PrevValueType = {
  prevEmailValue: string;
  prevCodeValue: string;
};

export type CharacterProps = {
  id: number;
  src: string;
  backgroundColor: string;
  width: string;
  height: string;
  marginTop: string;
};

export type ThirdStepData = {
  searchSkill: string;
  urlString: string;
  selectedJob: string;
  selectedExperience: string;
  selectedSkill: string[];
  urls: string[];
  introduction: string;
};
