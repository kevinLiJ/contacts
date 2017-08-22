import { Component,OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { ContactService } from '../shared/service/contact.service';

@Component({
  selector: 'contact-list',
  templateUrl: './contactlist.component.html'
})


export class ContactListComponent {
    ngOnInit(){
        this.getContact()
    }

    constructor(private _contactService:ContactService){}

    getContact(){
        return this._contactService.getContacts()
        .subscribe(
            contacts => {
                this.contacts = contacts;
            },
            error => console.log(error.message)
        )
    }
    
    contacts:any[] = [];

}
