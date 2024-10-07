import { Component, inject } from '@angular/core';
import { Produto } from '../../../models/produto';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { PanelModule } from 'primeng/panel';
import { ToastModule } from 'primeng/toast';
import { ToggleButtonModule } from 'primeng/togglebutton';

interface ProdutoForm {
  id?: FormControl<string | null>;
  nome: FormControl<string>;
  descricao: FormControl<string | null>;
  tempoPreparo: FormControl<number | null>;
  preco: FormControl<number | null>;
  ativarPromocao: FormControl<boolean>;
  controlarEstoque: FormControl<boolean>;
  estoque: FormControl<number>;
  tipoId: FormControl<string | null>;
}

@Component({
  selector: 'app-produto-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    ToastModule,
    PanelModule,
    InputTextModule,
    InputTextareaModule,
    InputNumberModule,
    ToggleButtonModule,
    DropdownModule,
    ButtonModule,
  ],
  templateUrl: './produto-form.component.html',
  styleUrl: './produto-form.component.scss',
})
export default class ProdutoFormComponent {
  private readonly fb = inject(FormBuilder);

  form = this.fb.group<ProdutoForm>({
    id: this.fb.control(null),
    nome: this.fb.nonNullable.control('', {
      validators: [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(100),
      ],
    }),
    descricao: this.fb.control(null, {
      validators: [Validators.minLength(3), Validators.maxLength(200)],
    }),
    tempoPreparo: this.fb.control({ value: null, disabled: true }),
    preco: this.fb.nonNullable.control(null, {
      validators: [Validators.required],
    }),
    ativarPromocao: this.fb.nonNullable.control(false, {
      validators: [Validators.required],
    }),
    controlarEstoque: this.fb.nonNullable.control(false, {
      validators: [Validators.required],
    }),
    estoque: this.fb.nonNullable.control(0, {
      validators: [Validators.min(0)],
    }),
    tipoId: this.fb.nonNullable.control(null, {
      validators: [Validators.required],
    }),
  });

  carregando = false;
  adicionando = false;

  onSalvar(avancar = false) {}

  protected onRetornar() {
    window.history.back();
  }

  private avancarRota(id: string) {
    // this.router.navigate(['/', id, 'complemento']);
  }

  private preencherForm(data: Produto | null) {
    if (data) {
      const _data = Object.assign(this.form.value, data);
      this.form.patchValue({ ..._data });
    }
  }

  errorClass(campo: string, form: FormGroup, nomeGrupo = ''): string {
    let input = this.obterCampo(campo, form, nomeGrupo);
    return this.campoExisteError(campo, form, nomeGrupo)
      ? 'ng-invalid ng-dirty'
      : '';
  }

  protected obterCampo(campo: string, form: FormGroup, nomeGrupo = '') {
    return (
      form?.get(nomeGrupo.length > 0 ? `${nomeGrupo}.${campo}` : campo) ?? null
    );
  }

  campoExisteError(campo: string, form: FormGroup, nomeGrupo = ''): boolean {
    let input = this.obterCampo(campo, form, nomeGrupo);
    if (!input) return false;
    return input?.invalid && (input.dirty || input.touched);
  }

  onObterMensagemError(
    campo: string,
    form: FormGroup,
    descricao?: string,
    mensagemError?: string,
    nomeGrupo = '',
  ): string | null {
    let ctrl = this.obterCampo(campo, form, nomeGrupo);
    if (!ctrl) return null;

    if (!this.campoExisteError(campo, form, nomeGrupo)) return null;

    if (ctrl.hasError('required')) {
      return `Campo ${descricao ?? ''} obrigatório`;
    } else if (ctrl.hasError('minlength')) {
      return `Quantidade mínima de ${ctrl.errors?.['minlength'].requiredLength} caractere(s)`;
    } else if (ctrl.hasError('maxlength')) {
      return `Quantidade máxima de ${ctrl?.errors?.['maxlength'].requiredLength} caractere(s)`;
    } else if (ctrl.hasError('min')) {
      return `Valor mínimo de (${ctrl?.errors?.['min'].min})`;
    } else if (ctrl.hasError('max')) {
      return `Valor máximo de (${ctrl?.errors?.['max'].max})`;
    } else if (ctrl.hasError('equalsTo')) {
      return `Campos não são iguais`;
    } else if (ctrl.hasError('email')) {
      return `E-mail inválido`;
    } else if (mensagemError) {
      return mensagemError;
    }

    return null;
  }
}
