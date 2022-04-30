import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './Modules/material.module';
import {FirestoreModule } from '@angular/fire/firestore'
import productReducer from './Store/products/products.reducers';
import { EffectsModule } from '@ngrx/effects';
import { ProductsEffects } from './Store/products/products.effects';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './Screens/home/home.component';
import { CarouselComponent } from './Components/carousel/carousel.component';
import { GroupItemsComponent } from './Components/group-items/group-items.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarouselComponent,
    GroupItemsComponent
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    StoreModule.forRoot({'products':productReducer}),
    FirestoreModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideDatabase(() => getDatabase()),
    StoreDevtoolsModule.instrument(
      {
      maxAge: 25,
      logOnly: environment.production
    }
      ),
    BrowserAnimationsModule,
    EffectsModule.forRoot([ProductsEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
