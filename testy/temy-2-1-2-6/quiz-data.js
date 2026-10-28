/* Тест ДУП.02 по модулю 2 (главы 2.1–2.6) справочника по Python. Файл собран скриптом — руками не править.

   Ключи и разбор лежат в SECRET: JSON, перемешанный XOR с SHA-256 от соли,
   в base64. Это барьер от беглого чтения исходника, а не защита. */

const QUIZ = {
 "id": "dup02-test-t26",
 "prefix": "PY26",
 "title": "Модуль 2 · условия: bool, and/or/not, if/elif/else, тернарный оператор",
 "minutes": 40,
 "salt": "dup02-py26-2026-oct",
 "context": "Во всех заданиях код лежит в файле main.py и запускается командой python main.py, Python 3.12. На картинках терминала синим показано то, что набрал пользователь. Карточки перетаскиваются мышью или пальцем; можно и без перетаскивания: нажмите карточку, затем место, куда её поставить.",
 "grades": [
  {
   "min": 17,
   "mark": 5,
   "label": "отлично"
  },
  {
   "min": 13,
   "mark": 4,
   "label": "хорошо"
  },
  {
   "min": 9,
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
  "2.1": {
   "title": "Логический тип: and, or, not",
   "url": "../../temy/10-logicheskiy-tip/index.html"
  },
  "2.2": {
   "title": "Составление условий без ветвления",
   "url": "../../temy/11-sostavnye-usloviya/index.html"
  },
  "2.3": {
   "title": "Двойное сравнение и диапазоны",
   "url": "../../temy/12-dvoynoe-sravnenie/index.html"
  },
  "2.4": {
   "title": "Операторы ветвления: if, elif, else",
   "url": "../../temy/13-if-elif-else/index.html"
  },
  "2.5": {
   "title": "Вложенные условия",
   "url": "../../temy/14-vlozhennye-usloviya/index.html"
  },
  "2.6": {
   "title": "Тернарный условный оператор",
   "url": "../../temy/15-ternarnyy-operator/index.html"
  }
 },
 "questions": [
  {
   "id": "q01",
   "topic": "2.1–2.2 · значение выражения",
   "type": "sort",
   "text": "Каждое выражение из карточек напечатали через <code>print()</code> в отдельной программе. Переменных в программах нет.",
   "task": "Разложите карточки по трём группам: что напечатает <code>print()</code> — <code>True</code>, <code>False</code> — или программа остановится с ошибкой <code>NameError</code>.",
   "items": [
    "<code>5 &gt;= 5</code>",
    "<code>7 != 7</code>",
    "<code>\"True\" == True</code>",
    "<code>bool(\"0\")</code>",
    "<code>bool(0)</code>",
    "<code>not 3 &gt; 5</code>",
    "<code>True + True == 2</code>",
    "<code>bool(\"\")</code>",
    "<code>False and true</code>",
    "<code>true and False</code>"
   ],
   "buckets": [
    "True",
    "False",
    "NameError"
   ],
   "chapters": [
    "2.1",
    "2.2"
   ]
  },
  {
   "id": "q02",
   "topic": "2.1 · bool и числа",
   "type": "number",
   "text": "Программа складывает результаты четырёх проверок.",
   "task": "Определите, какое число напечатает программа, и введите его.",
   "code": "age = 17\nscore = 85\npassed = (age >= 16) + (score >= 90) + (score > 80) + (not age > 18)\nprint(passed)",
   "chapters": [
    "2.1"
   ]
  },
  {
   "id": "q03",
   "topic": "2.1 · порядок and, or, not",
   "type": "single",
   "text": "В программе три логические переменные и два вывода.",
   "task": "Выберите, что напечатает программа.",
   "code": "a = True\nb = False\nc = False\nprint(a or b and c)\nprint(not b and c)",
   "options": [
    "<code>True</code>, затем <code>False</code>",
    "<code>False</code>, затем <code>True</code>",
    "<code>False</code>, затем <code>False</code>",
    "<code>True</code>, затем <code>True</code>"
   ],
   "chapters": [
    "2.1"
   ]
  },
  {
   "id": "q04",
   "topic": "2.2 · условие словами и на Python",
   "type": "slots",
   "text": "Даны целые числа <code>A</code> и <code>B</code>. Есть четыре условия, записанные словами, и шесть выражений на Python.",
   "task": "К каждому условию перетащите выражение, которое даёт <code>True</code> ровно тогда, когда условие выполнено. Две карточки лишние.",
   "chips": [
    "A % 2 == 0 and B % 2 == 0",
    "A % 2 == 0 or B % 2 == 0",
    "(A % 2 == 0 and B % 2 != 0) or (A % 2 != 0 and B % 2 == 0)",
    "not (A % 2 == 0 or B % 2 == 0)",
    "not (A % 2 == 0 and B % 2 == 0)",
    "A % 2 != 0 or B % 2 != 0"
   ],
   "slots": [
    "Оба числа чётные",
    "Хотя бы одно число чётное",
    "Ровно одно число чётное",
    "Ни одно из чисел не чётное"
   ],
   "chapters": [
    "2.2"
   ]
  },
  {
   "id": "q05",
   "topic": "2.2 · хотя бы одно",
   "type": "multi",
   "text": "Даны целые числа <code>A</code>, <code>B</code> и <code>C</code>. Нужно проверить, есть ли среди них хотя бы одно отрицательное.",
   "task": "Отметьте все выражения, которые дают <code>True</code> ровно тогда, когда среди чисел есть отрицательное.",
   "options": [
    "<code>A &lt; 0 or B &lt; 0 or C &lt; 0</code>",
    "<code>A &lt; 0 and B &lt; 0 and C &lt; 0</code>",
    "<code>not (A &gt;= 0 and B &gt;= 0 and C &gt;= 0)</code>",
    "<code>not (A &lt; 0 or B &lt; 0 or C &lt; 0)</code>",
    "<code>A or B or C &lt; 0</code>",
    "<code>not (A &gt;= 0) and not (B &gt;= 0) and not (C &gt;= 0)</code>"
   ],
   "chapters": [
    "2.2"
   ]
  },
  {
   "id": "q06",
   "topic": "2.3 · цепочка сравнений",
   "type": "sort",
   "text": "В программе <code>x = 5</code>. Каждое выражение из карточек вычислили с этим значением.",
   "task": "Разложите карточки по двум группам: выражение даёт <code>True</code> или <code>False</code>.",
   "items": [
    "<code>1 &lt;= x &lt;= 5</code>",
    "<code>1 &lt; x &lt; 5</code>",
    "<code>5 &lt;= x &lt; 10</code>",
    "<code>1 &lt;= x &gt;= 3</code>",
    "<code>10 &gt; x &gt; 1</code>",
    "<code>x &gt;= 1 or x &lt;= 3</code>",
    "<code>0 &lt; x &lt;= 4</code>",
    "<code>3 &lt;= x &lt;= 1</code>",
    "<code>x &gt; 5 or x &lt; 0</code>"
   ],
   "buckets": [
    "True",
    "False"
   ],
   "chapters": [
    "2.3"
   ]
  },
  {
   "id": "q07",
   "topic": "2.3 · точка в прямоугольнике",
   "type": "single",
   "text": "Точка задана координатами <code>x</code> и <code>y</code>. Область на плоскости — прямоугольник: <ul><li><code>x</code> от 1 до 3;</li><li><code>y</code> от −3 до 1;</li><li>границы входят в область.</li></ul>",
   "task": "Выберите выражение, которое даёт <code>True</code> для точек области и <code>False</code> для всех остальных точек.",
   "options": [
    "<code>1 &lt;= x &lt;= 3 and -3 &lt;= y &lt;= 1</code>",
    "<code>1 &lt;= x &lt;= 3 or -3 &lt;= y &lt;= 1</code>",
    "<code>1 &lt;= x &lt;= 3 and -3 &lt;= y &gt;= 1</code>",
    "<code>1 &lt; x &lt; 3 and -3 &lt; y &lt; 1</code>"
   ],
   "chapters": [
    "2.3"
   ]
  },
  {
   "id": "q08",
   "topic": "2.4 · порядок веток",
   "type": "single",
   "text": "Программа выставляет буквенную оценку по баллам.",
   "task": "Выберите, что напечатает программа при <code>score = 95</code>.",
   "code": "score = 95\nif score >= 70:\n    grade = \"C\"\nelif score >= 80:\n    grade = \"B\"\nelif score >= 90:\n    grade = \"A\"\nelse:\n    grade = \"D\"\nprint(grade)",
   "options": [
    "<code>C</code>",
    "<code>A</code>",
    "<code>B</code>",
    "<code>D</code>"
   ],
   "chapters": [
    "2.4"
   ]
  },
  {
   "id": "q09",
   "topic": "2.4 · отдельные if и цепочка",
   "type": "number",
   "text": "В программе три проверки. Одна из них — цепочка <code>if</code>/<code>elif</code>, две другие — отдельные <code>if</code>.",
   "task": "Определите, какое число напечатает программа, и введите его.",
   "code": "n = 12\ncount = 0\nif n > 0:\n    count = count + 1\nif n % 2 == 0:\n    count = count + 10\nelif n % 3 == 0:\n    count = count + 100\nif n > 10:\n    count = count + 1000\nprint(count)",
   "chapters": [
    "2.4"
   ]
  },
  {
   "id": "q10",
   "topic": "2.4 · запись ветвления",
   "type": "line",
   "text": "Программа печатает прогноз по температуре. При запуске Python сообщил о синтаксической ошибке и не выполнил ни одной строки — даже подсказку ввода.",
   "task": "Нажмите строку, из-за которой программа не запускается.",
   "code": "temp = int(input(\"Температура: \"))\nif temp > 30:\n    print(\"Жарко\")\nelif 15 <= temp <= 30:\n    print(\"Тепло\")\nelse temp < 15:\n    print(\"Холодно\")\nprint(\"Прогноз готов\")",
   "chapters": [
    "2.4"
   ]
  },
  {
   "id": "q11",
   "topic": "2.4 · найти все ошибки",
   "type": "line",
   "many": true,
   "text": "Программа считает доставку по сумме заказа:<ul><li>от 5000 руб. — доставка бесплатная;</li><li>от 2000 руб. до 5000 руб. — 250 руб.;</li><li>меньше 2000 руб. — 500 руб.;</li><li>сумма может быть дробной, к оплате — сумма заказа вместе с доставкой.</li></ul>На картинке — как должна работать программа при сумме 2000 руб. Код ниже работает иначе.",
   "task": "Отметьте все строки, которые нужно исправить, чтобы программа выполняла правила из списка при любой сумме.",
   "code": "total = input(\"Сумма заказа, руб.: \")\nif total >= 5000:\n    delivery = 0\nelif total > 2000:\n    delivery = 250\nelse:\n    delivery = 500\nprint(f\"Доставка: {delivery} руб.\")\nprint(f\"К оплате: {total:.2f} руб.\")",
   "image": {
    "svg": "<svg viewBox=\"0 0 420 180\" style=\"max-width:420px;margin:0 auto\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"окно терминала\"><rect x=\"1.5\" y=\"1.5\" width=\"417\" height=\"177\" rx=\"8\" fill=\"#0B1230\" stroke=\"#020835\" stroke-width=\"3\"/><circle cx=\"22\" cy=\"20\" r=\"6\" fill=\"#FF5F57\"/><circle cx=\"42\" cy=\"20\" r=\"6\" fill=\"#FEBC2E\"/><circle cx=\"62\" cy=\"20\" r=\"6\" fill=\"#28C840\"/><text x=\"210.0\" y=\"25\" text-anchor=\"middle\" font-family=\"Roboto Mono,monospace\" font-size=\"12\" fill=\"#8E98BC\">ТЕРМИНАЛ</text><text x=\"24\" y=\"58\" font-family=\"Roboto Mono,monospace\" font-size=\"14\" xml:space=\"preserve\"><tspan fill=\"#8FE3B0\">$ </tspan><tspan fill=\"#E8ECF7\" font-weight=\"700\">python main.py</tspan></text><text x=\"24\" y=\"82\" font-family=\"Roboto Mono,monospace\" font-size=\"14\" xml:space=\"preserve\"><tspan fill=\"#E8ECF7\">Сумма заказа, руб.: </tspan><tspan fill=\"#6FB8E3\" font-weight=\"700\">2000</tspan></text><text x=\"24\" y=\"106\" font-family=\"Roboto Mono,monospace\" font-size=\"14\" xml:space=\"preserve\"><tspan fill=\"#E8ECF7\">Доставка: 250 руб.</tspan></text><text x=\"24\" y=\"130\" font-family=\"Roboto Mono,monospace\" font-size=\"14\" xml:space=\"preserve\"><tspan fill=\"#E8ECF7\">К оплате: 2250.00 руб.</tspan></text><text x=\"24\" y=\"154\" font-family=\"Roboto Mono,monospace\" font-size=\"14\" xml:space=\"preserve\"><tspan fill=\"#8FE3B0\" font-weight=\"700\">$ </tspan><tspan fill=\"#E8ECF7\">▌</tspan></text></svg>",
    "caption": "как должна работать программа · синим — ввод пользователя"
   },
   "chapters": [
    "2.4"
   ]
  },
  {
   "id": "q12",
   "topic": "2.5 · к какому if относится else",
   "type": "single",
   "text": "Программа проверяет посетителя на входе.",
   "task": "Выберите, что напечатает программа.",
   "code": "age = 16\nhas_ticket = False\nif age >= 18:\n    if has_ticket:\n        print(\"Вход разрешён\")\n    else:\n        print(\"Нет билета\")\nprint(\"Проверка окончена\")",
   "options": [
    "Одну строку: «Проверка окончена»",
    "Две строки: «Нет билета» и «Проверка окончена»",
    "Одну строку: «Нет билета»",
    "Ничего не напечатает"
   ],
   "chapters": [
    "2.5"
   ]
  },
  {
   "id": "q13",
   "topic": "2.5 · ветки вложенного условия",
   "type": "slots",
   "text": "Магазин считает скидку в процентах. <code>is_member</code> — участник ли покупатель клуба, <code>total</code> — сумма покупки в рублях.",
   "task": "Для каждого покупателя перетащите карточку с числом, которое напечатает программа. Карточку можно ставить несколько раз.",
   "code": "if is_member:\n    if total >= 3000:\n        discount = 15\n    else:\n        discount = 5\nelse:\n    if total >= 5000:\n        discount = 10\n    else:\n        discount = 0\nprint(discount)",
   "chips": [
    "0",
    "5",
    "10",
    "15"
   ],
   "slots": [
    "участник клуба, 3000 руб.",
    "участник клуба, 2999 руб.",
    "не участник, 6000 руб.",
    "не участник, 3000 руб.",
    "не участник, 5000 руб."
   ],
   "chapters": [
    "2.5"
   ]
  },
  {
   "id": "q14",
   "topic": "2.5 · собрать программу",
   "type": "order",
   "text": "Программа пропускает зрителей на сеанс:<ul><li>сначала спрашивает возраст;</li><li>о билете спрашивает только тех, кому 18 лет и больше;</li><li>на ответ «да» печатает «Проходите», на любой другой — «Нужен билет»;</li><li>тем, кому меньше 18, печатает «Только со взрослыми» и о билете не спрашивает.</li></ul>",
   "task": "Расставьте строки кода по порядку, чтобы программа работала по этим правилам. Первая строка — сверху. Отступы на карточках уже стоят.",
   "items": [
    "<code>age = int(input(\"Возраст: \"))</code>",
    "<code>if age &gt;= 18:</code>",
    "<code>    ticket = input(\"Билет: \")</code>",
    "<code>    if ticket == \"да\":</code>",
    "<code>        print(\"Проходите\")</code>",
    "<code>    else:</code>",
    "<code>        print(\"Нужен билет\")</code>",
    "<code>else:</code>",
    "<code>    print(\"Только со взрослыми\")</code>"
   ],
   "chapters": [
    "2.5"
   ]
  },
  {
   "id": "q15",
   "topic": "2.5 · отступ у else",
   "type": "single",
   "text": "Программа должна работать так:<ul><li>взрослому (18 и больше) с билетом — «Вход разрешён»;</li><li>взрослому без билета — «Нет билета»;</li><li>тому, кто младше 18, — только «Проверка окончена».</li></ul>В конце программа всегда печатает «Проверка окончена». На картинке — запуск для 15 лет с билетом: появилось «Нет билета».",
   "task": "Выберите исправление, после которого программа работает по правилам из списка.",
   "code": "age = int(input(\"Возраст: \"))\nanswer = input(\"Билет есть (да/нет): \")\nif age >= 18:\n    if answer == \"да\":\n        print(\"Вход разрешён\")\nelse:\n    print(\"Нет билета\")\nprint(\"Проверка окончена\")",
   "options": [
    "Сдвинуть строки 6 и 7 на четыре пробела вправо",
    "Сдвинуть только строку 6 на четыре пробела вправо",
    "Сдвинуть строки 4 и 5 на четыре пробела влево",
    "Заменить в строке 6 <code>else:</code> на <code>elif answer != \"да\":</code>"
   ],
   "image": {
    "svg": "<svg viewBox=\"0 0 420 204\" style=\"max-width:420px;margin:0 auto\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"окно терминала\"><rect x=\"1.5\" y=\"1.5\" width=\"417\" height=\"201\" rx=\"8\" fill=\"#0B1230\" stroke=\"#020835\" stroke-width=\"3\"/><circle cx=\"22\" cy=\"20\" r=\"6\" fill=\"#FF5F57\"/><circle cx=\"42\" cy=\"20\" r=\"6\" fill=\"#FEBC2E\"/><circle cx=\"62\" cy=\"20\" r=\"6\" fill=\"#28C840\"/><text x=\"210.0\" y=\"25\" text-anchor=\"middle\" font-family=\"Roboto Mono,monospace\" font-size=\"12\" fill=\"#8E98BC\">ТЕРМИНАЛ</text><text x=\"24\" y=\"58\" font-family=\"Roboto Mono,monospace\" font-size=\"14\" xml:space=\"preserve\"><tspan fill=\"#8FE3B0\">$ </tspan><tspan fill=\"#E8ECF7\" font-weight=\"700\">python main.py</tspan></text><text x=\"24\" y=\"82\" font-family=\"Roboto Mono,monospace\" font-size=\"14\" xml:space=\"preserve\"><tspan fill=\"#E8ECF7\">Возраст: </tspan><tspan fill=\"#6FB8E3\" font-weight=\"700\">15</tspan></text><text x=\"24\" y=\"106\" font-family=\"Roboto Mono,monospace\" font-size=\"14\" xml:space=\"preserve\"><tspan fill=\"#E8ECF7\">Билет есть (да/нет): </tspan><tspan fill=\"#6FB8E3\" font-weight=\"700\">да</tspan></text><text x=\"24\" y=\"130\" font-family=\"Roboto Mono,monospace\" font-size=\"14\" xml:space=\"preserve\"><tspan fill=\"#E8ECF7\">Нет билета</tspan></text><text x=\"24\" y=\"154\" font-family=\"Roboto Mono,monospace\" font-size=\"14\" xml:space=\"preserve\"><tspan fill=\"#E8ECF7\">Проверка окончена</tspan></text><text x=\"24\" y=\"178\" font-family=\"Roboto Mono,monospace\" font-size=\"14\" xml:space=\"preserve\"><tspan fill=\"#8FE3B0\" font-weight=\"700\">$ </tspan><tspan fill=\"#E8ECF7\">▌</tspan></text></svg>",
    "caption": "запуск программы · синим — ввод пользователя"
   },
   "chapters": [
    "2.5"
   ]
  },
  {
   "id": "q16",
   "topic": "2.6 · значение по условию",
   "type": "single",
   "text": "Программа выбирает скидку условным выражением и считает сумму к оплате.",
   "task": "Выберите, что напечатает программа.",
   "code": "total = 4800\ndiscount = 10 if total >= 5000 else 0\nprint(total * (100 - discount) / 100)",
   "options": [
    "<code>4800.0</code>",
    "<code>4320.0</code>",
    "<code>4800</code>",
    "<code>4320</code>"
   ],
   "chapters": [
    "2.6"
   ]
  },
  {
   "id": "q17",
   "topic": "2.6 · запись условного выражения",
   "type": "sort",
   "text": "Каждую строку записали в отдельный файл <code>main.py</code>. Переменные <code>x</code>, <code>n</code> и <code>enabled</code> в каждом файле уже заданы выше.",
   "task": "Разложите строки по двум группам: программа запустится без ошибки или не запустится из-за <code>SyntaxError</code>.",
   "items": [
    "<code>result = \"Да\" if x &gt; 5 else \"Нет\"</code>",
    "<code>result = if x &gt; 5 \"Да\" else \"Нет\"</code>",
    "<code>result = \"Да\" if x &gt; 5</code>",
    "<code>print(\"Чётное\" if n % 2 == 0 else \"Нечётное\")</code>",
    "<code>result = \"Да\" else \"Нет\" if x &gt; 5</code>",
    "<code>sign = \"+\" if x &gt;= 0 else \"-\"</code>",
    "<code>status = \"on\" if enabled else \"off\"</code>",
    "<code>result = \"Да\" if x &gt; 5: else \"Нет\"</code>"
   ],
   "buckets": [
    "Запустится без ошибки",
    "SyntaxError"
   ],
   "chapters": [
    "2.6"
   ]
  },
  {
   "id": "q18",
   "topic": "2.6 · if/else в одну строку",
   "type": "slots",
   "text": "Кинотеатр продаёт билеты: детям до 7 лет — бесплатно, остальным — 350 руб. В комментариях — как цену выбирала обычная конструкция <code>if</code>/<code>else</code>. В последней строке её заменяет условное выражение с тремя пропусками.",
   "task": "Перетащите в пропуски карточки так, чтобы <code>price</code> получала ту же цену при любом целом возрасте. Три карточки лишние.",
   "code": "# было:\n# if age < 7:\n#     price = 0\n# else:\n#     price = 350\n# стало:\nprice = ? if ? else ?",
   "chips": [
    "0",
    "350",
    "age >= 7",
    "age > 7",
    "age == 7",
    "\"0\""
   ],
   "slots": [
    "1-й пропуск",
    "2-й пропуск",
    "3-й пропуск"
   ],
   "chapters": [
    "2.6"
   ]
  },
  {
   "id": "q19",
   "topic": "2.2 и 2.6 · чётное или нечётное",
   "type": "multi",
   "text": "В переменной <code>n</code> лежит целое число от 0 и больше. Программа должна напечатать «Чётное» для чётного <code>n</code> и «Нечётное» для нечётного.",
   "task": "Отметьте все строки, которые печатают верное слово при любом таком <code>n</code>.",
   "options": [
    "<code>print(\"Чётное\" if n % 2 == 0 else \"Нечётное\")</code>",
    "<code>print(\"Нечётное\" if n % 2 == 1 else \"Чётное\")</code>",
    "<code>print(\"Чётное\" if n % 2 != 0 else \"Нечётное\")</code>",
    "<code>print(\"Чётное\" if n // 2 == 0 else \"Нечётное\")</code>",
    "<code>print(\"Нечётное\" if not n % 2 == 0 else \"Чётное\")</code>",
    "<code>print(\"Чётное\" if n / 2 == 0 else \"Нечётное\")</code>"
   ],
   "chapters": [
    "2.2",
    "2.6"
   ]
  },
  {
   "id": "q20",
   "topic": "2.3–2.4 · границы веток",
   "type": "sort",
   "text": "Программа описывает погоду по температуре. Пользователь запускал её несколько раз и вводил числа с карточек.",
   "task": "Разложите карточки по группам: какое слово программа напечатает для каждого числа.",
   "code": "t = float(input(\"Температура: \"))\nif t < 0:\n    print(\"Мороз\")\nelif t <= 15:\n    print(\"Холодно\")\nelif t < 25:\n    print(\"Тепло\")\nelse:\n    print(\"Жарко\")",
   "items": [
    "<code>-0.5</code>",
    "<code>0</code>",
    "<code>15</code>",
    "<code>15.5</code>",
    "<code>24.9</code>",
    "<code>25</code>",
    "<code>40</code>"
   ],
   "buckets": [
    "Мороз",
    "Холодно",
    "Тепло",
    "Жарко"
   ],
   "chapters": [
    "2.3",
    "2.4"
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
