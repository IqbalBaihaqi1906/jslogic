// 1. Even character
// Buatlah sebuah fungsi yang dapat mengembalikan ( return ) kumpulan karakter di urutan genap.
// fungsi ini hanya dapat menerima argument tipe data string, dan mengembalikan tipe data string
// contoh test case
// "pratama" -> return "rtm"
// "hellohello" -> return "elhlo"
// "hello hello hello" -> return "el el el"
// "" -> return ""
// 123434 -> return "error input bukan string"
function hurufGenap(kata){
    if (typeof kata != "string"){       //jika bukan string maka error
        return "Input bukan string"
    } else {
        let genap = ""
        for (let i = 0; i < kata.length; i++){      
            if (i % 2 == 1){            //kalo nomer indexnya ganjil masukin ke genap
                genap += kata[i]
            }
        }
        return genap;
    }
}
// console.log(hurufGenap("pratama"));


// 2. Count Word
// Buatlah sebuah fungsi yang dapat mengembalikan ( return ) jumlah kata yang ada di dalam kalimat,
// fungsi ini hanya dapat menerima argument tipe data string, dan mengembalikan tipe data number
// contoh test case
// "pratama" -> return 1
// "hellohello" -> return 1
// "hello hello hello" -> return 3
// "" -> return 0
// "hore yeay ahaaa" -> return 3
// 123434 -> return "error input bukan string"

function jumlahKata(kata2){
    if (typeof kata2 != "string"){      //jika bukan string maka error
        return "Input bukan string"
    } else {
        let kata = 1
        if (kata2 == ""){               //jika string gada isi return 0
            return 0
        } else {
            for (let i = 0; i < kata2.length ; i++){    //kalo argument punya spasi bakal ditambah 1
                if (kata2[i] == " "){
                    kata += 1
                }
        }
    }
        return kata 
    }
}
// console.log(jumlahKata("hai  hai"));

// 3. Count Vowel And Consonant
// Buatlah sebuah fungsi yang dapat mengembalikan ( return ) jumlah huruf karakter vokal dan karakter konsonan ( huruf mati ),
// fungsi ini hanya dapat menerima argument tipe data string, dan mengembalikan tipe data string
// contoh test case
// "pratama" -> return "jumlah vokal : 3 , jumlah konsonan : 4"
// "hellohello" -> return "jumlah vokal : 4, jumlah konsonan : 6"
// "" -> return "jumlah vokal : 0 , jumlah konsonan 0"
// 123434 -> return "error input bukan string"

function vowelArr(kata3){
    let jumlahVokal = 0                 //set variabel jumlahVokal
    let jumlahKonsonan = 0              //set variabel jumlahKonsonan
    if (typeof kata3 != "string"){      //jika bukan string maka error
        return "Input bukan string"
    } else {           
        kata3 = kata3.toLowerCase()
        for (i = 0; i < kata3.length; i++){ //kalo hurufnya vokal, tambah 1 ke jumlahVokal
            if (kata3[i] == "a" ||
                kata3[i] == "b" ||
                kata3[i] == "c" ||
                kata3[i] == "d" ||
                kata3[i] == "e" ){           
                jumlahVokal+=1
            } else {                        //huruf selain vokal, tambah 1 ke jumlah konsonan
                jumlahKonsonan+=1
        }
    }
    }
    return "Jumlah vokal adalah " + jumlahVokal + " dan jumlah konsonan adalah " + jumlahKonsonan
}
// console.log(vowelArr("Iqbal "));
// 4. reverse word
// buatlah sebuah fungsi yang dapat membalikkan tipe data string.
// fungsi ini hanya dapat menerima tipe data string, dan mengembalikan hasil dengan tipe data string juga
// contoh test case
// "hello" -> return "olleh"
// "world!" -> return "!dlrow"
// "asikasikasik" -> return "kisakisakisa"
// "" -> return ""

function reverseArr(kata4){  
    let balik = "";         //set variabel string kosong
    if (typeof kata4 != "string"){      //jika bukan string maka error
        return "Input bukan string"
    } else {
        for (let i = kata4.length - 1; i >= 0; i--){              //set i sesuai dengan nomer index, berhenti jika i>=0, decrement
            balik += kata4[i];                                    //setiap index terakhir tambahkan ke variabel balik
         }     
        return balik;
    }
}
// console.log(reverseArr("kasur rusak"));


// 5. palindrome
// Buatlah sebuah fungsi yang dapat mengecek apakah kata yang dimasukkan adalah palindrome atau tidak
// fungsi ini hanya dapat menerima argument tipe data string dengan minimal 2 karakter, dan mengembalikan tipe data bool ( kembalikan true jika kata tersebut palindrome, kembalikan false jika kata tersebut tidak palindrome atau karakter yang dimasukkan kurang dari 2 karakter )
// apa itu palindrome -> https://id.wikipedia.org/wiki/Palindrom

