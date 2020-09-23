"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Entity_1 = require("./Entity");
var Utility_1 = require("./Utility/Utility");
var Scorer = (function () {
    function Scorer() {
    }
    Scorer.prototype._scoreFiveCardPoker = function (cardSet) {
        if (cardSet.length !== 5)
            throw new RangeError("must have five cards inorder to use the scoreFiveCardPoker function");
        var score = 0, stringScore = "", cardScores = 0, onePair = 0, twoPair = 0, threeOfKind = 0, fourOfKind = 0, flush = true, kicker = new Utility_1.default.PriorityQueue(), auxSet = new Set();
        var Scores;
        (function (Scores) {
            Scores[Scores["HIGH_CARD"] = 0] = "HIGH_CARD";
            Scores[Scores["ONE_PAIR"] = 1] = "ONE_PAIR";
            Scores[Scores["TWO_PAIR"] = 2] = "TWO_PAIR";
            Scores[Scores["THREE_OK_A_KIND"] = 3] = "THREE_OK_A_KIND";
            Scores[Scores["STRAIGHT"] = 4] = "STRAIGHT";
            Scores[Scores["FLUSH"] = 5] = "FLUSH";
            Scores[Scores["FULL_HOUSE"] = 6] = "FULL_HOUSE";
            Scores[Scores["FOUR_OF_A_KIND"] = 7] = "FOUR_OF_A_KIND";
            Scores[Scores["STRAIGHT_FLUSH"] = 8] = "STRAIGHT_FLUSH";
            Scores[Scores["ROYAL_FLUSH"] = 9] = "ROYAL_FLUSH";
        })(Scores || (Scores = {}));
        for (var i = 0; i < cardSet.length; i++) {
            cardScores += cardSet[i].value;
            kicker.push(cardSet[i].value);
            for (var j = i + 1; j < cardSet.length; j++) {
                if (flush && cardSet[i].suit != cardSet[j].suit)
                    flush = false;
                if (cardSet[i].value === cardSet[j].value) {
                    if (threeOfKind === cardSet[j].value) {
                        fourOfKind = threeOfKind;
                        threeOfKind = 0;
                        score = Scores.FOUR_OF_A_KIND * 100 + fourOfKind;
                        break;
                    }
                    else if (twoPair === cardSet[j].value) {
                        threeOfKind = twoPair;
                        twoPair = 0;
                        score = Scores.FULL_HOUSE * 10000 + threeOfKind * 100 + onePair;
                        break;
                    }
                    else if (onePair === cardSet[j].value) {
                        if (twoPair != 0) {
                            threeOfKind = onePair;
                            onePair = 0;
                            score = Scores.FULL_HOUSE * 10000 + threeOfKind * 100 + onePair;
                            break;
                        }
                        else {
                            threeOfKind = onePair;
                            onePair = 0;
                            score = Scores.THREE_OK_A_KIND * 100 + threeOfKind;
                            break;
                        }
                    }
                    else if (onePair != 0) {
                        twoPair = cardSet[j].value;
                        twoPair > onePair
                            ? (score = Scores.TWO_PAIR * 10000 + twoPair * 100 + onePair)
                            : (score = Scores.TWO_PAIR * 10000 + onePair * 100 + twoPair);
                        break;
                    }
                    else {
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
        if (score === Scores.HIGH_CARD) {
            if (flush && cardScores === 60)
                score = Scores.ROYAL_FLUSH;
            else if ((cardScores % 5 === 0 && (kicker.top() - 2) * 5 === cardScores) ||
                (cardScores === 28 && kicker.top() === 14))
                flush ? (score = Scores.STRAIGHT_FLUSH) : (score = Scores.STRAIGHT);
            else if (flush)
                score = Scores.FLUSH;
            else
                stringScore = "0";
        }
        auxSet.add(fourOfKind);
        auxSet.add(threeOfKind);
        auxSet.add(twoPair);
        auxSet.add(onePair);
        var setArray = __spreadArrays(Array.from(auxSet));
        while (!kicker.empty()) {
            if (setArray[setArray.length - 1] === kicker.top())
                score = score * 100 + kicker.top();
            kicker.pop();
        }
        return (stringScore += score.toString());
    };
    Scorer.prototype._getAllSubsets = function (set) {
        var subset = [];
        var n = set.length;
        for (var i = 0; i < 1 << n; i++) {
            var tmpSet = [];
            for (var j = 0; j < n; j++) {
                if ((i & (1 << j)) > 0)
                    tmpSet.push(set[j]);
            }
            subset.push(tmpSet);
        }
        return subset;
    };
    Scorer.prototype._getSubsetBySize = function (set, size) {
        var newSet = [];
        for (var _i = 0, set_1 = set; _i < set_1.length; _i++) {
            var i = set_1[_i];
            if (i.length === size)
                newSet.push(i);
        }
        return newSet;
    };
    Scorer.prototype._scorePoker = function (cardSet) {
        if (cardSet.length < 5)
            throw new RangeError("must have at least 5 cards to use scorePoker function");
        else if (cardSet.length == 5)
            return this._scoreFiveCardPoker(cardSet);
        var highScore = "";
        var allSubsets = this._getAllSubsets(cardSet);
        var size5Subsets = this._getSubsetBySize(allSubsets, 5);
        for (var i = 0; i < size5Subsets.length; i++) {
            var tmp = this._scoreFiveCardPoker(size5Subsets[i]);
            if (tmp > highScore)
                highScore = tmp;
        }
        return highScore;
    };
    Scorer.assignHandScores = function (table) {
        var scorer = new Scorer();
        for (var i = 0; i < table.size(); i++) {
            var tmp = [];
            for (var j = 0; j < table.cards.size(); j++)
                tmp.push(table.cards.at(j));
            for (var j = 0; j < table.at(i).hand.size(); j++)
                tmp.push(table.at(i).hand.at(j));
            table.at(i).handScore = scorer._scorePoker(tmp);
        }
    };
    Scorer.compareHandScores = function (table) {
        var highScore = "";
        var winner = new Entity_1.default();
        for (var i = 0; i < table.size(); i++) {
            if (!table.at(i).fold && table.at(i).handScore > highScore) {
                winner = table.at(i);
                highScore = table.at(i).handScore;
            }
        }
        return winner;
    };
    return Scorer;
}());
exports.default = Scorer;
//# sourceMappingURL=Scorer.js.map