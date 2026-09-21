/* Тест ДУП.02 по темам 1.4–1.6 справочника по Python. Файл собран скриптом — руками не править.

   Ключи и разбор лежат в SECRET: JSON, перемешанный XOR с SHA-256 от соли,
   в base64. Это барьер от беглого чтения исходника, а не защита. */

const QUIZ = {
 "id": "dup02-test-t46",
 "prefix": "PY46",
 "title": "Темы 1.4–1.6 · sep и end, input(), множественное присваивание",
 "minutes": 45,
 "salt": "dup02-py46-2026-sep",
 "context": "Во всех заданиях код лежит в файле main.py и запускается командой python main.py, Python 3.12. На картинках терминала синим показано то, что набрал пользователь. Карточки перетаскиваются мышью или пальцем; можно и без перетаскивания: нажмите карточку, затем место, куда её поставить.",
 "grades": [
  {
   "min": 21,
   "mark": 5,
   "label": "отлично"
  },
  {
   "min": 16,
   "mark": 4,
   "label": "хорошо"
  },
  {
   "min": 11,
   "mark": 3,
   "label": "удовлетворительно"
  },
  {
   "min": 0,
   "mark": 2,
   "label": "неудовлетворительно"
  }
 ],
 "chapters": {
  "1.1": {
   "title": "Переменные в программировании",
   "url": "../../temy/01-peremennye/index.html"
  },
  "1.2": {
   "title": "Типы данных в Python",
   "url": "../../temy/02-tipy-dannyh/index.html"
  },
  "1.3": {
   "title": "Функция print(): вывод данных",
   "url": "../../temy/03-print/index.html"
  },
  "1.4": {
   "title": "Параметры print(): sep и end",
   "url": "../../temy/04-print-sep-end/index.html"
  },
  "1.5": {
   "title": "Функция input(): ввод данных",
   "url": "../../temy/05-input/index.html"
  },
  "1.6": {
   "title": "Множественное присваивание",
   "url": "../../temy/06-mnozhestvennoe-prisvaivanie/index.html"
  }
 },
 "questions": [
  {
   "id": "q01",
   "topic": "1.4 · sep и end вместе",
   "type": "single",
   "text": "Что напечатает программа? Выберите один вариант.",
   "code": "print(\"a\", \"b\", \"c\", sep=\"-\", end=\"!\")\nprint(\"d\")",
   "options": [
    "<code>a-b-c!d</code>",
    "<code>a-b-c-!d</code>",
    "<code>a-b-c!</code>, затем с новой строки <code>d</code>",
    "<code>a-b-c-d!</code>"
   ],
   "chapters": [
    "1.4"
   ]
  },
  {
   "id": "q02",
   "topic": "1.4 · сколько строк на экране",
   "type": "number",
   "text": "Сколько строк займёт вывод этой программы в терминале? Введите число.",
   "code": "print(\"Загрузка\", end=\": \")\nprint(1, 2, 3, sep=\"\\n\")\nprint(\"готово\", end=\"\")\nprint(\"!\")",
   "unit": "строк",
   "chapters": [
    "1.4"
   ]
  },
  {
   "id": "q03",
   "topic": "1.4 · подобрать sep и end",
   "type": "slots",
   "text": "На картинке — вывод, который должна напечатать программа. В коде четыре пропуска, они отмечены знаком <code>?</code> — в строках 1, 2, 3 и 5. Перетащите в каждый пропуск карточку со значением, чтобы вывод совпал с картинкой. Три карточки лишние.",
   "code": "print(2026, \"09\", 21, sep=?)\nprint(\"Python\", \"Java\", \"C++\", sep=?)\nprint(\"Загрузка\", end=?)\nprint(\"ok\")\nprint(\"a\", \"b\", \"c\", sep=?)",
   "chips": [
    "\"-\"",
    "\" | \"",
    "\"...\"",
    "\"\\n\"",
    "\"\"",
    "\" \"",
    "\".\""
   ],
   "slots": [
    "строка 1 · sep=?",
    "строка 2 · sep=?",
    "строка 3 · end=?",
    "строка 5 · sep=?"
   ],
   "image": {
    "svg": "<svg viewBox=\"0 0 420 252\" style=\"max-width:420px;margin:0 auto\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"окно терминала\"><rect x=\"1.5\" y=\"1.5\" width=\"417\" height=\"249\" rx=\"8\" fill=\"#0B1230\" stroke=\"#020835\" stroke-width=\"3\"/><circle cx=\"22\" cy=\"20\" r=\"6\" fill=\"#FF5F57\"/><circle cx=\"42\" cy=\"20\" r=\"6\" fill=\"#FEBC2E\"/><circle cx=\"62\" cy=\"20\" r=\"6\" fill=\"#28C840\"/><text x=\"210.0\" y=\"25\" text-anchor=\"middle\" font-family=\"Roboto Mono,monospace\" font-size=\"12\" fill=\"#8E98BC\">ТЕРМИНАЛ</text><text x=\"24\" y=\"58\" font-family=\"Roboto Mono,monospace\" font-size=\"14\" xml:space=\"preserve\"><tspan fill=\"#8FE3B0\">$ </tspan><tspan fill=\"#E8ECF7\" font-weight=\"700\">python main.py</tspan></text><text x=\"24\" y=\"82\" font-family=\"Roboto Mono,monospace\" font-size=\"14\" xml:space=\"preserve\"><tspan fill=\"#E8ECF7\">2026-09-21</tspan></text><text x=\"24\" y=\"106\" font-family=\"Roboto Mono,monospace\" font-size=\"14\" xml:space=\"preserve\"><tspan fill=\"#E8ECF7\">Python | Java | C++</tspan></text><text x=\"24\" y=\"130\" font-family=\"Roboto Mono,monospace\" font-size=\"14\" xml:space=\"preserve\"><tspan fill=\"#E8ECF7\">Загрузка...ok</tspan></text><text x=\"24\" y=\"154\" font-family=\"Roboto Mono,monospace\" font-size=\"14\" xml:space=\"preserve\"><tspan fill=\"#E8ECF7\">a</tspan></text><text x=\"24\" y=\"178\" font-family=\"Roboto Mono,monospace\" font-size=\"14\" xml:space=\"preserve\"><tspan fill=\"#E8ECF7\">b</tspan></text><text x=\"24\" y=\"202\" font-family=\"Roboto Mono,monospace\" font-size=\"14\" xml:space=\"preserve\"><tspan fill=\"#E8ECF7\">c</tspan></text><text x=\"24\" y=\"226\" font-family=\"Roboto Mono,monospace\" font-size=\"14\" xml:space=\"preserve\"><tspan fill=\"#8FE3B0\" font-weight=\"700\">$ </tspan><tspan fill=\"#E8ECF7\">▌</tspan></text></svg>",
    "caption": "нужный вывод программы"
   },
   "chapters": [
    "1.4"
   ]
  },
  {
   "id": "q04",
   "topic": "1.4 · порядок аргументов",
   "type": "line",
   "text": "Программа не напечатала ни одной строки: Python сообщил о синтаксической ошибке ещё до выполнения. Нажмите строку, из-за которой это произошло.",
   "code": "name = \"Анна\"\nscore = 5\nprint(\"Студент:\", name)\nprint(\"Оценка\", sep=\": \", score)\nprint(\"Готово\")",
   "chapters": [
    "1.4"
   ]
  },
  {
   "id": "q05",
   "topic": "1.4 · обратный слеш",
   "type": "multi",
   "text": "Нужно вывести путь ровно в таком виде: <code>C:\\new\\table</code>. Какие строки кода это сделают? Отметьте все верные.",
   "options": [
    "<code>print(\"C:\\\\new\\\\table\")</code>",
    "<code>print(\"C:\\new\\table\")</code>",
    "<code>print(\"C:\", \"new\", \"table\", sep=\"\\\\\")</code>",
    "<code>print(\"C:\\\\new\\table\")</code>",
    "<code>print(\"C:\", \"\\\\new\", \"\\\\table\", sep=\" \")</code>"
   ],
   "chapters": [
    "1.4"
   ]
  },
  {
   "id": "q06",
   "topic": "1.4 · перенос в конце вывода",
   "type": "single",
   "text": "После запуска программы приглашение терминала <code>$</code> оказалось в одной строке с выводом (картинка). Нужно, чтобы программа напечатала «Проверка... готово», а приглашение появилось с новой строки. Какое исправление это даст? Выберите один вариант.",
   "code": "print(\"Проверка\", end=\"... \")\nprint(\"готово\", end=\"\")",
   "options": [
    "Во втором вызове удалить параметр <code>end=\"\"</code>",
    "В первом вызове удалить параметр <code>end=\"... \"</code>",
    "Во втором вызове написать <code>end=\" \"</code>",
    "В первом вызове заменить <code>end=\"... \"</code> на <code>sep=\"... \"</code>"
   ],
   "image": {
    "svg": "<svg viewBox=\"0 0 420 108\" style=\"max-width:420px;margin:0 auto\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"окно терминала\"><rect x=\"1.5\" y=\"1.5\" width=\"417\" height=\"105\" rx=\"8\" fill=\"#0B1230\" stroke=\"#020835\" stroke-width=\"3\"/><circle cx=\"22\" cy=\"20\" r=\"6\" fill=\"#FF5F57\"/><circle cx=\"42\" cy=\"20\" r=\"6\" fill=\"#FEBC2E\"/><circle cx=\"62\" cy=\"20\" r=\"6\" fill=\"#28C840\"/><text x=\"210.0\" y=\"25\" text-anchor=\"middle\" font-family=\"Roboto Mono,monospace\" font-size=\"12\" fill=\"#8E98BC\">ТЕРМИНАЛ</text><text x=\"24\" y=\"58\" font-family=\"Roboto Mono,monospace\" font-size=\"14\" xml:space=\"preserve\"><tspan fill=\"#8FE3B0\">$ </tspan><tspan fill=\"#E8ECF7\" font-weight=\"700\">python main.py</tspan></text><text x=\"24\" y=\"82\" font-family=\"Roboto Mono,monospace\" font-size=\"14\" xml:space=\"preserve\"><tspan fill=\"#E8ECF7\">Проверка... готово</tspan><tspan fill=\"#8FE3B0\" font-weight=\"700\">$ </tspan><tspan fill=\"#E8ECF7\">▌</tspan></text></svg>",
    "caption": "терминал после запуска"
   },
   "chapters": [
    "1.4"
   ]
  },
  {
   "id": "q07",
   "topic": "1.4–1.6 · когда видна ошибка",
   "type": "sort",
   "text": "Каждую строку записали в отдельный файл <code>main.py</code> и запустили. Разложите строки по трём группам: выполнится без ошибки; не запустится вовсе из-за SyntaxError; запустится и остановится с ошибкой при выполнении.",
   "items": [
    "<code>print(1, 2, 3, sep=\", \")</code>",
    "<code>print(1, 2, sep=\", \", 3)</code>",
    "<code>print(\"a\", \"b\", sep=\"-\", sep=\" \")</code>",
    "<code>a, b = 1, 2, 3</code>",
    "<code>x = y = z = 0</code>",
    "<code>age = int(\"18 лет\")</code>",
    "<code>print(\"a\", \"b\", end)</code>",
    "<code>print(\"Итог:\", int(\"5\") + 1)</code>"
   ],
   "buckets": [
    "Выполнится без ошибки",
    "SyntaxError: не запустится",
    "Ошибка при выполнении"
   ],
   "chapters": [
    "1.4",
    "1.5",
    "1.6"
   ]
  },
  {
   "id": "q08",
   "topic": "1.5 · input() возвращает строку",
   "type": "single",
   "text": "Пользователь ввёл <code>7</code> и нажал Enter. Что программа напечатает после подсказки? Выберите один вариант.",
   "code": "n = input(\"Число: \")\nprint(n + n)",
   "options": [
    "<code>77</code>",
    "<code>14</code>",
    "<code>7 7</code>",
    "<code>TypeError</code>"
   ],
   "chapters": [
    "1.5"
   ]
  },
  {
   "id": "q09",
   "topic": "1.5 · input() и print()",
   "type": "line",
   "text": "Программа должна спросить имя и город и напечатать, например, «Анна из города Казань». На картинке — что получилось при запуске: вместо имени напечатано None. Нажмите строку кода, из-за которой так вышло.",
   "code": "print(\"Анкета участника\")\nname = print(\"Имя: \")\ncity = input(\"Город: \")\nprint(name, \"из города\", city)",
   "image": {
    "svg": "<svg viewBox=\"0 0 420 204\" style=\"max-width:420px;margin:0 auto\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"окно терминала\"><rect x=\"1.5\" y=\"1.5\" width=\"417\" height=\"201\" rx=\"8\" fill=\"#0B1230\" stroke=\"#020835\" stroke-width=\"3\"/><circle cx=\"22\" cy=\"20\" r=\"6\" fill=\"#FF5F57\"/><circle cx=\"42\" cy=\"20\" r=\"6\" fill=\"#FEBC2E\"/><circle cx=\"62\" cy=\"20\" r=\"6\" fill=\"#28C840\"/><text x=\"210.0\" y=\"25\" text-anchor=\"middle\" font-family=\"Roboto Mono,monospace\" font-size=\"12\" fill=\"#8E98BC\">ТЕРМИНАЛ</text><text x=\"24\" y=\"58\" font-family=\"Roboto Mono,monospace\" font-size=\"14\" xml:space=\"preserve\"><tspan fill=\"#8FE3B0\">$ </tspan><tspan fill=\"#E8ECF7\" font-weight=\"700\">python main.py</tspan></text><text x=\"24\" y=\"82\" font-family=\"Roboto Mono,monospace\" font-size=\"14\" xml:space=\"preserve\"><tspan fill=\"#E8ECF7\">Анкета участника</tspan></text><text x=\"24\" y=\"106\" font-family=\"Roboto Mono,monospace\" font-size=\"14\" xml:space=\"preserve\"><tspan fill=\"#E8ECF7\">Имя: </tspan></text><text x=\"24\" y=\"130\" font-family=\"Roboto Mono,monospace\" font-size=\"14\" xml:space=\"preserve\"><tspan fill=\"#E8ECF7\">Город: </tspan><tspan fill=\"#6FB8E3\" font-weight=\"700\">Казань</tspan></text><text x=\"24\" y=\"154\" font-family=\"Roboto Mono,monospace\" font-size=\"14\" xml:space=\"preserve\"><tspan fill=\"#E8ECF7\">None из города Казань</tspan></text><text x=\"24\" y=\"178\" font-family=\"Roboto Mono,monospace\" font-size=\"14\" xml:space=\"preserve\"><tspan fill=\"#8FE3B0\" font-weight=\"700\">$ </tspan><tspan fill=\"#E8ECF7\">▌</tspan></text></svg>",
    "caption": "запуск программы · синим — то, что набрал пользователь"
   },
   "chapters": [
    "1.5"
   ]
  },
  {
   "id": "q10",
   "topic": "1.5 · строка вместо числа",
   "type": "single",
   "text": "Пользователь ввёл <code>50</code> и нажал Enter. Что произойдёт после ввода? Выберите один вариант.",
   "code": "price = input(\"Цена, руб.: \")\ntotal = price * 2 + 10\nprint(\"Итого:\", total)",
   "options": [
    "Остановится с <code>TypeError</code>",
    "Напечатает <code>Итого: 110</code>",
    "Напечатает <code>Итого: 505010</code>",
    "Остановится с <code>ValueError</code>"
   ],
   "chapters": [
    "1.5"
   ]
  },
  {
   "id": "q11",
   "topic": "1.5 · int() и float() на вводе",
   "type": "sort",
   "text": "Пользователь вводит значения с карточек. Для каждого значения определите, что получится, если передать его в <code>int()</code> и в <code>float()</code>. Перетащите каждую карточку в одну из трёх групп.",
   "items": [
    "<code>18</code>",
    "<code>-5</code>",
    "<code>18</code> с пробелом до и после",
    "<code>18.5</code>",
    "<code>18 лет</code>",
    "<code>72,5</code>",
    "пустой ввод: сразу Enter"
   ],
   "buckets": [
    "Число дадут и int(), и float()",
    "Число даст только float()",
    "ValueError у обеих функций"
   ],
   "chapters": [
    "1.5"
   ]
  },
  {
   "id": "q12",
   "topic": "1.5 · int(), float() или строка",
   "type": "slots",
   "text": "Программа кассы кинотеатра спрашивает у пользователя пять значений. К каждому значению перетащите карточку с подходящей записью ввода. Карточку можно ставить несколько раз.",
   "chips": [
    "input(…)",
    "int(input(…))",
    "float(input(…))"
   ],
   "slots": [
    "Промокод, например 007",
    "Количество билетов",
    "Цена билета, руб.",
    "Год рождения",
    "Вес багажа, кг"
   ],
   "chapters": [
    "1.5"
   ]
  },
  {
   "id": "q13",
   "topic": "1.5 · порядок выполнения",
   "type": "order",
   "text": "Пользователь запустил программу и ввёл сначала <code>5</code>, потом <code>7</code>. Расставьте события в том порядке, в каком они происходят: первое — сверху.",
   "code": "a = int(input(\"Первое: \"))\nb = int(input(\"Второе: \"))\nprint(\"Сумма:\", a + b)",
   "items": [
    "На экране подсказка «Первое: », программа ждёт ввода",
    "Пользователь набирает 5 и нажимает Enter",
    "input() возвращает строку \"5\"",
    "int() превращает строку \"5\" в число 5",
    "Число 5 записывается в a",
    "На экране подсказка «Второе: »",
    "Пользователь набирает 7 и нажимает Enter",
    "Число 7 записывается в b",
    "На экране «Сумма: 12»"
   ],
   "chapters": [
    "1.5"
   ]
  },
  {
   "id": "q14",
   "topic": "1.5 · int() отбрасывает дробную часть",
   "type": "number",
   "text": "Пользователь ввёл <code>7</code> и <code>10</code>. Какое число программа напечатает последней строкой? Введите число.",
   "code": "num1 = int(input(\"Первое число: \"))\nnum2 = int(input(\"Второе число: \"))\nprint(int((num1 + num2) / 2))",
   "chapters": [
    "1.5"
   ]
  },
  {
   "id": "q15",
   "topic": "1.5 · запятая вместо точки",
   "type": "single",
   "text": "Пользователь ввёл вес с запятой: <code>72,5</code>. Что программа напечатает последней строкой? Выберите один вариант.",
   "code": "raw = input(\"Вес, кг: \")\nweight = float(raw.replace(\",\", \".\"))\nprint(weight * 2)",
   "options": [
    "<code>145.0</code>",
    "<code>145</code>",
    "<code>ValueError</code>",
    "<code>72,572,5</code>"
   ],
   "chapters": [
    "1.5"
   ]
  },
  {
   "id": "q16",
   "topic": "1.4–1.5 · найти все ошибки",
   "type": "line",
   "many": true,
   "text": "Программа должна работать так, как на картинке: цену можно вводить дробной, итог выводится с пробелами. Код ниже работает иначе. Отметьте все строки, которые нужно исправить, — их несколько.",
   "code": "print(\"Касса\", end=\"\")\nprice = int(input(\"Цена, руб.: \"))\ncount = int(input(\"Количество: \"))\ntotal = price * count\nprint(\"Итого:\", total, \"руб.\", sep=\"\")",
   "image": {
    "svg": "<svg viewBox=\"0 0 420 204\" style=\"max-width:420px;margin:0 auto\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"окно терминала\"><rect x=\"1.5\" y=\"1.5\" width=\"417\" height=\"201\" rx=\"8\" fill=\"#0B1230\" stroke=\"#020835\" stroke-width=\"3\"/><circle cx=\"22\" cy=\"20\" r=\"6\" fill=\"#FF5F57\"/><circle cx=\"42\" cy=\"20\" r=\"6\" fill=\"#FEBC2E\"/><circle cx=\"62\" cy=\"20\" r=\"6\" fill=\"#28C840\"/><text x=\"210.0\" y=\"25\" text-anchor=\"middle\" font-family=\"Roboto Mono,monospace\" font-size=\"12\" fill=\"#8E98BC\">ТЕРМИНАЛ</text><text x=\"24\" y=\"58\" font-family=\"Roboto Mono,monospace\" font-size=\"14\" xml:space=\"preserve\"><tspan fill=\"#8FE3B0\">$ </tspan><tspan fill=\"#E8ECF7\" font-weight=\"700\">python main.py</tspan></text><text x=\"24\" y=\"82\" font-family=\"Roboto Mono,monospace\" font-size=\"14\" xml:space=\"preserve\"><tspan fill=\"#E8ECF7\">Касса</tspan></text><text x=\"24\" y=\"106\" font-family=\"Roboto Mono,monospace\" font-size=\"14\" xml:space=\"preserve\"><tspan fill=\"#E8ECF7\">Цена, руб.: </tspan><tspan fill=\"#6FB8E3\" font-weight=\"700\">209.9</tspan></text><text x=\"24\" y=\"130\" font-family=\"Roboto Mono,monospace\" font-size=\"14\" xml:space=\"preserve\"><tspan fill=\"#E8ECF7\">Количество: </tspan><tspan fill=\"#6FB8E3\" font-weight=\"700\">5</tspan></text><text x=\"24\" y=\"154\" font-family=\"Roboto Mono,monospace\" font-size=\"14\" xml:space=\"preserve\"><tspan fill=\"#E8ECF7\">Итого: 1049.5 руб.</tspan></text><text x=\"24\" y=\"178\" font-family=\"Roboto Mono,monospace\" font-size=\"14\" xml:space=\"preserve\"><tspan fill=\"#8FE3B0\" font-weight=\"700\">$ </tspan><tspan fill=\"#E8ECF7\">▌</tspan></text></svg>",
    "caption": "как должна работать программа · синим — ввод пользователя"
   },
   "chapters": [
    "1.4",
    "1.5"
   ]
  },
  {
   "id": "q17",
   "topic": "1.6 · три переменные",
   "type": "single",
   "text": "Что напечатает программа? Выберите один вариант.",
   "code": "a, b, c = 1, 2, 3\na, b, c = c, a, b\nprint(a, b, c)",
   "options": [
    "<code>3 1 2</code>",
    "<code>3 3 3</code>",
    "<code>2 3 1</code>",
    "<code>1 2 3</code>"
   ],
   "chapters": [
    "1.6"
   ]
  },
  {
   "id": "q18",
   "topic": "1.6 · правая часть вычисляется первой",
   "type": "number",
   "text": "Что напечатает программа? Введите число.",
   "code": "x, y = 4, 10\nx, y = y, x + y\nprint(x + y)",
   "chapters": [
    "1.6"
   ]
  },
  {
   "id": "q19",
   "topic": "1.6 · значения после присваиваний",
   "type": "slots",
   "text": "Какие значения будут в переменных после выполнения всех трёх строк? К каждой переменной перетащите карточку с её значением. Три карточки лишние.",
   "code": "x = y = 5\nx, y = x + 1, x * 2\nz = x + y",
   "chips": [
    "5",
    "6",
    "10",
    "12",
    "16",
    "18"
   ],
   "slots": [
    "x",
    "y",
    "z"
   ],
   "chapters": [
    "1.6"
   ]
  },
  {
   "id": "q20",
   "topic": "1.6 · обмен значениями",
   "type": "multi",
   "text": "Переменные уже заданы: <code>a = 3</code>, <code>b = 8</code>. Какие записи поменяют значения местами, чтобы стало <code>a = 8</code>, <code>b = 3</code>? Отметьте все верные.",
   "options": [
    "<code>a, b = b, a</code>",
    "<code>b, a = a, b</code>",
    "<code>a = b</code>, затем <code>b = a</code>",
    "<code>tmp = a</code>, затем <code>a = b</code>, затем <code>b = tmp</code>",
    "<code>tmp = a</code>, затем <code>b = a</code>, затем <code>a = tmp</code>"
   ],
   "chapters": [
    "1.6"
   ]
  },
  {
   "id": "q21",
   "topic": "1.6 · имён больше, чем значений",
   "type": "single",
   "text": "Что произойдёт при запуске? Выберите один вариант.",
   "code": "print(\"Считаю...\")\nday, month, year = 21, 9\nprint(day, month, year, sep=\".\")",
   "options": [
    "«Считаю...», затем <code>ValueError</code>",
    "Ничего: <code>SyntaxError</code> до запуска",
    "«Считаю...», затем <code>21.9</code>",
    "«Считаю...», затем <code>21.9.None</code>"
   ],
   "chapters": [
    "1.6"
   ]
  },
  {
   "id": "q22",
   "topic": "1.3–1.5 · собрать программу",
   "type": "order",
   "text": "Соберите программу, которая работает как на картинке. Расставьте строки кода по порядку: первая — сверху.",
   "items": [
    "<code>name = input(\"Имя: \")</code>",
    "<code>price = float(input(\"Цена билета, руб.: \"))</code>",
    "<code>count = int(input(\"Количество: \"))</code>",
    "<code>print(name, \"платит\", end=\": \")</code>",
    "<code>print(f\"{price * count:.2f} руб.\")</code>"
   ],
   "image": {
    "svg": "<svg viewBox=\"0 0 420 204\" style=\"max-width:420px;margin:0 auto\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"окно терминала\"><rect x=\"1.5\" y=\"1.5\" width=\"417\" height=\"201\" rx=\"8\" fill=\"#0B1230\" stroke=\"#020835\" stroke-width=\"3\"/><circle cx=\"22\" cy=\"20\" r=\"6\" fill=\"#FF5F57\"/><circle cx=\"42\" cy=\"20\" r=\"6\" fill=\"#FEBC2E\"/><circle cx=\"62\" cy=\"20\" r=\"6\" fill=\"#28C840\"/><text x=\"210.0\" y=\"25\" text-anchor=\"middle\" font-family=\"Roboto Mono,monospace\" font-size=\"12\" fill=\"#8E98BC\">ТЕРМИНАЛ</text><text x=\"24\" y=\"58\" font-family=\"Roboto Mono,monospace\" font-size=\"14\" xml:space=\"preserve\"><tspan fill=\"#8FE3B0\">$ </tspan><tspan fill=\"#E8ECF7\" font-weight=\"700\">python main.py</tspan></text><text x=\"24\" y=\"82\" font-family=\"Roboto Mono,monospace\" font-size=\"14\" xml:space=\"preserve\"><tspan fill=\"#E8ECF7\">Имя: </tspan><tspan fill=\"#6FB8E3\" font-weight=\"700\">Анна</tspan></text><text x=\"24\" y=\"106\" font-family=\"Roboto Mono,monospace\" font-size=\"14\" xml:space=\"preserve\"><tspan fill=\"#E8ECF7\">Цена билета, руб.: </tspan><tspan fill=\"#6FB8E3\" font-weight=\"700\">349.9</tspan></text><text x=\"24\" y=\"130\" font-family=\"Roboto Mono,monospace\" font-size=\"14\" xml:space=\"preserve\"><tspan fill=\"#E8ECF7\">Количество: </tspan><tspan fill=\"#6FB8E3\" font-weight=\"700\">3</tspan></text><text x=\"24\" y=\"154\" font-family=\"Roboto Mono,monospace\" font-size=\"14\" xml:space=\"preserve\"><tspan fill=\"#E8ECF7\">Анна платит: 1049.70 руб.</tspan></text><text x=\"24\" y=\"178\" font-family=\"Roboto Mono,monospace\" font-size=\"14\" xml:space=\"preserve\"><tspan fill=\"#8FE3B0\" font-weight=\"700\">$ </tspan><tspan fill=\"#E8ECF7\">▌</tspan></text></svg>",
    "caption": "запуск программы · синим — ввод пользователя"
   },
   "chapters": [
    "1.3",
    "1.4",
    "1.5"
   ]
  },
  {
   "id": "q23",
   "topic": "1.3–1.4 · запятая, плюс, sep",
   "type": "multi",
   "text": "В программе есть переменная <code>total = 250</code>. Какие строки напечатают ровно <code>Итого: 250 руб.</code>? Отметьте все верные.",
   "options": [
    "<code>print(\"Итого:\", total, \"руб.\")</code>",
    "<code>print(f\"Итого: {total} руб.\")</code>",
    "<code>print(\"Итого: \" + total + \" руб.\")</code>",
    "<code>print(\"Итого:\", total, \"руб.\", sep=\"\")</code>",
    "<code>print(\"Итого: \", total, \" руб.\", sep=\"\")</code>",
    "<code>print(\"Итого: \", total, \" руб.\", sep=\" \")</code>"
   ],
   "chapters": [
    "1.3",
    "1.4"
   ]
  },
  {
   "id": "q24",
   "topic": "1.2 и 1.5 · тип результата",
   "type": "sort",
   "text": "Пользователь каждый раз вводит <code>12</code>. Значение какого типа получится в каждой записи? Перетащите каждую карточку в группу с нужным типом.",
   "items": [
    "<code>input()</code>",
    "<code>int(input())</code>",
    "<code>float(input())</code>",
    "<code>str(int(input()))</code>",
    "<code>int(input()) / 2</code>",
    "<code>int(input()) // 5</code>",
    "<code>input() * 2</code>",
    "<code>float(input()) + 1</code>",
    "<code>int(input()) * 2</code>"
   ],
   "buckets": [
    "str",
    "int",
    "float"
   ],
   "chapters": [
    "1.2",
    "1.5"
   ]
  },
  {
   "id": "q25",
   "topic": "1.2 и 1.5 · причина ошибки",
   "type": "line",
   "text": "Программа остановилась с ошибкой в строке 3 (картинка). Сама строка 3 записана правильно: площадь — это ширина, умноженная на высоту. Нажмите строку, из-за которой в одной из переменных оказалось значение не того типа.",
   "code": "width = input(\"Ширина, м: \")\nheight = float(input(\"Высота, м: \"))\narea = width * height\nprint(\"Площадь:\", area, \"м²\")",
   "image": {
    "svg": "<svg viewBox=\"0 0 580 252\" style=\"max-width:580px;margin:0 auto\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"окно терминала\"><rect x=\"1.5\" y=\"1.5\" width=\"577\" height=\"249\" rx=\"8\" fill=\"#0B1230\" stroke=\"#020835\" stroke-width=\"3\"/><circle cx=\"22\" cy=\"20\" r=\"6\" fill=\"#FF5F57\"/><circle cx=\"42\" cy=\"20\" r=\"6\" fill=\"#FEBC2E\"/><circle cx=\"62\" cy=\"20\" r=\"6\" fill=\"#28C840\"/><text x=\"290.0\" y=\"25\" text-anchor=\"middle\" font-family=\"Roboto Mono,monospace\" font-size=\"12\" fill=\"#8E98BC\">ТЕРМИНАЛ</text><text x=\"24\" y=\"58\" font-family=\"Roboto Mono,monospace\" font-size=\"14\" xml:space=\"preserve\"><tspan fill=\"#8FE3B0\">$ </tspan><tspan fill=\"#E8ECF7\" font-weight=\"700\">python main.py</tspan></text><text x=\"24\" y=\"82\" font-family=\"Roboto Mono,monospace\" font-size=\"14\" xml:space=\"preserve\"><tspan fill=\"#E8ECF7\">Ширина, м: </tspan><tspan fill=\"#6FB8E3\" font-weight=\"700\">3.5</tspan></text><text x=\"24\" y=\"106\" font-family=\"Roboto Mono,monospace\" font-size=\"14\" xml:space=\"preserve\"><tspan fill=\"#E8ECF7\">Высота, м: </tspan><tspan fill=\"#6FB8E3\" font-weight=\"700\">2</tspan></text><text x=\"24\" y=\"130\" font-family=\"Roboto Mono,monospace\" font-size=\"14\" xml:space=\"preserve\"><tspan fill=\"#FF8A7A\">Traceback (most recent call last):</tspan></text><text x=\"24\" y=\"154\" font-family=\"Roboto Mono,monospace\" font-size=\"14\" xml:space=\"preserve\"><tspan fill=\"#FF8A7A\">  File \"main.py\", line 3, in &lt;module&gt;</tspan></text><text x=\"24\" y=\"178\" font-family=\"Roboto Mono,monospace\" font-size=\"14\" xml:space=\"preserve\"><tspan fill=\"#FF8A7A\">    area = width * height</tspan></text><text x=\"24\" y=\"202\" font-family=\"Roboto Mono,monospace\" font-size=\"14\" xml:space=\"preserve\"><tspan fill=\"#FF8A7A\">TypeError: can't multiply sequence by non-int of type 'float'</tspan></text><text x=\"24\" y=\"226\" font-family=\"Roboto Mono,monospace\" font-size=\"14\" xml:space=\"preserve\"><tspan fill=\"#8FE3B0\" font-weight=\"700\">$ </tspan><tspan fill=\"#E8ECF7\">▌</tspan></text></svg>",
    "caption": "запуск программы · синим — ввод пользователя"
   },
   "chapters": [
    "1.2",
    "1.5"
   ]
  }
 ]
};

