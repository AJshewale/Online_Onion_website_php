var delay=2000 
var curindex=0

var randomimages=new Array()

	randomimages[0]="images/m1.jpg"
	randomimages[1]="images/m2.jpg"
	randomimages[2]="images/m3.jpg"
	randomimages[3]="images/t3.jpg"

	
var preload=new Array()

for (n=0;n<randomimages.length;n++)
{
	preload[n]=new Image()
	preload[n].src=randomimages[n]
}
function rotateimage()
{

if (curindex==(tempindex=Math.floor(Math.random()*(randomimages.length)))){
curindex=curindex==0? 1 : curindex-1
}
else
curindex=tempindex

	document.getElementById('ri').src=randomimages[curindex]
}

setInterval("rotateimage()",delay)