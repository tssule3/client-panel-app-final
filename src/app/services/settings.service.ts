import { Injectable } from '@angular/core';
import {SettingsModel} from '../models/SettingsModel';

@Injectable()
export class SettingsService {
settings: SettingsModel = {
  allowRegistration: false,
  disableBalanceOnAdd: true,
  disableBalanceOnEdit: true
}
tempData;
showCaret;
  constructor() {
    this.tempData = localStorage.getItem('settings');
  if (localStorage.getItem('settings') !== null) {
    if (this.tempData.allowRegistration) {this.showCaret = true; } else {this.showCaret = false; }
    this.settings = JSON.parse(localStorage.getItem('settings'));
  } else {
      this.showCaret = true;
  }
  }
  getSettings (): SettingsModel {
  return this.settings;
  }
  changeSettings(setting: SettingsModel) {
    localStorage.setItem('settings', JSON.stringify(setting));
  }
}