const SECRET = "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";

let SECRET_CACHE = null;
async function secretData() {
  if (SECRET_CACHE) return SECRET_CACHE;
  const pad = new Uint8Array(await crypto.subtle.digest('SHA-256', new TextEncoder().encode(QUIZ.salt)));
  const bytes = Uint8Array.from(atob(SECRET), c => c.charCodeAt(0)).map((b, i) => b ^ pad[i % pad.length]);
  SECRET_CACHE = JSON.parse(new TextDecoder().decode(bytes));
  return SECRET_CACHE;
}

async function shortHash(text) {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text));
  return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('').slice(0, 16);
}

/* Приводит ответ к форме ключа. Пустой или неполный ответ даёт null. */
function normalized(q, a) {
  if (a == null) return null;
  switch (q.type) {
    case 'single': case 'multi': case 'line':
      return a.length ? [...a].sort((x, y) => x - y) : null;
    case 'order':
      return a.length ? a : null;
    case 'slots': case 'sort':
      return a.every(x => x !== null && x !== undefined) ? a : null;
    case 'number': {
      const s = String(a).replace(/\s/g, '').replace(',', '.');
      return s !== '' && isFinite(Number(s)) ? [Number(s)] : null;
    }
  }
  return null;
}

async function isCorrect(q, a) {
  const norm = normalized(q, a);
  if (!norm) return false;
  const key = (await secretData())[q.id].key;
  return JSON.stringify(norm) === JSON.stringify(key);
}

/* Ответ в коде результата: строка на вопрос. Номера — одной цифрой, пусто — x. */
function encodeAnswer(q, a) {
  if (a == null) return '';
  if (q.type === 'number') return String(a).replace(/[^0-9.,\-]/g, '').slice(0, 12);
  if (q.type === 'slots' || q.type === 'sort') return a.map(x => (x === null || x === undefined) ? 'x' : String(x)).join('');
  return a.join('');
}

function decodeAnswer(q, s) {
  s = s || '';
  if (q.type === 'number') return s === '' ? null : s;
  if (s === '') return null;
  const parts = s.split('');
  if (q.type === 'slots' || q.type === 'sort') return parts.map(c => c === 'x' ? null : Number(c));
  return parts.map(Number);
}

function gradeFor(score) {
  return QUIZ.grades.find(g => score >= g.min) || QUIZ.grades[QUIZ.grades.length - 1];
}
