import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { LoadService } from "./load.service";
import { Candidate } from "../models/candidate.model";
import { take } from "rxjs/internal/operators/take";
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";
import { Loader } from "app/Enums/Enum";
import { environment } from "../../environments/environment.prod";
import { GetAllCandidatesResponse } from "app/models/responses.model";

@Injectable({
  providedIn: "root",
})
export class CandidateService {
  private candidatesBase: Candidate[];

  private _candidatesObservable: BehaviorSubject<Candidate[]> =
    new BehaviorSubject<Candidate[]>([]);

  constructor(
    private httpClient: HttpClient,
    private loaderService: LoadService
  ) {}

  get candidatesObservable(): Observable<Candidate[]> {
    return this._candidatesObservable.asObservable();
  }

  getById() {
    const requestOptions = {
      headers: new HttpHeaders({
        // 'Content-Type': 'application/json',
        // 'Accept': 'application/json',
        // 'Access-Control-Allow-Headers': 'Content-Type',
        id: "9B9605C7-C26B-4187-8884-B4ADBDFCF19A",
      }),
    };

    return this.httpClient
      .get<Candidate>(environment.apiBackend + "getById", requestOptions)
      .pipe(take(1));
  }

  create(candidate: Candidate) {
    return this.httpClient
      .post<GetAllCandidatesResponse>(
        `${environment.apiBackend}Candidate`,
        candidate
      )
      .pipe(take(1))
      .subscribe(x => {
        console.log(x);
      })
      
  }

  update(candidate: Candidate) {
    return this.httpClient
      .put<GetAllCandidatesResponse>(
        `${environment.apiBackend}Candidate`,
        candidate
      )
      .pipe(take(1));
  }

  delete(candidate: Candidate) {
    const requestOptions = {
      headers: new HttpHeaders({
        id: candidate.id,
      }),
    };

    // return this.httpClient
    // .delete<GetAllCandidatesResponse>(`${environment.apiBackend}Candidate`, requestOptions)
    return this.httpClient.delete<GetAllCandidatesResponse>(
      `${environment.apiBackend}Candidate/id`,
      requestOptions
    );
  }

  SetObservableList(filterString: string) {
    this.loaderService.setLoaderStatus(Loader.SHOW);

    setTimeout(() => {
      if (!filterString) {
        this.httpClient
          .get<GetAllCandidatesResponse>(`${environment.apiBackend}Candidate`)
          .subscribe((response) => {
            this._candidatesObservable.next(response.message);
          });
        // this._candidatesObservable.next(this.candidatesBase);
      } else {
        let candidateFiltered: Candidate[] = [];
        this.candidatesBase.forEach((candidate) => {
          if (
            candidate.name.toLowerCase().indexOf(filterString.toLowerCase()) !==
            -1
          ) {
            candidateFiltered.push(candidate);
          }
        });

        this._candidatesObservable.next(candidateFiltered);
      }
      this.loaderService.setLoaderStatus(Loader.HIDE);
    }, 1000);
  }
}
