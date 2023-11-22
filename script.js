//parent div

const parentDiv = document.createElement("div");
parentDiv.classList.add ("parentDiv");
parentDiv.style.display = "flex";
document.body.appendChild(parentDiv);


//main image container

var imageContainer = document.createElement("div") ;
imageContainer.classList.add ("imageContainer");
imageContainer.style.height = '200px' ;
imageContainer.style.width = '200px' ;
imageContainer.style.border = '1px solid black';
imageContainer.style.marginLeft= "10px";
parentDiv.appendChild(imageContainer);



//image******
var containerImage = document.createElement("div");
containerImage.id="containerImage";
containerImage.style.height = "100%";
containerImage.style.width = "100%";
containerImage.style.background="red";
imageContainer.appendChild(containerImage);


//button div *******

var buttonDiv = document.createElement("div");
buttonDiv.classList.add("buttonDiv");
buttonDiv.style.height= "50px" ;
buttonDiv.style.width = "auto";
buttonDiv.style.marginLeft = "10%";
buttonDiv.style.marginTop = "10%";
parentDiv.appendChild(buttonDiv);


//buttons******


var buttons = ['All','RED','GREEN','BLUE'];

var buttonColorList = ['All','RED','GREEN','BLUE']; 

for (var i=0; i < buttons.length; i++){

    var button = document.createElement('button');
    button.id = buttonColorList[i]+"btn";
    button.classList.add("buttons");
    button.style.height = "50px" ;
    button.style.width = "60px";
    button.style.background = "wheat";
    button.style.gap = "5px";
    button.style.cursor = "pointer";
    button.textContent = buttons[i];
    buttonDiv.appendChild (button);
}








//drop down  div *******

var dropdownDiv = document.createElement("div");
dropdownDiv.classList.add("dropdownDiv");
dropdownDiv.style.height = "20px";
dropdownDiv.style.marginLeft = "-10%";
dropdownDiv.style.marginTop = "20%";
dropdownDiv.style.border = "solid 1px";
dropdownDiv.style.background = "wheat";
parentDiv.appendChild(dropdownDiv);


//drop down 


var dropdown = document.createElement("select");
dropdown.id="dropdown";
dropdown.style.background = "wheat";
dropdown.style.cursor = "pointer";
dropdownDiv.appendChild(dropdown);




//drop down  Option  ******


var dropdownOptions = ['All','RED','GREEN','BLUE'];

for (var k=0; k < dropdownOptions.length; k++){

  var select = document.createElement('option');
    select.classList.add("options");
    select.style.height = "50px" ;
    select.style.width = "60px";
    select.style.background = "wheat";
    select.style.gap = "5px";
    select.style.cursor = "pointer";
    select.value = buttonColorList[k];
    select.textContent=dropdownOptions[k];
    dropdown.appendChild (select);
}



//color options 


const colorContainer = document.createElement("div");
colorContainer.classList.add("colorContainer");
colorContainer.style.height = "300px";
colorContainer.style.width = "300px";
colorContainer.style.marginTop = "20%";
colorContainer.style.marginLeft = "-37%";
parentDiv.appendChild(colorContainer);





const colorOptions = ["red","blue","green", "red", "blue", "green"];

for (var j=0; j<colorOptions.length; j++){
  var colors = document.createElement("div");
    colors.classList.add("colorOptions");
    colors.style.height = "70px";
    colors.style.width = "70px";
    colors.style.border = "solid 1px black";
    colors.style.display = "inline-block";
    colors.style.marginLeft = "10px";
    colors.style.cursor = "pointer";
    colors.style.backgroundColor = colorOptions[j];
    
    colorContainer.appendChild(colors);
}












//button functionalities**************************




    var colorOption = doucment.getElemntsByClassName("colorOptions");
    var containerImage = document.getElementById("containerImage");
var option = document.getElementsByClassName("options");



document.getElementById("Allbtn").addEventListener("click",function (color){
    
if (color === 'All' || colorOptions.style.backgroundColor === color){
    colorOptions.style.display = "inline-block"
    containerImage.style.backgroundColor = color;
}
})






document.getElementById("REDbtn").addEventListener("click", function (color){
    
    if (color ==='RED'|| colorOption.style.backgroundColor === color ){
        colorOptions.style.display = "inline-block"
        containerImage.style.backgroundColor='red';
        option.textContent = 'RED';
        option.value = 'RED';
    
    }
    
})





document.getElementById("GREENbtn").addEventListener("click", function (color){
     if (color ==='GREEN'|| colorOption.style.backgroundColor === color ){
        colorOptions.style.display = "inline-block"
    containerImage.style.backgroundColor = 'green'
    option.textContent = 'GREEN';
    option.value = 'GREEN';
    }

})




document.getElementById("BLUEbtn").addEventListener("click", function (color){
    

 if (color ==='BLUE'|| colorOption.style.backgroundColor=== color ){
        colorOptions.style.display = "inline-block"
        containerImage.style.backgroundColor='blue'
        option.textContent = 'BLUE';
        option.value = 'BLUE';
    }
    s
})






//dropdown functionalities***********************




document.getElementsByClassName("option").addEventListener("change", function (color){

    if (color === 'ALL'|| color.style.backgroundColor === color){

        colorOptions.style.display = "inline-block";
        containerImage.style.backgroundColor = color;
        option.textContent= color;
        option.value = color;
    }
else {
    colorOptions.style.display = "inline-block";
    containerImage.style.backgroundColor = color;
    option.textContent= color;
    option.value = color;
}
}
)    





