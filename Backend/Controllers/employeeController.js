const express= require('express')
const router= express.Router()
const db= require('../Config/DB')

router.get('/list', async(req,res)=>{
   let [result]= await db.query("SELECT * FROM employees").catch(err=>console.log(err))
   res.send(result)

})
router.post('/create',async (req,res)=>{
    let {Full_Name,Email,Age,Country}=req.body
    let [result]=await db.query("INSERT INTO employees(Full_Name,Email,Age,Country)VALUES(?,?,?,?)",[Full_Name,Email,Age,Country])
    res.send(result)
})

router.put('/update/:id',async(req,res)=>{
    let {Full_Name,Email,Age,Country}=req.body
    let id = req.params.id
    let [result]= await db.query("UPDATE employees SET Full_Name = ?, Email = ?, Age = ? ,Country =? WHERE id = ?",[Full_Name,Email,Age,Country,id]
    )
    if (result.affectedRows === 0) {
       res.status(404).send("Employee not found ")
      }
      res.status(200).send("Updated successfully")
   
})

router.delete('/delete/:id',async(req,res)=>{
    let [result]= await db.query("DELETE FROM employees WHERE id= ?",[req.params.id])
    if(result.affectedRows===0){
        res.status(404).send("no record with the given id ")
    }
    res.send("record deleted ")
   
})




module.exports=router