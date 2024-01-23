import React, {useState, useEffect} from 'react'

export default function CountComponent(){
    const[count,setCount]=useState(0)

    const addCount=()=>{
        setCount(count+1);
    }

    useEffect(()=>{
        console.log("데이터 받아오기, 이 함수는 한번만 실행됩니다.");
        return()=>{
            console.log("메모리를 잡아먹으면 리소스 해제하는 함수를 return 해줘야함")
        }
    },[])

    useEffect(()=>{
        console.log(`카운트가 증가할 때마다 실행!\n -count: ${count}`);
    },[count])

    return(
        <div>
            <div>{count}</div>
            <button onClick={addCount}>1 증가</button> 
        </div>
    )
}