import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Helpers } from 'src/app/helpers/helpers';

@Component({
    selector: 'app-logout',
    templateUrl: './logout.component.html'
})
export class LogoutComponent implements OnInit{
    constructor(private _router: Router,
        private _helper: Helpers){

        }
        ngOnInit(){
            this._helper.logout();
            this._router.navigate(['/login']);
        }
}