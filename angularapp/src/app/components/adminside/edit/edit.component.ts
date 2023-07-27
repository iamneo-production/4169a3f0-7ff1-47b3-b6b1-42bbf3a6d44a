import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ThemesService } from 'src/app/themes.service';
import { UserService } from 'src/app/user.service';
import { Router } from '@angular/router';

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
  constructor(private themesService:ThemesService,private userService: UserService, private router: Router){
}
 edit(themes: any){
  this.editedThemes.emit(themes);
  var msg=alert("Updated Successfully");
  }
  logout(): void {
    this.userService.logout();
    this.router.navigate(['/login']);
  }
  
}
