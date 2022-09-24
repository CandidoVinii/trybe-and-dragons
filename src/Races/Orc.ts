import Race from './Race';

class Orc extends Race {
  private _maxLifePoints: number;
  static instances = 0;

  constructor(name: string, dexterirty: number) {
    super(name, dexterirty);

    this._maxLifePoints = 74;
    Orc.instances += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Orc.instances;
  }
}

export default Orc;