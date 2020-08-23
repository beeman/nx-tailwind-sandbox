import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from '@nx-tailwind-sandbox/ui';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          component: LayoutComponent,
          children: [
            {
              path: '',
              loadChildren: () =>
                import('@nx-tailwind-sandbox/dashboard').then(
                  m => m.DashboardModule
                )
            }
          ]
        }
      ],
      { initialNavigation: 'enabled' }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
