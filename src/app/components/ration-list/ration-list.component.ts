import {ApplicationRef, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Ration} from '../../model/ration';
import {RationService} from '../../services/ration-service.service';

@Component({
  selector: 'app-ration-list',
  templateUrl: './ration-list.component.html',
  styleUrls: ['./ration-list.component.css']
})
export class RationListComponent implements OnInit {
  rations: Ration[] = [];
  ids: bigint[] = [];
  constructor(private rationService: RationService, private cdr: ChangeDetectorRef) {
  }

  deleteComponent(id: bigint): void {
    if ( this.ids.indexOf(id) === -1) {
      this.ids.push(id);
    }else{
      this.ids.splice(this.ids.indexOf(id), 1);
    }
    console.log(this.ids.toString());
  }

  sendDeleteIds(): void {
    if (this.ids.length > 0) {
      console.log('ids is more then 0');
      this.rationService.delete(this.ids).subscribe(data => data);
      this.rations = this.rations.filter(i => !this.ids.includes(i.id));
      this.cdr.detectChanges();
    }
  }

  ngOnInit(): void {
    this.rationService.findAll().subscribe(data => {
      this.rations = data;
    });
  }

}
