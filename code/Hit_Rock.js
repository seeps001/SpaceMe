#pragma strict

public var boxH:int=100;
public var boxW:int=100;
public var boxY:int=100;


function Start () {

}

function OnCollisionEnter (collision:Collision) {

	// Constrain all drawing to be within a 800x600 pixel area centered on the screen.
		GUI.BeginGroup (new Rect (Screen.width / 2 - 400, Screen.height / 2 - 300, 400, 300));
	
		// Draw a box in the new coordinate space defined by the BeginGroup.
		// Notice how (0,0) has now been moved on-screen
		GUI.Box (new Rect (0,0,400,300),
			"you have failed the mission");
	
		// Create the gui Bottom
		
		if(GUI.Button (Rect(50,50,100,50), "Play Again")){
			
			Application.LoadLevel("mission");
		
		}
		
		// Quick the game
	
		if(GUI.Button (Rect(100,50,100,50), "Play Later")){
		
				PlayerPrefs.Save();
				Application.Quit();
			}
		
		//GUI.Label(Rect(50,100,50,100),"Be involved by contributing with questions and requests");
		
		if(GUI.Button(Rect(100,50,100,50), "Contribute")){
		
			Application.OpenURL("http://www.nasa.gov/content/solar-missions-list/");
			}
		
		
		// We need to match all BeginGroup calls with an EndGroup
		GUI.EndGroup ();
	
	//Application.loadLevel("EndGame");

}