import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { IndexComponent } from './pages/index/index.component';
import { HeaderBannerComponent } from './ui/header-banner/header-banner.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { LyButtonModule } from '@alyle/ui/button';
import { LyToolbarModule } from '@alyle/ui/toolbar';
import { LyImageCropperModule } from '@alyle/ui/image-cropper';
import { LyCommonModule } from '@alyle/ui';
import { LyGridModule, LyGridItem } from '@alyle/ui/grid';
import { LyDrawerModule } from '@alyle/ui/drawer';
import { LyListModule } from '@alyle/ui/list';
import { LyTabsModule } from '@alyle/ui/tabs';
import { SocialBarComponent } from './ui/social-bar/social-bar.component';
import { LyFieldModule } from '@alyle/ui/field';
import { LySelectModule } from '@alyle/ui/select';
import { LyTypographyModule } from '@alyle/ui/typography';
import { LyIconModule } from '@alyle/ui/icon';
import { LyCheckboxModule } from '@alyle/ui/checkbox';
import { LyCardModule } from '@alyle/ui/card';
import { BlogComponent } from './pages/blog/blog.component';
import { FormsModule } from '@angular/forms';
import { LySkeletonModule } from '@alyle/ui/skeleton';
import { LyThemeModule } from '@alyle/ui';
import { NavbarComponent } from './ui/navbar/navbar.component';
import { AdsenseModule } from 'ng2-adsense';

import {
  LY_THEME,
  LY_THEME_NAME,
  StyleRenderer,
  LyTheme2,
  LY_THEME_GLOBAL_VARIABLES,
  PartialThemeVariables,
} from '@alyle/ui';
import { color } from '@alyle/ui/color';
import { MinimaLight, MinimaDark } from '@alyle/ui/themes/minima';
import { SocialShareComponent } from './ui/social-share/social-share.component';
import { ShareModule } from 'ngx-sharebuttons';
import { RouterModule } from '@angular/router';
import { ArticleComponent } from './pages/article/article.component';
import { HeaderBarComponent } from './ui/header-bar/header-bar.component';
import { BooksComponent } from './pages/books/books.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { FooterComponent } from './ui/footer/footer.component';
import { ProgramsComponent } from './pages/programs/programs.component';



/**
 * For light theme
 * Theme name = minima-light
 */
 export class CustomMinimaLight implements PartialThemeVariables {
  name = 'minima-light';
  primary = {
    default: color(0x573391),
    contrast: color(0xffffff)
  };
  accent = {
    default: color(0x357C3C),
    contrast: color(0x202020)
  };
  // typography = {
  //   fontFamily: `'Lora'`
  // }
}


/**
 * For dark theme
 * Theme name = minima-dark
 */
 export class CustomMinimaDark implements PartialThemeVariables {
  name = 'minima-dark';
  primary = {
    default: color(0x7F5283),
    contrast: color(0xffffff)
  };
  accent = {
    default: color(0xA6D1E6),
    contrast: color(0x202020)
  };
  //   typography = {
  //   fontFamily: `'Lora'`
  // }
}

// Ng Module Declaration
@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    CoursesComponent,
    IndexComponent,
    HeaderBannerComponent,
    SocialBarComponent,

    NavbarComponent,
    SocialShareComponent,
    ArticleComponent,
    HeaderBarComponent,
    BooksComponent,
    PrivacyPolicyComponent,
    FooterComponent,
    ProgramsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    HammerModule,
    HttpClientModule,
    ShareModule,
    AdsenseModule.forRoot(),
    LyCommonModule,
    LyButtonModule,
    LyToolbarModule,
    LyImageCropperModule,
    LyGridModule,
    LyDrawerModule,
    LyListModule,
    LyTabsModule,
    LyFieldModule,
    LySelectModule,
    LyIconModule,
    LyTypographyModule,
    LyCheckboxModule,
    LyCardModule,
    LySkeletonModule,
    LyThemeModule,
  ],
  exports: [RouterModule],
  providers: [
    StyleRenderer,
    LyTheme2,
    { provide: LY_THEME_NAME, useValue: 'minima-light' },
    { provide: LY_THEME, useClass: MinimaDark, multi: true }, // name minima-dark
    { provide: LY_THEME, useClass: MinimaLight, multi: true }, // name minima-light
    { provide: LY_THEME, useClass: CustomMinimaLight, multi: true }, // name minima-light
    { provide: LY_THEME, useClass: CustomMinimaDark, multi: true }, // name minima-dark
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
