import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-update-resto',
  templateUrl: './update-resto.component.html',
  styleUrls: ['./update-resto.component.css']
})
export class UpdateRestoComponent implements OnInit {
  alert:boolean = false;
  editRestaurant = new FormGroup({
    name: new FormControl(''),
    address: new FormControl(''),
    email: new FormControl(''),
    mobile: new FormControl(''),
  })
  constructor(private commonService:CommonService, private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.commonService.getCurrentData(this.router.snapshot.params.id).subscribe((result)=>{
      console.log("getCurrentData: " + result);
      console.log(this.router.snapshot.params.id);
      this.editRestaurant = new FormGroup({
        name: new FormControl(result['name']),
        address: new FormControl(result['address']),
        email: new FormControl(result['email']),
        mobile: new FormControl(result['mobile']),
      })
    })
  }

  updateResto(){
    this.commonService.updateResto(this.router.snapshot.params.id, this.editRestaurant.value).subscribe((result)=>{
      console.log("Data updated successfully.", result);
      this.alert = true;
    })
  }

}
