import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-edit-income',
  templateUrl: './add-edit-income.component.html',
  styleUrl: './add-edit-income.component.css'
})
export class AddEditIncomeComponent implements OnInit {

  numero: number = 10;

  constructor() {

  }



  ngOnInit(): void {

  }

  disminuir(){
    this.numero--;
  }

  incrementar(){
    this.numero++;
  }

}
