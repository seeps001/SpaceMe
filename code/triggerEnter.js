#pragma strict


var note : GameObject;

function Start (){

note.SetActive(false);

}

function OnTriggerEnter(){

	note.SetActive(true);
	//Destroy(note);
}

function OnTriggerExit(){

	note.SetActive (false);
	
}