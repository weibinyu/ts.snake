class Snake{

    snake = document.getElementById("snake")!
    snakeHead = document.querySelector('snake > div') as HTMLElement
    snakeBody = this.snake.getElementsByTagName("div")

    get X(){
        return this.snakeHead.offsetLeft
    }

    get Y (){
        return this.snakeHead.offsetTop
    }

    set X(val ){
        this.snakeHead.style.top = val + 'px'
    }

    set Y(val ){
        this.snakeHead.style.left = val + 'px'
    }

    grow(){
        // @ts-ignore
        this.snake.insertAdjacentElement("beforeend","<div></div>")
    }
}