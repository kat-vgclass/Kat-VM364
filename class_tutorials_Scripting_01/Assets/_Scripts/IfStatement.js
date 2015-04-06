#pragma strict

var WadeLikesIceCream = true;
var cube : GameObject;

function Start () {

if (WadeLikesIceCream == true){
Instantiate (cube);
WadeLikesIceCream = false;
}
}
function Update () {
}