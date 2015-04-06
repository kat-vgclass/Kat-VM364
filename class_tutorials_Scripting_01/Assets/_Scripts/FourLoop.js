#pragma strict

var cubeCreate = true;
var cube : GameObject;
var projectile : Rigidbody;



function Start () {
if (cubeCreate == true){
for (var i : int = 0;i < 5; i++) {
Instantiate (cube, Vector3(i * 2.0, 0, 0), Quaternion.identity);
}
cubeCreate = false;
}
}

function Update () {
// Ctrl was pressed, launch a projectile
	if (Input.GetButtonDown("Fire1")) {
// Instantiate the projectile at the position and rotation of this transform
		var clone : Rigidbody;
		var mousePos = Input.mousePosition;
		mousePos.z = 4;
		var objectPos = Camera.main.ScreenToWorldPoint(mousePos);
		clone = Instantiate(projectile, objectPos, transform.rotation);
// Give the cloned object an initial velocity along the current
// object's Z axis
		clone.velocity = transform.TransformDirection (Vector3.forward * 10);
		
		
		
//    	mousePos.z = 12.48309;
    	
//    	Instantiate(Block, objectPos, Quaternion.identity);
		
		
		
		
		
}
}






//     var Block:GameObject;
//    function Update ()
//    {
//    if (Input.GetButtonDown ("Fire1"))
//    {
//    var mousePos = Input.mousePosition;
//    mousePos.z = 12.48309;
//    var objectPos = Camera.main.ScreenToWorldPoint(mousePos);
//    Instantiate(Block, objectPos, Quaternion.identity);
//    }
//    }