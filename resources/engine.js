/**
 * Mencari item dengan berat yang telah ditetapkan kemudian membongkar
 * isi array object untuk mencetak output yakni drop item/gacha character.
 * @param {Array<Object>} card_data - Data kartu di dalam database
 * @param {Number} r_rate - Besar persentase untuk mendapatkan kartu R
 * @param {Number} sr_rate - Besar persentase untuk mendapatkan kartu SR
 * @param {Number} ssr_rate - Besar persentase untuk mendapatkan kartu SSR
 * @param {Number} event_rate - Besar persentase untuk mendapatkan kartu Event
 * @param {Boolean} one_or_ten - Isi variabel ini dengan true apabila ingin roll sebanyak 10x.
 * Sebaliknya, isi dengan false apabila ingin roll sebanyak 1x.
 */
function searchBasedWeight(card_data, r_rate, sr_rate, ssr_rate, event_rate, one_or_ten) {

    // Logika dasarnya begini:
    // Pertama, jumlahkan semua rate untuk membuat rentang rate.
    // Kedua, cari range untuk tiap rate, caranya ya rate_sebelumnya + rate_yang_dikerja.
    // Ketiga, kita acak angkanya berdasarkan rentang ratenya.
    // Keempat, setelah diacak, cocokkan dengan rentang ratenya.

    // Mencari rentang rate
    let weight = r_rate + sr_rate + ssr_rate + event_rate;
    let getItem = new Array();

    // Karena settingan pertama kita adalah persen, kita kalikan 100 biar hitungannya
    // lebih kapitalis karena rentangnya terlalu besar.
    this.r_rate *= 100;
    this.sr_rate *= 100;
    this.ssr_rate *= 100;
    this.event_rate *= 100;
    
    // Nah kita tentukan range tiap rate.
    let R = r_rate;
    let SR = R + sr_rate;
    let SSR = SR + ssr_rate;
    let EVENT = SSR + event_rate;

    // Beberapa fungsi yang mungkin akan berguna.
    // Pintasan untuk mengacak angka dari panjang resources.
    const reloadNumber = (length) => Math.floor(Math.random() * length);
    // Pintasan untuk mencari kartu EVENT.
    const whenEvent = () => card_data.filter(o => o.on_event === true);
    // Pintasan untuk mencari kartu sesuai tingkat Rarenya.
    const whenRarity = (symbol_rarity) => card_data.filter(o => o.rarity === symbol_rarity);

    /**
     * Mengacak kartu berdasarkan logika weighted tadi. Untuk variabelnya,
     * kita gunakan tetapan di atas aja, tidak perlu mengindex awal lagi.
     * @param {Number} batas 
     */
    const rollItUp = (batas) => {
        for (let index = 1; index <= batas; index++) {

            // Tanpa saya jelaskan, anda pasti mengerti.

            let res, randNumber = Math.floor(Math.random() * parseFloat(weight));
    
            if (SSR < randNumber && randNumber <= EVENT) {
                res = whenEvent();
                getItem.push(res[reloadNumber(res.length)]);
            }
            else if (SR < randNumber && randNumber <= SSR) {
                res = whenRarity("SSR");
                getItem.push(res[reloadNumber(res.length)]);
            }
            else if (R < randNumber && randNumber <= SR) {
                res = whenRarity("SR");
                getItem.push(res[reloadNumber(res.length)]);
            }
            else if (randNumber <= R) {
                res = whenRarity("R");
                getItem.push(res[reloadNumber(res.length)]);
            }
        }
    }
    
    // Saya tak perlu jelaskan ini, sudah cukup jelas.
    if (one_or_ten === false) {
        rollItUp(1);
    }
    else if (one_or_ten === true) {
        let res = whenRarity("SR");
        getItem.push(res[reloadNumber(res.length)]);
        rollItUp(9);
    }
    
    // Lihat pembahasan sebelumnya tentang bot shitposter di twitter. Logikanya mirip, 
    // cuma karena himpunannya masih semu maka kita menggunakan WHILE loop.
    // https://mediaformasi.com/2018/12/fokus-mengungkap-rahasia-salah-satu-bot-shitposter-di-twitter/
    let shuffledArray = new Array()
    let stop = false;
    while (stop === false) {
        if (getItem.length < 1) stop = true;
        else {
            var index = Math.floor(Math.random() * getItem.length);
            var item = getItem[index];
            getItem.splice(index, 1);
            shuffledArray.push(item);
            stop = false;
        }
    }
    return shuffledArray;
}

module.exports = searchBasedWeight;