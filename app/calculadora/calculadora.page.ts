import { Component, OnInit } from '@angular/core';
import {ActionSheetController} from '@ionic/angular';
import { isNumber } from 'util';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.page.html',
  styleUrls: ['./calculadora.page.scss'],
})
export class CalculadoraPage implements OnInit {

  constructor(public asctrl:ActionSheetController) {}

  ngOnInit() {
  }
  
  public idade;
  public mens;
  public sexo;
  public altura;
  public peso;
  public resultado;

  async calcular()
  {
      let aSheet = await this.asctrl.create({
                header:'Opções',
                buttons:[{
                text:'CalcularIMC',
                icon:'calculator',
                handler:()=>{
                  this.resultado = this.peso / (this.altura * this.altura);
                  this.resultado = this.resultado.toFixed(1);

                  if(this.resultado < 18.5)
                  {
                      this.mens = "Abaixo do peso";
                  }

                  else if(this.resultado <= 24.9)
                  {
                      this.mens = "Peso Ideal";
                  }

                  else if(this.resultado <= 29.9)
                  {
                      this.mens = "Levemente acima do peso";
                  }

                  else if(this.resultado <= 34.9)
                  {
                      this.mens = "Obesidade grau I";
                  }

                  else if(this.resultado <= 39.9)
                  {
                      this.mens = "Obesidade grau II (Severa)";
                  }

                  else if(this.resultado > 40)
                  {
                      this.mens = "Obesidade III (Mórbida)";
                  }

                }},
                {text:'Calcular Peso Ideal',
                 icon:'body',
                 handler:()=>
                {
                  if(this.sexo == "1")
                  {
                    this.resultado = (62.1 * this.altura) - 44.7;
                    this.resultado = this.resultado.toFixed(2);
                    this.mens = "";
                  }

                  else if(this.sexo == "2")
                  {
                    this.resultado = (72.7 * this.altura) - 58;
                    this.resultado = this.resultado.toFixed(2);
                    this.mens = "";
                  }
                }},
                {text:'Limpar',
                 icon:'trash',
                 handler:()=>
                {
                  alert('Apagado com Sucesso!!');
                this.idade = "";
                this.altura = "";
                this.sexo = "";
                this.resultado = "";
                this.mens = "";  
                this.peso = "";
                }}   
              ]});

      await aSheet.present();
  }

}
