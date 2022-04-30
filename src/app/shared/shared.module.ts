import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../Components/navbar/navbar.component';
import { MaterialModule } from '../Modules/material.module';



@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[NavbarComponent]

})
export class SharedModule { }
