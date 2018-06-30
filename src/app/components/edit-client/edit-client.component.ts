import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ClientModel} from '../../models/ClientModel';
import {ClientService} from '../../services/client.service';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {
  checkBal = true;
  id: string;
  client: ClientModel = {id: '', firstName: '', balance: null, phone: '',
    lastName: '', email: ''};
  tempClient: ClientModel = {id: '', firstName: '', balance: null, phone: '',
    lastName: '', email: ''};
  constructor(private service: ClientService,
              private act: ActivatedRoute,
              private router: Router,
              private flash: FlashMessagesService) {  }

  ngOnInit() {
    console.log('runs');
    // Get id from url
    this.id = this.act.snapshot.params['id'];
    // Get client
    this.service.getClient(this.id).subscribe(
      (data) => {
        this.client = data;
        console.log('this.client');
        console.log(this.client);
      }
    );
    setTimeout(() => {
      this.tempClient = { balance: this.client.balance, email: this.client.email, firstName: this.client.firstName,
        id: this.client.id, lastName: this.client.lastName, phone: this.client.phone
      };
      console.log('this.tempClient');
      console.log(this.tempClient);
    }, 2000);

  }

  cancelUpdate() {
    this.checkBal = true;
    this.service.getClient(this.id).subscribe(
      (data) => {
        this.client = data;
        this.tempClient = data;
        console.log(this.client);
      }
    );
  }
  update({value, valid}: {value: ClientModel, valid: boolean}) {
    if (this.client.balance === null || this.client.balance < 0 ||
      !valid) {
      console.log('Enter Valid Form Fields');
      this.flash.show('Please Update Fields Properly', {cssClass: 'alert-danger',
          timeout: 3000});
      this.checkBal = false;
    } else {console.log('Good');
    this.checkBal = true;
      this.service.updateClient(this.client);
        this.flash.show('SuccessFully Updated', {cssClass: 'alert-primary',
          timeout: 3000});
        setTimeout(() => {
          this.router.navigate([`/client/${this.id}`]);
        }, 3000);
    }
    // if ( this.tempClient.firstName !==  this.client.firstName
    //   || this.tempClient.lastName !== this.client.lastName ||
    //   this.tempClient.email !== this.client.email ||
    //   this.tempClient.phone !== this.client.phone ||
    //   this.tempClient.balance !== this.client.balance) {
    //
    // } else {
    // }
  }
}
