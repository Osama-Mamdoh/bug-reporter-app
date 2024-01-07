import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sliceWithEllipsis',
  standalone: true,
})
export class SliceWithEllipsisPipe implements PipeTransform {
  transform(value: string, length: number): string {
    if (value && value.length > length) {
      return value.slice(0, length) + '...';
    } else {
      return value;
    }
  }
}
