import { Component, OnInit } from '@angular/core';
import {ClientModel} from '../../models/ClientModel';
@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
clientObj: ClientModel = {
  firstName: '', lastName: '', email: '', phone: '', balance: null
};
disableBalanceOnAdd = true;
  constructor() { }

  ngOnInit() {
  }

}
