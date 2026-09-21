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
   "topic": "1.5 · подсказка для пользователя",
   "type": "line",
   "text": "На картинке — запуск программы. Одна строка на экране выглядит не так, как задумано. Найдите её и нажмите строку кода, которую нужно исправить.",
   "code": "name = input(\"Имя: \")\nage = int(input(\"Возраст:\"))\nprint(name, \"через год:\", age + 1)",
   "image": {
    "svg": "<svg viewBox=\"0 0 420 180\" style=\"max-width:420px;margin:0 auto\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"окно терминала\"><rect x=\"1.5\" y=\"1.5\" width=\"417\" height=\"177\" rx=\"8\" fill=\"#0B1230\" stroke=\"#020835\" stroke-width=\"3\"/><circle cx=\"22\" cy=\"20\" r=\"6\" fill=\"#FF5F57\"/><circle cx=\"42\" cy=\"20\" r=\"6\" fill=\"#FEBC2E\"/><circle cx=\"62\" cy=\"20\" r=\"6\" fill=\"#28C840\"/><text x=\"210.0\" y=\"25\" text-anchor=\"middle\" font-family=\"Roboto Mono,monospace\" font-size=\"12\" fill=\"#8E98BC\">ТЕРМИНАЛ</text><text x=\"24\" y=\"58\" font-family=\"Roboto Mono,monospace\" font-size=\"14\" xml:space=\"preserve\"><tspan fill=\"#8FE3B0\">$ </tspan><tspan fill=\"#E8ECF7\" font-weight=\"700\">python main.py</tspan></text><text x=\"24\" y=\"82\" font-family=\"Roboto Mono,monospace\" font-size=\"14\" xml:space=\"preserve\"><tspan fill=\"#E8ECF7\">Имя: </tspan><tspan fill=\"#6FB8E3\" font-weight=\"700\">Анна</tspan></text><text x=\"24\" y=\"106\" font-family=\"Roboto Mono,monospace\" font-size=\"14\" xml:space=\"preserve\"><tspan fill=\"#E8ECF7\">Возраст:</tspan><tspan fill=\"#6FB8E3\" font-weight=\"700\">18</tspan></text><text x=\"24\" y=\"130\" font-family=\"Roboto Mono,monospace\" font-size=\"14\" xml:space=\"preserve\"><tspan fill=\"#E8ECF7\">Анна через год: 19</tspan></text><text x=\"24\" y=\"154\" font-family=\"Roboto Mono,monospace\" font-size=\"14\" xml:space=\"preserve\"><tspan fill=\"#8FE3B0\" font-weight=\"700\">$ </tspan><tspan fill=\"#E8ECF7\">▌</tspan></text></svg>",
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

const SECRET = "Ocno/FF43Q+h8LlpHso4adS5leemVydwnNgjQLhfdH1iOhgd4opX/2gCat3lOYOYAKkZSVbLgKM0dsnaSpIx3f47LBzWilP+WfICu7dV0vleDhh+VsiAoDR1ydxKlCstI8b74QN0x/9NAmLd5Ti3mTOpGHlWyYCtNHvI4kqSMd39Oywd4IpS/2gCbNzTOLJpXggZSVf1gKY1QMnYuvyu3fc6HhzQi2X/agJn3eU5g5gAqa2l4lWymHHaydJKksCMklFJd7DiNqkKYgOOt13S8l4FGHZX/oChxSqusCf8od34xbkc/4pS/loCZ9zVOLyZO1l461f0gZo0esneSpbBtWI7JBzVi2UD+gJt3Nk5j5gNWXYbOqTTODVIyOJKksCNklVJdUAqlUa0pvolRzi9mA9Zdhsype7IXiqvsCr8pNzAy0hOsdnH/2wCZyy2adPLXgkYdVbPgZvf2nhN+AFyLCbFuRzBi2X+WgJs3N05gWlfPhh7VseArTR6yOhKnMG4k2m5HeOKUf9v8gK+tmrS914JGHVWzHDIVyuSsC38r93wx7kd43o3kgpnAr+3ViIs4e3oGzml7jg0ecncSpLBtpNsSXyw5zeXC1z8LhrEImv+ufrpvFUrOo6fYEKgDEo5H8e57hcyng3g8vDc+Di3mA9ZehoNpek4NUjI60qbwbOSWbkc3YpSDwptArm2aNL8XzsYdVbBgKA0eDmxG/2T3MI7Jxzai2QD+gJt3Nk5j5gNWXYbOqTTODVPydRKlMGwklNISrDqx/9oA1Pd5TiymB5YSutX9IGYNUrJ10uvMd39Oycd4Ypc/2/yEKe3f9L5XzoZS1f2gK81QMnQoAzTtmzL6qkQZ7sNho68UEXI08heCxh7VseAoDR4ObAl/KTcwjssHNKKWf9u8gONtmrTyV83GHFWzXDIWSqssCz8pdzBy6jgQGjH/2Ly4SBHOLJpXzYYdVf0gKM1TzmxGP2R3fw7IBzail8PC1MDjrZo0vdfMxlIpqXvyFArmbAv/KPd/DstHNiLZQ+/vLYst1fS969YSxs6pe7IXiuesCr8rN36OhfiQJhM/2kCbN3lOLyZPVl2CT1VgKc1T8jnSpzAj5JbSXmx2DauC13y3NY4t5k4qRh0VsCBmDVPyd1KksCMklu17LDix+1x8xC3Rzi2mTFZdxs+pNHJbiqrsCr8pNzAOhgd73o3lfoCb9zSOL6YDKfoGxul4Dg0d8naS6zBvZJWSXlaeiWECkUCvLdb08leChh8Vs+AqN/aKKIhADHP6dlbd0x6JYTpEGkgRyqpmTxZdhoEpe7IVyqnQViXMe/Cf7kd54pS/lgDWd3nOLdpXggZSVf1gKY1QMnYtA5sIWLJ6PxTeN0PofC5aR7KOGnUueTrt1lwKsnaKj22DDN6KpK79kB4lEqq8gONtmrS+V87GHNX94GZNHU5sCb8pN30Oy0d43o3mApvAry2b9L8XzQYc1f6gKQ1QiNASpjBuJNvSXSx28f/bgJi3fY5gGm9ufr9q0VpNdfLNUBLrcCPk2tJcrDgN5/6jvAsG8hea69YSetWyoGYNUTJ0UqZwbaSW0lwsOLH/2UCbCy3UtPJXzkZRFbJcPplbjkw41h5YizL5ewqO5FO+q7yT0zDLGnq56z22ld+NsumO0BKk8G4k2xJfLHYN58KZwOOtmnTxq9Zdxs4pNHIXiqsQFiHwZqSW0l/sdo2rAplAra3WMDyr1l6Gzql5clkK5uwJAzBspJeSEyw7zeSCmwDjbdYLmlfNhh1V/iBmjVEydxLrzHcwzsiHNWKU/5ZA1zd7ji6mTapuLnvGyQwzNrJ1EqSwbKSU0hNsdE3nQpiArm2aiIm5KkYeaak0slm2snWSpkx3MM6Gx3giln/YANRIkebZzmy1eqX2hsMOsUrmbAq/Kbd9jssHNuLaP9vA1Ast1/S9F85GUxWwIClNULI77r8rt33Ohkc1YpV/2QCZtzZOL5pXggZSVf1gKY1QMnYus6RmWKKtewCejeX+rHy3NU5iZgKWXYbMqTfyWfayOFLrsGzklBJfbDiN5UKbAKwScjS6K9ZdxoFpNHJZyqnsCMMwIyTaUhMsOQ3lQpsArVHOLBpXggZSVf1gKY1QMnVuh8x3f07Jxzbi2T+XQJq3Nw4vJgOWETrVsSBk8U4srAN/KHd8ToZHeOKUP9gAmJjDCq5Za9YSetX94CmNH3J2kqSwbRiOyvssds2rQtSArK3UtL8r7joKQbhcCrVyC9OqhU/P3PFu7FMesVe6ubwNkeTICLq8Orxpi5jRcnaOxfyVTM3YslJXkCKVf5RAmXc2TiwmTqpuLnvGyQwzNrI4UqRwb2TbEl8sOE3n/oCbdzSOYKZOlhPGz6k0cheK5axFP2TLZJZSE2w78f/bQJv3Nc5hZk6WXUbPqTfNMUqprAk/ZPd/Dsl7LDiN5MKZwKxt1bS+185GHZWyIGTNU85sCX8odzCOykc3IpS/lgDUt3sxiKZHakZSlf3gZg1RMnaSpkxOWI7Lhzdilf+XQJn3No4upk6qbuo6Qc1ODR7yOJKksG1k2m5HN+KWf5bAmnc0shxLP+0lOm8VQw6xRiZ9Lr9nNzAOyfsMyOJW7uql34Vh3Bzr/mnuO8BOXeLm3VA+152eC+O97hAPIhDtr2lf0eDZzD45rqvphQif5CXfA7uAjHd4zshHN2LZf9qAmjd5ji6mA6pGHRX9YCmNUjJ1UuswIKSXkhOsds2oPoCZtzZyNL+XzkYdFf2gZk1QMnQtgzBspJVSEGx2DeRCm4Dj0c4v5k6qRh5V/6ApzVEydtKkcCCkl5ITrHbNqD6Ambc1zi0mTqpGHlWwIGYNUfJ0EujMdzDOhsd4IpZ/2ACYixUxiKZEFhIGzal4shdKqKxFvys3fzRubwSM4lb8o7w3Pk5hJk6WXUbPKXgRMfWORP5Q2NobsvqqRBnuw3g8o4uTsYgNKOp6rq2QHIixYE7C/9VMzdisKngQGi6A/rwpWQeyjhprVla61f0gZo0esneSpbBuGI7JxzRi2f/agNQ3No5iZk2qRlKVs6ArTRyObAn/KHcxTshHN2KV/9vA1AstmvS9l4JGHtWx4CjNHXI7kulwI6TZbkc34pZ/lsCadzSOLaZMVl6Gzak0shQKqKxFvys3fw6GB3ii2sV+o6OYkcKgt2vWXcbM6TQyFAqq7Ak/KUtk2pITrHaN5EKaAK0S8heFfupKksSVYGaNUrJ0UuvwbaTZEhKsOI2oPTyApO3VtPEXgsYdVbJgZvFpjsjoHBNYyecxZAUO4VDv47wLLdX0vxeDhh7V/eAqDVPyOK6byshYjsmHNWLZ/9vAm/c2TmDZa/sv+empNLIVSqosRn8qtzNOh8c2ItpDwpq8m0FhGdnr1lpGzal7Dg0e8nbSpnAhWI7LhzQilj/YgNT3ew4sJk/WEYaBFWArDVIyONKkMCCeMvFkDwGyQ8KQPLc0DiymTBZcBoHpeg4udhaWsZwTVEsju6QPC6GTba3ji5HOYGZO1l6Gzil5chY2sjiSpLBtpNnSXaw5Mf/ZQJn3ec4sJgEWXHrV/SAozVPyOi2DMG1YrfFuECKVf5bA0MstmjS+V87GHZWy3DIWiuZsC/8o9zCOykd6YpX/28DUN3mOY1pXzvoGgSl4MhUK5qwIf2e3MQ7IR3udMf/SAJi3ec4upk/WXUaBFWBmcWJfBCncDNRHrfFkEJ6Nq4LUAK8t1rS8V4L6Bs4peTIXSqkQEutwbaSXkhEQIpb/28CZNzTOYFpXgsZS1bAgKQ0dTmwLfys3fI6HhzVilr/YgNd3Ns4umevWVrrVseAqDR6ydhKnMGwk2lJeUCLZg+pt6IxO8oiFa2pGUpWzoCtNHLJ2Lr8pNzDOhsd7HbH/2cCbCy3VNL8Xz8Yf1f2cMliKqmxG/2T3M07JRzYejedC1MDjrdY08deC+gbOaTQyFsqqLAv/KrcydG5j1p6u3O0t6UsO7R2KO3lreWkCHw4x4spVrgWMXZggPy1QmDHdOqP/ixFn2owrbPo6VbUgZo0esneSpbAjmI7LhzQilX/bwNS3e84spk6WErr4xs0ODVFyd5LrcG2kl5JeLDnN5oKYQKyRziwmARZfxs4peLIVdQ5sDkMwb+TaUlysdo3kQphArJHmHAg4f3g4qYQPnzYpjs8uAAx3f07Jx3ti2X/ZAJu3eTI0vZfNxlKVs6ArcU4srAp/K/cwDsnHNKKWe1h8gKzt13TyV88GHlWy4CsNUo5sRv9k9zCOycc2opfDwpvArm2ai5pXzHoGzmk0MhdKqqwIfyh3Mo7LBzdil//b/IDjrdd08lfNRhzVsiAqDVBydC6/K7d9zoeHNCLZf9qAmfd5TmDmACpGUpX9YCoNU3I47r8pt3yy0hOsO83lQtTA463VtL1oakYXlf0gKM1QjmxGfyg3MI7KR3ii2sPv7y2MTvKXmujqRlKV/WAqDVLyd5LrsG9kl5ITkCKUP9nAmLd4Di3mTJZcBszVYCnNUQ5sRn8rd38OyId54pX/2cCat3pyF5r09Wml6RbcH2LniQ8uAxNL2I7LRzeilb/agJg3N85gGlfNhlLVsuAqTVPydu2DMGwklW5HN+KUv5aAmfc2ji8mA5ZeOtX94CoNUA5sCIMwbCSXrkc0Ytk/24CZ93lxiKZEFl9Ggal4sluKqBASp7AhpJcSXKw6Mf/ZwJiLLdS0vdfNBh+V/NwyFcrkrAo/K/d9jsp7LDnN5r6AmDc3Di6mABZfRoEWXDIVdpqBeoMwbKTa0l0QIpZ/24Cb9zZOL5pXz4YdlbFgZ81T8ndSpTBtWI7JBzYi2D/bwJh3NnI0vRfPOgaB6TSyFUqq7Ai/ZM3YjsmHN6KXP5ZA1Xc3zmAmA5YR+tE3oCHNHrJ3kqewbiTa0l2sOollPbyArO3XdPJXzwYdlbLgZnFKqFAS63BsJJVSX6w6sftcQJh3Nk5gJkxWXobOLfrODVLydVKmzHd/TssHeCKUv9nAmzd5jiyZ6305OukBGAvx8A5G7hHdHRg0bmXUHbHHvby4yBH2i5pv6Xo+apVYjTFykRMug5mZTvJo+xCCZ5BrrOqSRWabTuva0hfpqXtyFUrmbEZ/Znd9zskHNB6N5gKYgKzt1DTyF4F5OtWyoCmNHfI4kqSwbGTaLkd5IpX/2MCaSy3VdL8r1l/Gzal78lmK5iwIPyh3fc6Gx3hi2gPC1MCsrda08hfPBh3vFWArzVHydBLq8G4klZJdLDvxxz6Am3c2TmDmTRZfetWzYCkNU/J3UqSwb+SW0lxsOc3kQphArJHm2c5o6kYdFbFgZg1SsncSpnAj5Nrub8FKsf+WQJo3Nc4tZk/WXXrVsGAqjVKydZKmMCGbMtJUrHSN5cKYwK2t1AimTBYSBs+VYCqNHHJ30qSwbaSVkl5sOc3lwpq8tzQOLKZMFlwGgek3Dg1R8nVuvys3fI6GR3ji2//agNc3eXEIpk/qRlKVs6BmzR9ydBLosCPk2pIQ0CKWv9q8gONt1rS9188GHKmpNHJZyuZsCT8q9330bmtTHqFD+fy4yBH2i5pvKkqSxJVBnmJj3wl6F5+f2LDSXuw5zefC1UCubdV0vFfMOgbN6XuyF4rlbES/KQhYjoeHNWKWw8KagKwtnnS9Kal6KLoAXhEx8shQEqXwbiTacXuSXoFr07yhG0LnWcM/funuaZdgKrFK5ixGP2R3fw7IxzVejeSCmfy3eA4upgOWXMbOFx8OICUfUBKncG4kly5HNeKWv9qAmjc18g/aV4OGHNX94CoNU/I4kutwIJiOyMc0IpdDwpqArC2ZyKZMFl9Ggal5chZKqywJ/ys3fw7IOBAil3/ZANQ3Nk5gpkxWXHrVsiArTR4NUB4rIUtDIr0qSUolUCo/PJ0R9UiMK+06LGmSHAoxSqtsCr9gNzAy0lxsOQ3lAte8tzVOYOZOll061f3gZg0a8ncuvyp3f47LBzdilf/Zv7yZQmcKhWtvJTpr1V7ONTa++AODMCKklNITbDhN5H65PwuGsQia/658Om8VSs6jp9gQqAMSj0fx7nuFzKeDeDy8GUJmHc9p6DoGzSk0chQKqqwLvyhLZJZSXKw7TedC1ICvLZh0vlfPBlJpqTRyWcrmbAk/Kvcwce5HNSKV/9sAmcst13TyF8yGHOmpeLIVyqssC78pN3/OhLssOQ3mwpvArRHOYSZN1hMGgak2zbFKotA9AzBtpJeSXqw4jat+o7wOzvKLmlfMejgpqTRyF8qorAv/Knd8DspHNWLZQ8KZgK+t10imA5YShoGpe7IXyqhWrobJiNiOz4d4opZ/2sDWSy3V9L3XzIZSFfygKA0eMjsuh0lIWI7Lhzdilf+XQJn3No4upk6qRh0V/WArTVEydFLrMG9klxIT7HUNq36Am3d5zi6aV87GHlWy4CsNU8jQPQMLC0rhe3kCTSXWq76ji63T9LxXggYcFbLaji52DBJtAxFdDKO3L4SNZUPCmUCuLdd08heBegbO6XlyWfAObAk/KDd98tIS7DqNq4LUAK0RwqC3a9YSRoEpNDIWyqjsCIMwbOSX0lxsOQ3nAps8t3lOLqZMFl45aQIfDjHiylZuBYxdmCA/LVCYMd064/+LEWfajCts+jpVuqApjVOyOFKlsG9klxJdrDqx0a0oqd4T8EimT1YQxs0pe7IUSqhsRj9kNzNy0hMsOQ3nQpvArJHOYCZP1ly56al6shVKqNASpvBvZJUSXSx2zefCm8CvEvI0vGvWXIaBaTQyWQqp7EaDMGzk2pITrDqNr4LUAONtmcimA5YSBs2pefJZtrJ10qcMd3/Oywc2XTH/0jyA422atPJXzcYcVbAcCrFKqawJP2Q3fk7LOyw7jedCmwCubZq0vdeDhhzV/pwyFgqrLEYDMGyk2tJcrDrN5oKaQK8S8jS9l83GUZX94CmNUbI47r8o93wOywc1It2/2cCb9zZOLdpXg4Yc1f0gKM1RDmwKP2Q3MA7KRzbilkPCmACs7dT0vdeCxh2V/aBlt/a28tKvsGzklxITLDqNq4LUOg9Xyq5Z69ZUBoHpe/JZSqpsCj8qt33OyQc2IpSFfq7vHwSnCoVrVlaGzil58llKqmxG/2TN2K3u+VOepdds7ymJE7I0vuvWEkaBKTQyFsqo7AvDCItk2pITrDqN50KagOORzi9mA9Zdhs3peXIXiuSQEutwb2SV7Xssd03mgtSArm3XyI66vnoGzml7jg0ecncSpLBtpNsSXyw5zeXC1z8LhrEImv+uPjpvFUrOo6fYEKgDEo9H8e57hcyng3g8vDc9chyO+bqretWzoCtNUzJ2EuuMdzDOhsd4IpZ/2ACYiw7yjd506vm61bWgKQ1R8neSprBuJJWSXSw78f+WwNQ3ec4vJk1WXDrVsiAqMUrn7Av/Krd/Dss7LHdN5cLUwK3t1YimA9ZeBsxpNDIUCuRsC/8rN38y3tM9Ho2ogtQArJHOL2ZMVl6GgSl7sllKqywJ/yp3ffRuZBCb9ca6o7wIkc4o5k0WX0bMqTTyWsrkLAi/Kgtk2NJfLDpx81aRvJQRd0yfL/V6uutVWEoydrI4UuuwI2SVUl2sOrH/2UCad3pOYNpXg4Yc1f0gKM1RDVAeKyFLZNmSE6w5Md7o6K3SRWabTuhqRhfVstwaJeTdxSyBTHd/ToZHN6KVP5aAmLc2zi+mT+pGHZWwHDIUSqnsR/8r932OyEd4nTH/0cDUdzROL+ZMam4ue8WNTjY2nAO7gR4YzKe7eQ8eDeJCmcCsbdYLmleCRlIVsR+IsWmO0mzDMG1klBJdEA8i0C7pvoiScYraW0JXOtX94CmNUnJ1EqcMd39Oycc24tk/l0Cat3lOYOYAKn5+rZbcmXJ2jsRqx0zN2KQu6cFI8UV+oniIEfYLmm/pej6qlViNMXINUCocT0tYJzxtUJgxw2zvKYkTsjTyV85GHxWxICgNHrJ0EqZwI9iOhsc3opc/lYCaNzZyNL+XzkYdFbNgZk0djmxHPyk3fk7JxzTilkPC1UCtLZp0vJfOeTrVsqBmDVEydFKmcG2k2C5HN+KWQ8KaAOMt1jTxl816Bs4pe04NUTI4kqdwI2SW0hNsdE3nQpiArm2aiKYDll4GzpbcH6JlXgUsgUx3f06GRzYilr/YgJu3Nc4t5gNqRhzpqTWyFAqorEZ/Z8hYjsh7LDuNq8KbAK9t1XTyl4H6BsxpeDIWiqhsRv9nSNiOw0d4IpZ/2sCb93kOYxpXg4Ye1f0gZo0djkw41h5YizLSXKx2DebCmcCt7Zn0vxeC+gaBKXuyF4rlbAg/K8tk2lJcrHdN5UKbAK1S8jS9l83GUZX94CmNUbI47obIyF3y0lxsO/H/loCYtzQOLOZOlhIGhek0jg1R8nYuvyv3fY7JBzQejeXCmXy3eM5gZkyWXIaAKXoyFza++AODMG6kltJc7HVNq0LUQOCRzi1mT9ZdBszpe3JaiuXsRgWMX8jnLe+BSqLTrm3+lBFxF5ro6mU6agpcjHL2snCSpnBt5NqSE5Ai2f+VQJm3Nk4vmleCOgaAaXoyWQqorAk/K0tklO5HN+LZP5bA1Dc1zmNaV4IGUlX9YCmNUDJ0LrOkZliOhsc3opR/2/yhG0LnWcM/funuahXLTTF2GhRqA4rLTnJ8qkZeN0PgeL+LFbEInujqfnnpkcNNMXYbgjjDistYDsGHeCKWf9mAmzc3Ti8mTupGUpWy4GZNHjJ3kqUwI9iOyEc13o2qQpqA4i2aC5pXzQYdaak0cliKqGxGPyh3MA6Feyw7zecCmzy3No4t2lfNBlIVsOApTVEI0DzQmUlHsmp/FcGxQb6Ambc1zmDmA2p/+empeg4NU7J0kqcMd3/Ohoc24toDwptA4y3VtL2XzkYf1f2gZrL2nAO6lllJWvLSE+w7Dea+gJg3Nk4tZk9WEgbNqTZyFUqrLEYDMCMk2lITLDkN5ULUf4st1fTyV88GHVWxIGYNUrJ10qSwb+TYEl+sOo2rQte8tzaOLeYCFl9GzWl7jbFk3cUsgUx3fM7LB3gi2T+WPICuLdT08avWEobOKXjyFvWObEd/ZPd/MtITbHdN5cLUAK8tmbTy69YQBoEpNPIXyqpsCb8qTdiOyMc3opc/2IDVdzSOYOYDVl6GzhZcMhWKqewLgIxay6E+LhIc8fNWkby3NM4uZgAqRlJVsuAqzVENUBLq8CPklW5HNiKUP9mAmfd5zmNmAFYSvGmpNbIUCqksCoAMd3wOywd4XTHRrSm+iVHOL+ZP6kYeVbHgKY1TsnVuh8lNGzSqeyw5DauC1ACvLdV0vdfOxhzV/dwyFormbAk/KLcwjspHNyKW/5Z8gONR75jJfrsjbn0GiI0xSqpQPxAfmw2w7DssOU2rwpqArC3XdPLr1lw67VAYDTFKqFAqRgoI3vbt+4ddscNq+PhLl3IeWvk7LHpvFULKMnaKEy6Hj0tcce5+Ex60gP65P4sUMQicdKl6OnxHSk639o7sDv9k9zCOycc2opfDwpgA4e3V9L3XzIYdlf6gZY0eMjhS6Mx3MM7KxzVi2f+XwNRLLda0vRfMRh8qFWAgDVHyOJKmcCNklRITLDvNq0KYgOOt1bTya9ZfBs4pNXIWyqtsCL9ky2SX0lyQIpY/28DUtzVOLyZPFl26+8bIG2R0jBMuvyu3fc6HhzQi2X/agJn3eXI0vZfNxh/V/SAojVKyddKlsCOYjsh7LDkNq4LUAK8t1XS+V87GHBWzYCqNUrJ1UuuwIyTZLkc1IpZDwpvAry3XtL5XgsYc1f6cF2LjnwStAzBrJJWSXyx3TefCmkCvEc4sJgEWXcbOKXryFgrlrAv/ZPcwzoW7Ak0l1qu+vsshWiWaV83GHampeLIWyqusCj9kd3yOhAc0IpS/ljyA422atPJXzcYcVf2fDgHeo1ASpvBvZNpSXmw5sdGtKb6JUc4umleCxh1Vs6BlDVAyd66/K7d/DobHN6KWw8KbQOMt1DTyF87GHtWzYCqNUrJ3UqUwbhsy0lesdg3kQtSAry2ZyKZMFl2GzKk0chfKqmwLfyr3fLLSXOw5DagCmACt7Zn0vxeCxlKV/pwyF4qobES/Z0tklRJcrHbN5QKZ/Lc2Di3mA9Zehs4pePIW9rJ0kqewbOSX0l8Wno3kApsAri2adLzXzkYfFbPgKDFKqSwLwzBv5NgSX6w5DebC10DjrZp08avWXoaB6XlODR7yOBKnMG6k2i37h12xw2r4+YuXch5a+Tssem8VQsguNY5Qu1EaC94y7vkV3rMD+vi+yxIyDBpsqnw5bNPcMhRKqywIfyk3f87IRzVesgPCmADjbdd0vpfPRh7pqXkyFUriLEYDHdhLYrt4kAziVvy+/Lc2TmAmT5YSBs2pNHJbiqrsCr8pNzAy0l4sdo3kQpjArG2a9PHr1hPGzak0clnK5VASp3BuJJcuRzeil3+WgNR3NQ4uZk6WXUbPqTfOAd6jUBKk8GzklBIT7HdN58KZwOOtmnTxq+x5utW64CiNHrI40qfwbaSXklxsOI3mvoCbdzZyNL2XgkYe1bHgKA1QcnQSpAx3fY7KR3xi2UPqL2nYgPAK2WvWXjrrhslddTaMkD0WXw/a8u240Box81aRvLd5Ti8mTlZfeu+W3Jlydo7EasZMzdikLunBSPFFfqJ4lFLyCA+5/Dq8aZXgIo1SMneSpgx3MM7JBzQi2D/agJp3NfI08hfNxlOV/WAqDVHyPFKkTHd8MvrrRd6N5UKYgK2RzmDmA1YSBs4perIVdpFQq0ePTgeybfsEj+XQ7uxtyQ7yi4VraXol6RbDDrM2snUSpnBtpJbSXmx2Mf/YgJlLLdV0vxeGOiXpEJiNtCmO0y6/KktJIf2rRRyzg8LUgK8t1/S+F8xGUtWxYCtNHg5sC/9gC2SWkl5sO3H/2QDWtzfOLOZNVlw5aZCYjbQ2jNAqAzzjdbLSXix2jeRCmMCsbdW0vyvWE8bPqTRyF4qp0y6/K7d/DoUHeKKWf9mA1EsVtw3Z7+pGUqmpNLIWyuesCD8r937y0l0QIpa/lkCad32OL5nr1lZGzOl5ziXn2kM+090JWvLSX2x0TeUCmLy3NY5iWnZ6KS+4zAiaoqIN0LnADEvM9qv7lp6nA2xt6suXchZeaOp+eemQQ00xdhuCOMOKy1gOzgd4otn/2QCaNzXyDNzr+ymr7spckTH2sjjSp3BtZNrSXyw7zat+gJt3NI5gpk6WXUbOKTRNMUqoUBKk8Gzkl9ITbDgN58KZQK2t1gimAlZfRs7pNs4NUXJ1Uurwb2TaUl8sO82rQtTA4NHOLBpXgsYdVbMcMhTKqxAS63Aj5NrSXKw4Dea4PIQp7dy0vleCBlKVsWAvjVPyd1KnD0tk2tIT7DryRX6EGkiRzijmA1YSBs4perIVdorWrr9l933OyQc0Ho3ngtZAr63WNL8XgvoGzKk0MhbKqiwJ/yv3fvHuaUOLs8G+gJv3NfI0vtfOxh1VsGArcXIKVm0FTHd/DoYHeKKV/9nAmzc1Ti6mA2pGHRX9YCmNUnI4EqcwbGSV0hPQItmD4yzvnkCrXA74PvoKQbhcMhYK5qwLPyk3f/L/6APO5MH8/zy3MY5gJgPWXYbPKXgONDAORP/XCxRYLe77LHbN5UKaQK5t1DS+185GH5X93DIUiqksCr9lt33OyQc2ItoDwpjArm3XyKZMFhIGzil4chQKqKwJPyjN2IpMhz4i2X/ZAJh3NnSM3m7sOb+V/WBmzVLN6IhAjHd4zobHeCKWf9gAmosVMjS8a+96Bs0peXJZSqksREWMd34Oycc24pf/l0CZ93mOYCZPVl262T1xDg0fMnVSpfBs5JeuR3nil/+WwJp3NnEIpk3WEobOKXjOAd6jUBKk8CNklVJdLDtN50KZwK4t13S9F8xGH6mpNbIUCqksREMwbCSW7kc2opZ/2ECat3gOLeYDlhKGzSl7jbHhzVAuF0gOmDRubdCMYJW+OjyV1e1Lmmt/qCypE9wOjVbyd1KnMCKkltJd7Dqx/5cAmfc3Di6mTVZdhs6VYCqNHHI50qUwIySUEhDsO82rQtTA4NHOL2YD1l4GzSl4Mlq2sjnSpzAjJNpSEBAOcsPu/7ybkcKgt2vWEkbOFWBmTR4ydBLrMCGkldJdECKUP9nAmLd4Di3mTJZcBoJpezIXcA5U7YMICFi2bfssMU3kQtQArK3VCKZOFl1Gzak18hQKqSwIv2eLZNrSXyx2zaqCmwCuLZn08teCBlEpqXvyFvaydhKkMG4klZJfLDmx/5bAmnc0jiwmT+z6KqmSHArydp7QKcMICFiiLnxQGjJDwpHA423U9Lxr1l5Gg1VgKc0esnYS63Bv5JbSXSw6DefCm8CtLddIpgHWXMbOFWApzVEObAk/KXd/zsnHNl6N5AKZwOMt13S9V88GHZWyICmNUM5SPsMLC0hx7kc14pX/lgCZ9zbyGBpsqmp56al58hVK5uwL/ytLSHLpOwCc8sPCmADh7Zg0vJfN+gbN6TbONbaKkCpAjNwbsu7vVFixRX6qfBnApEgc6/S+v/bWXA6kpJgQqAMM93QOyfssOg2rQpsA4y3VtLwr1hJGgSk0MhbKqOwLwzBspNrSXyw6DefC13y3eA4spgOWEoaClUpNMWCOUu6VTHcwzoeHNiLZf9qAmfd5TmDmACpGUpWy3DJZCubsCr9kdzJOyUc2Ho3mApvAry2b9L8XzQYc1f6gKQ1QiNAqxwx3frLrexLetYf+u/yPVPGIpkYWXgaBKXlyFnaYUCnDCA9bsvg7F161hv28gK0R5AiYq/w6PamR2Q2xSqHsRj8o933OhvsU2rH/2UCbNzcOYGYCFl4GzOk0slkK5ZMuvyk3MM7IhzYejeQCmzy3Nk5ipk3WXkbPKXlODR7yd1KnMCKkltJd7Dqx/9tAmLc2Di6mA5ZeBoEpNw4ndokQKscPS2SW7kc34pZ/lgCbNzbyNPIXg4Yc1f3gKg0eMjsulQxJmKSuR3jilH/b/IDjUc4v5kxWXoaDaXsOJ3UOx22DDN8c9K79kAhxUS/q/A2R7MzZa+75OuyKHw4x41xGbgWMS86y6TsGXraD+/yAri3WNPYXgvoGzmk38lnK4ixGvyr3MHLSXKw6zeRCmoCsEc4upkzWX0bO6XgyFnUObAI/K8tkllITrDkNq8KbAK1RzmDmA1YSBs4perIUNrJ30uswb2SWUl8sdXH/l0CYt3mOYCYA6kZSlfygKA0eMnQSpnAj5NqSENAi2b/ZPIDjbZq0vleCRlAVslwYN/aYUCxDCAtf8uv4EAixwX64PIxR9kyZ69Zahs4pevJaSqjsCQMwbKSVUhNsOE3mvoDX93lOLyZPFl26/5VbTjT1jkZuhExPHLHuRzYep0P5/LjOknI0t5fNBh7V/KArTVHydhLozE8cMtJdEBr3w8KbQKyt1PTyl4OGHtX+4GaNHvI77YMwbiTakl3sOLH/2UCbN3mOYWZN1hKGzak0slp2mFAsAwjLZNoSXqw78f+W/ICsbdW0vteAhh3pg1wJcXMN0LnADEvM9mp7lp6nA2xt6suXchZeaOp+eemRg00xdhuCOMOKy1gOwUc3YpZ/2wCZ93mOYCZPVl9Gzul7chbKqxASpPAjZJTSE2w6DefCmoCvrdY0vRfMRh+pqTRyFgqqbEd/KHd+Tsp7LDoNqQLVQK0tmnS8l4GGH5X93DIWiuZsCr8o9zBOhfssd03nwtTA462ZCKYCVl9Gz2l6MhfKqewJgAx3f07Jx3ti2X/ZAJu3eTI08heCxh7V/WBkzVPObAt/Kzd8joeHNWKWv9iA10st1XS/K9YShszpNDJaiuXsRj9kNzN0bmtTHqFD+fysCBHiSKZN6mq56YUcCXFmzVA+AzBuZJbSEKx2Mf/ZAJm3No4vGlfMegaBKXuODVMydW0DMGvk2tJebHYNqMLXfLc2Di3mA9ZfRs6peXIWCqksCr9ni02hunssds3kQtXA4y3WNL0XgYYflf3cMlkK5uwKv2R3fw7LOwBegWvTvIDjrdY0vOvWXQbM6XtyWorl7EYDMGxkl5ITbHYN58KbgK0RziwaV4GGHxX/oCiNUrI5br8oN33Oy7ssOY3kgpsArq3XdPIXgsYeVbAgKU1R8neSp/Bs2I7Jh3gil/+WwJg3Nc4upk9WXgbO6XoyWrUOQG6ETFvbstJe7DqNq0KZwKwR4oidK/o6BsypeDJdCubQEqSwbySXkl0sObH/2UCZ93nOLeZM1l9Gzul7cluKqVAohYx3MM6GxzQi2f/agNdLLZq08lfNxhyVs+AqMUqprAk/ZPd9zoZHe+KWv9q8gKxt1gimTBZfRoGpeLIWyqlQEukwb2SWEl5Tno3vQps8tzVOYCZMVhIGzil6Tg1TcnQSpPBtZNqSXRAi2YPrr+iLLdaIiuvWXcbOKXvyFUqrbAq/KTcwMtITbHYN58LUgKyt10iKKOpGHumpeI4hNrJ0kqSwbqSWUhMsOo2pgpiArm2atPIXgboGzil7chb2snWSpkrLZJVSX2w78f/ZQJn3ec4t5kzWX0bO6XtyW4qrEBLrMG9kllJcbHRxxz08K8gR8pze76r8uv9Vzt9nNgjQMEcTCFiye6kGXjdD/gCRdzXOL2ZN1hJGgpVNHmc1jkN9UJlZW7L4KkBKMcS+uDjIEfRIpgOWXAbO6TSyFUqo7Eb/KncxTssHeGKXf9i8gKztmjS+V87GHNWzoGUNUfJ0EujPS2SVElysdc2rQpsArC2ayKZMFhIGzil48llKqmwJvyt3fLLSXuw6jeQC1EDjbdS0vlfPBlJV/SBl8UqoUBKk8G4k2tJfrDqNqD6A1Pd5TmCmTFZchs2VYCqNHHJ30qSwbaSVkhDsO82rQtTA4NJyNLUXznoGzSk0shbK5mwJPyoLZNqSE6x2jeRCmgCuUc4upkzWFkbO1WBmjR6ydi2DMG9YjsuHN2KV/5dAmfc2ji6mTapGH9Wx4Co39pPAfZZdEgwmfa+WnqJQK7yt2IInWUhr/+pp/MQIziRlTkV9FxwbinLsakYKoJMrre2LFTEIi7g/ej5r1twyHgqrLAu/K/cwzobHNCLaf5TAmfc0sjS/l80GHtX8oCtNUfJ2EqZMV07n/GjDno3kgpn8tzYOLyZO1hJGgSl4MhXKqKxFfyk3MDHuRzYejebCmzy3eU5gpk6WEoaCqXlyFzayOFLrsCNklVJdrDix/9lA1Lc2TixmA9ZeBs6pezIVdrJ3UqZMd32Oycd5YpZ/24Cat3lxiA0o6nqurRHciLFgTsL/1UzN2KwqeBAa8sP6P7yP0vINhSjqeq87gxyIsXYyf9KksG5k2pJdrDqN5gKaAK0Rzi/mT+pGHFWxYGYNHjJ2EqRwbeSXrkc2IpT/lkDUCy3WiKZMFl2Ggak38hRKqOwLwzTppJzSXCx1SWU9vIQp7dO0vxfNBh7pqXhyF0qorAv/ZPd8iki4ECYTP9AAmzc3Di6mAhZfRoHpNLIVyqnoiEM843Wy0l+QItl/2QCbiy3XtL8r1l3Gzik0MlqKq2wIPykLZNqSE6w5DagC1Dy3eU5gpk3qRlKV/eBmDVEydpKlDHd8DsrHN6KU/9q/PLc/zmAmTFZe+tWyoCtNH3J0Euuwb2SXkhOsds2oPoCbdzZOYOZNFl961bHgZk1T8jluvyj3fA7JxzUiln/aP7y3Ng4vJgNWXYbOqTTODR9yOJKkjHd9zslHeN6N5ILUQK6t1XTwq9ZehoHpeU4NHjI4EqUMd31OyQc0Itg/28Cb9zfOY1nr1lXGzOk0MhXK5KwIwxhfyuF7eRJejeYCmICtrdY0vReDhhzVseAqDVPyOJLrcCCYo73qF0GxRX6jvAst1rS9V88GUpX94CmxSqmsC/9kd33OyQc3otm/2r+8tzfyNPIXgoYd1bJgKjFKq2wJPyu3fo6GB3rilX/agJn3eU5g5gAqRh5pqTSyWbaydZKmTHcwzobHeCKWf9gA1EiR9Ise+mpGHlX/oCqNUTJ1EqUwI9iOy0c0opXDwplArG3WNLzXznoGzml7slkKqKwLwzAj5JVSEuw4DeX4PLhOF7GO2mlqfvru1VhKNHDN1ajFSg0e9Kg9Vlj3hf6Am3c0jmFmT9YShs2peXJZyuYsRUMwbeSW0l2QGvXG+P85TxJyn9lr6u5+bVXajie2HIF4w4rLRnbtexRdscbh/7yLhCAe2u1qeobEaXtyFUrnrAv/Kzd+joW7LHdN5oLUgK5t18imThZeBs5pN/JZyuasRQMYX8rhe3kSXo2rwpiAru3XNL8XzIZRFbAgZrFKqaxGvyv3fM7LBzbiln/ZvIwjPPI08ReCxh1pgY1aMUqprAkDMCOkldJcrDhNqgKYgKxt1DTx6GpruZX9IGaNHrJ3kqWwb1iOyYc3opT/lsDUNzXOLCZNFhHGzOk0jg1TcndSpzAipJeSXGw4jea+gJgLLZq0vxfMxlKV/dwyWQqqbAm/KEjYjsMHeGKXP9i8qFpF9Vea9Or5OtWyoGYNUTJ0UqZwbaTYLkc3Ytk/2wCb9zZyNL2XzEZSlbFgZo0djmwKAzAjJJbSXCw4jaq+gNT3eU5gpkxWXIbNqTVIsWmO7AC/ZPd/DsqHN5gx3P48gK0R7QgaV4JGUhWxH5Ex9Q5sAv8pN31y0lxsOI2qvoCYN3sOLuZO1l9GgRVkrM1YsjiSpLBvpJVo/5VajavC1ECvUkquWWvWXjrV/Rwa4CKJDy4DE0vYjsmHeCKWf9rAmfc3DmJaV4KGH9Wx4CmNHXI4kutwIJ4y1tnsMI2rQpsAr+3Vjhpr7v9+6ZVgZg0ecnRtO6qI2I7OB3ii2f/ZAJo3eTI08ivWE8bPqTRyF4qp7AmDMCKkl5ITLDvN5j6+fLc2ji3aV4IGHFWzoCtNULI4kugKy0WkumpJSiVQKj88tz6OYGZOVl1GzhVgKk0ccnbSpIx3fM6EuwTLpUHrr2mbQvBLGvypejp90dkOt/aYkLxSWgveMvC/Ex61gP64P4sV8Qie6Op+eemRXw419Y5UccAMS81g+DuWnrFRrSip3hPwSKZPVl2GzGl4sllKqmxE/yh3fc6G+wTLpUD+gJqLLZp08teCRh1Vs+AqMnayONKkMGwklVJerDvN5IKbwK8tmcimTJZeOu0WXDIWyuYsRj8odzTOhsd4YtoDwtTA462aNL3XzMYdVbMaji52ChSqx5NL2zL6rgScs4PCm0DjLdd0vteCRh7V/yAqDVPyOK6/Zbd+joYHNuKWQ8KbAK9tmjS+V4LGHZWy3DIV9rI4UuuwI2SVUl2sdnJDwpGArm3U9L8XzQYc1bAcDfFKquxG/yk3fE7LRzQejebCmIDnbZqIi/j5qm/qlWArDVKydZKmTHd/zspHeaKUv9hAmw2R9kwaaCp+uu7VWY21dQ5T7UMwbGSXkl6sO42rPoDVNzSOLmYBFl0Gz5VgKw1SsjxS64xZCyft+ywzjeaCmsDjbZq0vtfMRh+pqTROIOWdgHuDMG5kltIXbHYx0m2vbN4S8jTyl81GHZWy4CuNU/J3UqUwbhiOy0c0otk/l/yA4q3XdLyXgIZTqaX0IzFk3cUtA5sIWLJ6P5VeN0PofC5aR7KOGnUuZXnplcncJzYI0C4/IMtk2pITrHaN5EKaAK5R9kimT1Zehs4peQ4NUfJ1br8rtzCOywc3opW/loCYtzQOLyZPVl4GztZcMhd2m4J/lh5LaBrDeyx2zatC1ICsrdS0vmv1er4qEAMOsvayfK6/ZDcwDoZHN6KXf9v8uEstmnTy14JGHVWz4GbxSuasCb8rN38Oy8c0Itp/ljyArG3WCKZO1hIGzil4chYKqewLwzAipJTSE2w4TeR4PKGdReNRzv95rrxphYxdsKOOQ3vQGVkMofg7BM/llq/vLFpR4p7aeHmpubvGyQ4ipw5FONcdC1ljfWjAS7AAfoCTN3vOLqZPllyGzZVgKo1QsnUSpHBvWI7K+yx2zatC1ICsrdS0vyvuuTrVsVwyFormbAi/Zbd+jskHNB6Ba9O8gK+RzmDmA1YSBs4perIUNooWrr8rNzBOy8c3YpZD627tngPyD9p6eWnqvJdOXaVj21Ixg7BpZJTSEyw4jeSCmL+LLdUOGnTq+HiqFU4fYydcRS6/ZLd9Dss7LDlNq8KZwKyt1nTyV85GHxWy4CqNUrJ3UqcMd39Ohkc0IpV/2ICad3rOL+ZMafqtvs=";

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
