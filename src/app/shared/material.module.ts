import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatStepperModule } from '@angular/material/stepper';

@NgModule({
  exports: [MatStepperModule, MatCardModule, MatButtonModule, MatSidenavModule],
})
export class MaterialModule {}
