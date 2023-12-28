/*var circle = document.getElementById("circle");
var cross = document.getElementById("cross");*/
var turn=0;
var wincondition;
var clicked1 = false;
var clicked2 = false;
var clicked3 = false;
var clicked4 = false;
var clicked5 = false;
var clicked6 = false;
var clicked7 = false;
var clicked8 = false;
var clicked9 = false;

function game(x)
{
	if (x==1)
	{
		if (clicked1 == false)
		{	
			if (turn%2==0)
			{
			clicked1 = true;
			document.getElementById("one").innerHTML="<img src='cross.png'>";
			turn+=1;
			}
			else
			{
			clicked1 = true;
			document.getElementById("one").innerHTML="<img src='circle.png'>";
			turn+=1;
			}
		}
	}
	if (x==2)
	{
		if (clicked2 == false){
		if (turn%2==0)
		{
		clicked2 = true;
		document.getElementById("two").innerHTML="<img src='cross.png'>";
		turn+=1;
		}
		else
		{
		clicked2 = true;
		document.getElementById("two").innerHTML="<img src='circle.png'>";
		turn+=1;
		}}
	}
	if (x==3)
	{
		if (clicked3 == false){
		if (turn%2==0)
		{
		clicked3 = true;
		document.getElementById("three").innerHTML="<img src='cross.png'>";
		turn+=1;
		}
		else
		{
		clicked3 = true;
		document.getElementById("three").innerHTML="<img src='circle.png'>";
		turn+=1;
		}}
	}
	if (x==4)
	{	
		if (clicked4 == false){
		if (turn%2==0)
		{
		clicked4 = true;
		document.getElementById("four").innerHTML="<img src='cross.png'>";
		turn+=1;
		}
		else
		{
		clicked4 = true;
		document.getElementById("four").innerHTML="<img src='circle.png'>";
		turn+=1;
		}}
	}
	if (x==5)
	{
		if (clicked5 == false){
		if (turn%2==0)
		{
		clicked5 = true;
		document.getElementById("five").innerHTML="<img src='cross.png'>";
		turn+=1;
		}
		else
		{
		clicked5 = true;
		document.getElementById("five").innerHTML="<img src='circle.png'>";
		turn+=1;
		}}
	}
	if (x==6)
	{
		if (clicked6 == false){
		if (turn%2==0)
		{
		clicked6 = true;
		document.getElementById("six").innerHTML="<img src='cross.png'>";
		turn+=1;
		}
		else
		{
		clicked6 = true;
		document.getElementById("six").innerHTML="<img src='circle.png'>";
		turn+=1;
		}}
	}	
	if (x==7)
	{
		if (clicked7 == false){
		if (turn%2==0)
		{
		clicked7 = true;
		document.getElementById("seven").innerHTML="<img src='cross.png'>";
		turn+=1;
		}
		else
		{
		clicked7 = true;
		document.getElementById("seven").innerHTML="<img src='circle.png'>";
		turn+=1;
		}}
	}
	if (x==8)
	{
		if (clicked8 == false){
		if (turn%2==0)
		{
		clicked8 = true;
		document.getElementById("eight").innerHTML="<img src='cross.png'>";
		turn+=1;
		}
		else
		{
		clicked8 = true;
		document.getElementById("eight").innerHTML="<img src='circle.png'>";
		turn+=1;
		}}
	}
	if (x==9)
	{
		if (clicked9 == false){
		if (turn%2==0)
		{
		clicked9 = true;
		document.getElementById("nine").innerHTML="<img src='cross.png'>";
		turn+=1;
		}
		else
		{
		clicked9 = true;
		document.getElementById("nine").innerHTML="<img src='circle.png'>";
		turn+=1;
		}}
	}
}