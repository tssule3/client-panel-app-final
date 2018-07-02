import { Injectable } from '@angular/core';
import {SettingsModel} from '../models/SettingsModel';

@Injectable()
export class SettingsService {
settings: SettingsModel = {
  allowRegistration: false,
  disableBalanceOnAdd: true,
  disableBalanceOnEdit: true
}
  constructor() {
  if (localStorage.getItem('settings') !== null) {
    this.settings = JSON.parse(localStorage.getItem('settings'));
  }
  }
  getSettings (): SettingsModel {
  return this.settings;
  }
  changeSettings(setting: SettingsModel) {
    localStorage.setItem('settings', JSON.stringify(setting));
  }
}
