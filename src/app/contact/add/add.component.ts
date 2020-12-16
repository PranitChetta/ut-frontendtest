import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { ContactDetails } from 'src/app/model/contact-details';
import { ListComponent } from '../list/list.component';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit  {
  contactObj = new ContactDetails();

  constructor() { }
  ngOnInit(): void {
  }
  SaveContact() {
    //console.log(this.contactObj.obj.find(a => a.mobile == this.contactObj.mobile));
    
    if (this.contactObj.obj.find(a => a.mobile == this.contactObj.mobile) !== undefined) {
      alert("Mobile Number is already Exit!");
      return;
    }
    console.log(this.contactObj);    
    this.contactObj.add();
    
  }
  load() {
    this.contactObj.list();
    console.log(this.contactObj.obj);

  }
}
