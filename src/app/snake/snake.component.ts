import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-snake",
  templateUrl: "./snake.component.html",
  styleUrls: ["./snake.component.css"]
})
export class SnakeComponent implements OnInit {
  constructor() {}
  arena = new Array();
  snakeHead = { x: 0, y: 0 };

  SIZE = 20;

  body = [this.snakeHead];

  ngOnInit() {
    this.fillArena();
  }

  up() {
    this.snakeHead.y--;
    this.drawSnake();
  }

  down() {
    this.snakeHead.y++;
    this.drawSnake();
  }

  left() {
    this.snakeHead.x--;
    this.drawSnake();
  }

  right() {
    this.snakeHead.x++;
    this.drawSnake();
  }

  drawSnake() {
    this.isDie();

    let newPixel = { x: this.snakeHead.x, y: this.snakeHead.y };
    if (this.arena[this.snakeHead.y][this.snakeHead.x] == "Orange") {
      // grow. dont cut tail
      console.log("grow");
    } else {
      // cut tail
      let oldTail = this.body.pop();
      // draw grass
      this.arena[oldTail.y][oldTail.x] = "SEAGREEN";
    }

    // draw new head
    
    this.body.unshift(newPixel);
    this.arena[this.body[0].y][this.body[0].x] = "#800020";
  }

  sprinkleCrumb() {
    Math.floor(Math.random() * 20);
    for (let z = 0; z <= 5; z++) {
      let crumbX = Math.floor(Math.random() * 20);
      let crumbY = Math.floor(Math.random() * 20);
      this.arena[crumbY][crumbX] = "Orange";
    }
  }

  isDie() {
    if (
      this.snakeHead.x >= this.SIZE ||
      this.snakeHead.x < 0 ||
      this.snakeHead.y >= this.SIZE ||
      this.snakeHead.y < 0
    ) {
      alert("DEad snake");
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
