// Функція "Діалог з користувачем"
function checkBookingDiscount() {
    let wantDiscount = confirm("Бажаєте перевірити доступність знижки на тривале проживання?");
    
    if (wantDiscount) {
        let nights = "";
        // Цикл while питає, поки користувач не введе коректне число ночей
        while (!nights || isNaN(nights) || nights <= 0) {
            nights = prompt("Введіть кількість ночей для бронювання (число):", "7");
        }
        
        if (nights >= 7) {
            alert(`Чудово! На бронювання тривалістю ${nights} ночей діє знижка 15%.`);
        } else {
            alert(`На жаль, знижка діє лише від 7 ночей. Ви обрали ${nights} ночей. Бажаєте подовжити візит?`);
        }
    } else {
        alert("Добре, чекаємо на Вас у нашій мережі готелів!");
    }
}

function reserveBessarabiaRoom(){
    let wantReserve = confirm("Бажаєте замовити кімнату?");

    if (wantReserve) {
        let number = "";

        // Цикл while питає, поки користувач не введе свій телефонний номер
        while (!number || isNaN(number)) {
            number = prompt("Введіть свій номер і наш менеджер зателефонує Вам протягом 5 хвилин!");
        }
        
        alert("Дякуємо за заповнення форми зворотнього зв'язку. Наш менеджер зв'яжеться з Вами за лічені хвилини!");
    } else {
        alert("Добре, чекаємо на Вас у нашому готелі!");
    }
}

function reserveIzmailRoom(){
    let reserveError = alert("Дякуємо, що обрали наш готель! Наразі форма для зворотнього зв'язку відсутня. Будь-ласка, зверніться до нашого менеджера за телефонним номером +380 95 123 45 67");
}

// Функція виводу інформації про розробника
function showDeveloper(lastName, firstName, position = "Головний адміністратор сайту") {
    alert(`Технічна підтримка:\nПрізвище: ${lastName}\nІм'я: ${firstName}\nПосада: ${position}`);
}

// Функція порівняння двох рядків
function compareGuestNames() {
    let name1 = prompt("Введіть прізвище першого гостя (наприклад, 'Шевченко'):", "");
    let name2 = prompt("Введіть прізвище другого гостя (наприклад, 'Коваленко'):", "");

    if (name1 && name2) {
        let largerName = (name1 > name2) ? name1 : name2;
        alert(`З двох прізвищ '${name1}' та '${name2}', більшим є:\n${largerName}`);
    }
}

// Зміна фону сторінки на нічний на 30 секунд через document
function toggleNightMode() {
    // Зберігаємо старі значення
    let oldBg = document.body.style.backgroundColor;
    let oldColor = document.body.style.color;
    
    // Встановлюємо нічний фон
    document.body.style.backgroundColor = "#1a252f";
    document.body.style.color = "#ecf0f1";
    
    // Знаходимо всі заголовки та посилання (querySelectorAll), щоб змінити їх колір для читабельності
    let headings = document.querySelectorAll("h1, h2, h3");
    let links = document.querySelectorAll("a");

    headings.forEach(h => h.style.color = "#f1c40f");
    links.forEach(a => a.style.color = "#34dbeb");

    alert("Нічний режим активовано на 30 секунд. Кольори змінено для контрасту.");

    // Повертаємо все назад через 30 секунд
    setTimeout(() => {
        document.body.style.backgroundColor = oldBg;
        document.body.style.color = oldColor;
        
        // Знімаємо інлайн-стилі з заголовків та посилань, щоб повернути CSS-дизайн
        headings.forEach(h => h.style.color = "");
        links.forEach(a => a.style.color = "");
    }, 30000); 
}

// Перенаправлення на іншу сторінку через об'єкт location
function goToCatalog() {
    if (confirm("Бажаєте перейти до вибору номерів у Каталозі?")) {
        location.href = "catalog.html";
    }
}

// Демонстрація роботи з DOM у вигляді завантаження "Гарячих пропозицій"
function fetchHotDeals() {
    let welcomeText = document.getElementById("welcome-text");
    let listItems = document.querySelectorAll("ul > li"); 

    let originalText = welcomeText.textContent;
    alert(`Завантажуємо персональні пропозиції!`);

    welcomeText.innerHTML = `<span style="color: #c0392b; font-size: 1.2em;">🔥 Гарячий сезон у розпалі!</span><br> <em>${originalText}</em>`;

    // Створення елементів createElement, createTextNode та додаємо їх до сторінки, використовуючи append
    let dealBox = document.createElement('div');
    dealBox.style.backgroundColor = "#ffebcd";
    dealBox.style.padding = "15px";
    dealBox.style.border = "2px dashed #d35400";
    dealBox.style.marginTop = "15px";
    dealBox.style.borderRadius = "8px";
    
    let textNode = document.createTextNode("Бронюйте номер Люкс Панорамний сьогодні та отримайте безкоштовний трансфер!");
    dealBox.append(textNode); 

    // Вставка після елемента (after)
    welcomeText.after(dealBox);

    // Вставка на самий початок body (prepend)
    let topNotice = document.createElement('div');
    topNotice.innerHTML = "<h3 style='background-color: #e74c3c; color: white; padding: 10px; margin:0;'>⏳ Акція діє лише 24 години!</h3>";
    document.body.prepend(topNotice);

    // Читання outerHTML та заміна елемента (replaceWith)
    let floatBox = document.querySelector(".floating-box");
    if (floatBox) {
        console.log("Замінено блок: " + floatBox.outerHTML);
        
        let newFloat = document.createElement('div');
        newFloat.className = "floating-box";
        newFloat.style.backgroundColor = "#e74c3c";
        newFloat.style.color = "white";
        newFloat.style.borderColor = "#c0392b";
        newFloat.innerHTML = "🎁 <b>Новий бонус:</b><br>Безкоштовний обід в ресторані після бронювання!";
        
        floatBox.replaceWith(newFloat);
    }

    // Видалення вузла старого нижнього банеру (remove)
    let banner = document.querySelector(".fixed-banner");
    if (banner) {
        banner.remove();
    }

    // Створюємо HTML-коментар і виводимо його властивість data
    let commentNode = document.createComment("Використано промокод: VIP2026");
    document.body.append(commentNode);
    alert("Оновлення завершено! Знайдено нові акційні пропозиції!" + commentNode.data);
}