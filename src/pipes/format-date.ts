import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'formatDate'
})
export class FormatDate implements PipeTransform {
  transform(value, format = 'YYYY-MM-DD') {
    return moment.unix(value).format(format);
  }
}
