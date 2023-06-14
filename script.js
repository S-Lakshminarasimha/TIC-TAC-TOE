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
            // set animation here
            return console.log('Congratulations you won the game!!')
        }
    }
    let ComputerWinStatus = computerMove(pos)
    if (ComputerWinStatus){
        // set animation here
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
    box[pos-1].classList.add('user')
    box[pos-1].textContent = 'O'
    console.log('user placed at ',pos)
    let status = winnerCheck('user')
    if (status){
        return true
    }
    return false    
}

function computerMove(pos){
    let cho = [pos+1,pos-1,pos+2,pos-2,pos+3,pos-3,pos+4,pos-4]
    let choices = cho.filter((e)=>{if(e>0 &&visited[e]==''){
        return e
    }})
    if (choices.length>0){
        ch = choices[Math.floor(Math.random() * choices.length)]
        let Cpos
        f = true
        while(f==true){
            if (ch<visited.length && visited[ch]!='O' && visited[ch]!='X'){
                Cpos=ch
                break
            }
            else{
                ch = choices[Math.floor(Math.random() * choices.length)]
                f=true
            }     
        }
        if (visited[Cpos]==='' && Cpos>0){
            visited[Cpos] = 'X'
            box[Cpos-1].classList.add('computer')
            box[Cpos-1].textContent='X'
            console.log('computer placed at ',Cpos)
    
            let status = winnerCheck('computer')
            if (status){
                return true
            }
            return false
        }
    }
    else{
        console.log("tie game")
    }
   
    
}