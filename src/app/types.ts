type Provider = 'kakao' | 'github' | 'google' | 'link-gather';

type OauthProvider = Exclude<Provider, 'link-gather'>;

type PurposeType = 'improvement' | 'business' | 'fun' | 'study';

type JobType = 'frontendDeveloper' | 'backendDeveloper' | 'designer' | 'productManager';

type RoleType = 'leader' | 'member';

type ProjectStatus = 'Recruiting' | 'Progressing' | 'Finish' | 'Close';
