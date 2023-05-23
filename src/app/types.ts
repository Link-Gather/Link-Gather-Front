type Provider = 'kakao' | 'github' | 'google' | 'link-gather';

type OauthProvider = Exclude<Provider, 'link-gather'>;

type JobType = 'frontendDeveloper' | 'backendDeveloper' | 'designer' | 'productManager';

type RoleType = 'leader' | 'member';
