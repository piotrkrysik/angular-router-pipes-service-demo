import { Component, OnInit } from '@angular/core';
import { MyData } from '../../my-data';
import { MyDataRepoService } from '../../my-data-repo.service';

@Component({
  selector: 'app-data-list',
  standalone: false,
  templateUrl: './data-list.component.html',
  styles: ``
})
export class DataListComponent implements OnInit{
  public items: MyData[] = [];

  constructor(private dataService: MyDataRepoService) {}

  ngOnInit(): void {
    this.items=this.dataService.getAll();
  }
}
