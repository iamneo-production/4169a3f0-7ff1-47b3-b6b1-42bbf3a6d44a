import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customFilter'
})
export class CustomFilterPipe implements PipeTransform {

  transform(value: any,args?: any): any {
    if(!value) return null;
    if(!args) return value;
    
    args=args.toLowerCase();
    return value.filter(function(theme:any){
      return JSON.stringify(theme).toLowerCase().includes(args);
    })
    
  }

}

