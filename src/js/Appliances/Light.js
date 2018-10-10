import Appliances from "../Appliances";

const MIN_VALUE = 0;
const MAX_VALUE = 100;
const DEFAULT_VALUE = 70;
const DEFAULT_MODE = "Shine";
const CLAP_VALUE = true;

export class Light extends Appliances {
  constructor(name, madeIn, status) {
    super(name, madeIn, status);
    this._intensity = DEFAULT_VALUE;
    this._mode = DEFAULT_MODE;
    this._clap = CLAP_VALUE;
  }

  get mode() {
    return this._mode;
  }

  set mode(mode) {
    this._mode = mode;
  }

  get clap() {
    return this._clap;
  }

  set clap(clap) {
    this._clap = clap;
  }

  get intensity() {
    return this._intensity;
  }

  incriseIntensity() {
    if (this._intensity < MAX_VALUE) {
      this._intensity += 1;
    }
  }

  decreaseIntensity() {
    if (this._intensity < MIN_VALUE) {
      this._intensity -= 1;
    }
  }
}
