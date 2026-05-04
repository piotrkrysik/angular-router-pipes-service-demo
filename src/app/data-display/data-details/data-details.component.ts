import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyData } from '../../my-data';
import { MyDataRepoService } from '../../my-data-repo.service';

@Component({
  selector: 'app-data-details',
  standalone: false,
  templateUrl: './data-details.component.html',
  styles: ``
})
export class DataDetailsComponent implements OnInit{
  public item: MyData | undefined;

  constructor(
    private route: ActivatedRoute,
    private dataService: MyDataRepoService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.item = this.dataService.getById(id);
  });
  }
}
