let game = [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 1, 0],
    [0, 1, 1, 0, 0],
    [0, 0, 1, 0, 1],
    [0, 0, 1, 0, 0]
]
    
function conWaysGameOfLife(game){
    for(let x = 0; x < game.length; x++){
        for(let y=0; y < game[x].length; y++){
        
            let neighborCells = 0 
            if(x >0  && y > 0 && x < (game.length-1) && y< (game[x].length -1) ){
                neighborCells = game[x-1][y-1] + game[x-1][y] + game[x-1][y+1] +game[x][y-1]+game[x][y+1] + game[x+1][y-1] +game[x+1][y] +game[x+1][y+1]
            }
            if(game[x][y] === 1){
                if (neighborCells < 2 || neighborCells >3){
                    game[x][y] = 0
                }
            }else if(game[x][y] === 0 && neighborCells === 3){
                game[x][y] = 1
            }
    }
return game
}
}
console.log(conWaysGameOfLife(game));

