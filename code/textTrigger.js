#pragma strict

var note:GameObject;
var sound:AudioClip;

function Start(){

note.SetActive(false);
}

function OnTriggerEnter(){
note.SetActive(true);
audio.PlayOneShot(sound);
}

function OnTriggerExit(){

note.SetActive(false);
//Destroy(gameObject);

}