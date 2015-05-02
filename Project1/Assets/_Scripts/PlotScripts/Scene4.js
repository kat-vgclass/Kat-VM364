#pragma strict

var lola : GameObject;

var bryan : GameObject;

var dialogueFour : AudioClip;

var dialoguePlayer : GameObject;

var mistGenerator : GameObject;

var redMaze : GameObject;

var ground : GameObject;

var playerBox : GameObject;

var whorls : GameObject;

var whorlDestination : Transform;

function OnTriggerEnter (other : Collider) {

	dialoguePlayer.audio.PlayOneShot(dialogueFour);
	
	lola.animation.Play("Scene4LOLA");
		
	bryan.animation.Play("Scene4BRYANsphere");
	
	yield WaitForSeconds (1);
	
		redMaze.transform.position =  Vector3(400, 16, 2221);
		
		whorls.transform.position = whorlDestination.position;
		
		Instantiate (mistGenerator);
	
	yield WaitForSeconds (2);
	
		Destroy (ground);

		Destroy (this.gameObject);	
		
		Destroy (playerBox);

//	plotFlag = 3;

}