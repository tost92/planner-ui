import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { UserResponse } from 'src/app/models/UserResponse';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnChanges {
  userEmail:any ="";
  user!: UserResponse;
 constructor(private authService:AuthService){

 }
  ngOnChanges(changes: SimpleChanges): void {
   console.log("CHANGEEEEEEES",changes)
  }

  ngOnInit(): void {
    this.userEmail = this.authService.isLogged();

  }


  logOut(){
    this.authService.logout();
  }

  getUser(email:string){
    this.authService.getUserInfo(email).subscribe(
      {
        next:(response: UserResponse)=>{
           this.user = response;
        },
        error:(error: any)=>{
           alert(error)
        }
      })
      }



  }


