var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for(var i=0 ; i < numberOfDrumButtons ; i++)
{

   document.querySelectorAll(".drum")[i].addEventListener( "click", function () {

    var buttonInnerHTML = this.innerHTML;

        switch(buttonInnerHTML){
         case "w":
        var tom1 = new Audio('sounds/tom-1.mp3');
        tom1.play();
           break;

         case "a":
        var tom2 = new Audio('./sounds/tom-2.mp3');
        tom2.play();
            break;
        case "s":
        var tom3 = new Audio('./sounds/tom-3.mp3');
        tom3.play();
            break;
            case "d":
        var tom4 = new Audio('./sounds/tom-4.mp3');
        tom4.play();
            break;
            case "j":
                var snare  = new Audio('./sounds/snare.mp3');
                snare.play();
                    break;
            case "k":
        var crash  = new Audio('./sounds/crash.mp3');
        crash.play();
            break;
            case "l":
        var kickbass  = new Audio('./sounds/kick-bass.mp3');
        kickbass.play();
            break;



         default:

    }



   });

}

//keydown event listener

document.addEventListener("keydown",function(event) {
    console.log(event);
    switch(event.key){
        case "w":
       var tom1 = new Audio('sounds/tom-1.mp3');
       tom1.play();
          break;

        case "a":
       var tom2 = new Audio('./sounds/tom-2.mp3');
       tom2.play();
           break;
       case "s":
       var tom3 = new Audio('./sounds/tom-3.mp3');
       tom3.play();
           break;
           case "d":
       var tom4 = new Audio('./sounds/tom-4.mp3');
       tom4.play();
           break;
           case "k":
               var snare  = new Audio('./sounds/snare.mp3');
               snare.play();
                   break;
           case "j":
       var crash  = new Audio('./sounds/crash.mp3');
       crash.play();
           break;
           case "l":
       var kickbass  = new Audio('./sounds/kick-bass.mp3');
       kickbass.play();
           break;



        default:

   }
    
    // alert("key was pressed");
});












//......LONG WAY TO ADD FUNCTION THE METHOD ABOVE IS FOR ANONYMOUS FUNCTION......


// document.querySelectorAll("button")[i].addEventListener( "click",handleClick);
    
    
// function handleClick()
// {

//     this.style.color="white";
 
// } 



//  ......CONSTRUCTOR FUNCTION.......


// function BellBoy(name,yearexp,clrep)
// {
//     this.name = name;
//     this.yearexp = yearexp;
//     this.clrep = clrep;

// }

// var housekepper1= new BellBoy("Lily",3,["bathroom","bedroom","bedroom"]);

// console.log(housekepper1);
