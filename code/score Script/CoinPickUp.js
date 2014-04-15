#pragma strict

var coinEffect: Transform;
var coinValue = 1;
static var currentScore: int = 0;
public var gamePlayer: GameObject;
//var displayScore: GUIText;

function Start(){

	//displayScore.text=

}

function OnTriggerEnter (info: Collider)
{

	if (info.tag==gamePlayer)
	
	GameMaster.currentScore += coinValue;
	Destroy (gameObject);
	}

function Update(){

if(currentScore==20){

Application.LoadLevel("GameOver");
}

}
	
		
	
