window['Raphael'] = require('raphael');
import 'justgage';

import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import { JustgageComponent } from './src/justgage.component';

export * from './src/justgage.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    JustgageComponent
  ],
  exports: [
    JustgageComponent
  ]
})
export class JustgageModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: JustgageModule
    };
  }
}
