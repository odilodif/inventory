import { Component, OnInit } from '@angular/core';
import { Income } from '../../interfaces/income';

@Component({
  selector: 'app-list-income',
  templateUrl: './list-income.component.html',
  styleUrl: './list-income.component.css'
})
export class ListIncomeComponent implements OnInit  {
   

  listIncome: Income[] = [
    {
      id: 1,
      date_inc: new Date("2024-02-27"),
      provider: 'Distribuidora Juan Estevez',
      create_uid: 'ODILO'    
    },
    {
      id: 2,
      date_inc: new Date("2024-02-28"),
      provider: 'HOLCIN',
      create_uid: 'ODILO'    
    },
    {
      id: 3,
      date_inc: new Date("2024-03-11"),
      provider: 'CEMENTOS SELVA ALEGRE',
      create_uid: 'ODILO'    
    }
  ];

  constructor() {
  
  }

  ngOnInit(): void {

  }
}
