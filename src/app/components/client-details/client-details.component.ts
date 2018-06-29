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
        console.log(this.client);
      }
    );
  }

}
