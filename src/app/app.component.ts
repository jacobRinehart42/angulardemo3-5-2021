import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  username: string = "";
  name = "Hello World";
  isSpecial: boolean = false;
  redColor = "green";
  imageURL =
    "https://i.guim.co.uk/img/media/fe1e34da640c5c56ed16f76ce6f994fa9343d09d/0_174_3408_2046/master/3408.jpg?width=620&quality=85&auto=format&fit=max&s=56d5de4c5609ca98def0c3382bd569b4";

  message: string = "";
  onClick(msg: string): void {
    this.message = msg;
  }

  checkUsername(): boolean {
    return this.username.length == 0;
  }

  OnClick(): void {
    this.username = "Helloworld";
  }
}
