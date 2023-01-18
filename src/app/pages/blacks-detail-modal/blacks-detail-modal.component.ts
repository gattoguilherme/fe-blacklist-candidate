import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Candidate, Skills } from '../../models/candidate.model';
import { CandidateService } from '../../services/candidate.service';

@Component({
  selector: 'app-blacks-detail-modal',
  templateUrl: './blacks-detail-modal.component.html',
  styleUrls: ['./blacks-detail-modal.component.scss']
})
export class BlacksDetailModalComponent implements OnInit {

  candidate: any = '';

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
    public bsModalRef: BsModalRef,
    private candidateService: CandidateService) { }

  ngOnInit(): void {
    console.log(this.candidate);
    -this.candidateForm.controls.city.setValue(this.candidate.city);
    this.candidateForm.controls.condit.setValue(this.candidate.condit);
    -this.candidateForm.controls.email.setValue(this.candidate.email);
    -this.candidateForm.controls.id.setValue(this.candidate.id);
    this.candidateForm.controls.idMentor.setValue(this.candidate.idMentor);
    -this.candidateForm.controls.name.setValue(this.candidate.name);
    -this.candidateForm.controls.phoneNumber.setValue(this.candidate.phoneNumber);
    -this.candidateForm.controls.score.setValue(this.candidate.score);
    -this.candidateForm.controls.status.setValue(this.candidate.status);
    -this.candidateForm.controls.uf.setValue(this.candidate.uf);
    this.candidateForm.controls.id_Skill.setValue(this.candidate.skills[0].id_Skill);
    -this.candidateForm.controls.nameSkill.setValue(this.candidate.skills[0].name);
  }

  onSubmit() {

    this.candidateService.update(this.getCurrentCandidate()).subscribe(
      () => {
        this.candidateService.SetObservableList("");
        this.bsModalRef.hide();
      });
  }
  
  delete(){
    this.candidateService.delete(this.getCurrentCandidate()).subscribe(
      () => {
        this.candidateService.SetObservableList("");
        this.bsModalRef.hide();
      });
  }

  getCurrentCandidate(): Candidate{
    return {
      city: this.candidateForm.value.name,
      condit: this.candidateForm.value.condit,
      email: this.candidateForm.value.email,
      id: this.candidateForm.value.id,
      idMentor: this.candidateForm.value.idMentor,
      name: this.candidateForm.value.name,
      phoneNumber: this.candidateForm.value.phoneNumber,
      score: this.candidateForm.value.score,
      status: this.candidateForm.value.status,
      uf: this.candidateForm.value.uf,
      skills: [{
        id_Skill: this.candidateForm.value.id_Skill,
        name: this.candidateForm.value.nameSkill
      }]
    }
  }
}
