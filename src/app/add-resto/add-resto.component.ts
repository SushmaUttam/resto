import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../common.service';
declare var jQuery: any;

@Component({
  selector: 'app-add-resto',
  templateUrl: './add-resto.component.html',
  styleUrls: ['./add-resto.component.css']
})
export class AddRestoComponent implements OnInit {

  alert:boolean = false;
  addRestaurant = new FormGroup({
    name : new FormControl(''),
    address : new FormControl(''),
    email : new FormControl('', [Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
    mobile : new FormControl('')
  });
  panelOpenState = true;

  constructor(private commonService:CommonService) { }

  ngOnInit(): void {
  }

  createResto(){
    console.log("Into createResto");
    this.commonService.addResto(this.addRestaurant.value).subscribe((result)=>{
      this.alert = true;
      this.addRestaurant.reset({});
      console.log("Get data from service" , result);
    });
  }
  
}
