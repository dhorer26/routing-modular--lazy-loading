import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';

import { BoutiqueComponent } from './boutique/boutique.component';

export const routes: Routes = [
  { path: '', component: BoutiqueComponent, pathMatch: 'full' },
  {
    path: 'shop',
    loadChildren: () => import('./shop/shop.module').then(m => m.ShopModule)
  },
  { path: '**', component: BoutiqueComponent }
];

@NgModule({
  declarations: [AppComponent, BoutiqueComponent],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
