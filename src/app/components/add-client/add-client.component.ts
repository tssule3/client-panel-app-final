import {Component, OnInit, ViewChild} from '@angular/core';
import {ClientModel} from '../../models/ClientModel';
import {FlashMessagesService} from 'angular2-flash-messages';
import {ClientService} from '../../services/client.service';
import {Router} from '@angular/router';
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
  setValid = false;
@ViewChild('clientForm') form: any;
  constructor(private flash: FlashMessagesService,
              private service: ClientService,
              private router: Router) { }

  ngOnInit() {
  }
  onSubmit({value, valid}: {value: ClientModel, valid: boolean}) {
    if (this.disableBalanceOnAdd) {
      value.balance = 0;
    }
    if (!valid) {
      this.setValid = true;
      // Show Error
      this.flash.show('Please Fill Out Form Correctly',
        {cssClass: 'alert-danger customFlashClass', timeOut: 4000} );
      setTimeout(() => {this.flash.grayOut(true); }, 2000);
      setTimeout(() => {this.setValid = false; this.flash.grayOut(false); }, 2000);
    } else {
      this.setValid = true;
      // Add New Client
      this.service.newClient(value);
      // Show Message
      this.flash.show('New Client Added',
        {cssClass: 'alert-success customFlashClass', timeOut: 4000} );
      // Redirect To DashBoard
        setTimeout(() => {
          this.router.navigate(['/']).then(
            () => {}
          );
        } , 1000 );
    }
  }
}
