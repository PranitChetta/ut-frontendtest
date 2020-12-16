import { Component, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ContactDetails } from 'src/app/model/contact-details';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnChanges {

  @Input() data: any[] = [];
  edit = false;
  editObj = { name: "", mobile: "-1" };
  contactObj = new ContactDetails();
  nm = "";
  mb = "";
  constructor() {

  }
  ngOnChanges(changes: SimpleChanges): void {

    if (this.data.length == 0) {
      return;
    }
    console.log('data is:' + this.data.length);

    console.log(this.data);
    this.contactObj.obj = this.data;

  }

  ngOnInit(): void {
    this.contactObj.list();
  }

  delete(data: any) {
    for (let index = 0; index < this.contactObj.obj.length; index++) {
      const element = this.contactObj.obj[index];
      if (element.mobile == data.mobile) {
        //console.log(index);
        this.contactObj.obj.splice(index, 1);
        this.contactObj.update();
        break;
      }
    }
  }
  editIt(data: any) {
    this.editObj.name = data.name;
    this.editObj.mobile = data.mobile;
    this.mb = data.mobile;
    this.nm = data.name;
    this.edit = true;
    console.log(this.editObj);
    console.log(this.mb);


  }
  Update() {
    //this.editObj.name = data.name;
    //this.editObj.mobile = data.mobile;
    if (this.contactObj.obj.find(a => a.mobile == this.editObj.mobile && a.name == this.editObj.name) !== undefined) {
      alert("Mobile Number is already Exit!");
      return;
    }
    for (let index = 0; index < this.contactObj.obj.length; index++) {
      var element = this.contactObj.obj[index];
      if (element.mobile == this.mb) {
        this.contactObj.obj[index] = this.editObj;
        this.contactObj.update();

        break;
      }
    }

    this.editObj.name = "";
    this.editObj.mobile = "-1";
    this.mb = "";
    this.nm = "";
    this.contactObj.list();
  }
}
