import {Component, OnInit, ViewChild} from '@angular/core';
import {ClientModel} from '../../models/ClientModel';
@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
client: ClientModel = {
  firstName: '', lastName: '', email: '', phone: '', balance: null
};
firstName;
lastName;
disableBalanceOnAdd = true;
@ViewChild('clientForm') form: any;
  constructor() { }

  ngOnInit() {
  }
  onSubmit({value, valid}: {value: ClientModel, valid: boolean}) {}
}
