import palette from '../libs/theme/palettes';

export enum ProjectPurpose {
  'improvement' = '역량 강화/포트폴리오',
  'business' = '수입 창출/사업',
  'fun' = '재미',
  'study' = '공부',
}

const purposes = ['improvement', 'business', 'fun', 'study'] as const;

export class Project {
  id!: string;
  title!: string;
  description!: string;
  period!: number;
  purpose!: PurposeType;
  stacks!: number[];
  status!: ProjectStatus;
  leaderJob!: JobType;
  recruitMember!: {
    frontendDeveloper: number;
    backendDeveloper: number;
    designer: number;
    productManager: number;
  };
  bookMarkCount!: number;
  members!: {
    id: string;
    email: string;
    nickname: string;
    profileImage: string;
    provider: Provider;
    job: JobType;
    type: RoleType;
  }[];

  static getPurposeOptions(): { label: ProjectPurpose; value: PurposeType }[] {
    return purposes.map((purpose) => ({ label: ProjectPurpose[purpose], value: purpose }));
  }

  static formattedPeriod(period: number) {
    switch (period) {
      case 1:
        return '1개월 이하';
      case 2:
        return '2개월';
      case 3:
        return '3개월';
      case 4:
        return '4개월';
      case 5:
        return '5개월';
      case 6:
        return '6개월';
      case 7:
        return '7개월';
      case 8:
        return '8개월';
      case 9:
        return '9개월';
      case 10:
        return '10개월';
      case 11:
        return '11개월';
      case 12:
        return '1년';
      default:
        return undefined as never;
    }
  }

  static getStatusOptions(): { label: string; value: ProjectStatus }[] {
    return [
      { label: '모집 중', value: 'recruiting' },
      { label: '진행 중', value: 'progressing' },
      // TODO: 추가필요
      // { label: '추가 모집중', value: 'Recruiting' },
      { label: '완료', value: 'finish' },
    ];
  }

  /**
   * 상태 포맷팅, 그에따른 스타일을 반환한다.
   */
  static getInfo(status: ProjectStatus): [string, { color: string; backgroundColor: string }] {
    switch (status) {
      case 'progressing':
        return ['진행 중', { color: '#000', backgroundColor: palette.primary.p20 }];
      case 'recruiting':
        return ['모집 중', { color: '#fff', backgroundColor: palette.primary.main }];
      case 'finish':
        return ['완료', { color: '#000', backgroundColor: palette.secondary.n60 }];
      default:
        return undefined as never;
    }
  }
}
