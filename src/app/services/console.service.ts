import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConsoleToggleService {

  constructor() {

  }

  disableConsoleInProduction(): void {
    if (environment.production) {
      console.warn(`🚨 Console Deactivated!`);
      console.log = function (): void { };
      console.debug = function (): void { };
      console.warn = function (): void { };
      console.info = function (): void { };
    }
  }
}