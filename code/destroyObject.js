#pragma strict

var effect: GameObject;



function Start () {

	effect.SetActive(false);
}

function OnTriggerEnter () {

	effect.SetActive(true);
	Destroy(gameObject, 0.3);

}