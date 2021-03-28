import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import * as $ from "jquery";

@Component({
  selector: 'app-list-resto',
  templateUrl: './list-resto.component.html',
  styleUrls: ['./list-resto.component.css']
})
export class ListRestoComponent implements OnInit {
  alert:boolean = false;
  public collection:any;
  constructor(private commonService:CommonService) { }

  ngOnInit(): void {
    this.commonService.getRestoList().subscribe((result)=>{
      this.collection=result;
      console.log("collection" + this.collection);
    });
  }

  deleteResto(id){
    this.commonService.deleteResto(id).subscribe((result)=>{
      console.log("Data deleted successfully.", result);
      this.alert = true;
      this.commonService.getRestoList().subscribe((result)=>{
        this.collection=result;
        console.log("collection" + this.collection);
      });
    });
    $(this).closest('tr').remove();
  }

}
