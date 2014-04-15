#pragma strict

 static var score=0; var guiScore :
       GUIText;

 function start () { 
       guiScore.text = " "+score;
 }
 
 function OnTriggerEnter (other :Collider ) { 
      //Debug.Log ("OnTriggerEnter () was called"); 
      if (other.tag == "power") { 
      //Debug.Log ("Other object is coin");   
      score ++;     
      //Debug.Log("Score is now " + score);
      Destroy (other.gameObject);   
      guiScore.text = " " +score; 
      //Timer.onpause = true;     
      //Application.LoadLevel("Menu2");   
}

}
