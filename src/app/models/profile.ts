export class Profile {
  id!: string;

  career!: number;

  job!: JobType;

  introduction!: string;

  stacks!: number[];

  urls!: string[];

  userId!: string;

  nickname!: string;

  profileImage!: string;

  static getCareerOptions() {
    return [
      //HACK: 0이 falsy한 값이라 일단 100으로 둔다.
      { label: '학생/취준생', value: 100 },
      { label: '1~3년차', value: 1 },
      { label: '3~5년차', value: 3 },
      { label: '5~10년차', value: 5 },
      { label: '10년차이상', value: 10 },
    ];
  }

  static getJobOptions(): { label: string; value: JobType }[] {
    return [
      { label: '프론트엔드', value: 'frontendDeveloper' },
      { label: '백엔드', value: 'backendDeveloper' },
      { label: '디자인', value: 'designer' },
      { label: '기획', value: 'productManager' },
    ];
  }

  static getFormattedCareer(career: number) {
    switch (career) {
      case 1:
        return '1~3년차';
      case 3:
        return '3~5년차';
      case 5:
        return '5~10년차';
      case 10:
        return '10년차 이상';
      case 100:
        return '학생/취준생';
      default:
        return undefined as never;
    }
  }
}
