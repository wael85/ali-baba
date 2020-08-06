window.handelNewMeal = ()=>{
 document.body.innerHTML = ` <form action="/api/meals" method="post" enctype="multipart/form-data" >
 <input type="text" id="title" name="title" placeholder="title">
 <input type="text" id="description" name="description" placeholder="description">
 <input type="text" id="location" name="location" placeholder="location">
 <input type="date" id="when" name="when" placeholder="when">
 <input type="number" id="max_reservation" name="max_reservation" placeholder="max_reservation">
 <input type="number" id="price" name="price" placeholder="price">
 <input type="file" id="img" name="img" placeholder="img">
 <input type="submit" id="submet" value="Submet">


</form>`;


// get handle to local file
/*let button = document.getElementById('b');
button.addEventListener('click',function(){

    var file = document.getElementById("img").value;
    console.log(file);
    var reader = new FileReader();
    reader.onload = function(event) {
        var data = event.target.result;
        console.log(ArrayBufferToBinary(data));
    };
    reader.readAsArrayBuffer(file);

    
})*/

}