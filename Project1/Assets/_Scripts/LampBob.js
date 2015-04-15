#pragma strict

var speed = 6;

function Start () {

}

function Update () {
	transform.Translate (Vector3.up * Time.deltaTime * speed, Space.World);

	if (transform.position.y >= 7) {

		speed = -6;

	}
	if (transform.position.y <= -5) {
	
		speed = 6;
	}
}