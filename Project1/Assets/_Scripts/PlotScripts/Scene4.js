#pragma strict

var lola : GameObject;

var bryan : GameObject;

var dialogueFour : AudioClip;

var dialoguePlayer : GameObject;

var mistGenerator : GameObject;

var redMaze : GameObject;

var ground : GameObject;

var playerBox : GameObject;

var redGlowRed : GameObject;

var tenseMusic : GameObject;

var fiveTrigger : GameObject;

function OnTriggerEnter (other : Collider) {

	Destroy (this.gameObject);	

	dialoguePlayer.audio.PlayOneShot(dialogueFour);
	
	lola.animation.Play("Scene4LOLA");
		
	bryan.animation.Play("Scene4BRYANsphere");
	
	redMaze.transform.position =  Vector3(400, 16, 2221);
	
	fiveTrigger.transform.position =  Vector3(644, 37.8, 2193.3);
		
	Instantiate (mistGenerator);
	
	Instantiate (tenseMusic);
	
	Destroy (ground);
	
	Destroy (redGlowRed);	
	
	Destroy (playerBox);

//	plotFlag = 3;

}