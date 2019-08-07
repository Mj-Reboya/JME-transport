import { Directive, HostListener } from '@angular/core';
import { numOnly } from '../util/input';

@Directive({ selector: '[appAvoidPasteForNonNumeric]' })
export class AvoidPasteForNonNumericDirective {
  constructor() {}
  @HostListener('paste', ['$event'])
  blockNonNumericPaste(e: ClipboardEvent) {
    const val = Number(e.clipboardData.getData('Text'));
    console.log('val', val);
    if (parseInt(val.toString(), 15) < 0 || isNaN(val)) {
      e.preventDefault();
    }
    // if (!Number.isSafeInteger(val) && val < 0) {
    // }
  }
}
