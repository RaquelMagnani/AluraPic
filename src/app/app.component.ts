import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  photos = [
    {
      url:
        "https://images.unsplash.com/photo-1618035881605-dfe8d7eb387b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      description: "Floresta de pinheiros com neblina",
    },
    {
      url:
        "https://images.unsplash.com/photo-1618124894015-508529b8a780?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      description: "flores de cerejeira",
    }
  ];
}
