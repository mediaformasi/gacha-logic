//             WARNING!            //
// ANDA MEMASUKI AREA FILE SYSTEM! //
//             WARNING!            //

// Area ini disarankan untuk tidak dimasuki apabila
// keahlian anda dalam bermain module File System dan
// Path masih kurang, akan tetapi tidak ada salahnya
// dapat belajar dikit soalnya kode ini bukan murni dari saya.

// Load semua package yang dianggap perlu
const path = require('path');
const fs = require('fs');

/**
 * <<CUSTOM CODE DISINI! TAMBAHKAN SBELUM DEFAULT!>>
 * 
 * Mendeteksi franchise dari patokan awal ID
 * @param {String} code - Patokan awal ID
 */
function findFranchise(code) {
    var res;
    switch (code) {
        case "IMCG":
            res = "THE IDOLM@STER: Cinderella Girls";
            break;
        case "LLSP":
            res = "Love Live! School Idol Project";
            break;
        case "IMML":
            res = "THE IDOLM@STER: Million Live!";
            break;
        case "LLSS":
            res = "Love Live! Sunshine!!";
            break;
        default:
            res = null;
    }
    return res;
}

/**
 * Mencari seluruh isi file JSON dan menghimpun keseluruhan isi file JSON menjadi kesatuan
 * @param {String} startPath - Alamat filenya
 * @param {String} filter - Ekstensi filenya
 */
function loadJSON(startPath, filter) {
    // Bertanya apakah lokasi yang kita berikan ada atau tak ada.
    if (!fs.existsSync(startPath)) {
        console.log("no dir ", startPath);
        return process.exit(0);
    }

    // Mencari filenya untuk dimasukkan kedalam daftar file, dengan catatan
    // apabila ada folder lagi di dalamnya, maka wajib masuk kedalamnya lagi
    // sehingga ini mirip dengan tree.
    var fileList = new Array();
    var files = fs.readdirSync(startPath);
    for (var i = 0; i < files.length; i++) {
        var filename = path.join(startPath, files[i]);
        var stat = fs.lstatSync(filename);
        if (stat.isDirectory()) {
            loadJSON(filename, filter); //recurse
        }
        else if (filename.indexOf(filter) >= 0) {
            fileList.push(filename);
        };
    };

    // Menggunakan fungsi require tiap file JSON yang berhasil dibaca diatas tadi
    // untuk mengambil semua datanya tanpa terkecuali.
    let allJSONFile = new Array();
    for (let i = 0; i < fileList.length; i++) {
        let callJSON = require(fileList[i]).slice(0);
        for (let i2 = 0; i2 < callJSON.length; i2++) {
            allJSONFile.push({
                "id": callJSON[i2].id,
                "name": callJSON[i2].name,
                "rarity": callJSON[i2].rarity,
                "costume": callJSON[i2].costume,
                "franchise": findFranchise(callJSON[i2].id.substring(0, 4)),
                "on_event": callJSON[i2].on_event
            });
            callJSON.splice(i2, 1);
        };
    };

    return allJSONFile;
};

module.exports = loadJSON;