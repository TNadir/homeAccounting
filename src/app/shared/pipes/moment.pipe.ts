import { Pipe, PipeTransform } from "@angular/core";
import * as moment from 'moment';

@Pipe({
    name: "wfmMoment"
})
export class MomentPipe implements PipeTransform {

    transform(value: string, formatFrom: string, formatTo: string = 'DD MMMM YYYY'): string {
        return moment(value, formatFrom).format(formatTo);
    }


}