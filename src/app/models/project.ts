import palette from '../libs/theme/palettes';

enum PurposeEnum {
  Improvement = '역량 강화/포트폴리오',
  Business = '수입 창출/사업',
  Fun = '재미',
  Study = '공부',
}

const purposes = ['Improvement', 'Business', 'Fun', 'Study'] as const;

export class Project {
  id!: string;
  title!: string;
  description!: string;
  period!: number;
  purpose!: PurposeType;
  stacks!: string[];
  status!: ProjectStatus;
  leaderJob!: JobType;
  recruitMember!: {
    frontendDeveloper: number;
    backendDeveloper: number;
    designer: number;
    productManager: number;
  };

  static getPurposeOptions(): { label: PurposeEnum; value: PurposeType }[] {
    return purposes.map((purpose) => ({ label: PurposeEnum[purpose], value: purpose }));
  }

  static getStatusColor(status: ProjectStatus) {
    switch (status) {
      case 'Progressing':
        return palette.primary.p20;
      case 'Recruiting':
        return palette.primary.main;
      case 'Finish':
        return palette.secondary.n60;
      //TODO: 재모집으로 변경 필요
      case 'Close':
        return palette.primary.main;
    }
  }
}
