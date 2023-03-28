import {Injectable} from "@angular/core";
import {Observable, of, OperatorFunction, Subject} from "rxjs";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private readonly messages: Subject<Message>;

  get messageChanges(): Observable<Message> {
    return this.messages.asObservable();
  }

  constructor() {
    this.messages = new Subject<Message>();
  }

  prompt(message: string, type: MessageType) {
    const date = new Date();
    this.messages.next({info: message, type, date});
  }

}

export enum MessageType {
  NoDisplay,
  Error,
  Warning,
  Confirmation,
  Information,
  DetailedError,
  Loading
}

export interface  Message {
  type: MessageType;
  info: string;
  date: Date;
}

function handleRichError<T>(msgSrv: MessageService, operation='operation',result?: T): OperatorFunction<T, T>{
  return catchError((error:any): Observable<T> => {
    msgSrv.prompt(
      [
       `${operation} failed: ${error.error.error}`,
        `Details: ${error.error.message}`,
        `URL: ${error.url}`,
      ].join('\n'),
      MessageType.DetailedError,
    );
    return of(result as T);
  });
}

export {handleRichError};
