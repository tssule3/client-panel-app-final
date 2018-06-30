import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import {ClientModel} from '../models/ClientModel';
import {Observable} from 'rxjs';
import {map} from 'rxjs/internal/operators';

@Injectable()
export class ClientService {
clientsCollection: AngularFirestoreCollection<ClientModel>;
clientsDoc: AngularFirestoreDocument<ClientModel>;
clients: Observable<ClientModel[]>;
client: Observable<ClientModel>;
  constructor(private afs: AngularFirestore) {
    this.clientsCollection = this.afs.collection('clients' ,
      ref => ref.orderBy('lastName', 'asc'));
  }
  getClients(): Observable<ClientModel[]> {
   this.clients = this.clientsCollection.snapshotChanges().pipe(
     map(actions => actions.map(a => {
       const data = a.payload.doc.data() as ClientModel;
       const id = a.payload.doc.id;
       return { id, ...data };
     }))
     );
   return this.clients;
  }

  newClient(val: ClientModel) {
    this.clientsCollection.add(val);
  }

  getClient(id: string): Observable<ClientModel> {
    this.clientsDoc = this.afs.doc<ClientModel>(`clients/${id}`);
    this.client = this.clientsDoc.snapshotChanges().pipe(
      map(actions => {
        if (actions.payload.exists === false) {
          return null;
        } else {
          const data = actions.payload.data() as ClientModel;
           data.id = actions.payload.id;
           return data;
        }
      })
    );
    return this.client;
  }
  updateClient(client: ClientModel) {
    this.clientsDoc = this.afs.doc(`clients/${client.id}`);
    this.clientsDoc.update(client);
  }
  deleteClient(client: ClientModel) {
    this.clientsDoc = this.afs.doc(`clients/${client.id}`);
    this.clientsDoc.delete().then();
  }
}
