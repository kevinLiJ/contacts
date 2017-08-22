import { Component,Input,OnChanges,OnInit} from '@angular/core';

@Component({
  selector: 'foot',
  template: `
    <footer>
        <div [routerLink]="['/contacts']" routerLinkActive="active">联系人</div>
        <div [routerLink]="['/collections']" routerLinkActive="active">收藏</div>
    </footer>
  `,
  styles:[
    `footer{
      position:fixed;
      bottom:0;
      width:100%;
      line-height:40px;
      text-align:center;
      display:flex;
    }
    div{
      flex:1;
      box-sizing:border-content;
      border:1px solid transparent;
    }
    div.active{
      background-color:#ffcd02;
      color:#fff;
    }
    `
  ]
})
export class FootComponent implements OnInit{
  ngOnInit(){}
}