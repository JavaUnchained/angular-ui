import { Component, OnInit } from '@angular/core';
import {Ration} from '../../model/ration';
import {ActivatedRoute, Router} from '@angular/router';
import {RationService} from '../../services/ration-service.service';

@Component({
  selector: 'app-ration-form',
  templateUrl: './ration-form.component.html',
  styleUrls: ['./ration-form.component.css']
})
export class RationFormComponent implements OnInit {

  ration: Ration;

  constructor(private router: Router, private route: ActivatedRoute, private rationService: RationService) {
    this.ration = new Ration();
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.rationService.save(this.ration).subscribe(result => this.gotoRationList());
  }

  gotoRationList(): void {
    this.router.navigate(['/rations']);
  }
}
