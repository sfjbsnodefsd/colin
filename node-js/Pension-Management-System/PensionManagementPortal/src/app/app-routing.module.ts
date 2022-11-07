import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PensionerService } from './Services/pensioner.service';
import { PensionersComponent } from './Components/pensioners/pensioners.component';
const routes: Routes = [{path:"pensioners", component:PensionersComponent}, ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
