document.addEventListener('DOMContentLoaded', ()=>{                 //used to carryon game even when css is not properly loaded
    const squares=document.querySelectorAll('.grid div');           //slectorall- slects everthing classes, id, elemnts
    const scoreDisplay=document.querySelectorAll('span');
    const startBtn=document.querySelector('.start');



    const width=10;
    let currentIndex=0
    let appleIndex=0
    let currentSnake=[2,1,0]   //array with 3 values, these all will acquire 3 divs(mouth, body, tail - a snake)
    let direction=1
    let score=0;
    let speed=0.9;
    let intervalTime=0;
    let interval=0


function startGame(){
    currentSnake.forEach(index=>squares[index].classList.remove('snake'))       //to remove snake form current pos        //classlist - way to generte class snake in JS 

    squares[appleIndex].classList.remove('apple')           //to remove apple 

    clearInterval(interval)         //to clear the interval (time) i.e reset
    score=0;
    randomApple()                   //generate apple randomly
    direction=1
    scoreDisplay.innerText=score;            //will update score
    intervalTime=1000               //in milisecs   will run after every 1 second
    currentSnake=[2,1,0];
    currentIndex=0;
    currentSnake.forEach(index=>squares[index].classList.add('snake'))
    console.log('snake is at '+currentSnake);

    interval=setInterval(moves, intervalTime)           //set the interval(time)
}
// =================create apple=================== //
function randomApple(){
    do{                                                         //using do-while so apple will be gennerated atleast once
        appleIndex=Math.floor(Math.random()*squares.length);         //generates number randomly(from 1-99) i.e. creates apple at random div no.
        console.log('apple index is '+appleIndex);
    }while(squares[appleIndex].classList.contains('snake'))
    squares[appleIndex].classList.add('apple')
}

// =================for moving snake=================== //
function moves(){
    if(
        (currentSnake[0] + width>=(width*width) && direction===width)  ||         //conditon for hitting bottom(90,91,91.....99>=100)-game over
        (currentSnake[0] - width<0 && direction === -width) ||                    //condition for hitting top(5 - 0,1,2,3.....9<width i.e 10)-game over
        (currentSnake[0] % width=== 0 && direction === -1)  ||                    //condition for left
        (currentSnake[0] % width=== width-1 && direction === 1) ||                 //right
        squares[currentSnake[0] + direction].classList.contains('snake')            //self
        
        )
    {
        const position=currentSnake[0];
        alert('Gamme Over')
        console.log('value is '+position);
        return clearInterval(interval)
    }
    const tail=currentSnake.pop();              //pops considering tails value
    squares[tail].classList.remove('snake')             //removes snake on basis of tail
    currentSnake.unshift(currentSnake[0] + direction)

        if(squares[currentSnake[0]].classList.contains('apple')){
            squares[currentSnake[0]].classList.remove('apple');
            squares[tail].classList.add('snake')
            currentSnake.push(tail);

// =================update score and interval=================== //
            randomApple();
            score++
            scoreDisplay.textContent=score;
            clearInterval(interval)
            intervalTime=intervalTime*speed;
            interval=setInterval(moves, intervalTime)
        }
        squares[currentSnake[0]].classList.add('snake')
}

// ==================arrow keys directions=================//
    function control(e){
        if(e.keyCode===39){             //39-keycode of right arrow
            direction = 1             //1 div forward
        }
        else if(e.keyCode===37){      //for left arrow key
            direction = -1
        }
        else if(e.keyCode===38){      //for up arrow key
            direction = -width
        }
        else if(e.keyCode===40){       //for down arrow key
            direction = +width
        }
    }

document.addEventListener('keyup', control)
startBtn.addEventListener('click',startGame)

})
