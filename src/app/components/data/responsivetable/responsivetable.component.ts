import { Component, OnInit } from '@angular/core';
import {PassengerServiceService} from '../../../services/passenger-service.service';
import {PassengerModel} from '../../../models/passenger-model';

@Component({
  selector: 'app-responsivetable',
  templateUrl: './responsivetable.component.html',
  styleUrls: ['./responsivetable.component.scss']
})
export class ResponsivetableComponent implements OnInit {
  
  headElements = ['ID', 'First', 'Last', 'Handle'];
  passengers_list:PassengerModel[];
  constructor(private passengerService:PassengerServiceService) { }

  ngOnInit(): void {

    this.passengerService.getAll().
    subscribe( (promise:any)=>{
      this.passengers_list = promise;
      console.log(this.passengers_list );
    }

    )
  }





}
