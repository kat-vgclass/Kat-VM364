#pragma strict

function Start () {
	Invoke ("DestroyProjectile", 2.0);
}

function Update () {

}

function DestroyProjectile () {
	Destroy (gameObject);
}