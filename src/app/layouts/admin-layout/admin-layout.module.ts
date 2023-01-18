import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

import { NguiMapModule } from "@ngui/map";

import { AdminLayoutRoutes } from "./admin-layout.routing";

import { UserComponent } from "../../pages/user/user.component";
import { BlacksComponent } from "../../pages/blacks/blacks.component";
import { BlacksCardComponent } from "app/pages/blacks-card/blacks-card.component";
import { LoadingComponent } from '../../components/loading/loading.component';
import { ReactiveFormsModule } from "@angular/forms";
import { BlacksDetailModalComponent } from "app/pages/blacks-detail-modal/blacks-detail-modal.component";
import { CreateAccountComponent } from "app/pages/create-account/create-account.component";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(AdminLayoutRoutes),
    NguiMapModule.forRoot({
      apiUrl: "https://maps.google.com/maps/api/js?key=YOUR_KEY_HERE",
    }),
  ],
  declarations: [
    UserComponent,
    BlacksComponent,
    BlacksCardComponent,
    BlacksDetailModalComponent,
    LoadingComponent,
    CreateAccountComponent
  ],
})
export class AdminLayoutModule {}
