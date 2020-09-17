import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({ name: 'noSanitizeUrl' })
export class NoSanitizeUrlPipe implements PipeTransform {
    constructor(private domSanitizer: DomSanitizer) {

    }

    transform(SafeResourceUrl) {
        return this.domSanitizer.bypassSecurityTrustResourceUrl(SafeResourceUrl);
    }
}