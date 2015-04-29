#pragma strict

var lola : GameObject;

var dialogueOne : AudioClip;

var dialoguePlayer : GameObject;

static var plotFlag = 1;

function OnTriggerEnter (other : Collider) {

	if (plotFlag == 1){

	Destroy (this.gameObject);

	dialoguePlayer.audio.PlayOneShot(dialogueOne);
	
	lola.animation.Play("Scene1Pt1LOLA");
	
	plotFlag = 2;
	
	

}

}