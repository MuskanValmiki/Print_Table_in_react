import React,{useState} from 'react';
import './App.css'

function Table(){
    const [table,settable]=useState('');
    const [list,setList]=useState([]);
    return(
        <div id='table'>
          <h1>The Printing Table App.</h1>
            <input  type="number"  placeholder='Enter any number' onChange={(e)=>{
                settable(e.target.value)
            }}/>
            <button onClick={()=>{
              let newList=[]
              let finalList=[]
              for(var i=1;i<11;i++){
                  newList.push([table ,'X',i,'=',table*i])
              finalList.push(newList)
              }

                setList(newList)
            }}>Submit</button>
            {
              list.map((item,index)=>{
                return(
                  <div>
                    <h1>{item}</h1>
                  </div>
                )
              })
            }
        </div>
    )
}

export default Table;