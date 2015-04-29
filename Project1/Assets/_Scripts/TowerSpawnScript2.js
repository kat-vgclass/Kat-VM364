#pragma strict

var makeTower = true;

var newTower : GameObject;

function OnTriggerEnter (other : Collider) {

	if (makeTower == true){
	
		Instantiate (newTower);
		
		Destroy (this.gameObject);
		
		makeTower = false;
}
}
