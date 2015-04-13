#pragma strict

var makeGate = true;

var gate : GameObject;

function OnTriggerEnter (other : Collider) {

	if (makeGate == true){
		Instantiate (gate);
		makeGate = false;
}
}

