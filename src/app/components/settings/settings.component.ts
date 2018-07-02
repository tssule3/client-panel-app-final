import { Component, OnInit } from '@angular/core';
import {SettingsService} from '../../services/settings.service';
import {SettingsModel} from '../../models/SettingsModel';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';
import {settings} from 'cluster';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
settings: SettingsModel;
  constructor(private setting: SettingsService, private router: Router,
              private flash: FlashMessagesService) { }

  ngOnInit() {
    this.settings = this.setting.getSettings();
  }
  onSubmit() {
    this.setting.changeSettings(this.settings);
    this.flash.show('Settings Saved', {cssClass: 'alert-success', timeout: 3000});
  }
}
