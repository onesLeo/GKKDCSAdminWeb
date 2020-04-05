import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {JemaatModel} from '../dto/JemaatModel';

@Injectable({
  providedIn: 'root'
})
export class JemaatService {

  constructor(private http: HttpClient) { }

  insertJemaat(jemaatObj: JemaatModel): Observable<JemaatModel> {
      return this.http.post<JemaatModel>('https://gkkdcswebadmin.firebaseio.com/jemaat.json', jemaatObj);
  }
}
