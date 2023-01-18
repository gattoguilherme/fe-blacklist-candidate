import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Candidate } from "app/models/candidate.model";
import { Dweller } from "app/models/dweller.model";
import { GetAllCandidatesResponse } from "app/models/responses.model";
import { LoadService } from "app/services/load.service";
import { environment } from '../../../environments/environment.prod';
import { CandidateService } from '../../services/candidate.service';

declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}

@Component({
  selector: "app-blacks",
  templateUrl: "./blacks.component.html",
  styleUrls: ["./blacks.component.css"],
})
export class BlacksComponent implements OnInit {

  public loaderStatus: boolean = false;
  public candidateList: Array<Candidate> = [
    {
      city: "city1",
      condit: "condit1",
      email: "email1",
      id: "id1",
      idMentor: "idMentor1",
      name: "name1",
      phoneNumber: "phoneNumber1",
      score: 100,
      status:  true,
      uf: "SP",
      skills: [
        {
          id_Skill: "idskill1",
          name: "skill1"
        }
      ]
    }
  ];
  public dwellers: Array<Dweller> = [
    {
      guid: "12345678",
      name: "guilherme",
      aptNumber: 1973,
      buildName: "Albatroz"
    },
    {
      guid: "987654321",
      name: "robson",
      aptNumber: 2000,
      buildName: "Camelo"
    },
    {
      guid: "987654321",
      name: "robson",
      aptNumber: 2000,
      buildName: "Camelo"
    },
    {
      guid: "987654321",
      name: "robson",
      aptNumber: 2000,
      buildName: "Camelo"
    },
    {
      guid: "987654321",
      name: "robson",
      aptNumber: 2000,
      buildName: "Camelo"
    },
    {
      guid: "987654321",
      name: "robson",
      aptNumber: 2000,
      buildName: "Camelo"
    },
    {
      guid: "987654321",
      name: "robson",
      aptNumber: 2000,
      buildName: "Camelo"
    },
  ];

  constructor(
    private httpClient: HttpClient,
    private loaderService: LoadService,
    private candidateService: CandidateService
    ) 
    {
      this.candidateService.candidatesObservable.subscribe(res => this.candidateList = res);
      this.candidateService.SetObservableList("");
      
      this.loaderService.LoaderStatus.subscribe(res => this.loaderStatus = res);
    }

  ngOnInit() {
  }
}
