import {Routes} from '@angular/router';

import { ContactListComponent } from './contactList/contactlist.component';
import { CollectionListComponent } from './collectionList/collectionList.component';
import { editContactComponent } from './editContact/editContact.component';
import { ContactDetailComponent } from './contactDetail/contactDetail.component';
import { addContactComponent } from './addContact/addContact.component';

export const rootRouterConfig:Routes = [
    {path:'', redirectTo:'contacts',pathMatch: 'full'},
    {path: 'contacts', component: ContactListComponent},
    {path: 'collections', component: CollectionListComponent},
    {path: 'editContact/:id', component: editContactComponent},
    {path: 'addContact', component: addContactComponent},
    {path: 'contactDetail/:id',component: ContactDetailComponent}
]