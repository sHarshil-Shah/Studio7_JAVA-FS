import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Content } from 'src/app/model/content';
import { ContentService } from 'src/app/service/content.service';
import { Globals } from 'src/app/global';
import { ToolbarService } from 'src/app/services/toolbar.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  addContentForm = new FormGroup({
    name: new FormControl(''),
    discription: new FormControl(''),
    genere: new FormControl(''),
    language: new FormControl(''),
    trailer: new FormControl(''),
    movie: new FormControl(''),
    cast: new FormControl(''),
  });

  content: Content;
  generes: string[];
  languages: string[];
  constructor(private contentService: ContentService, public globals: Globals,
    public navbarService: ToolbarService,
  ) {
    this.generes = Globals.generes;
    this.languages = Globals.languages;
    this.content = new Content();
  }

  onSubmit() {

    const name = this.addContentForm.get('name');
    const discription = this.addContentForm.get('discription');
    const genere = this.addContentForm.get('genere');
    const language = this.addContentForm.get('language');
    const trailer = this.addContentForm.get('trailer');

    const movie = this.addContentForm.get('movie');

    const cast = this.addContentForm.get('cast');

    if (name && discription && genere && language && trailer && movie && cast) {

      this.content.name = name.value;
      this.content.discription = discription.value;
      this.content.genere = genere.value;
      this.content.language = language.value;

      this.content.trailer = trailer.value;

      this.content.cast = cast.value;
      if (movie.value == true) {
        this.content.movie = true;
      }

     // console.log(this.content);
      this.contentService.save(this.content).subscribe();
      alert("Content added successfully!!");
    }

  }

}