// contoh test case
// "katak" -> return true
// "kasur" -> return false
// "h" -> return false
// "kasur rusak" -> return true
// "erererrerere" -> return true
function palindrome(kata5){
    if (typeof kata5 != "string"){      //jika bukan string maka error
        return "Input bukan string"
    } else {
        if (kata5.length < 2) return false
        if (reverseArr(kata5) === kata5) return true
        return false
        
    }
}
// console.log(palindrome("katak"));



// 6. Exchange coin
// buatlah sebuah fungsi yang dapat mengecek pecahan dari input kumpulan coin, pecahan yang tersedia adalah 1000, 500, 200, 100, 50, 20, 10, 5, dan 1.
// fungsi ini hanya menerima argumen berupa tipe data number dan mengembalikan tipe data string

// Ilustrasi :
// input 1752
// return "1000, 500, 200, 50, 1, 1"

// input 879
// return "500, 200, 100, 50, 20, 5, 1, 1, 1, 1"

// contoh test case
// 1752 -> return "1000, 500, 200, 50, 1, 1"
// 879 -> return "500, 200, 100, 50, 20, 5, 1, 1, 1, 1"
// 50 -> return "50"
// 0 -> return ""
// 5000 -> return "1000, 1000, 1000, 1000, 1000"

function exchange(num){
    if (typeof num != "number") return "Input bukan number"
    let pecahan = "";
    while(num > 0){
        if (num - 1000 >= 0){
            pecahan += "1000, "
            num -= 1000
        } else if (num - 500 >= 0){
            pecahan += "500, "
            num -= 500
        } else if (num - 200 >= 0){
            pecahan += "200, "
            num -= 200
        } else if (num - 100 >= 0){
            pecahan += "100, "
            num -= 100
        } else if (num - 50 >= 0){
            pecahan += "50, "
            num -= 50
        } else if (num - 20 >= 0){
            pecahan += "20, "
            num -= 20
        } else if (num - 10 >= 0){
            pecahan += "10, "
            num -= 10
        } else if (num - 5 >= 0){
            pecahan += "5, "
            num -= 5
        } else if (num - 1 >= 0){
            pecahan += "1, "
            num -= 1
        }
    }
    return pecahan
}

console.log(exchange(1534));



// 7. Asteriks loop
// buatlah sebuah fungsi yang dapat menampilkan jumlah asterik sesuai perulangan yang dimasukkan, seperti ilustrasi berikut :

// input 2

// *
// **

// input 4

// *
// **
// ***
// ****
// fungsi ini hanya dapat menerima argumen tipe data number tanpa mengembalikan data, cukup menampilkan hasilnya saja menggunakan console.log

// contoh test case
// input 3

// *
// **
// ***

// input 5

// *
// **
// ***
// ****
// *****

// input 0


// input 10

// *
// **
// ***
// ****
// *****
// ******
// *******
// ********
// *********
// **********

function bintang(inp){
    let tambah = "";                        //siapkan variabel kosong
    for(let i = 0; i < inp; i++){           //loop i sesuai dengan jumlah yang diberi
        for (let k = 0;k <= i; k++){        //tiap baris akan menambahkan * sesuai dengan jumlah i i
            tambah += "*"
        }
        tambah += "\n"                      //setelah menambah "*" buat garis baru
    }
    return tambah;

}



// 8. Pyramid loop
// buatlah sebuah fungsi yang dapat menampilkan gambar segitiga pyramid dengan tinggi sesuai argumen yang dimasukkan, seperti ilustrasi berikut :

// input 3
 
//   *     | tinggi 3
//  ***    |
// *****   |

// input 5

//     *       | tinggi 5
//    ***      |
//   *****     |
//  *******    |
// *********   |
// fungsi ini hanya dapat menerima argumen tipe data number tanpa mengembalikan data, cukup menampilkan hasilnya saja menggunakan console.log

// contoh test case
// input 3 :

//   *  
//  ***
// *****

// input 10 :

//          *         
//         ***
//        *****
//       *******
//      *********
//     ***********
//    *************
//   ***************
//  *****************
// *******************


function pyramid(num){
    let star = "";
    for (let i = 1; i <= num; i++) {        //membuat baris
        for (let j = num; j > i; j--) {
            star += " ";
        }
        for (let k = 0; k < i * 2 - 1; k++) {
            star += "*";
        }
        star += "\n"
    }
    return star;
}

// console.log(pyramid(5));
