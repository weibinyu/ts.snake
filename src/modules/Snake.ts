export default class Snake{

    snake = document.getElementById("snake")!
    snakeHead = document.querySelector('#snake > div') as HTMLElement
    snakeBody = this.snake.getElementsByTagName("div")

    get X(){
        return this.snakeHead.offsetLeft
    }

    get Y (){
        return this.snakeHead.offsetTop
    }

    set X(val ){
        if(this.X === val ) return

        if(val < 0 || val > 290){
            throw new Error("Snake hit the wall")
        }
        if(this.snakeBody[1] && this.snakeBody[1].offsetLeft === val) {
            if (val > this.X) {
                val = this.X - 10
            } else {
                val = this.X + 10
            }
        }

        this.moveBody()
        this.snakeHead.style.left = val + 'px'
        this.checkCollision()
    }

    set Y(val ){
        if(this.Y === val ) return

        if(val < 0 || val > 290){
            throw new Error("Snake hit the wall")
        }
        if(this.snakeBody[1] && this.snakeBody[1].offsetTop === val) {
            if (val > this.Y) {
                val = this.Y - 10
            } else {
                val = this.Y + 10
            }
        }

        this.moveBody()
        this.snakeHead.style.top = val + 'px'
        this.checkCollision()
    }

    grow(){
        const tempDiv = document.createElement('div')
        this.snake.insertAdjacentElement("beforeend",tempDiv)
    }

    moveBody(){
        for(let i = this.snakeBody.length -1; i > 0;i--){

            let X = this.snakeBody[i-1].offsetLeft
            let Y = this.snakeBody[i-1].offsetTop

            this.snakeBody[i].style.left = X + 'px'
            this.snakeBody[i].style.top = Y + 'px'
        }
    }

    checkCollision(){
        for(let i = 1; i< this.snakeBody.length; i++){
            if(this.Y === this.snakeBody[i].offsetTop && this.X === this.snakeBody[i].offsetLeft){
                throw new Error("Snake hit it's body")
            }
        }
    }
}