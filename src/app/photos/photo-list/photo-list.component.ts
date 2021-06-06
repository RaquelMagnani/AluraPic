import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Photo } from "../photo/photo";
import { PhotoService } from "../photo/photo.service";

@Component({
  selector: "ap-photo-list",
  templateUrl: "./photo-list.component.html",
  styleUrls: ["./photo-list.component.css"],
})
export class PhotoListComponent implements OnInit {
  photos: Photo[] = [];

  constructor(
    private photoService: PhotoService, //oq ta dentro do () é a injeção de dependencia e o constructor é destinado a isso
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const userName = this.activatedRoute.snapshot.params.userName;
    this.photoService
      .listFromUser(userName)
      .subscribe((photos) => (this.photos = photos)); //callback
  }
}
