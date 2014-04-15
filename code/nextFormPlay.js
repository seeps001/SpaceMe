#pragma strict

//public var nameForm = string;

public var loadingText: GameObject;

function Start () {

loadingText.SetActive(false);

}

function OnMouseDown(){

loadingText.SetActive(true);

Application.LoadLevel("mainForm");
//Console.log("pressed");


}
