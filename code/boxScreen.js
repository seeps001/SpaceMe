#pragma strict

public var boxH:int=100;
public var boxW:int=100;
public var boxY:int=100;
public var buttonY:int=100;

function Start () {

}

function OnGUI() {

	// Constrain all drawing to be within a 800x600 pixel area centered on the screen.
		GUI.BeginGroup (new Rect (Screen.width / 2 - boxH, Screen.height / 2 - boxW, boxY, 600));
	
		// Draw a box in the new coordinate space defined by the BeginGroup.
		// Notice how (0,0) has now been moved on-screen
		GUI.Box (new Rect (0,0,boxY,300),
			"you have failed the mission");
	
		// Create the gui Bottom
		
		if(GUI.Button (Rect(50,50,100,50), "Play Again")){
			
			Application.LoadLevel("mission");
		
		}
		
		// Quick the game
	
		if(GUI.Button (Rect(160,50,100,50), "Play Later")){
		
				PlayerPrefs.Save();
				Application.Quit();
			}
	
		// We need to match all BeginGroup calls with an EndGroup
		GUI.EndGroup ();
	
	//Application.loadLevel("EndGame");

}