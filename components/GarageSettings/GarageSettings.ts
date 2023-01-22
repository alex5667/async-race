import render from '../../utils/render';
import { SettingsInputs } from './SettingsInputs';
import { ICreateCar, IUpdateCar, ICar } from '../../interfaces';
import { SettingsButtons } from './SettingsButtons';

export class GarageSettings {
  createCar: (state: ICreateCar) => void = () => {};
  updateCar: (car: IUpdateCar) => void = () => {};
  startRace: () => void = () => {};
  resetCars: () => void = () => {};
  generateCars: () => void = () => {};
  updateInputs: SettingsInputs;
  settingsButtons: SettingsButtons;

  constructor(parent: HTMLElement) {
    const settingsContainer = render<HTMLDivElement>(parent, 'div', [
      'garage-settings',
    ]);
    const createInputs = new SettingsInputs(settingsContainer, 'create', [
      'create-inputs',
    ]);
    createInputs.createCar = (state) => this.createCar(state);
    this.updateInputs = new SettingsInputs(settingsContainer, 'update', [
      'update-inputs',
    ]);
    this.updateInputs.createCar = () => {
      this.updateCar(this.updateInputs.state);
    };

    this.settingsButtons = new SettingsButtons(settingsContainer);
    this.settingsButtons.startRace = () => this.startRace();
    this.settingsButtons.resetCars = () => this.resetCars();
    this.settingsButtons.generateCars = () => this.generateCars();
  }

  updateState(car: ICar): void {
    this.updateInputs.state = car;
    this.updateInputs.updateInputs();
  }
}
