import { Component, OnInit, OnChanges} from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { FormGroup, FormControl} from '@angular/forms';

import { ContactService } from '../shared/service/contact.service';
import { validateEmail, validateTel } from '../shared/validate/validate'

@Component({
  selector: 'edit-contact',
  templateUrl: '../shared/editContact/editContact.component.html',
  styleUrls:['../shared/editContact/editContact.component.css']
})
export class editContactComponent{

  constructor(
    private _activatedRoute:ActivatedRoute,
    private _contactService:ContactService,
    private _router:Router
  ){}

  headInfo:string = '编辑联系人';
  submitInfo:string = '保存';
  contactId:string = '';
  contactInfo:any = {};
  cancelUrl:string = '';

  // 自定义验证有bug，还没有加上
  // contactInfoForm = new FormGroup({
  //     email: new FormControl('', validateEmail),
  //     name: new FormControl(),
  //     phone: new FormControl('', validateTel),
  //     address: new FormControl(),
  //     sex: new FormControl(),
  //     selfIntroduction: new FormControl()

  // });

  ngOnInit(){
    this.contactId = this._activatedRoute.snapshot.params['id'];
    this.cancelUrl = '/contactDetail/' + this.contactId;
    this._contactService.getContact(this.contactId)
    .subscribe(
        contactInfo => {
            this.contactInfo = contactInfo;
        },
        error => console.log(error.message)
        )
  }

  // 点击提交按钮，更新联系人信息
  updateContact(){
    this._contactService.updateContact(this.contactId,this.contactInfo)
    .subscribe(
      resp => {
          this._router.navigateByUrl('/contactDetail/' + this.contactId);
          console.log(resp);
      },
      error => console.log(error.message)
    )
  }
}