import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './pages/article/article.component';
import { BlogComponent } from './pages/blog/blog.component';
import { BooksComponent } from './pages/books/books.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { IndexComponent } from './pages/index/index.component';
import { ProgramsComponent } from './pages/programs/programs.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
  },
  {
    path: 'blog',
    component: BlogComponent,
  },
  {
    path: 'courses',
    component: CoursesComponent,
  },
  {
    path: 'programs',
    component: ProgramsComponent,
  },
  { path: 'article/:id/:title_slug', component: ArticleComponent },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
      scrollPositionRestoration: 'enabled',
      onSameUrlNavigation: 'ignore',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
