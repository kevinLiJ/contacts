import { Component,Input } from '@angular/core';

@Component({
  selector: 'head-info',
  template: `
  <header>
    <span class="add_contacts" *ngIf="hasAddBtn" [routerLink]="['/addContact']">+</span>
    <ng-content select=".header-content"></ng-content>
  </header>
  `,
  styles:[
    `header{
      position:fixed;
      top:0;
      width:100%;
      line-height:40px;
      text-align:center;
      background-color:#ffcd02;
      color:#fff;
      font-size:16px;
    }
    .add_contacts{
      position:absolute;
      width:30px;
      height:30px;
      line-height:30px;
      top:5px;
      right: 10px;
    }
    `
  ]
})
export class HeadComponent{
  @Input()
  hasAddBtn:boolean = false;
  ngOnInit(){};
}
