export default class Food{
    element: HTMLElement
    stageWidth: number
    stageHeight: number

    constructor(stageHeight: number,stageWidth: number) {
        this.stageHeight = stageHeight
        this.stageWidth = stageWidth
        this.element = document.getElementById("food")!
    }

    get X(){
        return this.element.offsetLeft
    }

    get Y(){
        return this.element.offsetTop
    }

    randomlyChangePosition(){
        let x = Math.round(Math.random() * this.stageWidth) * 10
        let y = Math.round(Math.random() * this.stageHeight) * 10

        this.element.style.left = x+'px'
        this.element.style.top = y+'px'
    }
}