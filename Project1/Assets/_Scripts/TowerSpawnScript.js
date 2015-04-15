#pragma strict

var makeTower = true;

var newTower : GameObject;

var oldTower : GameObject;



function OnTriggerEnter (other : Collider) {

	if (makeTower == true){
	
		Instantiate (newTower);
		
		Destroy (oldTower);
		
		makeTower = false;
}
}

