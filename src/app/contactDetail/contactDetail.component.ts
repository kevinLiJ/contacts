import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ContactService } from '../shared/service/contact.service';

@Component({
    selector: 'contact-detail',
    templateUrl: './contactDetail.component.html',
    styleUrls: ['./contactDetail.component.css']
})
export class ContactDetailComponent implements OnInit {
    constructor(
        private _activatedRoute: ActivatedRoute,
        private _contactService: ContactService
    ) {}

    contactId: string = '';
    contactInfo: any = {};

    ngOnInit() {
        this.contactId = this._activatedRoute.snapshot.params['id'];
        this._contactService.getContact(this.contactId)
            .subscribe(
                contactInfo => {
                    this.contactInfo = contactInfo;
                },
                error => console.log(error.message)
            )
    }

    collectContact() {
        this._contactService.collectContact(this.contactId, { isCollect: !this.contactInfo.isCollected })
            .subscribe(
                contactInfo => {
                    this.contactInfo = contactInfo;
                },
                error => console.log(error.message)
            )
    }
}