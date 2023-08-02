import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-app-food-list',
  templateUrl: './app-food-list.component.html',
  styleUrls: ['./app-food-list.component.css']
})
export class AppFoodListComponent implements OnInit {

  public total_cal : number = 0.0;
  public calory : number = 1.0;
  public Quantity : string[] = [];
  public index : number = 0;
  
  @Input() public parentData:any[]=[];

  @Input() public stext : string = '';

  @Output() public QuantityData = new EventEmitter<any>();

  @Output() public CaloryData = new EventEmitter<number>();

  @Output() public FoodData = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  AddQuantity(i:number){
    console.log('Add Button Clicked '+i);
    console.log("Quantity : "+this.Quantity[i]);

    let  q = +this.Quantity[i] | 1;
    let cal = + this.parentData[i].calories;

    this.total_cal += q * cal ;    
    
    console.log(this.total_cal);

    this.QuantityData.emit(this.Quantity);
    this.CaloryData.emit(this.total_cal);
    this.FoodData.emit(this.parentData);
  }

}
