import Card from "./Card";
import Table from "./Table";
import Entity from "./Entity";
import Utility from "./Utility/Utility";

class Scorer {
  private _scoreFiveCardPoker(cardSet: Card[]) {
    if (cardSet.length !== 5)
      throw new RangeError(
        "must have five cards inorder to use the scoreFiveCardPoker function"
      );

    let score: number = 0,
      stringScore: string = "",
      cardScores: number = 0,
      onePair: number = 0,
      twoPair: number = 0,
      threeOfKind: number = 0,
      fourOfKind: number = 0,
      flush: boolean = true,
      kicker = new Utility.PriorityQueue<number>(),
      auxSet: Set<number> = new Set();

    enum Scores {
      HIGH_CARD = 0,
      ONE_PAIR = 1,
      TWO_PAIR = 2,
      THREE_OK_A_KIND = 3,
      STRAIGHT = 4,
      FLUSH = 5,
      FULL_HOUSE = 6,
      FOUR_OF_A_KIND = 7,
      STRAIGHT_FLUSH = 8,
      ROYAL_FLUSH = 9
    }

    for (let i = 0; i < cardSet.length; i++) {
      //add all of the card values to help determine Straight Flush
      cardScores += cardSet[i].value;

      //push cards into kicker priority queue
      kicker.push(cardSet[i].value);

      //loop through the next cards
      for (let j = i + 1; j < cardSet.length; j++) {
        if (flush && cardSet[i].suit != cardSet[j].suit) flush = false;

        if (cardSet[i].value === cardSet[j].value) {
          if (threeOfKind === cardSet[j].value) {
            fourOfKind = threeOfKind;
            threeOfKind = 0;
            score = Scores.FOUR_OF_A_KIND * 100 + fourOfKind;
            break;
          } else if (twoPair === cardSet[j].value) {
            threeOfKind = twoPair;
            twoPair = 0;
            score = Scores.FULL_HOUSE * 10000 + threeOfKind * 100 + onePair;
            break;
          } else if (onePair === cardSet[j].value) {
            if (twoPair != 0) {
              threeOfKind = onePair;
              onePair = 0;
              score = Scores.FULL_HOUSE * 10000 + threeOfKind * 100 + onePair;
              break;
            } else {
              threeOfKind = onePair;
              onePair = 0;
              score = Scores.THREE_OK_A_KIND * 100 + threeOfKind;
              break;
            }
          } else if (onePair != 0) {
            twoPair = cardSet[j].value;
            twoPair > onePair
              ? (score = Scores.TWO_PAIR * 10000 + twoPair * 100 + onePair)
              : (score = Scores.TWO_PAIR * 10000 + onePair * 100 + twoPair);
            break;
          } else {
            onePair = cardSet[j].value;
            threeOfKind != 0
              ? (score =
                  Scores.FULL_HOUSE * 10000 + threeOfKind * 100 + onePair)
              : (score = Scores.ONE_PAIR * 100 + onePair);
            break;
          }
        }
      }
    }

    //check for Straight, Straight Flush, Flush, Royal Flush, or nothing
    if (score === Scores.HIGH_CARD) {
      if (flush && cardScores === 60) score = Scores.ROYAL_FLUSH;
      else if (
        (cardScores % 5 === 0 && (kicker.top() - 2) * 5 === cardScores) ||
        (cardScores === 28 && kicker.top() === 14)
      )
        flush ? (score = Scores.STRAIGHT_FLUSH) : (score = Scores.STRAIGHT);
      else if (flush) score = Scores.FLUSH;
      else stringScore = "0";
    }

    auxSet.add(fourOfKind);
    auxSet.add(threeOfKind);
    auxSet.add(twoPair);
    auxSet.add(onePair);

    let setArray = [...Array.from(auxSet)];

    while (!kicker.empty()) {
      if (setArray[setArray.length - 1] === kicker.top())
        score = score * 100 + kicker.top();
      kicker.pop();
    }

    return (stringScore += score.toString());
  }

  private _getAllSubsets(set: Card[]) {
    let subset: Card[][] = [];

    let n = set.length;

    for (let i = 0; i < 1 << n; i++) {
      let tmpSet: Card[] = [];

      for (let j = 0; j < n; j++) {
        if ((i & (1 << j)) > 0) tmpSet.push(set[j]);
      }

      subset.push(tmpSet);
    }
    return subset;
  }

  private _getSubsetBySize(set: Card[][], size: number) {
    let newSet: Card[][] = [];

    for (let i of set) if (i.length === size) newSet.push(i);

    return newSet;
  }

  private _scorePoker(cardSet: Card[]) {
    if (cardSet.length < 5)
      throw new RangeError(
        "must have at least 5 cards to use scorePoker function"
      );
    else if (cardSet.length == 5) return this._scoreFiveCardPoker(cardSet);

    let highScore: string = "";

    let allSubsets: Card[][] = this._getAllSubsets(cardSet);

    let size5Subsets = this._getSubsetBySize(allSubsets, 5);

    for (let i = 0; i < size5Subsets.length; i++) {
      let tmp: string = this._scoreFiveCardPoker(size5Subsets[i]);

      if (tmp > highScore) highScore = tmp;
    }

    return highScore;
  }

  static assignHandScores(table: Table) {
    let scorer = new Scorer();

    for (let i = 0; i < table.size(); i++) {
      let tmp: Card[] = [];

      for (let j = 0; j < table.cards.size(); j++) tmp.push(table.cards.at(j));

      for (let j = 0; j < table.at(i).hand.size(); j++)
        tmp.push(table.at(i).hand.at(j));

      table.at(i).handScore = scorer._scorePoker(tmp);
    }
  }

  static compareHandScores(table: Table) {
    let highScore: string = "";
    let winner = new Entity();

    for (let i = 0; i < table.size(); i++) {
      if (!table.at(i).fold && table.at(i).handScore > highScore) {
        winner = table.at(i);
        highScore = table.at(i).handScore;
      }
    }

    return winner;
  }
}

export default Scorer;
