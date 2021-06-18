// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification



// for details on configuring this project to bundle and minify static web assets.
function R()
{
        let num = parseInt(document.querySelector("#TextBoxInputString").value)
    bin = "";
    let hex =num;
    
    do {
        bin += (num % 2);
        num /= 2;
        num = parseInt(num);
        
    } while (num > 0);
   
    document.querySelector("#TextBoxPostString").value = reverseString(bin);
    document.querySelector("#TextBoxAnswerString").value = decimalToHexString(hex);

}

function reverseString(str) {
    return str.split("").reverse().join("");
}

function decimalToHexString(number) {
    if (number < 0) {
        number = 0xFFFFFFFF + number + 1;
    }

    return number.toString(16).toUpperCase();
}


var cypher = (function () {
    var cypher = {}, register = function (e) { return e === e.toUpperCase(); };
    cypher.language = {
        ru: "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ".split(""),
        en: "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
    }

    cypher.vizhener = {
        square: [],
        genSqViz: function (lang) {
            var l = cypher.language[lang];
            for (var i = 0; i < l.length; i++) {
                this.square[i] = l.slice(i).concat(l.slice(0, i));
            }
        },
        encryption: function (lang, text, key) {
         
            this.genSqViz(lang);

            var sText = text;

            text = text.toUpperCase();
            key = key.toUpperCase();

            var s = "", l = cypher.language[lang];
            for (var i = 0; i < text.length; i++) {
                s += this.square[l.indexOf(text[i])][l.indexOf(key[i])];
            }

            return s.split("").map(function (e, i, a) { return register(sText[i]) ? e : e.toLowerCase(); }).join("");
        },
        decryption: function (lang, key, cipher) {
    
            this.genSqViz(lang);

            var sCipher = cipher;

            cipher = cipher.toUpperCase();
            key = key.toUpperCase();
            var s = "", l = cypher.language[lang];
            for (var i = 0; i < cipher.length; i++) {
                var row = l.indexOf(key[i])
                coll = this.square[row].indexOf(cipher[i]);
                s += l[coll];
            }
            return s.split("").map(function (e, i, a) { return register(sCipher[i]) ? e : e.toLowerCase(); }).join("");
        }
        
    };

    return cypher;
}());




function Crypt() {
    
    let text = document.querySelector("#TextBoxInputText").value;
    let key = document.querySelector("#TextBoxKeyText").value;
    if (/[a-zA-Z]/.test(text) && /[a-zA-Z]/.test(key)) {
        // тут есть англ буквы
        let alphabet = "abcdefghijklmnopqrstuvwxyz";
        var table = [alphabet.length, alphabet.length];

        for (let i = 0; i < alphabet.length; i++) {
            for (let j = 0; j < alphabet.length; j++) {
                let shift = (i + j) % alphabet.length;

                table[i, j] = alphabet[shift];
            }
        }
        let param1 = 1, param2 = 0, perem = 1;
        let result = "";
        //преобразовать в строчные буквы
        
        text = text.toLowerCase();
        key = key.toLowerCase();
        for (let i = 0; i < text.length; i++) {


            for (let row = 0; row < alphabet.length; row++) {
                if (table[row, 0] == text[i]) {
                    param1 = row;
                    break;
                }
            }

            for (let column = 0; column < alphabet.length; column++) {
                if (table[0, column] == key[perem - 1]) {
                    param2 = column;
                    break;
                }
            }
            result += table[param1, param2];
            if (perem % key.length == 0) {
                perem = 0;
            }
            perem++;
        }
       
        document.querySelector("#TextBoxPostText").value = cypher.vizhener.encryption("en", text, result);
    }
    else if (/[а-яА-ЯЁё]/.test(text) && /[а-яА-ЯЁё]/.test(key))
    {
        let alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
        var table = [alphabet.length, alphabet.length];

        for (let i = 0; i < alphabet.length; i++) {
            for (let j = 0; j < alphabet.length; j++) {
                let shift = (i + j) % alphabet.length;

                table[i, j] = alphabet[shift];
            }
        }
        let param1 = 1, param2 = 0, perem = 1;
        let result = "";
        //преобразовать в строчные буквы
        text = text.toLowerCase();
        key = key.toLowerCase();
        for (let i = 0; i < text.length; i++) {


            for (let row = 0; row < alphabet.length; row++) {
                if (table[row, 0] == text[i]) {
                    param1 = row;
                    break;
                }
            }

            for (let column = 0; column < alphabet.length; column++) {
                if (table[0, column] == key[perem - 1]) {
                    param2 = column;
                    break;
                }
            }
            result += table[param1, param2];
            if (perem % key.length == 0) {
                perem = 0;
            }
            perem++;
        }


        
        document.querySelector("#TextBoxPostText").value = cypher.vizhener.encryption("ru", text, result);
    }
    else {
        // тут нет англ букв
        alert("Некорректный ввод данных");
    }


       
}
function deCrypt() {
      let text = document.querySelector("#TextBoxInputText").value;
    let key = document.querySelector("#TextBoxKeyText").value;
    if (/[a-zA-Z]/.test(text) && /[a-zA-Z]/.test(key)) {
        // тут есть англ буквы
        let alphabet = "abcdefghijklmnopqrstuvwxyz";
        var table = [alphabet.length, alphabet.length];

        for (let i = 0; i < alphabet.length; i++) {
            for (let j = 0; j < alphabet.length; j++) {
                let shift = (i + j) % alphabet.length;

                table[i, j] = alphabet[shift];
            }
        }
        let param1 = 1, param2 = 0, perem = 1;
        let result = "";
        //преобразовать в строчные буквы
        text = text.toLowerCase();
        key = key.toLowerCase();
        for (let i = 0; i < text.length; i++) {


            for (let row = 0; row < alphabet.length; row++) {
                if (table[row, 0] == text[i]) {
                    param1 = row;
                    break;
                }
            }

            for (let column = 0; column < alphabet.length; column++) {
                if (table[0, column] == key[perem - 1]) {
                    param2 = column;
                    break;
                }
            }
            result += table[param1, param2];
            if (perem % key.length == 0) {
                perem = 0;
            }
            perem++;
        }


        
        document.querySelector("#TextBoxPostText").value = cypher.vizhener.decryption("en", result, text);
    }
    else if (/[а-яА-ЯЁё]/.test(text) && /[а-яА-ЯЁё]/.test(key))
    {
        let alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
        var table = [alphabet.length, alphabet.length];

        for (let i = 0; i < alphabet.length; i++) {
            for (let j = 0; j < alphabet.length; j++) {
                let shift = (i + j) % alphabet.length;

                table[i, j] = alphabet[shift];
            }
        }
        let param1 = 1, param2 = 0, perem = 1;
        let result = "";
        //преобразовать в строчные буквы
        text = text.toLowerCase();
        key = key.toLowerCase();
        for (let i = 0; i < text.length; i++) {


            for (let row = 0; row < alphabet.length; row++) {
                if (table[row, 0] == text[i]) {
                    param1 = row;
                    break;
                }
            }

            for (let column = 0; column < alphabet.length; column++) {
                if (table[0, column] == key[perem - 1]) {
                    param2 = column;
                    break;
                }
            }
            result += table[param1, param2];
            if (perem % key.length == 0) {
                perem = 0;
            }
            perem++;
        }

       
        document.querySelector("#TextBoxPostText").value = cypher.vizhener.decryption("ru", result,text);
    }
    else {
        // тут нет англ букв
        alert("Некорректный ввод данных");
    }

}


