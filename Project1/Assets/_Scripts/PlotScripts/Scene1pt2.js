#pragma strict

var lola : GameObject;

var bryan : GameObject;

var dialogueTwo : AudioClip;

var dialoguePlayer : GameObject;

function OnTriggerEnter (other : Collider) {

	dialoguePlayer.audio.PlayOneShot(dialogueTwo);
	
	lola.animation.Play("Scene1Pt2LOLA");
		
	bryan.animation.Play("Scene1Pt2BRYAN");

	Destroy (this.gameObject);	

//	plotFlag = 3;

}