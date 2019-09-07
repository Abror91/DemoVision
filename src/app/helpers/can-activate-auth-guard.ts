import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Helpers } from './helpers';
@Injectable()
export class AuthGuard implements CanActivate{
    constructor(private _router: Router, private _helper: Helpers){

    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean{
        if(!this._helper.isAuthenticated()){
            this._router.navigate(['/login']);
            return false;
        }
        return true;
    }
}