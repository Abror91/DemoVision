import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from '../core/base.service';
import { Employee } from '../models/employee';

const API_URL = "api/employee"
@Injectable()
export class EmployeeService extends BaseService<Employee>{
    constructor(http: HttpClient){
        super(http, API_URL);
    }
}