import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { AddEditUserComponent } from './components/add-edit-user/add-edit-user.component';

/**Modules */
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule } from '@angular/common/http';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { ListMaterialsComponent } from './components/list-materials/list-materials.component';
import { AddEditMaterialComponent } from './components/add-edit-material/add-edit-material.component';
import { ListIncomeComponent } from './components/list-income/list-income.component';
import { AddEditIncomeComponent } from './components/add-edit-income/add-edit-income.component';
import { ListOutputComponent } from './components/list-output/list-output.component';
import { AddEditOutputComponent } from './components/add-edit-output/add-edit-output.component';
import { ListCategoryComponent } from './components/list-category/list-category.component';
import { AddEditCategoryComponent } from './components/add-edit-category/add-edit-category.component';
import { ProgressBarComponent } from './shared/progress-bar/progress-bar.component';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListUsersComponent,
    AddEditUserComponent,
    HomeComponentComponent,
    ListMaterialsComponent,
    AddEditMaterialComponent,
    ListIncomeComponent,
    AddEditIncomeComponent,
    ListOutputComponent,
    AddEditOutputComponent,
    ListCategoryComponent,
    AddEditCategoryComponent,
    ProgressBarComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot()
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
