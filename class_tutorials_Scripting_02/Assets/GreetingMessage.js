#pragma strict

import UnityEngine.UI;

var greeting : Text;
var playername : InputField;

function Greet () {

	greeting.text = "Hi " + playername.text + "!";

}