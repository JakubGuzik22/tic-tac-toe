var turn=0;

var clicked1 = false;
var clicked2 = false;
var clicked3 = false;
var clicked4 = false;
var clicked5 = false;
var clicked6 = false;
var clicked7 = false;
var clicked8 = false;
var clicked9 = false;

var wincondition=false;

var startingpoint=prompt("Do you want circles to start? y(yes)");
switch (startingpoint)
{
case "y": turn=1;
}

function win()
{
if (document.getElementById("one").textContent.includes("x")&&document.getElementById("two").textContent.includes("x")&&document.getElementById("three").textContent.includes("x"))
	{alert("Crosses won!"); 
	wincondition=true;
	document.getElementById("one").innerHTML="<img src='cross_win.png'>";
	document.getElementById("two").innerHTML="<img src='cross_win.png'>";
	document.getElementById("three").innerHTML="<img src='cross_win.png'>";
	}
if (document.getElementById("four").textContent.includes("x")&&document.getElementById("five").textContent.includes("x")&&document.getElementById("six").textContent.includes("x"))
	{alert("Crosses won!"); 
	wincondition=true;
	document.getElementById("four").innerHTML="<img src='cross_win.png'>";
	document.getElementById("five").innerHTML="<img src='cross_win.png'>";
	document.getElementById("six").innerHTML="<img src='cross_win.png'>";
	}
if (document.getElementById("seven").textContent.includes("x")&&document.getElementById("eight").textContent.includes("x")&&document.getElementById("nine").textContent.includes("x"))
	{alert("Crosses won!"); 
	wincondition=true;
	document.getElementById("seven").innerHTML="<img src='cross_win.png'>";
	document.getElementById("eight").innerHTML="<img src='cross_win.png'>";
	document.getElementById("nine").innerHTML="<img src='cross_win.png'>";
	}
if (document.getElementById("one").textContent.includes("x")&&document.getElementById("four").textContent.includes("x")&&document.getElementById("seven").textContent.includes("x"))
	{alert("Crosses won!"); 
	wincondition=true;
	document.getElementById("one").innerHTML="<img src='cross_win.png'>";
	document.getElementById("four").innerHTML="<img src='cross_win.png'>";
	document.getElementById("seven").innerHTML="<img src='cross_win.png'>";
	}
if (document.getElementById("two").textContent.includes("x")&&document.getElementById("five").textContent.includes("x")&&document.getElementById("eight").textContent.includes("x"))
	{alert("Crosses won!"); 
	wincondition=true;
	document.getElementById("two").innerHTML="<img src='cross_win.png'>";
	document.getElementById("five").innerHTML="<img src='cross_win.png'>";
	document.getElementById("eight").innerHTML="<img src='cross_win.png'>";
	}
if (document.getElementById("three").textContent.includes("x")&&document.getElementById("six").textContent.includes("x")&&document.getElementById("nine").textContent.includes("x"))
	{alert("Crosses won!"); 
	wincondition=true;
	document.getElementById("three").innerHTML="<img src='cross_win.png'>";
	document.getElementById("six").innerHTML="<img src='cross_win.png'>";
	document.getElementById("nine").innerHTML="<img src='cross_win.png'>";
	}
if (document.getElementById("one").textContent.includes("x")&&document.getElementById("five").textContent.includes("x")&&document.getElementById("nine").textContent.includes("x"))
	{alert("Crosses won!"); 
	wincondition=true;
	document.getElementById("one").innerHTML="<img src='cross_win.png'>";
	document.getElementById("five").innerHTML="<img src='cross_win.png'>";
	document.getElementById("nine").innerHTML="<img src='cross_win.png'>";
	}
if (document.getElementById("seven").textContent.includes("x")&&document.getElementById("five").textContent.includes("x")&&document.getElementById("three").textContent.includes("x"))
	{alert("Crosses won!"); 
	wincondition=true;
	document.getElementById("seven").innerHTML="<img src='cross_win.png'>";
	document.getElementById("five").innerHTML="<img src='cross_win.png'>";
	document.getElementById("three").innerHTML="<img src='cross_win.png'>";
	}




if (document.getElementById("one").textContent.includes(",")&&document.getElementById("two").textContent.includes(",")&&document.getElementById("three").textContent.includes(","))
	{alert("Circles won!");
	wincondition=true;
	document.getElementById("one").innerHTML="<img src='circle_win.png'>";
	document.getElementById("two").innerHTML="<img src='circle_win.png'>";
	document.getElementById("three").innerHTML="<img src='circle_win.png'>";
	}
if (document.getElementById("four").textContent.includes(",")&&document.getElementById("five").textContent.includes(",")&&document.getElementById("six").textContent.includes(","))
	{alert("Circles won!");
	wincondition=true;
	document.getElementById("four").innerHTML="<img src='circle_win.png'>";
	document.getElementById("five").innerHTML="<img src='circle_win.png'>";
	document.getElementById("six").innerHTML="<img src='circle_win.png'>";
	}
if (document.getElementById("seven").textContent.includes(",")&&document.getElementById("eight").textContent.includes(",")&&document.getElementById("nine").textContent.includes(","))
	{alert("Circles won!");
	wincondition=true;
	document.getElementById("seven").innerHTML="<img src='circle_win.png'>";
	document.getElementById("eight").innerHTML="<img src='circle_win.png'>";
	document.getElementById("nine").innerHTML="<img src='circle_win.png'>";
	}
if (document.getElementById("one").textContent.includes(",")&&document.getElementById("four").textContent.includes(",")&&document.getElementById("seven").textContent.includes(","))
	{alert("Circles won!");
	wincondition=true;
	document.getElementById("one").innerHTML="<img src='circle_win.png'>";
	document.getElementById("four").innerHTML="<img src='circle_win.png'>";
	document.getElementById("seven").innerHTML="<img src='circle_win.png'>";
	
	}
if (document.getElementById("two").textContent.includes(",")&&document.getElementById("five").textContent.includes(",")&&document.getElementById("eight").textContent.includes(","))
	{alert("Circles won!");
	wincondition=true;
	document.getElementById("two").innerHTML="<img src='circle_win.png'>";
	document.getElementById("five").innerHTML="<img src='circle_win.png'>";
	document.getElementById("eight").innerHTML="<img src='circle_win.png'>";
	}
if (document.getElementById("three").textContent.includes(",")&&document.getElementById("six").textContent.includes(",")&&document.getElementById("nine").textContent.includes(","))
	{alert("Circles won!");
	wincondition=true;
	document.getElementById("three").innerHTML="<img src='circle_win.png'>";
	document.getElementById("six").innerHTML="<img src='circle_win.png'>";
	document.getElementById("nine").innerHTML="<img src='circle_win.png'>";
	}
if (document.getElementById("one").textContent.includes(",")&&document.getElementById("five").textContent.includes(",")&&document.getElementById("nine").textContent.includes(","))
	{alert("Circles won!");
	wincondition=true;
	document.getElementById("one").innerHTML="<img src='circle_win.png'>";
	document.getElementById("five").innerHTML="<img src='circle_win.png'>";
	document.getElementById("nine").innerHTML="<img src='circle_win.png'>";
	}
if (document.getElementById("seven").textContent.includes(",")&&document.getElementById("five").textContent.includes(",")&&document.getElementById("three").textContent.includes(","))
	{alert("Circles won!");
	wincondition=true;
	document.getElementById("seven").innerHTML="<img src='circle_win.png'>";
	document.getElementById("five").innerHTML="<img src='circle_win.png'>";
	document.getElementById("three").innerHTML="<img src='circle_win.png'>";
	}
};


