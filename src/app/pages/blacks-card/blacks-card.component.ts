import { Component, Input, OnInit } from '@angular/core';
import { Dweller } from 'app/models/dweller.model';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { BlacksDetailModalComponent } from '../blacks-detail-modal/blacks-detail-modal.component';
import { Candidate } from '../../models/candidate.model';

@Component({
  selector: 'app-blacks-card',
  templateUrl: './blacks-card.component.html',
  styleUrls: ['./blacks-card.component.css']
})
export class BlacksCardComponent implements OnInit {

  bsModalRef: any = "";
  // @Input() candidate: Candidate = {guid:"", name:"", buildName:"", aptNumber:0};
  @Input() candidate: Candidate;

  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
    if (this.candidate.condit === "")
      this.candidate.condit = "NA";
  }

  showModal() {
    const initialState = {
      candidate: this.candidate,
      list: [
        'Open a modal with component',
        'Pass your data',
        'Do something else',
        '...'
      ],
      title: this.candidate.name
    };
    this.bsModalRef = this.modalService.show(BlacksDetailModalComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Fechar';
  }

}
