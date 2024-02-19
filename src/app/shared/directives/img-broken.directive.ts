import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]'
})
export class ImgBrokenDirective {
   //escuchar el elHost
  @HostListener('error') handleError(): void{
    const elNative = this.elHost.nativeElement
    console.log('error imagen',this.elHost)

  elNative.src = 'https://i.postimg.cc/1mxM0p76/imagen-no-disponible.webp'
  }

  constructor(private elHost: ElementRef) {
    
   }

}
