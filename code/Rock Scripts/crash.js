#pragma strict

	static private var joysticks : Joystick[];					// A static collection of all joysticks
	var move: Joystick;
	var character: GameObject;
 	var menuDisplay: GameObject;

function Start () {

		menuDisplay.SetActive(false);


}

function OnTriggerEnter () {

	menuDisplay.SetActive(true);
	
	//move.Disable();
	//character.Disable();




}