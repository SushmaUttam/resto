import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonService } from '../common.service';
import * as $ from "jquery";
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-list-resto',
  templateUrl: './list-resto.component.html',
  styleUrls: ['./list-resto.component.css']
})
export class ListRestoComponent implements OnInit {
  alert:boolean = false;
  public collection:any;
  displayedColumns: string[] = ['id', 'name', 'address', 'mobile', 'email', 'action'];
  dataSource;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  constructor(private commonService:CommonService) { }

  ngOnInit(): void {
    this.commonService.getRestoList().subscribe((result)=>{
      this.collection=result;
      this.dataSource = new MatTableDataSource<RestoList>(this.collection);
      console.log("collection" + this.collection);
    });
  }

  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  // }

  deleteResto(id){
    this.commonService.deleteResto(id).subscribe((result)=>{
      console.log("Data deleted successfully.", result);
      this.alert = true;
      this.commonService.getRestoList().subscribe((result)=>{
        this.collection=result;
        this.dataSource = new MatTableDataSource<RestoList>(this.collection);
        console.log("collection" + this.collection);
      });
    });
    $(this).closest('tr').remove();
  }

}

export interface RestoList {
  id: number
  name: string;
  address: number;
  mobile: number;
  email: string;
  action: string;
}
