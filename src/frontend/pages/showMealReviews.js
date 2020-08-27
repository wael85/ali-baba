window.handleShowMealReviews = params => {
    document.body.innerHTML = `
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
      justify-content: space-equal;
  }
  .form-div{
    margin-top : 15pxpx
    
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
    height : 100%;
    vertical-align: middle;
  }
  ul{
    list-style: none;
    width : 40%
  }
  a:hover{
    color : blue;
  }
  #first{
    opacity :1;
  }
  #meal_id,#created_date{
    display : none;
  }
  </style>
  <header>
     <img id = "head" src="/background.jpg" alt="" srcset="">
     <nav>
     <a class = "nav-a" href="../">Home</a>
     <a class = "nav-a" href="/new-meal">Add meal</a>
     <a class = "nav-a" href="">Reviws</a>
     <a class = "nav-a" href="">About us</a>
      </nav>
  </header>
  <main class="meal">
    
          
  </main>
  <footer>
    <h3>Ali baba best food in Estonia.for more info pleass contact on: <br> Mobil. 29920518 Email. dr.wael85@gmail.com</h3>
  </footer>  
    `;
   // let mealTitle;
    fetch(`/api/meals/${params.id}/reviews`)
    .then(res =>res.json())
      .then(res=> {
      console.log('here',res);
      const meal = document.querySelector(".meal");
      const mealDiv = document.createElement('div');
      const reviewDiv = document.createElement('div');
      const ul = document.createElement('ul');
          const img = document.createElement('img');
          if(!res.img){
            img.src ='/nopic.jpg';
          }else{
            const arrayBufferView = new Uint8Array( res.img.data );
            const blob = new Blob( [ arrayBufferView ], { type: "image/jpeg" } );
            const urlCreator = window.URL || window.webkitURL;
            const imageUrl = urlCreator.createObjectURL( blob );        
            img.src = imageUrl;
          }
          const title = document.createElement('li');
          title.innerText = res.mealTitle;
          const reviewUl = document.createElement('ul');
          res.data.forEach(review => {
            const li = document.createElement('li');
            li.innerHTML = `<h3>${review.reviewTitle} : </h3><p>${review.reviewDescription}</p><p>${new Date(review.reviewDate).toISOString().substr(0,10)}</p>`;
            reviewUl.appendChild(li);
          });
         
  
          const back = document.createElement('li');
          back.innerHTML = `<input type=button onClick="location.href='/meals'" value='Back to menu'></input>`      
          ul.appendChild(img)
          ul.appendChild(title);
         // ul.appendChild(description);
          ul.appendChild(back);
          mealDiv.appendChild(ul);
          reviewDiv.appendChild(reviewUl);
          meal.appendChild(mealDiv);
          meal.appendChild(reviewUl);

                     }) 
         
            
          
         
    
  };
  