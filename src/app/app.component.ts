import { Component } from '@angular/core';
import { ThemeVariables, ThemeRef, lyl, StyleRenderer } from '@alyle/ui';
import { ConsoleToggleService } from './services/console.service';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
declare let gtag: Function;

const STYLES = (theme: ThemeVariables, ref: ThemeRef) => {
  const __ = ref.selectorsOf(STYLES);
  return {
    $global: lyl`{
      body {
        background-color: ${theme.background.default}
        color: ${theme.text.default}
        font-family: ${theme.typography.fontFamily}
        margin: 0
        direction: ${theme.direction}
      }
    }`,
    root: lyl`{
      display: block
    }`,
  };
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [StyleRenderer],
})
export class AppComponent {
  readonly classes = this.sRenderer.renderSheet(STYLES, true);

  title = 'thenewstatistician-com';

  constructor(
    readonly sRenderer: StyleRenderer,
    private console: ConsoleToggleService,
    private router: Router
  ) {
    this.console.disableConsoleInProduction();
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        gtag('config', 'xx-xxxxx-xx', {
          page_path: event.urlAfterRedirects,
        });
      }
    });
  }
}
