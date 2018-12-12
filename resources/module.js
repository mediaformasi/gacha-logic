/**
 * Mencari item dengan berat yang telah ditetapkan kemudian membongkar
 * isi array object untuk mencetak output yakni drop item/gacha character.
 * @param {Array<Object>} card_data - Data kartu di dalam database
 * @param {Number} r_rate - Besar persentase untuk mendapatkan kartu R
 * @param {Number} sr_rate - Besar persentase untuk mendapatkan kartu SR
 * @param {Number} ssr_rate - Besar persentase untuk mendapatkan kartu SSR
 * @param {Number} event_rate - Besar persentase untuk mendapatkan kartu Event
 * @param {Boolean} limit - Isi variabel ini dengan true apabila ingin roll sebanyak 10x.
 * Sebaliknya, isi dengan false apabila ingin roll sebanyak 1x.
 */
function searchBasedWeight(card_data, r_rate, sr_rate, ssr_rate, event_rate, limit) {
    let weight = r_rate + sr_rate + ssr_rate + event_rate;
    let getItem = new Array();

    this.r_rate = r_rate * 100;
    this.sr_rate = sr_rate * 100;
    this.ssr_rate = ssr_rate * 100;
    this.event_rate = event_rate * 100;
    
    let R = r_rate;
    let SR = R + sr_rate;
    let SSR = SR + ssr_rate;
    let EVENT = SSR + event_rate;

    const reloadNumber = (length) => Math.floor(Math.random() * length);
    const whenEvent = () => card_data.filter(o => o.on_event === true);
    const whenRarity = (symbol_rarity) => card_data.filter(o => o.rarity === symbol_rarity);

    /**
     * Mengacak kartu berdasarkan logika weighted tadi. Untuk variabelnya,
     * kita gunakan tetapan di atas aja, tidak perlu mengindex awal lagi.
     * @param {Number} batas 
     */
    const rollItUp = (batas) => {
        for (let index = 1; index <= batas; index++) {
            let res, randNumber = Math.floor(Math.random() * parseFloat(weight));
    
            if (SSR < randNumber && randNumber <= EVENT) {
                res = whenEvent();
                getItem.push(res);
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

    if (limit === false) {
        rollItUp(1);
    }
    else if (limit === true) {
        let res = whenRarity("SR");
        getItem.push(res[reloadNumber(res.length)]);
        rollItUp(9);
    }
    return getItem;
}

module.exports = searchBasedWeight;