#pragma strict

var makeGate = true;

var gate : GameObject;

var redGate : GameObject;

var redTrigger : GameObject;

var destination : Transform;

var lola : GameObject;

var dialogueThree : AudioClip;

var dialoguePlayer : GameObject;

var whorlsDestination : Transform;

var redwhorls : GameObject;


function OnTriggerEnter (other : Collider) {

	if (makeGate == true){
	
		Instantiate (gate);
		
		Instantiate (redGate);
		
		redTrigger.transform.position = destination.position; 
		
		dialoguePlayer.audio.PlayOneShot(dialogueThree);
	
		lola.animation.Play("Scene3LOLA");
		
		makeGate = false;
}
}