import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-snake",
  templateUrl: "./snake.component.html",
  styleUrls: ["./snake.component.css"]
})
export class SnakeComponent implements OnInit {
  constructor() {}
  arena = new Array();
  snakeX = 0;
  snakeY = 0;
  ngOnInit() {
    this.fillArena();
  }
  up() {
    this.snakeY--;
    this.drawSnake();
  }
  down() {
    this.snakeY++;
    this.drawSnake();
  }
  left() {
    this.snakeX--;
    this.drawSnake();
  }
  right() {
    this.snakeX++;
    this.drawSnake();
  }
  drawSnake() {
    console.log("inside draw func");
    let rowWhereSnakeSits = this.arena[this.snakeY];
    rowWhereSnakeSits[this.snakeX] = "#800020";
  }

  sprinkleCrumb() {
    Math.floor(Math.random() * 20);
    for (let z = 0; z <= 5; z++) {
      let crumbX = Math.floor(Math.random() * 20);
      let crumbY = Math.floor(Math.random() * 20);
      this.arena[crumbY] [crumbX] = "Orange"
    }
  }

  fillArena() {
    for (let y = 0; y < 20; y++) {
      let row = [];
      for (let x = 0; x < 20; x++) {
        row.push("SEAGREEN");
      }
      this.arena.push(row);
    } // for y
  }
}
