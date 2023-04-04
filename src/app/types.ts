type Provider = 'kakao' | 'github' | 'google' | 'link-gather';

type OauthProvider = Exclude<Provider, 'link-gather'>;
