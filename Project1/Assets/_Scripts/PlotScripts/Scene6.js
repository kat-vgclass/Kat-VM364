#pragma strict

var lola : GameObject;

var bryan : GameObject;

var dialogueSix : AudioClip;

var dialoguePlayer : GameObject;

var flameWall : GameObject;

var finalDoor: GameObject;

var oldDialogue : GameObject;

function OnTriggerEnter (other : Collider) {

	dialoguePlayer.audio.PlayOneShot(dialogueSix);
	
	lola.animation.Play("Scene6LOLA");
	
	Instantiate (finalDoor);
	
	Destroy (bryan);
		
	Destroy (this.gameObject);	
	
	Destroy (flameWall);
	
	Destroy (oldDialogue);

//	plotFlag = 3;

}