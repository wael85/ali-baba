window.handelNewMeal = ()=>{
 document.body.innerHTML =
  ` 
 <style>
  header{
    width: 100%;
    height: 300px;
}
#head{
    position: relative;
    left: 0px;
    top: 0px;
    right: 0px;
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0px;
}
main{
    border: solid black 1px;
    height: 100vh;
}
main{
  height: fit-content;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-around;
}
div{
    height: 400px;
    width:300px ;           
}
img{
   position: relative;
   width: 90%;
   height : 200px;
   margin-bottom : 15px;

}

footer{
    text-align: center;
}
h3{
    color: maroon;
    opacity:0.9;
}
nav{
  display: flex;
  align-items: flex-start;
  height : 30px;
  position: relative;
   bottom: 10%;
   width :100%;
   background : lightgray;
   opacity : 0.8;

}
.nav-a{
  margin-left: 10%;
 margin-top :auto;
  color: blac;
  text-decoration: none;
  opacity : 0.9;
  height : 100%
  vertical-align: middle;
}
a:hover{
  color : blue;
}
#first{
  opacity :1;
}
</style>
<header>
   <img id = "head" src="background.jpg" alt="" srcset="">
   <nav>
       <a class = "nav-a" href="../">Home</a>
       <a class = "nav-a" href="/new-meal">Add meal</a>
       <a class = "nav-a" href="/meals">Main menu</a>
       <a class = "nav-a" href="">About us</a>
    </nav>
</header>
<main class = "new-meal">
 
     <form action="/api/meals" method="post" enctype="multipart/form-data" >
     <input type="text" id="title" name="title" placeholder="title">
     <input type="text" id="description" name="description" placeholder="description">
     <input type="text" id="location" name="location" placeholder="location">
     <input type="date" id="when" name="when" placeholder="when" min = ${new Date().toISOString().substr(0,10)} >
     <input type="number" id="max_reservation" name="max_reservation" placeholder="max_reservation">
     <input type="number" id="price" name="price" placeholder="price">
     <input type="file" id="img" name="img" placeholder="img">
     <input type="submit" id="submet" value="Submet">
     </form>
</main>
<button onClick = "location.href='../meals'"> go back to main</button>
<footer>
  <h3>Ali baba best food in Estonia.for more info pleass contact on: <br> Mobil. 29920518 Email. dr.wael85@gmail.com</h3>
</footer>`;

document.head.innerHTML = '<link rel="stylesheet" href="./newmeal.css" />'

}