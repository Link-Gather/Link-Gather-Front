type Paginated<T> = { items: T[]; count: number };

type Provider = 'kakao' | 'github' | 'google' | 'link-gather';

type OauthProvider = Exclude<Provider, 'link-gather'>;

type PurposeType = 'improvement' | 'business' | 'fun' | 'study';

type JobType = 'frontendDeveloper' | 'backendDeveloper' | 'designer' | 'productManager';

type RoleType = 'leader' | 'member';

type ProjectStatus = 'recruiting' | 'progressing' | 'finish' | 'close';
