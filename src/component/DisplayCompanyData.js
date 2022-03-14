import React, { useEffect, useState ,useRef } from 'react'
import { connect } from 'react-redux'
import { addDatas,removeData } from '../redux/reducer'
import CompanyItem from './CompanyItem'
import { IoIosArrowDown } from "react-icons/io"
const mapStateToProps=(state)=>{
    return {
        datas:state
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        addData:(obj)=>dispatch(addDatas(obj)),
        removeData:(id)=>dispatch(removeData(id)),
    }
}


const DisplayCompanyData = (props) => {
    const [sortType,setSortType]=useState('')
    const [companyName,setCompanyName]=useState([])
    const [check,setCheck]=useState(false)
  const data=props.datas


const d=[]
data.map(a=>d.push(a.item))


  d.sort((a,b)=>
  {
    const isReversed=sortType==='active'?1: sortType==='disable'?-1:0

     return  isReversed*a.status.localeCompare(b.status)})
  console.log(companyName)



  return (
    <div>

<div class="dropdown">
  <button class="dropbtn">Company {props.datas.length>0 && <IoIosArrowDown  />} </button>
  <div class="dropdown-content">
  {props.datas.length>0?<button ><input type='checkbox' checked={check}  onChange={(e)=>{setCheck(!check);setCompanyName(e.target.value)}} />select all</button>:null}
  {props.datas.map(item=><button  key={item.id}><input type='checkbox'  value={item.item.company}  onChange={(e)=>setCompanyName(e.target.value)}  />{item.item.company}</button>)}

  </div>
</div>


<div class="dropdown">
  <button class="dropbtn">status  {sortType!==''?`(${sortType})`:''} {props.datas.length>0 && <IoIosArrowDown  />}</button>
  <div class="dropdown-content">
  {props.datas.length>0?
  <>
  <button  onClick={()=>setSortType('all')}>all</button>
  <button  onClick={()=>setSortType('active')}>asc</button>
  <button  onClick={()=>setSortType('disable')}>dsc</button>
  </>
  :null}
  </div>
</div>

        {/* <select name="all" value={sortType} onChange={(e)=>setSortType(e.target.value)}>
  <option value='all' >all</option>
  <option value='active'>active</option>
  <option value='disable' >disable</option>
</select> */}


         <ul>
           <li className='div-table'>
           <div class="row">
           <div className='div-table-col' > <input type='checkbox' checked={check} onChange={()=>setCheck(!check)} />
           name</div> 
    <div className='div-table-col' >company</div>   
      <div className='div-table-col' >status</div> 
      <div className='div-table-col' >note</div>
      </div>
           </li>
           {props.datas.length>0  
            && sortType==='all' 
            ?
                
            props.datas.map(item=>{
                return   <CompanyItem key={item.id} item={item} check={check}  sortType={sortType}
                removeData={props.removeData}/>
            }):
            d.map(i=>{
            return <CompanyItem key={i.id} item={i} removeData={props.removeData} check={check}  sortType={sortType} />
    
            })
            

            }
          
        </ul>


    </div>
  )
}

export default connect(mapStateToProps,mapDispatchToProps)(DisplayCompanyData)