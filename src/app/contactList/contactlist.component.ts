import { Component,OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { FormGroup, FormControl} from '@angular/forms';
import { ContactService } from '../shared/service/contact.service';

@Component({
  selector: 'contact-list',
  templateUrl: './contactlist.component.html',
  styleUrls:['./contactlist.component.css']
})


export class ContactListComponent {
    
    constructor(private _contactService:ContactService){}
    contacts:any[] = [];
    ngOnInit(){
        this.getContact();
        this.searchContactsForm.controls.term.valueChanges
        .debounceTime(500)
        .distinctUntilChanged()
        .subscribe(termVal => {
            if(termVal === '') {this.getContact()}
            this.contacts = this.contacts.filter( contacts => contacts.name.indexOf(termVal) > -1)
        })
    }
    
    searchContactsForm = new FormGroup({
        term: new FormControl()
    })

    getContact(){
        return this._contactService.getContacts()
        .subscribe(
            contacts => {
                this.contacts = contacts;
            },
            error => console.log(error.message)
        )
    }
}
