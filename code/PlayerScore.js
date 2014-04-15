#pragma strict

var score: int = 0;
var guiScore: GUIText;
// This script increaments score

function Start(){
guiScore.text = "" + score;

}
//function OnCollisionEnter(col:Collision){
//
//	if(col.collider.name == ("power")){
//	Destroy(gameObject);
//	score +=10;
//	guiScore.text = "" + score;
//}
//}

function OnTriggerEnter(){
	//Destroy(gameObject);
	score ++;
	guiScore.text = "" + score;
}