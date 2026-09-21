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
   ]
  },
  {
   "id": "q02",
   "topic": "1.4 · сколько строк на экране",
   "type": "number",
   "text": "Сколько строк займёт вывод этой программы в терминале? Введите число.",
   "code": "print(\"Загрузка\", end=\": \")\nprint(1, 2, 3, sep=\"\\n\")\nprint(\"готово\", end=\"\")\nprint(\"!\")",
   "unit": "строк"
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
   }
  },
  {
   "id": "q04",
   "topic": "1.4 · порядок аргументов",
   "type": "line",
   "text": "Программа не напечатала ни одной строки: Python сообщил о синтаксической ошибке ещё до выполнения. Нажмите строку, из-за которой это произошло.",
   "code": "name = \"Анна\"\nscore = 5\nprint(\"Студент:\", name)\nprint(\"Оценка\", sep=\": \", score)\nprint(\"Готово\")"
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
   }
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
   }
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
   ]
  },
  {
   "id": "q14",
   "topic": "1.5 · int() отбрасывает дробную часть",
   "type": "number",
   "text": "Пользователь ввёл <code>7</code> и <code>10</code>. Какое число программа напечатает последней строкой? Введите число.",
   "code": "num1 = int(input(\"Первое число: \"))\nnum2 = int(input(\"Второе число: \"))\nprint(int((num1 + num2) / 2))"
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
   }
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
   ]
  },
  {
   "id": "q18",
   "topic": "1.6 · правая часть вычисляется первой",
   "type": "number",
   "text": "Что напечатает программа? Введите число.",
   "code": "x, y = 4, 10\nx, y = y, x + y\nprint(x + y)"
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
   }
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
   }
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
