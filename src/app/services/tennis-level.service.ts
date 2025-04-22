import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface TennisLevel {
  level: number;
  title: string;
  description: string;
}

export interface TennisLevelData {
  title: string;
  introduction: string;
  levels: TennisLevel[];
}

@Injectable({
  providedIn: 'root'
})
export class TennisLevelService {

  constructor(private http: HttpClient) { }

  getLevels(): Observable<TennisLevelData> {
    return this.http.get<TennisLevelData>('assets/tennis-levels.json');
  }
}