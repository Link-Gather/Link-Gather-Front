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

  static getPurposeOptions(): { label: ProjectPurpose; value: PurposeType }[] {
    return purposes.map((purpose) => ({ label: ProjectPurpose[purpose], value: purpose }));
  }

  static getStatusOptions(): { label: string; value: ProjectStatus }[] {
    return [
      { label: '모집 중', value: 'Recruiting' },
      { label: '진행 중', value: 'Progressing' },
      // TODO: 추가필요
      // { label: '추가 모집중', value: 'Recruiting' },
      { label: '완료', value: 'Finish' },
    ];
  }

  /**
   * 상태 포맷팅, 그에따른 스타일을 반환한다.
   */
  static getInfo(status: ProjectStatus): [string, { color: string; backgroundColor: string }] {
    switch (status) {
      case 'Progressing':
        return ['진행 중', { color: '#000', backgroundColor: palette.primary.p20 }];
      case 'Recruiting':
        return ['모집 중', { color: '#fff', backgroundColor: palette.primary.main }];
      case 'Finish':
        return ['완료', { color: '#000', backgroundColor: palette.secondary.n60 }];
      default:
        return undefined as never;
    }
  }
}
