import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-troubleshoot',
  templateUrl: './troubleshoot.component.html',
  styleUrls: [ './troubleshoot.component.scss' ]
})
export class TroubleshootComponent implements OnInit {

  troubleshootOptions: TroubleshootOptions[] = [
    {request: 'accountHistory',variables: ['customerHostId','accountNumber','pageNumber','pageCount']},
    {request: 'getConfigs', variables: []},
    {request: 'getConfigsForApp', variables: ['application']},
    {request: "getIntegration", variables: ['integrationName']},
    {request: "getIntegrationForInstitution", variables: []},
    {request: "userAccountSummary", variables: ['customerHostId']},
    {request: "userInfo", variables: ['customerHostId','customerPin']},
    {request: "userVerify", variables: ['customerHostId','customerPin']}
  ];

  optionsResponse: TroubleshootOptions[] = [
    {request: 'accountHistory',variables: ['','','','']},
    {request: 'getConfigs', variables: []},
    {request: 'getConfigsForApp', variables: ['']},
    {request: "getIntegration", variables: ['']},
    {request: "getIntegrationForInstitution", variables: []},
    {request: "userAccountSummary", variables: ['']},
    {request: "userInfo", variables: ['','']},
    {request: "userVerify", variables: ['','']}
  ];
  // integrationName
  environments: string[] = ['Production','Staging','PTE','QA','Dev'];
  //requests: string[] = ['getConfigs','getConfigsForApp'];
  requests: string[] = [];
  selectedRequest: string = '';
  selectedVariables: string[] = [];
    //selectedVariables: string[] = this.getVariables();
  //selectedVariables: string[] = this.troubleshootOptions.filter((opt) => (opt.request === this.selectedRequest))[0].variables;
  connectors: string[] = ['CONNECTOR_NAME']
  selectedConnector: string = '';
  troubleshootRequest: TroubleshootRequest = {
    environment: '',
    request: '',
    institutionId: '',
    application: '',
    customerHostId: '',
    accountNumber: '',
    pageNumber: '',
    pageCount: '',
    customerPin: '',
    integrationName: ''
  }
  variableMap = new Map<string, string>;
  variables: string[] = [];
  variableFields = ['environment','request','institutionId','application','customerHostId',
  'accountNumber','pageNumber','pageCount','customerPin','integrationName'];
  constructor() { }

  ngOnInit(): void {
    this.requests = this.troubleshootOptions.map(value => value.request);
    this.variableMap = new Map(Object.entries(this.troubleshootRequest));
  }

  trackByIdx(index: number, obj: any): any {
    return index;
  }

  getVariables(): string[]{
    console.log(this.selectedRequest);
    const selected = this.troubleshootOptions.filter(opt=> (opt.request === this.selectedRequest));
    console.log(selected);
    if (selected){
      if (selected[0].variables){
        this.selectedVariables = selected[0].variables
      }
    }
    return [];
  }


}

export interface TroubleshootOptions {
  request: string,
  variables: string[]
}

export interface TroubleshootRequest {
  environment: string,
  request: string,
  institutionId: string,
  application: string,
  customerHostId: string,
  accountNumber: string,
  pageNumber: string,
  pageCount: string,
  customerPin: string,
  integrationName: string
}
