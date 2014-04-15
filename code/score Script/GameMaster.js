#pragma strict

static var currentScore: int = 0;
var displayScore: GUIText;

//var offsetY:float = 40;
//var offsetX:float = 40;
//var sizeX:float = 100;
//var sizeY:float = 60;
//var scoreImage:Texture;

function OnGUI(){
//	GUI.color = Color.white;
//	GUI.backgroundColor = Color.black;
	//GUI.Box (Rect(10,10,100,200),scoreImage + currentScore);
	//GUI.Label (Rect(55,60,26,30),currentScore);
	displayScore.text="Score:" + currentScore;
	

}

function Update(){

if(currentScore == 20){

Application.LoadLevel("GameOver");

}

}