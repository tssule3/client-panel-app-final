import {Component, OnInit, ViewChild} from '@angular/core';
import {ClientModel} from '../../models/ClientModel';
import {FlashMessagesService} from 'angular2-flash-messages';
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
  constructor(private flash: FlashMessagesService) { }

  ngOnInit() {
  }
  onSubmit({value, valid}: {value: ClientModel, valid: boolean}) {
    if (this.disableBalanceOnAdd) {
      value.balance = 0;
    }
    if (!valid) {
      // Show Error
      this.flash.show('Please Fill Out Form Correctly',
        {cssClass: 'alert-danger customFlashClass', timeOut: 4000} );
    } else {
      // Show Message
      this.flash.show('New Client Added',
        {cssClass: 'alert-success customFlashClass', timeOut: 4000} );
      // Add New Client
      // Redirect To DashBoard
    }
  }
}
