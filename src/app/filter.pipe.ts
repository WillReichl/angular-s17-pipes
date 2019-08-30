import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false // caution: can cause performance issues, typically pipe will only run when its inputs change
})
export class FilterPipe implements PipeTransform {
  transform(value: any, filterString: string, propName: string): any {
    if (value.length === 0 || filterString === '') {
      return value;
    }
    const resultArray = [];
    value.forEach(item => {
      if (item[propName] === filterString) {
        resultArray.push(item);
      }
    });
    return resultArray;
  }
}
