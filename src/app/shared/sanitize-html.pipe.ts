import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({ name: 'noSanitizeHtml' })
export class NoSanitizeHtmlPipe implements PipeTransform {
    constructor(private domSanitizer: DomSanitizer) {

    }

    transform(html: string): SafeHtml {
        return this.domSanitizer.bypassSecurityTrustHtml(html);
    }
}