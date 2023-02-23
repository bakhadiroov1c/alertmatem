let name = prompt('Ismizni kiriting', 'Abdusamat');
let answerTrue = 0;
let count = +prompt(name + ' nechta savol beraylik?', 3);

let sum = [];

if (isNaN(count)) {
    alert('Siz bu joyda son kiritmadiz');
    location.reload();
} else {
    for (let i = 1; i <= count; i++) {
        let num1 = Math.floor(1 + Math.random() * 10);
        let num2 = Math.floor(1 + Math.random() * 10);
        let answer = +prompt(`${i}-savol: ${num1} * ${num2} = ?`);

        if (answer == num1 * num2) {
            document.write(`<strong class = 'trueAnswer'>${i}-savol:${num1} * ${num2} = ${answer}  To'g'ri </strong> <br>`);
            answerTrue++;
            sum.push(`${i}-savol:${num1} * ${num2} = ${answer}  To'g'ri`);
        } else {
            document.write(`<strong class = 'falseAnswer'>${i}-savol: ${num1} * ${num2} = ${answer}  Xato! <strong class = 'true'>(To'g'ri javob: ${num1 * num2})</strong> </strong> <br>`);
            sum.push(`${i}-savol:${i}-savol: ${num1} * ${num2} = ${answer}  xato (${num1*num2})`);
        }
    }

    if (answerTrue == count && answerTrue > 0) {
        document.write(`<p class = 'true'> ${name}! ${count} ta savoldan barcha javoblaringiz to'g'ri</p>`);
        sendtelegram (`${name}! ${count} ta savoldan barcha javoblari to'g'ri ${sum}`);
    } else if (answerTrue <=0 && count > 0) {
        document.write(`<p class = 'false'>${name}! ${count} ta savoldan barcha javoblaringiz noto'g'ri</p>`);
        sendtelegram (`${name}! ${count} ta savoldan barchasi noto'g'ri`);
    }
    else if (count > 0) {
        document.write(`<p class = 'true'>${name}! siz bajargan ${count} ta savoldan </p>`);
        document.write(`<p class = 'true'>To'g'ri javoblar soni: ${answerTrue} ta </p>`);
        document.write(`<p class = 'false'>Noto'g'ri javoblar soni: ${count - answerTrue} ta </p>`);
        sendtelegram (`${name}! ${count} ta savoldan ${answerTrue} ta to'g'ri, ${count - answerTrue} ta xato ${sum}`);
    } else {
        location.reload();
    }
}
function sendtelegram (message) {
let telegram_bot_id = "5712248420:AAEcZurT8fgREB-BHRSARju0-P_052VUygg";
let chat_id = 1754400979;
    let settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": 1754400979,
            "text": message
        })
    };
    $.ajax(settings).done(function(response) {
        console.log(response);
    });
};


