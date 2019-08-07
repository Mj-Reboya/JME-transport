import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

interface ITableData {
  name: string;
  company: string;
  suburd: string;
  state: string;
  phone: string;
  hasAccount: boolean;
}

const TEST_DATA = [
  {
    name: 'Juan Dela Cruz',
    company: 'Xtendly',
    state: 'Tasmania',
    suburd: 'East Coast',
    phone: '+619278893907',
    hasAccount: true
  },
  {
    name: 'Juan Dela Cruz',
    company: 'Xtendly',
    state: 'Tasmania',
    suburd: 'East Coast',
    phone: '+619278893907',
    hasAccount: false
  },
  {
    name: 'Juan Dela Cruz',
    company: 'Xtendly',
    state: 'Tasmania',
    suburd: 'East Coast',
    phone: '+619278893907',
    hasAccount: false
  },
  {
    name: 'Juan Dela Cruz',
    company: 'Xtendly',
    state: 'Tasmania',
    suburd: 'East Coast',
    phone: '+619278893907',
    hasAccount: false
  },
  {
    name: 'Juan Dela Cruz',
    company: 'Xtendly',
    state: 'Tasmania',
    suburd: 'East Coast',
    phone: '+619278893907',
    hasAccount: false
  },
  {
    name: 'Juan Dela Cruz',
    company: 'Xtendly',
    state: 'Tasmania',
    suburd: 'East Coast',
    phone: '+619278893907',
    hasAccount: false
  },
  {
    name: 'Juan Dela Cruz',
    company: 'Xtendly',
    state: 'Tasmania',
    suburd: 'East Coast',
    phone: '+619278893907',
    hasAccount: false
  },
  {
    name: 'Juan Dela Cruz',
    company: 'Xtendly',
    state: 'Tasmania',
    suburd: 'East Coast',
    phone: '+619278893907',
    hasAccount: false
  }
];

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  columns = ['name', 'suburd', 'state', 'phone', 'hasAccount'];
  dataSource: MatTableDataSource<ITableData> = new MatTableDataSource<
    ITableData
  >(TEST_DATA);

  constructor() {}

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
}
