import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { rootRouterConfig } from './app.routes';

import { AppComponent } from './app.component';
import { ListComponent } from './shared/list/list.component';
import { FootComponent } from './shared/foot/foot.component';
import { HeadComponent } from './shared/head/head.component';
import { ContactListComponent } from './contactList/contactlist.component';
import { CollectionListComponent } from './collectionList/collectionList.component';
import { editContactComponent } from './editContact/editContact.component';
import { ContactDetailComponent } from './contactDetail/contactDetail.component';
import { addContactComponent } from './addContact/addContact.component';
import { ContactService } from './shared/service/contact.service';

let rootRouterModule:ModuleWithProviders = RouterModule.forRoot(rootRouterConfig, {useHash : true});

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    FootComponent,
    HeadComponent,
    ContactListComponent,
    CollectionListComponent,
    editContactComponent,
    ContactDetailComponent,
    addContactComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    rootRouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule {}
