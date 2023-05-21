type Provider = 'kakao' | 'github' | 'google' | 'link-gather';

type OauthProvider = Exclude<Provider, 'link-gather'>;

type PurposeType = 'Improvement' | 'Business' | 'Fun' | 'Study';

type JobType = 'FrontendDeveloper' | 'BackendDeveloper' | 'Designer' | 'ProductManager';

type ProjectStatus = 'Recruiting' | 'Progressing' | 'Finish' | 'Close';
