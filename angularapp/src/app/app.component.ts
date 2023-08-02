import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CaloryTracker';
  isShowForm = true;
  
  public data:any[]=[];

  public qData : any = '';  

  public cData : number = 0.0;

  public fData : any = '';

  searchText = '';

  onSearchTextEntered(searchVal:string){
    this.searchText = searchVal;
    
  }

  toggleFormDiv(){
    console.log("clicked")
    this.isShowForm = !this.isShowForm;
    console.log(this.qData)
  }
}
