import Snake from "./Snake";
import Food from "./Food";
import ScorePanel from "./ScorePanel";

export default class GameControl{
    snake : Snake
    food: Food
    scorePanel: ScorePanel
    direction: string = ""
    isLive = true

    constructor() {
        this.snake = new Snake()
        this.food = new Food()
        this.scorePanel = new ScorePanel()

        this.initGame()
    }

    initGame(){
        document.addEventListener('keydown',this.keyDownHandler.bind(this))
        this.snakeMovement()
    }

    keyDownHandler(event: KeyboardEvent){
        this.direction = event.key
    }

    snakeMovement(){
        let X = this.snake.X
        let Y = this.snake.Y

        switch (this.direction){
            case "ArrowUp":
            case "Up":
                Y -= 10
                break;
            case "ArrowDown":
            case "Down":
                Y += 10
                break;
            case "ArrowLeft":
            case "Left":
                X -= 10
                break;
            case "ArrowRight":
            case "Right":
                X += 10
                break;
        }

        this.checkEat(X,Y)

        try{
            this.snake.X = X
            this.snake.Y = Y
        }catch (e){
            alert(e.message)
            this.isLive = false
        }

        this.isLive && setTimeout(this.snakeMovement.bind(this),200 - ((this.scorePanel.level-1) * 30))
    }

    checkEat(X: number,Y: number){
        if(X === this.food.X && Y === this.food.Y){
            this.food.randomlyChangePosition()
            this.scorePanel.increaseScore()
            this.snake.grow()
        }
    }
}