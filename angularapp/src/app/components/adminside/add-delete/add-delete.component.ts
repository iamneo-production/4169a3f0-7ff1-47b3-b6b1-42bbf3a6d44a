import { Component } from '@angular/core';
import { ThemesService } from 'src/app/themes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-delete',
  templateUrl: './add-delete.component.html',
  styleUrls: ['./add-delete.component.css']
})
export class AddDeleteComponent {
 
   searchText:any;
   themeDetails:any=null;
   openEdit:boolean=false;
   themes:any;
   



  constructor(private themesService:ThemesService,private router: Router){
      this.getThemeDetails();
  }
  add(addForm: { value: any; reset: () => void; }){
     this.themesService.addTheme(addForm.value).subscribe(
      (resp)=>{
        console.log(resp);
        addForm.reset();
        this.getThemeDetails();
      },
      (err)=>{
        console.log(err);
      }
     );
  }

  getThemeDetails(){
    this.themesService.getTheme().subscribe(
      (resp)=>{
        console.log(resp);
        this.themeDetails=resp;
      },
      (err)=>{
        console.log(err);
      }
    );
  }

  deleteTheme(theme: { themeId: any; }){
    this.themesService.deleteTheme(theme.themeId).subscribe(data => {
      console.log(data);
      this.getThemeDetails();

    })
    
    
  }

  onBtnClick(theme: any){
    this.themes = theme;
    this.openEdit=true;
  }

  updatedTheme(event:any){
   
   for(let i=0;i<this.themeDetails.length;i++){
    if(this.themeDetails[i].themeId == event.themeId){
      this.themeDetails[i] = event;
   this.themesService.editTheme(this.themeDetails[i]).subscribe( data => {
      this.getThemeDetails();
    }, error => {
    });
  }
}
    this.openEdit=false;
  }
}
