#pragma strict

var lola : GameObject;

var bryan : GameObject;

var dialogueFour : AudioClip;

var dialoguePlayer : GameObject;

function OnTriggerEnter (other : Collider) {

	dialoguePlayer.audio.PlayOneShot(dialogueFour);

	Destroy (this.gameObject);	
	
	}