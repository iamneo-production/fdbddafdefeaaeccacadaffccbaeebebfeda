import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  name : string = '';
  calories : string = '';
  image_url : string = '';

  list:any[] = [];
  
  @Output() public sendData = new EventEmitter<any>();
  
  constructor() { }

  ngOnInit(): void {
    this.name = 'apple';
    this.calories='250';
    this.image_url='https://png.pngtree.com/element_our/png/20181129/vector-illustration-of-fresh-red-apple-with-single-leaf-png_248312.jpg';
  }

  AddNewFood(){
    console.log('AddNewFood Clicked')
    this.list.push({id:this.list.length,name:this.name,calories:this.calories,url:this.image_url})
    console.log(this.list)
    this.sendData.emit(this.list);

  }
}
