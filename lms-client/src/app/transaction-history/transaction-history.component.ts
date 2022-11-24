import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  date: string;
  name: string;
  purpose: string;
  mobileAction: string;
  delete: string;
  viewDetails: string;
}


const ELEMENT_DATA: PeriodicElement[] = [
  {date: '2/8/2022', name: 'John Doe', purpose: "Paid for Introduction to programming", mobileAction: 'more_vert', delete: "delete_forever", viewDetails: "receipt"},
  {date: '2/8/2022', name: 'John Doe', purpose: "Paid for Introduction to programming", mobileAction: 'more_vert', delete: "delete_forever", viewDetails: "receipt"},
  {date: '2/8/2022', name: 'John Doe', purpose: "Paid for Introduction to programming", mobileAction: 'more_vert', delete: "delete_forever", viewDetails: "receipt"},
  {date: '2/8/2022', name: 'John Doe', purpose: "Paid for Introduction to programming", mobileAction: 'more_vert', delete: "delete_forever", viewDetails: "receipt"},
  {date: '2/8/2022', name: 'John Doe', purpose: "Paid for Introduction to programming", mobileAction: 'more_vert', delete: "delete_forever", viewDetails: "receipt"},
  {date: '2/8/2022', name: 'John Doe', purpose: "Paid for Introduction to programming", mobileAction: 'more_vert', delete: "delete_forever", viewDetails: "receipt"},
  {date: '2/8/2022', name: 'John Doe', purpose: "Paid for Introduction to programming", mobileAction: 'more_vert', delete: "delete_forever", viewDetails: "receipt"},
  {date: '2/8/2022', name: 'John Doe', purpose: "Paid for Introduction to programming", mobileAction: 'more_vert', delete: "delete_forever", viewDetails: "receipt"},
  {date: '2/8/2022', name: 'John Doe', purpose: "Paid for Introduction to programming", mobileAction: 'more_vert', delete: "delete_forever", viewDetails: "receipt"},
  {date: '2/8/2022', name: 'John Doe', purpose: "Paid for Introduction to programming", mobileAction: 'more_vert', delete: "delete_forever", viewDetails: "receipt"},
  {date: '2/8/2022', name: 'John Doe', purpose: "Paid for Introduction to programming", mobileAction: 'more_vert', delete: "delete_forever", viewDetails: "receipt"},
  {date: '2/8/2022', name: 'John Doe', purpose: "Paid for Introduction to programming", mobileAction: 'more_vert', delete: "delete_forever", viewDetails: "receipt"}
  
  
];

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.css']
})
export class TransactionHistoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  public dataSource = ELEMENT_DATA;
}
