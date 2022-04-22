"use strict";
/**
 * WA43&44 sample1 typescript basic EX1
 *
 * @author Shinzo SAITO
 */
exports.__esModule = true;
var numes = [];
var denomis = [];
for (var i = 0; i <= 4; i++) {
    numes[i] = Math.round(Math.random() * 10);
    denomis[i] = Math.round(Math.random() * 10);
}
for (var _i = 0, denomis_1 = denomis; _i < denomis_1.length; _i++) {
    var denomi = denomis_1[_i];
    console.log("\u5206\u6BCD\u306E\u5024: ".concat(denomi));
    if (denomi == 0) {
        console.log("分母が0なので処理を中止します");
    }
    for (var _a = 0, numes_1 = numes; _a < numes_1.length; _a++) {
        var nume = numes_1[_a];
        console.log("--\u5206\u5B50\u306E\u5024: ".concat(nume));
        if (nume == 0) {
            console.log("分子が0なので次の分子にスキップします");
            continue;
        }
        var ans = nume / denomi;
        console.log("->\u5206\u5B50\u5024: ".concat(ans));
    }
}
