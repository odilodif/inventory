import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Material } from '../../interfaces/material';
import { MaterialServiceService } from '../../services/material.service.service';
import { ActivatedRoute, Route } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-edit-material',
  templateUrl: './add-edit-material.component.html',
  styleUrl: './add-edit-material.component.css'
})
export class AddEditMaterialComponent implements OnInit {
  loading: boolean = false;
  formproduct: FormGroup;
  id: number;
  operacion: string = 'Agregar ';


  constructor(private fb: FormBuilder, private _productService: MaterialServiceService,
    private aRoute: ActivatedRoute,
    private toastr: ToastrService
  ) {

    this.formproduct = this.fb.group({
      codigo_mtrl: ['', Validators.required],
      description_mtrl: ['', Validators.required],
      unidad_med_mtrl: ['', Validators.required],
      value_item_mtrl: ['', Validators.required],
      potency: ['', Validators.required],
      id_cat: ['', Validators.required],
      obs_mtrl: ['', Validators.required]
    });
    this.id = Number(aRoute.snapshot.paramMap.get('id'));

    console.log(this.id)
  }

  ngOnInit(): void {
    if (this.id != 0) {
      this.operacion = 'Editar';
      this.getProducto(this.id);
    }
  }



  addProduct() {
    // console.log(this.formproduct.value.codigo)
    const product: Material = {
      codigo_mtrl: this.formproduct.value.codigo_mtrl,
      description_mtrl: this.formproduct.value.description_mtrl,
      unidad_med_mtrl: this.formproduct.value.unidad_med_mtrl,
      value_item_mtrl: this.formproduct.value.value_item_mtrl,
      potency: this.formproduct.value.potency,
      id_cat: this.formproduct.value.id_cat,
      obs_mtrl: this.formproduct.value.obs_mtrl
    }

    if (this.id!=0) {
      //es editar
      product.id=this.id;      
      this._productService.updateProductoById(this.id,product).subscribe(()=>{       
      this.toastr.warning('El producto fue Actualizado', 'Producto Actualizado')      
      });
      
    } else {
      //agregar nuevo
      this._productService.saveProduct(product).subscribe(() => {
       
  
      })
    }

    
    // console.log(product)
  }




  getProducto(id: number) {
    this.loading = true;
    this._productService.getProductoById(id).subscribe((data: Material) => {
      console.log(data);

      this.formproduct.setValue({
        codigo_mtrl: data.codigo_mtrl,
        description_mtrl: data.description_mtrl,
        unidad_med_mtrl: data.unidad_med_mtrl,
        value_item_mtrl: data.value_item_mtrl,
        potency: data.potency,
        id_cat: data.id_cat,
        obs_mtrl: data.obs_mtrl
      })



    })
    this.loading = false;
  }
}
