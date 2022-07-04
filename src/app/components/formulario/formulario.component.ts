import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  public formulario: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formulario = this.formBuilder.group({
      nombre: [null, [Validators.required]],
      edad: [null, [Validators.required, Validators.min(18)]],
      email: ['', [Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
    });
  }

  ngOnInit(): void {

    // Imprime los valores agregados en el form.
    // console.log(this.formulario.value);

    // Cambios en tiempo real
    /* this.formulario.valueChanges.subscribe(value => {
      console.log(value);
    })*/

  }

  submit(valorFormulario: any) {
    // console.log(this.formulario.value);

    // console.log(this.formulario);

    console.log("Datos confirmados!")
  }

}
