import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import {PassengerServiceService} from '../../../services/passenger-service.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {


  formvalue : FormGroup = this.fb.group({
    name:[],
    address:[],
    coord_x:0.0,
    coord_y:1.1
  
 
  });
  constructor(private fb:FormBuilder, private passengerService:PassengerServiceService) { }

  ngOnInit(): void {
  }


  save(){
    
      const values = this.formvalue.value;
      console.log('values',values);
    
      this.passengerService.create(values)
      .subscribe( () => {
       
      }   
      );
    
      
    
    }
}
