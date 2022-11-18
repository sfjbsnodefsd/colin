import { Component, OnInit } from '@angular/core';
import Pensioner from 'src/app/Entity/Pensioner';
import { PensionerService } from 'src/app/Services/pensioner.service';

@Component({
  selector: 'app-pensioners',
  templateUrl: './pensioners.component.html',
  styleUrls: ['./pensioners.component.css']
})
export class PensionersComponent implements OnInit {
  searchText:any;
  pensioners : Pensioner[] = [];

  deleteRow(pensioner:any,index:any){
    const observables = this.pensionerService.deletePensioner(pensioner);
    observables.subscribe((response:any) => {
      console.log(response);
      this.pensioners.splice(index,1)
    })
  }

  getPensionDetail(pensioner:any,index:any){
    const publicBank = 500;
    const privateBank = 550;
    
    var newPensionAmmount=0;
    const promise = this.pensionerService.getPensionerProcess(pensioner);
    promise.subscribe((response) => {
      console.log(response);
      if(pensioner.self_family_pension=="family")
      {
        newPensionAmmount=((pensioner.salary_earned + pensioner.allowences)*.5);
      }
      else {
        newPensionAmmount=((pensioner.salary_earned + pensioner.allowences)*.8);
      };
      
      if(pensioner.public_or_private=="public"){
        publicBank;
      }
      else{
        privateBank;
      }
      console.log(newPensionAmmount);
      
    })
    

  }

  constructor(public pensionerService: PensionerService) {

   }
   

  ngOnInit(): void {
    const promise = this.pensionerService.getPensioners();
    promise.subscribe((response) => {
      console.log(response);
      console.log()
      console.log(localStorage.getItem('user-token'));
      this.pensioners = response as Pensioner[];
    })
  }

}
