import { NgClass, JsonPipe } from '@angular/common';
import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { KeyFilterModule } from 'primeng/keyfilter';
import { MessageModule } from 'primeng/message';
import { PanelModule } from 'primeng/panel';
import { TabViewModule } from 'primeng/tabview';
import { ToastModule } from 'primeng/toast';
import { LojaService } from '../../../services/loja.service';
import { Loja } from '../../../models/loja';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NgxIndexedDBService } from 'ngx-indexed-db';

interface LojaForm {
  id?: FormControl<number>;
  nome: FormControl<string>;
  endpoint: FormControl<string | null>;
  observacao: FormControl<string | null>;
}

@Component({
  selector: 'app-loja-form',
  standalone: true,
  imports: [
    NgClass,
    JsonPipe,
    ReactiveFormsModule,
    RouterLink,
    FloatLabelModule,
    InputTextModule,
    InputSwitchModule,
    CardModule,
    ButtonModule,
    ToastModule,
    TabViewModule,
    FieldsetModule,
    InputTextareaModule,
    InputNumberModule,
    MessageModule,
    KeyFilterModule,
    PanelModule,
  ],
  templateUrl: './loja-form.component.html',
  styleUrl: './loja-form.component.scss',
  providers: [NgxIndexedDBService],
})
export default class LojaFormComponent implements OnInit {
  private readonly lojaService = inject(LojaService);
  private readonly fb = inject(FormBuilder);
  private readonly destroyRef = inject(DestroyRef);

  private readonly route = inject(ActivatedRoute);

  carregando = false;
  adicionando = false;
  tenantIcon = '';
  blockSpace: RegExp = /[a-zA-Z_]/;

  form = this.fb.group<LojaForm>({
    nome: this.fb.nonNullable.control('', {
      validators: [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(100),
      ],
    }),
    endpoint: this.fb.nonNullable.control(null, {
      validators: [Validators.required, Validators.maxLength(15)],
    }),
    observacao: this.fb.control(null, {
      validators: [Validators.minLength(3), Validators.maxLength(100)],
    }),
  });

  operacao = 'Adicionando';

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'] as number;
    this.adicionando = id ? false : true;

    console.log(id);

    if (!this.adicionando) {
      this.lojaService
        .getById(id as number)
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe((data) => {
          console.log(data);
          this.form.patchValue({
            id: data?.id,
            nome: data?.nome,
            endpoint: data?.endpoint,
            observacao: data?.observacao,
          });
        });
    }
  }

  onSalvar() {
    if (this.form.valid) {
      let loja = this.form.value as Loja;

      loja.ativo = true;
      loja.aberta = true;

      this.lojaService
        .addOrUpdate(loja)
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe({
          next: (_) => {
            alert(
              `${this.adicionando ? 'Adicionado' : 'Alterado'} com sucesso`,
            );
            this.form.reset();
            if (!this.adicionando) {
              this.onRetornar();
            }
          },
          error: () => alert('Erro inesperado'),
        });
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

  onRetornar() {
    window.history.back();
  }
}
