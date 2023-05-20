type Provider = 'kakao' | 'github' | 'google' | 'link-gather';

type OauthProvider = Exclude<Provider, 'link-gather'>;

type JobType = 'FrontendDeveloper' | 'BackendDeveloper' | 'Designer' | 'ProductManager';

type RoleType = 'Leader' | 'Member';
