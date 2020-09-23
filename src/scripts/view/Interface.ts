import CardView from "./CardView";
import TextView from "./TextView";
import ButtonView from "./ButtonView";

class Interface {
  opponentACard1: CardView;
  opponentACard2: CardView;

  playerCard1: CardView;
  playerCard2: CardView;

  opponentBCard1: CardView;
  opponentBCard2: CardView;

  tableCard1: CardView;
  tableCard2: CardView;
  tableCard3: CardView;
  tableCard4: CardView;
  tableCard5: CardView;
  tableCard6: CardView;

  topLeft: TextView;
  potIcon: TextView;
  potScore: TextView;
  topRight: TextView;

  opponentAmarker: TextView;
  opponentAscore: TextView;
  opponentAscoreMarker: TextView;
  opponentAturn: TextView;
  opponentARaiseAmount: TextView;

  playerTurn: TextView;

  opponentBmarker: TextView;
  opponentBscore: TextView;
  opponentBscoreMarker: TextView;
  opponentBturn: TextView;
  opponentBRaiseAmount: TextView;

  playerScore: TextView;
  raiseArrowLeft: TextView;
  raiseAmount: TextView;
  raiseArrowRight: TextView;

  fold: ButtonView;
  call: ButtonView;
  raise: ButtonView;

  resetInterface() {
    this.playerCard1.clear();
    this.playerCard2.clear();

    this.opponentACard1.clear();
    this.opponentACard2.clear();

    this.opponentBCard1.clear();
    this.opponentBCard2.clear();

    this.tableCard1.clear();
    this.tableCard2.clear();
    this.tableCard3.clear();
    this.tableCard4.clear();
    this.tableCard5.clear();
    this.tableCard6.clear();

    //this.playerScore.clear();
    //this.raiseAmount.clear();
    this.raiseAmount.color("Black");
    this.raiseAmount.string("$10");
    this.opponentAscore.clear();
    this.opponentBscore.clear();

    this.topLeft.clear();
    this.potScore.clear();
    this.topRight.clear();

    this.playerTurn.clear();

    this.opponentAmarker.clear();
    this.opponentAturn.clear();
    this.opponentAturn.color("Black");
    this.opponentARaiseAmount.clear();
    this.opponentARaiseAmount.color("Black");
    this.opponentAscoreMarker.clear();

    this.opponentBmarker.clear();
    this.opponentBturn.clear();
    this.opponentBturn.color("Black");
    this.opponentBRaiseAmount.clear();
    this.opponentBRaiseAmount.color("Black");
    this.opponentBscoreMarker.clear();

    //this.raiseArrowLeft.clear();
    //this.raiseArrowRight.clear();
    this.raiseAmount.color("Black");
    this.raiseAmount.string("$10");
    this.raiseArrowLeft.string("&#x2190");
    this.raiseArrowRight.string("&#x2192");

    this.call.string("CALL");
    this.raise.string("RAISE");
    this.fold.string("FOLD");
  }

  constructor() {
    this.opponentACard1 = new CardView(
      document.getElementById("opponentA-card-1")!
    );
    this.opponentACard2 = new CardView(
      document.getElementById("opponentA-card-2")!
    );

    this.playerCard1 = new CardView(document.getElementById("player-card-1")!);
    this.playerCard2 = new CardView(document.getElementById("player-card-2")!);

    this.opponentBCard1 = new CardView(
      document.getElementById("opponentB-card-1")!
    );
    this.opponentBCard2 = new CardView(
      document.getElementById("opponentB-card-2")!
    );

    this.tableCard1 = new CardView(document.getElementById("table-card-1")!);
    this.tableCard2 = new CardView(document.getElementById("table-card-2")!);
    this.tableCard3 = new CardView(document.getElementById("table-card-3")!);
    this.tableCard4 = new CardView(document.getElementById("table-card-4")!);
    this.tableCard5 = new CardView(document.getElementById("table-card-5")!);
    this.tableCard6 = new CardView(document.getElementById("table-card-6")!);

    this.topLeft = new TextView(document.getElementById("top-left-text")!);
    this.potIcon = new TextView(document.getElementById("pot-icon")!);
    this.potScore = new TextView(document.getElementById("pot-score-text")!);
    this.topRight = new TextView(document.getElementById("top-right-text")!);

    this.opponentAmarker = new TextView(
      document.getElementById("opponentA-turn-marker")!
    );
    this.opponentAscore = new TextView(
      document.getElementById("opponentA-score")!
    );
    this.opponentAscoreMarker = new TextView(
      document.getElementById("opponentA-score-marker")!
    );
    this.opponentAturn = new TextView(
      document.getElementById("opponentA-turn-text")!
    );
    this.opponentARaiseAmount = new TextView(
      document.getElementById("opponentA-raise-text")!
    );

    this.opponentBmarker = new TextView(
      document.getElementById("opponentB-turn-marker")!
    );
    this.opponentBscore = new TextView(
      document.getElementById("opponentB-score")!
    );
    this.opponentBscoreMarker = new TextView(
      document.getElementById("opponentB-score-marker")!
    );
    this.opponentBturn = new TextView(
      document.getElementById("opponentB-turn-text")!
    );
    this.opponentBRaiseAmount = new TextView(
      document.getElementById("opponentB-raise-text")!
    );

    this.playerTurn = new TextView(document.getElementById("player-turn")!);

    this.playerScore = new TextView(document.getElementById("player-score")!);
    this.raiseArrowLeft = new TextView(
      document.getElementById("raise-arrow-left")!
    );
    this.raiseAmount = new TextView(document.getElementById("raise-amount")!);
    this.raiseArrowRight = new TextView(
      document.getElementById("raise-arrow-right")!
    );

    this.fold = new ButtonView(
      document.getElementById("fold-button-container")!
    );
    this.call = new ButtonView(
      document.getElementById("call-button-container")!
    );
    this.raise = new ButtonView(
      document.getElementById("raise-button-container")!
    );
  }
}

export default Interface;
