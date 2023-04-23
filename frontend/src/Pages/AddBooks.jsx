import React, { useState } from 'react'
import axios from 'axios'
const AddBooks = () => {
  const[Data, setData]= useState({bookname:"",author:"",description:"",price:"",image:""})
  const change= (e) => {
    const {name,value} =e.target;
    setData({...Data,[name]:value})
  }
  const submit = async(e) =>{
    e.preventDefault()
    await axios
    .post("http://localhost:5000/api/v1/add", Data)
    .then((res) => alert(res.data.message));
    setData({
      bookname:"",author:"",description:"",price:"",image:""

    }

    )
  };
  console.log(Data);
  return (
    <div className="bg-dark" style={{minHeight:"91.5vh"}}>
      <form>
  <div class="container">
    <label for="formGroupExampleInput">Book Name</label>
       <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Enter Book Name" name='bookname' value={Data.bookname} onChange={change}/>
  </div>
  <div class="container">
    <label for="formGroupExampleInput">Author Name</label>
       <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Enter Author name" name='author'value={Data.author} onChange={change}/>
  </div>
  <div class="container">
    <label for="formGroupExampleInput">Description</label>
       <input type="text" class="form-control" id="formGroupExampleInput" placeholder="description" name='description'value={Data.description} onChange={change}/>
  </div>
  <div class="container">
    <label for="formGroupExampleInput2">Image</label>
    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="img url" name='image' value={Data.image} onChange={change}/>
  </div>
  <div class="container">
    <label for="formGroupExampleInput2">Price</label>
    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="..00" name='price' value={Data.price} onChange={change}/>
  </div>
  <button className="btn btn-success" onClick={submit}>Submit</button>
  </form>
    </div>
  )
}

export default AddBooks
