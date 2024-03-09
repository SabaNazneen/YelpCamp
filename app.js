const express = require('express')
const path=require('path')
const app=express()
const mongoose = require('mongoose')
const ejsMate=require('ejs-mate')
const Joi=require('joi')
const {campgroundSchema}=require('./schemas.js')
const catchAsync = require('./utils/catchAsync');
const ExpressError = require( './utils/ExpressError');
const methodOverride = require( 'method-override' )

const Campground=require('./models/campground')
mongoose.connect('mongodb://localhost:27017/yelp-camp',{
   // useNewUrlParser:true,
   // useCreateIndex:true,
  //  useUnifiedTopology:true

})

const db=mongoose.connection
db.on('error',console.error.bind(console,"connection error:"))
db.once("open",()=>{
    console.log("Database connected")
})

app.engine('ejs',ejsMate)
app.get('/campground',catchAsync(async(req,res)=>{
    const campgrounds= await Campground.find({})
    
    res.render('campground/index',{campgrounds})
}))
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))
app.use(express.urlencoded({extended:true}))
app.use(methodOverride('_method'))

const validateCampground=(req,res,next)=>{
    
   const {error}= campgroundSchema.validate(req.body)
   if(error){
    const msg=error.details.map(el=>el.message).join(',')
    throw new ExpressError(msg,400)
   } else{
    next()
   }
}

app.get('/',(req,res)=>{
    res.render('home')
})


app.get('/makecampground',async (req,res)=>{
    const camp=new Campground({title:'My Backyard',description:'Cheap Camping'})
    await camp.save()
    res.send(camp)
})

app.get('/campground/new',(req,res)=>{
    res.render('campground/new')
})
app.post('/campground', validateCampground, catchAsync (async(req,res)=>{
    
    //if(!req.body.campground)throw new ExpressError('Invalid Campgroun data',400)
   const campground=new Campground(req.body.campground)
   await campground.save()
   res.redirect(`/campground/${campground._id}`)
    
   
}))

app.get('/campground/:id', validateCampground, catchAsync( async(req,res)=>{
    const campground = await Campground.findById(req.params.id)
    res.render('campground/show',{campground})
}))

app.get('/campground/:id/edit',catchAsync( async(req,res)=>{
    const campground=await Campground.findById(req.params.id)
    res.render('campground/edit',{campground})

}))

app.put('/campground/:id', catchAsync( async (req, res) => {
    const { id } = req.params;
    await Campground.findByIdAndUpdate(id, { ...req.body.campground });
    res.redirect(`/campground/${id}`);
}));

app.delete('/campground/:id', catchAsync( async(req,res)=>{
    const {id}=req.params
    await Campground.findByIdAndDelete(id)
    res.redirect('/campground')

}))

app.all('*',(req,res,next)=>{
    next(new ExpressError('Page Not Found',404))
})

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500; // Set default status code to 500 if statusCode is not defined in the error object
    if (!err.message) err.message = 'Oh No, Something went wrong';
    res.status(statusCode).render('error', { err });
});


app.listen(3000,()=>{
    console.log("Serving on port 3000")
})