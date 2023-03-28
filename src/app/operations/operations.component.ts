import {AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MessageService} from "../message.service";
import {DashboardService, ListParams, PaginatorInformation, SearchObject} from "../dashboard/dashboard.service";
import {filter, mergeAll, Observable, Subject, Subscribable, Subscription} from "rxjs";
import {SelectionModel} from "@angular/cdk/collections";
import {MatDialog} from "@angular/material/dialog";
import {DialogComponent} from "./dialog/dialog.component";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: [ './operations.component.scss' ]
})
export class OperationsComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['Active', 'USR', 'ANUM', 'ATYP','AUSR'];
  data: OperationsTable[] = [
    {Active: true, USR: 'First Last', ANUM: 1, ATYP: 'Type',AUSR: 1},
    {Active: false, USR: 'First Last', ANUM: 2, ATYP: 'Type',AUSR: 2},
    {Active: true, USR: 'First Last', ANUM: 3, ATYP: 'Type',AUSR: 3},
    {Active: true, USR: 'First Last', ANUM: 4, ATYP: 'Type',AUSR: 4},
    {Active: false, USR: 'First Last', ANUM: 5, ATYP: 'Type',AUSR: 5},
    {Active: true, USR: 'First Last', ANUM: 6, ATYP: 'Type',AUSR: 6},
    {Active: false, USR: 'First Last', ANUM: 7, ATYP: 'Type',AUSR: 7},
    {Active: true, USR: 'First Last', ANUM: 8, ATYP: 'Type',AUSR: 8},
    {Active: true, USR: 'First Last', ANUM: 9, ATYP: 'Type',AUSR: 9},
    {Active: false, USR: 'First Last', ANUM: 10, ATYP: 'Type',AUSR: 10},
    {Active: false, USR: 'First Last', ANUM: 11, ATYP: 'Type',AUSR: 11}
  ];
  dataSource = new MatTableDataSource<OperationsTable>(this.data);
  searchResults: SearchObject[] = [];
  searchObjects$: Observable<SearchObject[]> | undefined;
  selection = new SelectionModel<SearchObject>(false,[]);
  lastSelection: SearchObject | undefined;
  loading = false;
  //queue = new Subject<Observable<SearchObject[]>>();
  searchObjectsUpdate: Subscription | undefined;
  rowCount: string | undefined;
  //params: ListParams = {maxRows: '20'};
  //keypressFunctionWrapper = keypressFunctionWrapper;
  @ViewChild(MatSort) sort!: MatSort;
  //@ViewChild('contextMenu') contextMenu: ContextMenuComponent;
  //@ViewChild(TableFilterComponent) contentFilter: TableFilterComponent;
  //@ViewChild(TableCellComponent) cells: QueryList<TableCellComponent>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  //public dialog: MatDialog,
  constructor(private readonly messageService: MessageService,
              private readonly dashboardService: DashboardService,
              private readonly changeDetectorRef: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    //this.dataSource = new MatTableDataSource<OperationsTable>([]);
    //this.updateSearchObjects();
    //this.searchObjects$ = this.queue.pipe(mergeAll());
    //this.getSearchObjectsCount();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    //this.queue.next(this.dashboardService.refresh(this.params));
  }
/*
  updateSearchObjects(){
    this.searchObjectsUpdate =
      this.dashboardService.getSearchObjectsUpdate().subscribe(()=>{
        this.getSearchObjectsCount();
        this.getSearchObjects();
      });
  }

  getSearchObjects(){
    this.dashboardService.refresh(this.params).subscribe(data => {
      //this.dataSource = new MatTableDataSource(data);
      //this.dataSource.sort = this.sort;
      this.changeDetectorRef.detectChanges();
    });
  }

  getSearchObjectsCount(){
    this.dashboardService.searchObjectsCount(this.params).subscribe(data => {
      if (!this.rowCount){
        this.rowCount = data.count;
      }
      this.changeDetectorRef.detectChanges();
      //this.customPaginator.resetPage(Number(data.count));
      this.getSearchObjects();
    });
  }

  updatePagination(paginatorInfo: PaginatorInformation): void {
    this.dashboardService.getPage(this.params,paginatorInfo);
    this.getSearchObjects();
  }

  processFilter(filterValue: any): void {
    if(!filterValue) {
      this.dashboardService.resetFilter(this.params);
    } else {
      this.dashboardService.resetToFirstPage(this.params);
      this.dashboardService.filter(this.params, filterValue.col, filterValue.keywordValue);
    }
    this.getSearchObjectsCount();
    this.getSearchObjects();
  }

  openContextMenu(event: MouseEvent | KeyboardEvent, row: any) {
    this.contextMenu.openContextMenu(event, row, this.selection.selected);
  }

  sortColumn(){
    if (this.sort.direction === ''){
      this.dashboardService.resetSort(this.params);
    } else {
      this.dashboardService.sort(
        this.params,
        this.sort.active as keyof SearchObject,
        this.sort.direction === 'asc'
      );
    }
    this.getSearchObjects();
  }

  toggleFilter(): void {
    this.contentFilter.toggleFilter();
  }

  clickHandler(event: MouseEvent | KeyboardEvent, row: SearchObject) {
    if(event.ctrlKey){
      this.selection.toggle(row);
    } else {
      if (this.selection.isSelected(row)){
        this.selection.clear();
      } else {
        this.selection.clear();
        this.selection.toggle(row);
      }
    }
  }

  openDialog() {
    const timeout = 3000;
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '65%'
    });
    return dialogRef.afterClosed().subscribe(res => {
      if (!res){
        return;
      } else {
        this.updateSearchObjects();
        this.searchObjects$ = this.queue.pipe(mergeAll());
        this.getSearchObjectsCount();
      }
      setTimeout(()=> {

      }, timeout);
    });
  }

  search(value: any): void {
    if (value.length > 2) {
      //this.status = 'querying';
      this.dashboardService.getRequest(value).subscribe(res => {
        this.searchResults = Array.from(res);
        //this.status = 'invisible';
      });
    }
  }
*/
}

export interface OperationsTable {
  Active: boolean;
  USR: string;
  ANUM: number;
  ATYP: string;
  AUSR: number;
}

export function keypressFunctionWrapper(event: KeyboardEvent, fn: (...args: any[]) => any, ...params: any[]){
  if (event.key === 'Event' || event.key === 'Space'){
    fn.apply(undefined,params);
  }
}
