import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {
  id: string;
  constructor(private act: ActivatedRoute) { }

  ngOnInit() {
    // Get id from url
    this.id = this.act.snapshot.params['id'];
  }

}
