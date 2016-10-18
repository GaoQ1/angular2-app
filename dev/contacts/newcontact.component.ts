import {Component} from 'angular2/core';
import {Router} from 'angular2/router';
import {ContactService} from './contact-service';
import {Contact} from './contact';

@Component({
  selector: 'new-contact-component',
  template: `
    <div>
      <label for="name">Name:</label>
      <input type="text" id="name" #name/>
    </div>
    <div>
      <label for="age">Age:</label>
      <input type="text" id="age" #age/>
    </div>
    <button (click)="onConfirm(name.value,age.value)">Confim</button>
  `,
  providers: [ContactService]
})

export class NewContactComponent{
  constructor(private _contactService: ContactService, private _router: Router){}

  onConfirm(name,age){
    let contact: Contact = {
      name: name,
      age: age
    }
    this._contactService.insertContact(contact);
    this._router.navigate(['Contacts']);
  }
}