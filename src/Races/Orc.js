"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Race_1 = require("./Race");
class Orc extends Race_1.default {
    constructor(name, dexterirty) {
        super(name, dexterirty);
        this._maxLifePoints = 74;
        Orc.instances += 1;
    }
    get maxLifePoints() {
        return this._maxLifePoints;
    }
    static createdRacesInstances() {
        return Orc.instances;
    }
}
Orc.instances = 0;
exports.default = Orc;
