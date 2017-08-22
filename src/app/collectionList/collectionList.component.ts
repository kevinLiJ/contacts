import { Component,OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { ContactService } from '../shared/service/contact.service';

@Component({
  selector: 'collection-list',
  templateUrl: './collectionList.component.html'
})
export class CollectionListComponent {
    ngOnInit(){
        this.getContact()
    }

    constructor(private _contactService:ContactService){}

    getContact(){
        return this._contactService.getCollections()
        .subscribe(
        contacts => {
            this.contacts = contacts;
        },
        error => console.log(error.message)
        )
    }
    
    contacts:any[] = [];

}
