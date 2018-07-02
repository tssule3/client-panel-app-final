import { Injectable } from '@angular/core';
import {SettingsModel} from '../models/SettingsModel';

@Injectable()
export class SettingsService {
settings: SettingsModel = {
  allowRegistration: false,
  disableBalanceOnAdd: true,
  disableBalanceOnEdit: true
}
  constructor() { }
  getSettings (): SettingsModel {
  return this.settings;
  }
}
