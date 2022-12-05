import React,{useState} from 'react';

function Table(){
    const [table,settable]=useState('');
    const [list,setList]=useState([]);
    return(
        <div>
            <input  type="number" placeholder='Enter any number' onChange={(e)=>{
                settable(e.target.value)
            }}/>
            <button onClick={()=>{
              let newList=[]
              for(var i=1;i<11;i++){
                    newList.push(table*i)
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