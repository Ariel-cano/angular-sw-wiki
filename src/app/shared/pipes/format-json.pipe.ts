import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatJson',
  standalone: true
})
export class FormatJsonPipe implements PipeTransform {

  transform(value: string): string {
    return value.split('_').join(' ');
  }

}
