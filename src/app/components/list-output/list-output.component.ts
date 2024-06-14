import { Component, OnInit } from '@angular/core';
import { Expence } from '../../interfaces/expence';

@Component({
  selector: 'app-list-output',
  templateUrl: './list-output.component.html',
  styleUrl: './list-output.component.css'
})
export class ListOutputComponent implements OnInit {
  
  listExpence: Expence[] = [
    {
      id: 1,      
      id_cli: 'Constructora EuroHome & Hiberhabitat',
      date_exp: new Date("2024-02-27"),
      total_exp: 43,
      id_user: 'ODILO'    
    },
    {
      id: 2,      
      id_cli: 'Ing. David Real',
      date_exp: new Date("2024-02-27"),
      total_exp: 43,
      id_user: 'ODILO'    
    },
    {
      id: 3,      
      id_cli: 'Arq. Palacios y Constructores',
      date_exp: new Date("2024-02-27"),
      total_exp: 43,
      id_user: 'ODILO'    
    }
  ];

  
  constructor() {

  }

  ngOnInit(): void {

  }

}
