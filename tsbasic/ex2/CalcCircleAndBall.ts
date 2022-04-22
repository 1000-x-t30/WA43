export class CalcCircleAndBall {
  private _radius: number = 0
  private readonly pi: number = 3.14

  constructor(radius: number) {
    this._radius = radius
  }

  get circle(): number {
    const circle = 2 * this.pi * this._radius
    return circle
  }

  get area(): number {
    const area = this.pi * this._radius * this._radius
    return area
  }

  get surface(): number {
    const surface = 4 * this.pi * this._radius * this._radius
    return surface
  }

  get volume(): number {
    const volume = 4 * this.pi * this._radius * this._radius * this._radius / 3
    return volume
  }

  get radius(): number {
    return this._radius
  }
}