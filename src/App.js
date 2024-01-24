import logo from './logo.svg';
import './App.css';

import HelloWorld from './components/HelloWorld';
import CaptionImage from './components/CaptionImage'
import BlinkComponent from './components/BlinkComponent'
import CountComponent from './components/CountComponent';
import React from 'react';
import FocusInputButton from './components/FocusInputButton';
import TodoList from './components/TodoList';
import PrimeCalculator from './components/calculatePrimes';
import ThemeButton from './components/ThemeButton';
import ThemeProvider from './components/ThemeProvider';
import MyPage from './components/MyPage';
import Posts from './components/Posts';
import useFetchData from './components/Posts';

function App() {
  const[visible,setVisible]=React.useState(true);

  const requestConfig = {
    url: 'https://jsonplaceholder.typicode.com/posts',
  }
  const { data = [], loading, error } = useFetchData(requestConfig)

  return (

    <div className="App">
      
      <Posts/>
        
          {/* <TodoList/> */}
        
      

      {/* <ThemeProvider>
        <ThemeButton/>
        <MyPage/>

      </ThemeProvider> */}

      {/* <div> 
        <PrimeCalculator text={4}/>
      </div> */}

      {/* <h1>TodoList</h1>

      <TodoList/> */}
      

      {/* <FocusInputButton/> */}

      {/* <BlinkComponent text="깜빡"></BlinkComponent> */}

    {/* <button
    /onClick={()=>setVisible(!visible)}>보이기</button>
    visible?<CountComponent/>:null} */}
   

       {/* <BlinkComponent>깜빡거리기</BlinkComponent> 
       <HelloWorld/>
      
      <CaptionImage imgUrl="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzExMDRfMjcz%2FMDAxNjk5MDg0NTM2MDYx.9YG_iH1QpKoiV-pQGEBd1STipY8cRrNM4MjMkQkt7QMg.UszAKxYG3j0BekAbPb2jl7bWShZssQnzpjFOO_mq_Iog.PNG.handione%2Fcloud.png&type=sc960_832"
       caption="구름"></CaptionImage>
     
       <CountComponent/> */}
    </div>
  )
}

export default App;
