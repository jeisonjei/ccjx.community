import { EventEmitter, Injectable, Output } from '@angular/core';
import { ServerError } from "../../consts";
import { UrlsService } from 'src/app/urls.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {
  pubmEvent: EventEmitter<string> = new EventEmitter<string>();
  constructor(private urls:UrlsService) { }
  handleError(error: ServerError) {
    if (error.public) {
      const pubm = error.public;
      const privm = error.private;
      this.pubmEvent.emit(pubm)
      console.error(privm);
    }
    else {
      if (error.private) {
        const pubm=error.private;
        const privm = pubm;
        this.pubmEvent.emit(pubm);
        console.error(privm)    ;
      }
      else {
        const pubm = this.urls.DEFAULT_ERROR_MESSAGE;
        const privm=JSON.stringify(error);
        this.pubmEvent.emit(pubm);
        console.error(privm);
      }
    }
  }

}
