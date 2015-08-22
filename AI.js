class AI {
  var TextStateQueue;
  var CurrentTextState;
  var health;
  var MainRoomChoice;
  var BoxRoomScore;


  function AI() {
    TextStateQueue = new Queue();
    TextStateQueue.enqueue(""); //2
    TextStateQueue.enqueue(""); //3
    TextStateQueue.enqueue(""); //4
    TextStateQueue.enqueue(""); //5

    CurrentTextState = "";

    /*queue.enqueue(AITextState2);
    queue.enqueue(AITextState3);
    queue.enqueue(AITextState4);
    queue.enqueue(AITextState5);
    CurrentTextState = AITextState1;*/
    Health = 100;
    MainRoomChoice = 0;
    BoxRoomScore = 0;
  }


}
