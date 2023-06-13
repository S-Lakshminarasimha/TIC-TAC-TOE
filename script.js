const visited = ['','','','','','','','','',''];

const box = Array.from(document.querySelectorAll('.box'))

function  addlistener(ele){
    ele.addEventListener('click',Game)
}
box.map(addlistener)


function Game(e){
    let pos = Number(e.target.dataset.val)
    if (visited[pos]===''){
        let UserWinStatus = userMove(pos)
        if (UserWinStatus){
            return console.log('Congratulations you won the game!!')
        }
    }
    let ComputerWinStatus = computerMove(pos)
    if (ComputerWinStatus){
        return console.log("sorry computer won the game")
    }
}

function winnerCheck(player){
    if (player === 'computer') {
        return (
            (visited[1] === 'X' && visited[2] === 'X' && visited[3] === 'X') ||
            (visited[4] === 'X' && visited[5] === 'X' && visited[6] === 'X') ||
            (visited[7] === 'X' && visited[8] === 'X' && visited[9] === 'X') ||
            (visited[1] === 'X' && visited[4] === 'X' && visited[7] === 'X') ||
            (visited[2] === 'X' && visited[5] === 'X' && visited[8] === 'X') ||
            (visited[3] === 'X' && visited[6] === 'X' && visited[9] === 'X') ||
            (visited[1] === 'X' && visited[5] === 'X' && visited[9] === 'X') ||
            (visited[3] === 'X' && visited[5] === 'X' && visited[7] === 'X')
        );
    }
    if (player === 'user') {
        return (
            (visited[1] === 'O' && visited[2] === 'O' && visited[3] === 'O') ||
            (visited[4] === 'O' && visited[5] === 'O' && visited[6] === 'O') ||
            (visited[7] === 'O' && visited[8] === 'O' && visited[9] === 'O') ||
            (visited[1] === 'O' && visited[4] === 'O' && visited[7] === 'O') ||
            (visited[2] === 'O' && visited[5] === 'O' && visited[8] === 'O') ||
            (visited[3] === 'O' && visited[6] === 'O' && visited[9] === 'O') ||
            (visited[1] === 'O' && visited[5] === 'O' && visited[9] === 'O') ||
            (visited[3] === 'O' && visited[5] === 'O' && visited[7] === 'O')
        )
    }
}

function userMove(pos){
    visited[pos] = 'O'
    box[pos-1].textContent = 'O'
    console.log(visited)
    let status = winnerCheck('user')
    if (status){
        return true
    }
    return false    
}

function computerMove(pos){
    choices = [pos-2,pos+3,pos+1] 
    let Cpos = choices[Math.floor(Math.random() * choices.length)]
    if (visited[Cpos]==='' && Cpos>0){
        visited[Cpos] = 'X'
        console.log(visited)
        box[Cpos-1].textContent='X'
        let status = winnerCheck('computer')
        if (status){
            return true
        }
        return false
    }
    else{
        return computerMove(pos)
    }
}