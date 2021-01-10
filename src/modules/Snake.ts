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
        if(val >= 0 && val <= 290){
            this.snakeHead.style.left = val + 'px'
        }else {
            throw new Error("Snake hit the wall")
        }

    }

    set Y(val ){
        if(this.Y === val ) return
        if(val >= 0 && val <= 290){
            this.snakeHead.style.top = val + 'px'
        }else {
            throw new Error("Snake hit the wall")
        }
    }

    grow(){
        const tempDiv = document.createElement('div')
        this.snake.insertAdjacentElement("beforeend",tempDiv)
    }
}