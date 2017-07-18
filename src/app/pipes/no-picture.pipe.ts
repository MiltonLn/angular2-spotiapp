import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noPicture'
})
export class NoPicturePipe implements PipeTransform {

  transform( value: any[] ): string {
    const NO_IMAGE:string = "assets/img/noimage.png";

    if ( !value ) {
      return NO_IMAGE;
    }

    return ( value.length > 0 ? value[1].url : NO_IMAGE );
  }

}
