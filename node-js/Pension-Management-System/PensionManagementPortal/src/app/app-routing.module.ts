import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PensionerService } from './Services/pensioner.service';
import { PensionersComponent } from './Components/pensioners/pensioners.component';
import { PensionerFormComponent } from './Components/pensioner-form/pensioner-form.component';
import { LoginComponent } from './Components/login/login.component';
const routes: Routes = [
{path:"pensioners", component:PensionersComponent}, 
{path:"pensioner-form", component:PensionerFormComponent},
{path:"login", component:LoginComponent},];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
