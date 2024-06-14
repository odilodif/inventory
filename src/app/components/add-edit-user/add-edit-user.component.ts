import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-add-edit-user',
  templateUrl: './add-edit-user.component.html',
  styleUrl: './add-edit-user.component.css'
})
export class AddEditUserComponent implements OnInit {

  formUser: FormGroup;
  constructor(private fb: FormBuilder) {
    this.formUser = this.fb.group({
      name_usr: ['', Validators.required],
      lastname_usr: ['', Validators.required],
      usr: ['', Validators.required],
      street: ['', Validators.required],
      tef_usr: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {

  }

  addUser() {
    // console.log(this.formUser);
    // console.log(this.formUser.value.name_usr);
    // console.log(this.formUser.value.lastname_usr)


    const usr: User = {
      name_usr: this.formUser.value.name_usr,     
      lastname_usr:this.formUser.value.lastname_usr,  
     mail_usr: this.formUser.value.usr,  
      street_usr: this.formUser.value.street,
      tef_usr: this.formUser.value.tef_usr,  
      password_usr: this.formUser.value.password 
    }

    console.log(usr);

  }
}
