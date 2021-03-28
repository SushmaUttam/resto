import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
    email : new FormControl(''),
    mobile : new FormControl('')
  });

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
