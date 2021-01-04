export default class ScorePanel{
    private score = 0
    private level = 1

    private scoreElement = document.getElementById("score")!
    private levelElement = document.getElementById("level")!

    private readonly maxLevel: number
    private readonly scoreForLevelUp : number

    constructor(maxLevel: number = 10,scoreForLevelUp: number = 10) {
        this.maxLevel = maxLevel
        this.scoreForLevelUp = scoreForLevelUp
    }

    increaseScore(){
        this.scoreElement.innerHTML = ++this.score + ''
        if(this.score % this.scoreForLevelUp === 0){
            this.increaseLevel()
        }
    }

    increaseLevel(){
        if(this.level <= this.maxLevel){
            this.levelElement.innerHTML = ++this.level + ''
        }
    }
}