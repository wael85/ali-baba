const express = require("express");
const app = express();
const router = express.Router();
const knex = require("../database");
let idImg= new Date().toISOString().replace(/:/g,"-");
console.log(idImg);
const multer =require("multer");
const { request, response } = require("express");
const { having } = require("../database");
/*const storeg = multer.diskStorage({
  destination : function(req ,file, cb){
    cb(null,'./uploads/');
  },
  filename : function(req, file , cb){
    cb(null , idImg + file.originalname)
  }
});
const fileFilter = (req,file,cb)=>{
   //reject a file
   if (file.mimetype ==='image/jpeg' || file.mimetype ==='image/png'){
       cb(null, true)
   }else{
    cb(null,false)
   }
  
}
const uploads = multer({
  storage: storeg ,
   limits : {
  fileSize : 1024*1024* 5
     },
  fileFilter : fileFilter
});
*/
const uploads = multer();

router.get("/", async (request, response) => {
  
  try {
    let result = await knex(`meal`).select(`*`).limit(10);
    const maxPrice = request.query.maxPrice;
    const availableReservations = request.query.availableReservations;
    const title = request.query.title;
    const createdAfter = request.query.createdAfter;
    const limit = request.query.limit;
    if(maxPrice){
       result = await knex(`meal`).where(`price`,`<`,`${maxPrice}`).select(`*`);
    }if(availableReservations){
      result = await knex.select( "meal.id" , "meal.title").from("meal")
      .sum("reservation.number_of_guests as total")
      .avg("meal.max_reservation as number")
      .join("reservation","reservation.meal_id" , "meal.id")
      .groupBy( "meal.id")
      .having("total",">","number");     
    
    }if(title){
      result = await knex(`meal`).where(`title`,`like`,`${title}%`);
    }if(createdAfter){
      result = await knex(`meal`).where(`created_date`,`>`,`${createdAfter}`);
    }if(limit){
     result =result.splice(0,limit);
    }
    response.json(result);
  } catch (error) {
    throw error;
  }
});
router.post("/",uploads.single('img'),async (req,res)=>{
  try{
  
   const meal = {
      'title': req.body.title,
      'description' : req.body.description ,
      'location' : req.body.location,
      'when': req.body.when,
      'max_reservation' : req.body.max_reservation,
      'price' : req.body.price,
      'created_date' : new Date(),
      'img' : req.file.buffer 

    }
    const insert = await knex('meal').insert(meal);
    res.send("all good"); 
  } catch(error){
    throw error;
  }  
});
//'meal.id','meal.img','meal.title as mealt','review.title','review.created_date','review.description'
router.get("/:id/reviews" ,async (request,response)=>{
    try {
      const id = request.params.id;
      const result = await knex.select('meal.id as main','meal.title as mealt','review.title','review.created_date','review.description').from(`meal`)
      .join("review" , "review.meal_id" ,"meal.id")
      .groupBy("main")
      .having('main','=',id)

      response.json(result);
    } catch (error) {
      throw error;
    }
});
router.get("/:id", async (request, response) => {
  try {
    const id = request.params.id;
    const result = await knex("meal").where({id : id}).select("*");
    response.json(result);
  } catch (error) {
    throw error;
  }
});
router.put("/:id", async (request, response) => {
  try {
    const id = request.params.id;
    const result = await knex("meal").where({id : id}).update(request.body);
    response.json(result);
  } catch (error) {
    throw error;
  }
});router.delete("/:id", async (request, response) => {
  try {
    const id = request.params.id;
    const result = await knex("meal").where({id : id}).delete();
    response.json(result);
  } catch (error) {
    throw error;
  }
});

module.exports = router;
