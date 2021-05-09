class Quiz{
    constructor(){
        this.score = createElement('h2');
        this.image = loadImage("Correct.png");
    }

    getState(){
        var gameStateRef  = database.ref('gameState');
        gameStateRef.on("value",function(data){
           gameState = data.val();
        })
    }
    updateState(state){
        database.ref('/').update({
            gameState: state
          });
    }
    async start(){
        if(gameState === 0){
            contestant = new Contestant();
            var contestantCountRef = await database.ref('contestantCount').once('value');
            if(contestantCountRef.exists()){
                contestantCount = contestantCountRef.val();
                contestant.getCount();
            }
            question = new Question()
            question.display();
        }
        console.log(gameState)
    }
     play(){
        if(gameState === 1) {
            this.score.html("The correct answer is, '4: West Bengal'.");
            this.score.position(200, 250);
         }
     }
}