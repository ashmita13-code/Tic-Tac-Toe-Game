import React, { use, useRef, useState } from 'react'
import './Tictac.css'
import zero from './assets/zero.webp'
import cross from './assets/cross.webp' 

let data=["","","","","","","","",""];

const Tictac = () => {
  const [count,setCount]= useState(0);
  const [lock,setLock]= useState(false);

  const head =useRef(null);
  const box1 =useRef(null);
  const box2 =useRef(null);
  const box3 =useRef(null);
  const box4 =useRef(null);
  const box5 =useRef(null);
  const box6 =useRef(null);
  const box7 =useRef(null);
  const box8 =useRef(null);
  const box9 =useRef(null);

  // press_game will execute when user clicks on the tic-tac-toe grid
  const press_game=(e,n)=>
    {
    if(lock)
    {
      return;
    }
    if(count%2===0)
    {
      e.target.innerHTML=`<img src='${cross}'>`;
      data[n]="x";
      setCount(count+1);
    }
    else
      {
      e.target.innerHTML=`<img src='${zero}'>`;
      data[n]="o";
      setCount(count+1);
    }
    check_winner()
  }

  //check_winner is the function for getting the winner
  const check_winner=()=>{
    if(data[0]===data[1] && data[1]===data[2] && data[2]!=="")
    {
      winner(data[2])
    }
    else if(data[3]===data[4] && data[4]===data[5] && data[5]!=="")
    {
      winner(data[5])
    }
    else if(data[6]===data[7] && data[7]===data[8] && data[8]!=="")
    {
      winner(data[8])
    }
    else if(data[0]===data[3] && data[3]===data[6] && data[6]!=="")
    {
      winner(data[6])
    }
    else if(data[1]===data[4] && data[4]===data[7] && data[7]!=="")
    {
      winner(data[7])
    }
    else if(data[2]===data[5] && data[5]===data[8] && data[8]!=="")
    {
      winner(data[8])
    }
    else if(data[0]===data[4] && data[4]===data[8] && data[8]!=="")
    {
      winner(data[8])
    }
    else if(data[2]===data[4] && data[4]===data[6] && data[6]!=="")
    {
      winner(data[6])
    }
  }

  //winner function is used to give the message of who is the winner of the game
  const winner=(v)=>{
    setLock(true);
    if(v==="x")
    {
      head.current.innerHTML=`Congratulations : <img src='${cross}'> wins`;
    }
    else{
      head.current.innerHTML=`Congratulations : <img src='${zero}'> wins`;
    }

  }
//function for reset the game
const reset=()=>{
  setLock(false);
  data=["","","","","","","","","",];
  head.current.innerHTML=`Tic-Tac-Toe Game`;
  box1.current.innerHTML=``;
  box2.current.innerHTML=``;
  box3.current.innerHTML=``;
  box4.current.innerHTML=``;
  box5.current.innerHTML=``;
  box6.current.innerHTML=``;
  box7.current.innerHTML=``;
  box8.current.innerHTML=``;
  box9.current.innerHTML=``;
}

  return (
    <div className='container'>
      <h1 className="title" ref={head}>Tic-Tac-Toe Game</h1>
      <div className="sub-container">
        <div className="game">
          <div className="box" onClick={(e)=>{press_game(e,0)}} ref={box1}></div>
          <div className="box" onClick={(e)=>{press_game(e,1)}} ref={box2}></div>
          <div className="box" onClick={(e)=>{press_game(e,2)}} ref={box3}></div>
          <div className="box" onClick={(e)=>{press_game(e,3)}} ref={box4}></div>
          <div className="box" onClick={(e)=>{press_game(e,4)}} ref={box5}></div>
          <div className="box" onClick={(e)=>{press_game(e,5)}} ref={box6}></div>
          <div className="box" onClick={(e)=>{press_game(e,6)}} ref={box7}></div>
          <div className="box" onClick={(e)=>{press_game(e,7)}} ref={box8}></div>
          <div className="box" onClick={(e)=>{press_game(e,8)}} ref={box9}></div>
        </div>
      </div>
      <button className="btn" onClick={reset}>RESET</button>
    </div>
  )
}

export default Tictac
