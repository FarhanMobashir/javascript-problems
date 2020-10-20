let score = [210, 198, 188, 173, 240, 247, 250, 252, 189, 224, 204, 281, 187, 227, 244, 224, 216, 210, 261, 196, 252, 221, 181, 276, 174, 254, 227, 209, 240, 219]
let A = 0;
let B = 0;
let C = 0;
let D = 0;
let precentage = [];
function scores() {
    for (let i = 0; i < score.length; i++) {

        precentage.push(Math.floor(score[i] / 3));

    }
    for (let j = 0; j < precentage.length; j++) {
        if (precentage[j] >= 85) {
            A += 1;
        } else if (precentage[j] >= 70 && precentage[j] < 85) {
            B += 1;
        } else if (precentage[j] >= 60 && precentage[j] < 70) {
            C += 1;
        } else if (precentage[j] < 60) {
            D += 1;
        }
    }

    console.log(precentage);
    console.log(A);
    console.log(B);
    console.log(C);
    console.log(D);

}

scores(score);