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

  constructor(public pensionerService: PensionerService) {

   }
   

  ngOnInit(): void {
    const promise = this.pensionerService.getPensioners();
    promise.subscribe((response) => {
      console.log(response);
      this.pensioners = response as Pensioner[];
    })
  }

}