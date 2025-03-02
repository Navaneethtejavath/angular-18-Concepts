import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IRole } from '../../model/class/role';
import { log } from 'console';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-roles',
  imports: [FormsModule,CommonModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent implements OnInit{

  RolesList:IRole []=[];
  http=inject(HttpClient);

  ngOnInit(): void {
   this.GetAllRoles();
  }
  
  selectedid:string="";
  
  GetAllRoles(){
    this.http.get("https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles").subscribe((res:any)=>{
       this.RolesList=res.data;
       console.log(JSON.stringify(this.RolesList));
       
    })
  }

  // firstname:string="navaneeth";
  // version="tej";
  // IsActive:boolean=false;
  //  digits:number=0;
  //  CurrentDate:Date=new Date();
   
  // selectedstat:string="";

  // showalert(){
  //   alert("angular 18 Concepts");
  // }
  // showalertmesage(message:string){
  //   alert(message);
  // }
}
