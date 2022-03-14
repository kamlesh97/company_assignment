import React from 'react'
import {IoMdTrash} from 'react-icons/io'

const CompanyItem = (props) => {
    const {item,removeData,sortType, check}=props
    // console.log(check)
  return (
      <>
      
    <li key={item.id}  className='div-table'>
    <div class="row">
       <div className='div-table-col'> <input type='checkbox' checked={check}/>
        {sortType!=='all'?item.name:item.item.name}</div> 
       <div className='div-table-col'>{sortType!=='all'?item.company:item.item.company}</div>   
      <div className='div-table-col'>{sortType!=='all'?item.status:item.item.status}</div> 
      <div className='div-table-col'>{sortType!=='all'?item.note:item.item.note}</div>
      {/* <div className='div-table-col'></div> */}
     {/* <div> {sortType!=='all'?null:<button onClick={()=>removeData(item.id)} ><IoMdTrash /></button>}</div> */}
      </div>
      <div className='del' > {sortType!=='all'?null:<button onClick={()=>removeData(item.id)} ><IoMdTrash /></button>}</div>
                </li>
                </>
  )
}

export default CompanyItem