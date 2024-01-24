import React,{useState, useEffect} from 'react';


export default function Posts(){
	const [data, setData] = useState([]);
  	
  	useEffect(() => {
		const fetchData = async() => {
          const res = await fetch('https://jsonplaceholder.typicode.com/news');
          const result = res.json();
          return result;
        }	
        
        fetchData().then(res => setData(res));
    }, []);
  
  return (
    <div>
     	{/* 코드 짜야함 */}
    </div>
    )
}