#pragma strict

var redSprayPaint : GameObject;
//var bloodyStep : GameObject;
var ok = true;


function Start () {

}

function Update () {
     if(Input.GetKeyDown(KeyCode.Space))ok=!ok;
     if(Input.GetMouseButtonDown(0)){
     var ray : RaycastHit;
     if (Physics.Raycast (Camera.main.ScreenPointToRay (Input.mousePosition),ray)) {
                     if(ok){
                         var redSprayPaints=Instantiate (redSprayPaint, ray.point, Quaternion.identity);
                        // Destroy(redSprayPaint,5.0f);
                     }
//                     else{
//                         var blSteps=Instantiate (bloodyStep, ray.point, Quaternion.identity);
//                         Destroy(blSteps,5.0f);
//                     }
                 }
         }
 }






////var step:GameObject;
//// var bloodyStep:GameObject;
//// var ok:boolean = true;
//// 
//// function Update(){
////     if(Input.GetKeyDown(KeyCode.Space))ok=!ok;
////     if(Input.GetMouseButtonDown(0)){
////         var ray : RaycastHit;
////                 if (Physics.Raycast (Camera.main.ScreenPointToRay (Input.mousePosition),ray)) {
////                     if(ok){
////                         var steps=Instantiate (step, ray.point, Quaternion.identity);
////                         Destroy(steps,5.0f);
////                     }else{
////                         var blSteps=Instantiate (bloodyStep, ray.point, Quaternion.identity);
////                         Destroy(blSteps,5.0f);
////                     }
////                 }
////         }
//// }