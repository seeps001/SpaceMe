#pragma strict
// THIS CODE GETS THE APPLICATION TO EXIT WHEN THE BUTTON IS PRESSED!

private var ray: Ray;
private var hit:RaycastHit;

function Start () {

}

function Update () {

	if(Input.GetMouseButtonDown(0)){
	
		//This sets the color to red when pressed
		//renderer.material.color = Color.red;
		
	
		ray = Camera.main.ScreenPointToRay(Input.mousePosition);
		if(Physics.Raycast(ray, hit)){
		if(hit.transform.name == "exit"){
		
			Application.Quit();
		}
	
	}

}
}