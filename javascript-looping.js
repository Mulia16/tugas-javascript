// 1
for (let i=1; i<=100; i++) {
    document.write(`<p>User ke - ${i}</p>`);
}

// 2
for (let i=0; i<20; i+=2)  {
    console.log(i);
}

// 3
for (let i=0; i<=20; i++) {
    if (i % 2 == 1) {
        console.log(`${i} - Ganjil`);
    } else {
        console.log(`${i} - Genap`);
    }
}

// 4
var count = 0;
do {
    var isOK = confirm("Apakah anda mau mengulang?");
    if (isOK == false) {
        console.log("Perulangan telah dilakukan sebanyak " + count);
    } else {
        count++;
    }
} while(isOK == true);

// 5
while (true) {
    let answer = prompt("Sebutkan kepanjangan dari nama IB (Impact Byte)?");
    if (answer == "Impact Byte") {
        alert("Selamat jawaban kamu benar");
        break;
    }
}
