export class Role {
  id!: number;

  userId!: string;

  projectId!: string;

  type!: RoleType;

  job!: JobType;

  static getFormattedJob(job: JobType) {
    switch (job) {
      case 'backendDeveloper':
        return '백엔드';
      case 'frontendDeveloper':
        return '프론트엔드';
      case 'designer':
        return '디자인';
      case 'productManager':
        return '기획';
      default:
        return undefined as never;
    }
  }

  static getBackgroundColor(job: JobType) {
    switch (job) {
      case 'backendDeveloper':
        return '#ACE0FF';
      case 'frontendDeveloper':
        return '#21C982';
      case 'designer':
        return '#FF7E55';
      case 'productManager':
        return '#F7D35F';
      default:
        return undefined as never;
    }
  }
}
