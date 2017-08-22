import { Component, OnInit, OnChanges} from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';

import { ContactService } from '../shared/service/contact.service';

@Component({
  selector: 'edit-contact',
  templateUrl: '../shared/editContact/editContact.component.html',
  styleUrls:['../shared/editContact/editContact.component.css']
})
export class addContactComponent implements OnInit{

  constructor(
    private _activatedRoute:ActivatedRoute,
    private _contactService:ContactService,
    private _router:Router
  ){}

  headInfo = '添加联系人';
  submitInfo = '添加';
  contactId:string = '';
  cancelUrl = '/';

  contactInfo:any = {
      address:'',
      email:'',
      isCollected:'0',
      name:'',
      phone:'',
      selfIntroduction:'',
      sex:''
  };

  ngOnInit(){}

  // 点击提交按钮，更新联系人信息
  updateContact(){
      console.log(this.contactInfo);
    this._contactService.addContact(this.contactInfo)
    .subscribe(
      resp => {
          this._router.navigateByUrl('/');
      },
      error => console.log(error.message)
    )
  }
}