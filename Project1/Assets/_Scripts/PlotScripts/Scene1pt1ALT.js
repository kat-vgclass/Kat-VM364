#pragma strict

var plotOneo = true;

//var dialogueOne : AudioClip; // set this to your sound in the inspector

var lola : GameObject;

//var animationLolaOne : AnimationClip;

function OnTriggerEnter (other : Collider) { // next line requires an AudioSource component on this gameobject 

	if (plotOneo == true){

		Instantiate (lola);

		Destroy (this.gameObject);

	//	audio.PlayOneShot(dialogueOne);
			
	//	lola.animation.Play(animationLolaOne.name);

		plotOneo = false;
	
}

}