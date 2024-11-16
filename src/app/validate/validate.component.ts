import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-validate',
  templateUrl: './validate.component.html',
  styleUrls: [ './validate.component.scss' ]
})
export class ValidateComponent implements OnInit {

  requestForms: string[] = ['DIIS','NIIS'];
  primaryConnectors: string[] = ['niis-c-diis','???'];
  testConnectors: string[] = ['niis-c-fiserv-dna-coreapi','niis-c-ts','niis-c-symxchange'];
  responseMessages: string[] = ['USRINFO','USRVER','USRSUM','ACTHST','GETUSER'];

  validationRequest: ValidationRequest = {
    requestForm: '',
    hostAccountIds: '',
    requestMessages: '',
    primaryConnector: '',
    testConnector: '',
    hostIds: '',
    responseMessage: ''
  }

  ngOnInit(): void {

  }

}

export interface ValidationRequest {
  requestForm: string,
  hostAccountIds: string,
  requestMessages: string,
  primaryConnector: string,
  testConnector: string,
  hostIds: string,
  responseMessage: string
}

export interface ValidationResponse {
  primaryConnectorResponse: string,
  testConnectorResponse: string,
  comparisonReport: string
}
