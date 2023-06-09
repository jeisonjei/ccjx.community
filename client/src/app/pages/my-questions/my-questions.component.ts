import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ErrorHandlerService } from '../../services/error-handler.service';
import { Topic } from '../../consts';
import { UrlsService } from '../../services/urls.service';

@Component({
  selector: 'app-my-questions',
  templateUrl: './my-questions.component.html',
  styleUrls: ['./my-questions.component.scss'],
})
export class MyQuestionsComponent {
  myQuestions: Array<Topic> = [];
  constructor(
    private http: HttpClient,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private eh: ErrorHandlerService,
    private urls:UrlsService
  ) {
    this.getMyQuestions();
  }
  getMyQuestions() {
    const self = this;
    this.http.get(this.urls.URL_MY_QUESTIONS).subscribe({
      next(value:any) {
          self.myQuestions=[...value];
      },
    });
  }
}
