import React from 'react'
import axios from 'axios'


const BooksSection = ({data}) => {
    console.log(data)
  return (
    <div className='d-flex justify-content-around align-items-center py-3 flex-wrap'>
      {data && data.map((item, index) =><>
      <div className='text-white'>
          <div className='' style={{width:"200px",height:"363px",backgroundColor:"blue"}}>
              <div >
                  <img style={{width:"200px",height:"250px"}} className='fluid' src={item.image} alt="/" />
                  </div><h5 className='p-2'>{item.bookname}</h5>
                  <h5 className='p-2'>{item.author}</h5>
                  <div className='d-flex justify-content-around align-items-center'>
                  <button className='btn btn-success'>UPDATE</button>
                  <button className='btn btn-danger'  >DELETE</button>


                  </div>
                  
      
      </div></div> </> )}
    </div>
  )
}

export default BooksSection
