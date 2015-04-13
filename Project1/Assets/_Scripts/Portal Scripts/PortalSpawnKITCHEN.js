#pragma strict

var makeGate = true;

var gate : GameObject;

function Start () {

	if (makeGate == true){
		Instantiate (gate);
		makeGate = false;
}
}

function Update () {
}