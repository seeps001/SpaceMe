#pragma strict

static var coinCounter=0;

function Start () {

}

function OnCollisionEnter (collision:Collision) {

if (collision.transform.name==("_Coin")){
coinCounter += 1;
}
}

