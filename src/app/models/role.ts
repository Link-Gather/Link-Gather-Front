export class Role {
  id!: number;

  userId!: string;

  projectId!: string;

  type!: RoleType;

  job!: JobType;

  static getFormattedJob(job: JobType) {
    switch (job) {
      case 'BackendDeveloper':
        return '백엔드';
      case 'FrontendDeveloper':
        return '프론트엔드';
      case 'Designer':
        return '디자인';
      case 'ProductManager':
        return '기획';
      default:
        return undefined as never;
    }
  }

  static getBackgroundColor(job: JobType) {
    switch (job) {
      case 'BackendDeveloper':
        return '#ACE0FF';
      case 'FrontendDeveloper':
        return '#21C982';
      case 'Designer':
        return '#FF7E55';
      case 'ProductManager':
        return '#F7D35F';
      default:
        return undefined as never;
    }
  }
}
