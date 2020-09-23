"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var OpponentLogic = (function () {
    function OpponentLogic() {
    }
    OpponentLogic.play = function (entity, table) {
        var tmp = 0;
        entity.score >= table.callAmount + 50 ? tmp++ : tmp--;
        if (table.callAmount > 20)
            tmp = tmp - (table.callAmount / 20);
        if (entity.hand.at(0).value === entity.hand.at(1).value)
            tmp++;
        if (!table.cards.empty()) {
            for (var i = 0; i < 2; i++)
                for (var j = 0; j < table.cards.size(); j++)
                    if (entity.cardAt(i).value === table.cards.at(j).value)
                        tmp = tmp + 2;
        }
        if (tmp < 0) {
            table.callAmount > 100 ? Math.trunc(Math.random() * Math.floor(4)) === 0 ? tmp = 0 : tmp = -1
                : Math.trunc(Math.random() * Math.floor(2)) === 0 ? tmp = -1 : tmp = 0;
        }
        else if (tmp == 0) {
            Math.trunc(Math.random() * Math.floor(2)) === 0 ? tmp = 10 : tmp = 0;
        }
        else if (tmp > 0) {
            Math.trunc(Math.random() * Math.floor(2)) === 0 ? tmp = 0 : tmp = tmp * 20;
        }
        if (tmp > entity.score)
            tmp = entity.score;
        return tmp;
    };
    return OpponentLogic;
}());
exports.default = OpponentLogic;
//# sourceMappingURL=OpponentLogic.js.map