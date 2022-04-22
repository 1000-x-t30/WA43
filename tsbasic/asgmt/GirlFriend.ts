export class GirlFriend {
  private _name: string
  private _birthYear: number
  private _birthMonth: number
  private _birthDay: number

  constructor(name: string, birthYear: number, birthMonth: number, birthDay: number) {
    this._name = name
    this._birthYear = birthYear
    this._birthMonth = birthMonth
    this._birthDay = birthDay
  }

  isBirthMonth(month: number): boolean {
    return month == this._birthMonth ? true : false
  }
  getAge(year: number): number {
    return year - this._birthYear
  }

  get name(): string {
    return this._name
  }
  get birthYear(): number {
    return this._birthYear
  }
  get birthMonth(): number {
    return this._birthMonth
  }
  get birthDay(): number {
    return this._birthDay
  }
}