#pragma strict

var makeGate = true;

var gate : GameObject;

var redGate : GameObject;

function OnTriggerEnter (other : Collider) {

	if (makeGate == true){
	
		Instantiate (gate);
		
		Instantiate (redGate);
		
		makeGate = false;
}
}