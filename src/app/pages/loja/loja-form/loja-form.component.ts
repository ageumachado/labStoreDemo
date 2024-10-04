import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-loja-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FloatLabelModule,
    InputTextModule,
    InputSwitchModule,
    CardModule,
    ButtonModule,
    RouterLink,
  ],
  templateUrl: './loja-form.component.html',
  styleUrl: './loja-form.component.scss',
})
export default class LojaFormComponent {
  private readonly fb = inject(FormBuilder);

  form = this.fb.group({
    id: this.fb.control(''),
    urlEndpoint: this.fb.control('', {
      validators: [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(20),
      ],
    }),
    descricao: this.fb.control('', {
      validators: [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(50),
      ],
    }),
    ativo: this.fb.control(true),
  });

  operacao = 'Adicionando';
}
