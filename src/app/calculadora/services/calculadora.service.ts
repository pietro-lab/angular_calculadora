/** 
 * serviço responsavel  por executar as operações da calculadora
 * 
 * @author
 * @since 1.0.0
*/

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  /*
  constantes para operações
  */
  static readonly  SOMA : string = "+";
  static readonly  SUBTRACAO: string = "-";
  static readonly  DIVISAO: string = "/";
  static readonly MULTPLICACAO: string = "*";

  constructor() { }


/**
 * 
 * @param number1 numero um
 * @param number2  numero dois
 * @param operacao operação realzada
 * @returns retorno da operação realizada
 */
  calcular(number1: number, number2: number, operacao: string): number{
    let resultado : number; // resultado da operação

    switch(operacao){
      case CalculadoraService.SOMA:
        resultado = number1 + number2
        break
      case CalculadoraService.SUBTRACAO:
        resultado = number1 - number2
        break
      case CalculadoraService.MULTPLICACAO:
        resultado = number1 * number2
        break
      case CalculadoraService.DIVISAO:
        resultado = number1 / number2
        break
      default:
       resultado =0;  


    }
    return resultado;


  }
}
