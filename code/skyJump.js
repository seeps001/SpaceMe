#pragma strict

public var speedFly :int=10;
var tapCount: int=10;

function Start () {

}

function Update () {

if( Input.GetTouch(0).tapCount == 10 ){

transform.Translate(Vector3(0,1*Time.deltaTime,0));



}

}