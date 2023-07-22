import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ThemesService } from 'src/app/themes.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
   
  themesToUpdate={
    themeName:"",
    themePrice:"",
    themeDescription:""
  };
  @Input() themes:any;
  @Output() editedThemes=new EventEmitter();
  constructor(private themesService:ThemesService){
}
 edit(themes: any){
  this.editedThemes.emit(themes);
  var msg=alert("Updated Successfully");
  }
  
}
