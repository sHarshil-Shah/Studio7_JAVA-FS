import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Globals } from 'src/app/global';
import { Content } from 'src/app/model/content';
import { ContentService } from 'src/app/service/content.service';
import { ToolbarService } from 'src/app/services/toolbar.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  updateContentForm = new FormGroup({
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
    this.contentService.findById(Globals.contentId).subscribe(con => { this.content = con; });
  }

  onSubmit() {

    const name = this.updateContentForm.get('name');
    const discription = this.updateContentForm.get('discription');
    const genere = this.updateContentForm.get('genere');
    const language = this.updateContentForm.get('language');
    const trailer = this.updateContentForm.get('trailer');
    const movie = this.updateContentForm.get('movie');
    const cast = this.updateContentForm.get('cast');
    this.contentService.findById(Globals.contentId).subscribe(content => {
      if (name && discription && genere && language && trailer && movie && cast) {

        if (name.value != "")
          content.name = name.value;

        if (discription.value != "")
          content.discription = discription.value;

        if (genere.value != "")
          content.genere = genere.value;

        if (language.value != "")
          content.language = language.value;

        if (trailer.value != "")
          content.trailer = trailer.value;

        if (cast.value != "")
          content.cast = cast.value;

        content.movie = movie.value;

        this.contentService.save(content).subscribe();
        alert("Content updated successfully!!");
      }
    });


  }
  ngOnInit(): void {
  }



}
