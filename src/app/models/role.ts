export class Role {
  id!: number;

  userId!: string;

  projectId!: string;

  type!: RoleType;

  job!: JobType;

  /**
   * formattedJob, backgroundColor를 반환한다.
   */
  static getInfo(job: JobType) {
    switch (job) {
      case 'backendDeveloper':
        return { formattedJob: '백엔드', backgroundColor: '#AEC0FF' };
      case 'frontendDeveloper':
        return { formattedJob: '프론트엔드', backgroundColor: '#21C982' };
      case 'designer':
        return { formattedJob: '디자인', backgroundColor: '#FF7E55' };
      case 'productManager':
        return { formattedJob: '기획', backgroundColor: '#F7D35F' };
      default:
        return undefined as never;
    }
  }
}
