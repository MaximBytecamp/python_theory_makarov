







> «Разбираться в основах — значит экономить время в будущем.»





[Практика: итераторы и итерируемые объекты в Python](https://buildin.ai/fd6a510e-09f0-4fd9-a8c5-319bae8afe52)



**Паспорт темы**

    Категория: синтаксис и базовые концепции

    Уровень: начальный

    Связанные темы: циклы, генераторы

    Зачем это знать: понимать, как работает перебор

---

В Python есть два основных способа сортировки:

```Python
sort()
sorted()
```

Оба метода могут использовать **параметр `key`**, который задаёт **правило сортировки**.

---

# Разница между `sort()` и `sorted()`

|функция|описание|
|-|-|
|`list.sort()`|сортирует список **на месте (in place)**|
|`sorted()`|возвращает **новый отсортированный список**|

---

# Метод `sort()`

```Python
numbers = [4,1,3,2]

numbers.sort()

print(numbers)
```

Результат:

```Python
[1,2,3,4]
```

Особенности:

- изменяет исходный список

- возвращает `None`

---

# Функция `sorted()`

```Python
numbers = [4,1,3,2]

result = sorted(numbers)

print(result)
print(numbers)
```

Результат:

```Python
[1,2,3,4]
[4,1,3,2]
```

Особенности:

- создаёт **новый список**

- оригинальный список **не изменяется**

---

# Параметр `key`

`key` — это функция, которая возвращает **значение для сравнения**.

Python сортирует **не сами элементы**, а **значения, которые возвращает функция key**.

---

# Общий синтаксис

```Python
sorted(iterable, key=function)
```

или

```Python
list.sort(key=function)
```

---

# Пример №1

Сортировка строк по длине

```Python
words = ["яблоко", "груша", "банан", "слива"]

result = sorted(words, key=len)

print(result)
```

Результат:

```Python
['груша', 'слива', 'банан', 'яблоко']
```

---

# Пример №2

Сортировка кортежей по второму элементу

```Python
data = [(1,3),(4,1),(2,2)]

result = sorted(data, key=lambda x: x[1])

print(result)
```

Результат:

```Python
[(4,1), (2,2), (1,3)]
```

---

# Пример №3

Сортировка словарей по возрасту

```Python
people = [
    {"name":"Макс","age":22},
    {"name":"Максим","age":25},
    {"name":"Максимильян","age":27}
]

result = sorted(people, key=lambda x: x["age"])

print(result)
```

Результат:

```Python
[
 {'name':'Макс','age':22},
 {'name':'Максим','age':25},
 {'name':'Максимильян','age':27}
]
```

---

# Пример №4

Сортировка по абсолютному значению

```Python
numbers = [1,-3,-2,4,-1]

result = sorted(numbers, key=abs)

print(result)
```

Результат:

```Python
[1, -1, -2, -3, 4]
```

---

# Пример №5

Сортировка по количеству гласных

```Python
words = ["банан","киви","арбуз","яблоко"]

result = sorted(words, key=lambda word: sum(1 for letter in word if letter in "аеёиоуыэюя"))

print(result)
```

Результат:

```Python
['банан', 'киви', 'арбуз', 'яблоко']
```

---

# Пример №6

Сортировка кортежей по сумме элементов

```Python
data = [(1,1),(1,2),(3,0),(2,2)]

result = sorted(data, key=lambda x: x[0] + x[1])

print(result)
```

Результат:

```Python
[(1,1), (1,2), (3,0), (2,2)]
```

---

# Пример №7

Сортировка по нескольким параметрам

```Python
data = [(1,3),(1,2),(4,1),(2,2)]

result = sorted(data, key=lambda x: (x[0], x[1]))

print(result)
```

Результат:

```Python
[(1,2),(1,3),(2,2),(4,1)]
```

Сначала сортировка по **первому элементу**, затем по **второму**.

---

# Пример №8

Сортировка по сумме квадратов

```Python
data = [(1,1),(1,2),(3,0),(2,2)]

result = sorted(data, key=lambda x: x[0]**2 + x[1]**2)

print(result)
```

Результат:

```Python
[(1,1),(1,2),(3,0),(2,2)]
```

---

# Обратная сортировка

Можно использовать параметр `reverse=True`.

```Python
numbers = [1,5,3,2]

print(sorted(numbers, reverse=True))
```

Результат:

```Python
[5,3,2,1]
```

---

# Функции, которые тоже используют `key`

---

# `min()`

Находит минимальный элемент.

```Python
words = ["яблоко","груша","слива"]

print(min(words, key=len))
```

Результат:

```Python
слива
```

---

# `max()`

Находит максимальный элемент.

```Python
words = ["яблоко","груша","слива"]

print(max(words, key=len))
```

Результат:

```Python
яблоко
```

---

# `heapq.nsmallest()`

Находит **n наименьших элементов**.

```Python
import heapq

numbers = [5,2,8,1,9]

print(heapq.nsmallest(3, numbers))
```

Результат:

```Python
[1,2,5]
```

---

# `heapq.nlargest()`

Находит **n наибольших элементов**.

```Python
import heapq

numbers = [5,2,8,1,9]

print(heapq.nlargest(2, numbers))
```

Результат:

```Python
[9,8]
```

---

# `itertools.groupby()`

Группирует элементы по ключу.

```Python
from itertools import groupby

data = ["apple","apricot","banana","blueberry"]

data.sort(key=lambda x: x[0])

for key, group in groupby(data, key=lambda x: x[0]):
    print(key, list(group))
```

Результат:

```Python
a ['apple','apricot']
b ['banana','blueberry']
```

---

# Как Python сортирует

Python использует алгоритм **Timsort**.

Особенности:

```Python
O(n log n)
стабильная сортировка
очень эффективен для частично отсортированных данных
```

---

# Итог

Сортировка в Python позволяет:

```Python
сортировать списки
сортировать сложные структуры
задавать собственные правила сортировки
использовать несколько критериев
```

---

# Главное правило

```Python
sorted(data, key=function)
```

Python:

```Python
1 берет элемент
2 применяет key
3 сортирует по результату
```

---
