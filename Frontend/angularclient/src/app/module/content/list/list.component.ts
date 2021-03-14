import { Component, OnInit } from '@angular/core';
import { Content } from 'src/app/model/content';
import { ContentService } from 'src/app/service/content.service';
import { Router } from '@angular/router';
import { Globals } from 'src/app/global';
import { ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  contents: Content[] = [];
  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns: string[] = ['Name', 'Discription', 'Genere', 'Rating', 'Language', 'Trailer', 'Movie/Series', 'Cast', 'Update', 'Delete'];
  dataSource: any;
  languages: string[];
  generes: string[];
  selectedLanguages: string[] = [];
  selectedGeneres: string[] = [];


  constructor(private contentService: ContentService, private router: Router,) {
    this.languages = Globals.languages;
    this.generes = Globals.generes;
  }

  ngOnInit(): void {
    this.getData();
  }

  goToAdd() {
    this.router.navigate(['contents/add']);
  }

  getData() {
    this.contentService.findAll().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.contents = data;
    });
  }
  delete(id: number) {
    this.contentService.delete(id).subscribe();
    alert('Content Deleted!');
    this.getData();
  }

  update(id: number) {
    Globals.contentId = id;
    this.router.navigate(['contents/update']);
  }


  updateTableData(con: Content[]) {
    this.dataSource = new MatTableDataSource(con);
  }

  clickedOption() {
    let selLan: string[] = this.selectedLanguages;
    let selGen: string[] = this.selectedGeneres;

    if (selLan.length == 0 && selGen.length == 0) {
      this.ngOnInit();
    } else if (selLan.length == 0) {
      this.dataSource = new MatTableDataSource(this.contents.filter(res => {
        return selGen.includes(res.genere);
      }));
    } else if (selGen.length == 0) {
      this.dataSource = new MatTableDataSource(this.contents.filter(res => {
        return selLan.includes(res.language);
      }));

    } else {
      this.dataSource = new MatTableDataSource(this.contents.filter(res => {
        return selLan.includes(res.language) && selGen.includes(res.genere);
      }));
    }
  }

  sortByRating() {
    this.contents.sort(function (a, b) {
      return b.rating - a.rating;
    });
    this.updateTableData(this.contents);
  }
}