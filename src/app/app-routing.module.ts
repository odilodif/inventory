import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/**Componets */
import { ListUsersComponent } from './components/list-users/list-users.component';
import { AddEditUserComponent } from './components/add-edit-user/add-edit-user.component';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { ListMaterialsComponent } from './components/list-materials/list-materials.component';
import { AddEditMaterialComponent } from './components/add-edit-material/add-edit-material.component';
import { ListIncomeComponent } from './components/list-income/list-income.component';
import { AddEditIncomeComponent } from './components/add-edit-income/add-edit-income.component';
import { ListOutputComponent } from './components/list-output/list-output.component';
import { AddEditOutputComponent } from './components/add-edit-output/add-edit-output.component';


const routes: Routes = [
  {
    path:'',
    component:HomeComponentComponent
  },
  {
    path:'listusers',
    component:ListUsersComponent
  },
  {
    path:'listmaterials',
    component:ListMaterialsComponent
  },
  {
    path:'listincomes',
    component:ListIncomeComponent
  },
  {
    path:'listoutputs',
    component:ListOutputComponent
  },


  {
    path:'addmaterial',
    component:AddEditMaterialComponent
  }, 
  {
    path:'editmaterial/:id',
    component:AddEditMaterialComponent  
  },
  {
    path:'addincome',
    component:AddEditIncomeComponent
  },
  {
    path:'addexpence',
    component:AddEditOutputComponent
  },
  {
    path:'editincome/:id',
    component:AddEditIncomeComponent 
  },
  {
    path:'editexpence/:id',
    component:AddEditOutputComponent
  },
  {
    path:'add',
    component:AddEditUserComponent
  },
  {
    path:'edit/:id',
    component:AddEditUserComponent
  },
  {
    path:'**',
    redirectTo:'',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
