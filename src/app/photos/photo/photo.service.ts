import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Photo } from "./photo";

const API = "http://localhost:3000";

@Injectable({ providedIn: "root" }) //com o injec table qlqr componente que precisar dessa api vai ter ela disponivel
export class PhotoService {
  constructor(private http: HttpClient) {}

  listFromUser(userName: string) {
    return this.http.get<Photo[]>(API + "/" + userName + "/photos");
  }
}
