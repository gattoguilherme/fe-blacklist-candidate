import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Candidate } from 'app/models/candidate.model';
import { CandidateService } from 'app/services/candidate.service';
import { environment } from '../../../environments/environment.prod';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {

  candidate: any = '';
  title: string = '';
  closeBtnName: string = '';
  list: any[] = [];

  candidateForm = new FormGroup({
    city:         new FormControl(''),
    condit:       new FormControl(''),
    email:        new FormControl(''),
    id:           new FormControl(''),
    idMentor:     new FormControl(''),
    name:         new FormControl(''),
    phoneNumber:  new FormControl(''),
    score:        new FormControl(0),
    status:       new FormControl(true),
    uf:           new FormControl(''), 
    id_Skill:     new FormControl(''),
    nameSkill:    new FormControl(''),
  });

  constructor(
    private candidateService: CandidateService
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    debugger;
    console.log("bateu aqui");
    this.candidateService.create(this.getCurrentCandidate());
  }

  getCurrentCandidate(): Candidate{

    if (
    this.candidateForm.value.name !== "" && 
    this.candidateForm.value.condit !== "" &&
    this.candidateForm.value.email !== "" &&
    this.candidateForm.value.name !== "" &&
    this.candidateForm.value.phoneNumber !== "" &&
    this.candidateForm.value.uf !== "" &&
    this.candidateForm.value.nameSkill !== ""
    )

    return {
      city: this.candidateForm.value.name,
      condit: this.candidateForm.value.condit,
      email: this.candidateForm.value.email,
      idMentor: environment.guidMentor, //mock provisório
      name: this.candidateForm.value.name,
      phoneNumber: this.candidateForm.value.phoneNumber,
      score: this.candidateForm.value.score,
      status: this.candidateForm.value.status,
      uf: this.candidateForm.value.uf,
      skills: [{
        name: this.candidateForm.value.nameSkill
      }]
    }
  }
}
