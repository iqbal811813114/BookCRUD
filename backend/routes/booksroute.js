const router= require('express').Router();
const bookModel=require('../models/booksmodel');

router.post('/add',async (req,res)=>{
	try{
		const data = req.body;
		const newBook= new bookModel(data);
		await newBook.save().then(() =>{
			res.status(200).json({message:"Book added"})
		})

	}catch (error) {
	 console.log(error);	
	}
});
router.get('/getbooks',async (req,res)=>{
	let books;
	try{
        books= await bookModel.find();
		res.status(200).json({ books })
		

	}catch (error) {
	 console.log(error);	
	}
});
router.put('/updatebook/:id',async (req,res)=>{
	const id=req.param.id;
	const{bookname,description,author,image,price}=req.body;
	let book;
	try{ 
	 book=await bookModel.findByIdAndUpdate(id,{
		bookname,
		description,
		author,
		image,
		price,

	});
	 await book.save().then(()=>res.json({message:"Data Updated"}));
	}catch(error){
		console.log(error);
	} 
})
router.delete('/deletebook/:id',async (req,res)=>{
	const id= req.params.id;
	try{
        await bookModel
        .findByIdAndDelete(id)
        .then(()=>res.status(201).json({ message:"Deleted" }));
		

	}catch (error) {
	 console.log(error);	
	}
});

module.exports = router;