#pragma strict

var fireWall : GameObject;

function OnTriggerEnter (other : Collider) {

	fireWall.transform.position =  Vector3(600.19, 33.14, 2193);

	Destroy (this.gameObject);	

//	plotFlag = 3;

}