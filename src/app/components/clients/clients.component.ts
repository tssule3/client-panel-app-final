import { Component, OnInit } from '@angular/core';
import {ClientService} from '../../services/client.service';
import {ClientModel} from '../../models/ClientModel';
@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
clientsArray: ClientModel[];
  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.clientService.getClients().subscribe(
      (data) => {this.clientsArray = data; }
    );
  }

}
