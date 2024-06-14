import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Material } from '../../interfaces/material';
import { MaterialServiceService } from '../../services/material.service.service';

@Component({
  selector: 'app-add-edit-material',
  templateUrl: './add-edit-material.component.html',
  styleUrl: './add-edit-material.component.css'
})
export class AddEditMaterialComponent implements OnInit {

  formproduct: FormGroup;

  constructor(private fb: FormBuilder, private _productService: MaterialServiceService ) {
    this.formproduct = this.fb.group({
      codigo_mtrl: ['', Validators.required],
      description_mtrl: ['', Validators.required],
      unidad_med_mtrl: ['', Validators.required],
      value_item_mtrl: ['', Validators.required],
      potency: ['', Validators.required],
      id_cat: ['', Validators.required],
      obs_mtrl: ['', Validators.required]
    });
  }

  ngOnInit(): void {

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

   this._productService.saveProduct(product).subscribe(()=>{
      console.log('Material Creado');
    })

    console.log(product)
  }
}
