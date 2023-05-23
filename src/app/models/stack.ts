export class Stack {
  id!: number;
  name!: string;

  static getLength(name: string) {
    if (name.length < 6) return 1;
    if (name.length < 16) return 2;
    return 3;
  }
}
