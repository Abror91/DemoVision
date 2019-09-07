import { Component, OnInit } from '@angular/core';
import { Helpers } from 'src/app/helpers/helpers';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
    constructor(private _helper: Helpers,
        private _router: Router,
        private _tokenService: TokenService) {

    }
    ngOnInit() {
        debugger;
        let authValues = { "Username" : "pablo", "Password" : "secret" };
        this._tokenService.authorize(authValues).subscribe(token => {
            debugger;
            this._helper.setToken(token);
            this._router.navigate(['/dashboard']);
        })
    }
}