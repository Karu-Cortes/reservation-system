import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]'
})
export class ImgBrokenDirective {
   //escuchar el elHost
  @HostListener('error') handleError(): void{
    const elNative = this.elHost.nativeElement
    console.log('error imagen',this.elHost)

  elNative.src = '../../../../assets/image/imagen_no_disponible.webp'
  }

  constructor(private elHost: ElementRef) {
    
   }

}
