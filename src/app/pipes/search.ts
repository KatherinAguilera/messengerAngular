// recibir un arreglo regresar elemento que hagan match
import {Pipe, PipeTransform} from "@angular/core";
@Pipe({
  // el nombre que se implementara en html
	name: 'search'
})
export class SearchPipe implements PipeTransform{
  public transform(value, args: string){
    if(!value){
      return;
    }
    // si no retorna el argumento(palabra de busqueda) regresar tal cual retorna value el arreglo
    if(!args){
      return value;
    }
    args = args.toLowerCase();
    return value.filter((item)=>{
      return JSON.stringify(item).toLowerCase().includes(args)
    });
  }
}