import { Component, OnInit } from '@angular/core';
import {ClientService} from '../../services/client.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ClientModel} from '../../models/ClientModel';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {
id: string;
tempBal;
client: ClientModel = {id: '', firstName: '', balance: null, phone: '',
  lastName: '', email: ''};
hasBalance = false;
showBalanceUpdateInput = false;
  constructor(private service: ClientService,
              private act: ActivatedRoute,
              private router: Router,
              private flash: FlashMessagesService) { }

  ngOnInit() {
    // Get id from url
    this.id = this.act.snapshot.params['id'];
    // Get client
    this.service.getClient(this.id).subscribe(
      (data) => {
        if (data != null) {
          if (data.balance > 0) {
            this.hasBalance = true;
          }
        }
        this.client = data;
        this.tempBal = this.client.balance;
        console.log(this.client);
      }
    );
  }
  updateBalance() {
    if (typeof(this.client.balance) !== 'number' || this.client.balance < 0 ) {
      this.flash.show('Balance Should Not Be empty or negative or unknown',
        {cssClass: 'alert-danger', timeout: 3000});
      console.log('not possible');
      this.client.balance = this.tempBal;
    } else {
      this.service.updateClient(this.client);
      this.flash.show('Balance Updated',
        {cssClass: 'alert-success', timeout: 3000});
    }
  }
  updateBal() {
    console.log(this.client);
    this.service.updateClient(this.client);
    this.flash.show('Balance Updated',
      {cssClass: 'alert-success', timeout: 3000});
  }
  onDelete() {
    if (confirm('Are You Sure To Delete ?')) {
      this.service.deleteClient(this.client);
      this.flash.show('Client  Removed',
        {cssClass: 'alert-success', timeout: 3000});

      setTimeout(() => {
        this.router.navigate(['/']).then();
      }, 2000);
    }
  }
}
