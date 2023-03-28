import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {handleRichError, MessageService} from "../message.service";
import {Observable, pluck, Subject} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  readonly endpoint: string = '/dashboard';
  // TODO: use app config service to get rest endpoint from the environment.ts
  // this.appConfigService.getConfig().rest_api_endpoint
  readonly  clearSelection = new Subject<void>();
  private readonly searchObjects = new Subject<any>();

  constructor(private readonly  httpClient: HttpClient, private readonly messageService: MessageService){}
  // private readonly appConfigService: AppConfigService

  postRequest(properties: any): Observable<any> {
    const endpoint = this.endpoint + '/post';
    return this.httpClient.post<ObjectResponse>(endpoint,properties)
      .pipe(
        map(res => res),
        handleRichError<any>(this.messageService, 'Post'),
      );
  }

  putRequest(properties: any): Observable<any> {
    const endpoint = this.endpoint + '/put';
    return this.httpClient.put<ObjectResponse>(endpoint,properties)
      .pipe(
        map(res => res),
        handleRichError<any>(this.messageService, 'Put'),
      );
  }

  deleteRequest(id: string): Observable<any> {
    let params = new HttpParams();
    params = params.append('id',id);
    const endpoint = this.endpoint + '/delete';
    return this.httpClient.delete<ObjectResponse>(endpoint, {params})
      .pipe(
        map(res => res),
        handleRichError<any>(this.messageService, 'Delete'),
      );
  }

  getRequest(searchValue: string): Observable<SearchObject[]> {
    const params: Record<string, string> = {
      filterBy: 'id',
      filterValue: searchValue
    };
    return this.httpClient.get<BatchSearchObjectResult>(this.endpoint + '/get',{params})
      .pipe(pluck('list'));
  }

  sendSearchObjectsUpdate(){
    this.searchObjects.next('');
  }

  getSearchObjectsUpdate(){
    return this.searchObjects.asObservable();
  }

  selectionUpdate(){
    this.clearSelection.next();
  }

  refresh(lastParams: any) : Observable<SearchObject[]> {
    return this.httpClient
      .get<BatchSearchObjectResult>(this.endpoint + '/get',{params: lastParams})
      .pipe(pluck('list'));
  }

  searchObjectsCount(lastParams: any) {
    return this.httpClient.get<{count: string}>(this.endpoint + '/get/count',{params: lastParams});
  }

  resetAll(lastParams: ListParams): Observable<SearchObject[]> {
    for (const key in lastParams) {
      if (lastParams.hasOwnProperty(key)) {
        // @ts-ignore
        delete lastParams[key];
      }
    }
    return this.refresh(lastParams);
  }

  getPage(lastParams: ListParams, info: PaginatorInformation): Observable<SearchObject[]> {
    const startRow = String(+info.pageSize * (+info.currentPage -1) + 1);
    const maxRows = info.pageSize;
    Object.assign(lastParams,{maxRows,startRow});
    return this.refresh(lastParams);
  }

  resetToFirstPage(lastParams: ListParams, startRow = '1') {
    Object.assign(lastParams,{startRow});
  }

  sort(lastParams: ListParams,
       sortBy: keyof SearchObject,
       sortAsc: boolean = true,): Observable<SearchObject[]> {
    Object.assign(lastParams, {sortBy, sortAsc: String(sortAsc)});
    return this.refresh(lastParams);
  }

  resetSort(lastParams: ListParams): Observable<SearchObject[]> {
    delete lastParams.sortBy;
    delete lastParams.sortAsc;
    return this.refresh(lastParams);
  }

  filter(lastParams: ListParams,
         filterBy: FilterColumns,
         filterValue: string): Observable<SearchObject[]>{
    Object.assign(lastParams,{filterBy, filterValue});
    return this.refresh(lastParams);
  }

  resetFilter(lastParams: any){
    delete lastParams.filterBy;
    delete lastParams.filterValue;
    return this.refresh(lastParams);
  }

}

export interface ObjectResponse {
  message: string;
}

export interface SearchObject {
  id: string;
  name: string;
}

export interface BatchSearchObjectResult {
  list: SearchObject[];
}

export type FilterColumns =
  'id'
  | 'name';

export interface ListParams {
  filterBy?: FilterColumns;
  filterValue?: string;
  sortBy?: keyof SearchObject;
  sortAsc?: 'true' | 'false';
  startRow?: string;
  maxRows?: string;
}

export interface  PaginatorInformation {
  pageSize: string;
  currentPage: string;
}
