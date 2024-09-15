import React from 'react'
import MasterCard from './component/MasterCard';
import './App.css';

function App(){
  const data = [
    {
      title :"Master Service",
      discription :"This is my car App serice of my react project. This Card Gallery.",

      disclaimer : [
        'The quick brown fox over the lazy dogs',
        'the quick brown fox over the lazy dogs' ,
        'the quick brown fox over the lazy dogs' ,
        
      ]
    },
    {
      title :"Master Service",
      discription :"This is my car App serice of my react project. This Card Gallery.",

      disclaimer : [
        'The quick brown fox over the lazy dogs',
        'the quick brown fox over the lazy dogs' ,
        'the quick brown fox over the lazy dogs' ,
        
      ]
    },
    {
      title :"Master Service",
      discription :"This is my car App serice of my react project. This Card Gallery.",

      disclaimer : [
        'The quick brown fox over the lazy dogs',
        'the quick brown fox over the lazy dogs' ,
        'the quick brown fox over the lazy dogs' ,
        
      ]
    },
    {
      title :"Master Service",
      discription :"This is my car App serice of my react project. This Card Gallery.",

      disclaimer : [
        'The quick brown fox over the lazy dogs',
        'the quick brown fox over the lazy dogs' ,
        'the quick brown fox over the lazy dogs' ,
        
      ]
    },
    {
      title :"Master Service",
      discription :"This is my car App serice of my react project. This Card Gallery.",

      disclaimer : [
        'The quick brown fox over the lazy dogs',
        'the quick brown fox over the lazy dogs' ,
        'the quick brown fox over the lazy dogs' ,
        
      ]
    },

  ]
  return (
    <>
      <div className='main-container'>
      {data.map((res,index)=>(
        <div key={index}>
          <MasterCard  data = {res}/>
        </div>
      ))}
      </div>
    </>
  )
}

export default App;