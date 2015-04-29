#pragma strict

var flashback : AudioClip;

var dialoguePlayer : GameObject;

function OnTriggerEnter (other : Collider) {

	Destroy (this.gameObject);

	dialoguePlayer.audio.PlayOneShot(flashback);
	
	}