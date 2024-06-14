import { Component, OnInit } from '@angular/core';
import { Material } from '../../interfaces/material';
import { MaterialServiceService } from '../../services/material.service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-materials',
  templateUrl: './list-materials.component.html',
  styleUrl: './list-materials.component.css'
})
export class ListMaterialsComponent implements OnInit {
  listMaterials: Material[] = [];
  loading: boolean = false;


  constructor(private _productoService: MaterialServiceService, private toastr: ToastrService) {

  }

  ngOnInit(): void {
    this.getListProducts();
  }

  getListProducts() {
    this.loading = true;
    /*setTimeout(()=>{*/
    this._productoService.getListProducts().subscribe((data) => {
      console.log(data);
      this.listMaterials = data;
      this.loading = false;
    })
    /*  },2000);   */

  }

  deleteProducto(id: number) {
    this.loading = true;
    this._productoService.deleteProducto(id).subscribe(() => {
      this.getListProducts();
      this.toastr.warning('El producto fue eliminado', 'Producto eliminado')
    });
  }


}
