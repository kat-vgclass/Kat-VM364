#pragma strict

var makeGate = true;

var gate : GameObject;

var nextBarrier : GameObject;

function OnTriggerEnter (other : Collider) {

	if (makeGate == true){
	
		Instantiate (gate);
		
		Destroy (nextBarrier);
		
		makeGate = false;
}
}