function game(x)
{
	if (x==1)
	{
		if (clicked1 == false)
		{	
		if (turn%2==0)
			document.getElementById("one").innerHTML="x<img src='cross.png'>";
		else
			document.getElementById("one").innerHTML=",<img src='circle.png'>";
		clicked1 = true;
		turn+=1;
		}
	}
	if (x==2)
	{
		if (clicked2 == false){
		if (turn%2==0)
			document.getElementById("two").innerHTML="x<img src='cross.png'>";
		else
			document.getElementById("two").innerHTML=",<img src='circle.png'>";
		clicked2 = true;
		turn+=1;
		}

	}
	if (x==3)
	{
		if (clicked3 == false){
		if (turn%2==0)
			document.getElementById("three").innerHTML="x<img src='cross.png'>";
		else
			document.getElementById("three").innerHTML=",<img src='circle.png'>";
		clicked3 = true;
		turn+=1;
		}
	}
	if (x==4)
	{	
		if (clicked4 == false){
		if (turn%2==0)
			document.getElementById("four").innerHTML="x<img src='cross.png'>";
		else
			document.getElementById("four").innerHTML=",<img src='circle.png'>";
		clicked4 = true;
		turn+=1;
		}
	}
	if (x==5)
	{
		if (clicked5 == false){
		if (turn%2==0)
			document.getElementById("five").innerHTML="x<img src='cross.png'>";
		else
			document.getElementById("five").innerHTML=",<img src='circle.png'>";
		clicked5 = true;
		turn+=1;
		}
	}
	if (x==6)
	{
		if (clicked6 == false){
		if (turn%2==0)
			document.getElementById("six").innerHTML="x<img src='cross.png'>";
		else
			document.getElementById("six").innerHTML=",<img src='circle.png'>";
		clicked6 = true;
		turn+=1;
		}
	}	
	if (x==7)
	{
		if (clicked7 == false){
		if (turn%2==0)
			document.getElementById("seven").innerHTML="x<img src='cross.png'>";
		else
			document.getElementById("seven").innerHTML=",<img src='circle.png'>";
		clicked7 = true;
		turn+=1;
		}
	}
	if (x==8)
	{
		if (clicked8 == false){
		if (turn%2==0)
			document.getElementById("eight").innerHTML="x<img src='cross.png'>";
		else
			document.getElementById("eight").innerHTML=",<img src='circle.png'>";
		clicked8 = true;
		turn+=1;
		}
	}
	if (x==9)
	{
		if (clicked9 == false){
		if (turn%2==0)
			document.getElementById("nine").innerHTML="x<img src='cross.png'>";
		else
			document.getElementById("nine").innerHTML=",<img src='circle.png'>";
		clicked9 = true;
		turn+=1;
		}
	}
	if (clicked1==true&&clicked2==true&&clicked3==true&&clicked4==true&&clicked5==true&&clicked6==true&&clicked7==true&&clicked8==true&&clicked9==true&&wincondition==false)
	alert("It's a tie!");
	if (turn>=5&&wincondition==false)
	win();
}
