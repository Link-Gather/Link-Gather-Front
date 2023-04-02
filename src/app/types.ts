export type Provider = 'kakao' | 'github' | 'google' | 'link-gather';

export type OauthProvider = Exclude<Provider, 'link-gather'>;

export type ComponentStyle = 'full' | 'contents';
