# Nicknames validation via regex
---
[![Build status](https://ci.appveyor.com/api/projects/status/au7tu7dnujtguo67?svg=true)](https://ci.appveyor.com/project/AACMKT/ajs-destructuring)

### Описание

Реализован класс Validator с методом validateUsername, который проверяет имя пользователя с помощью регулярных выражений на соответствие следующим правилам:

Допустимы только латинские буквы, символы тире -, подчёркивания _ и цифры (0-9);
Имя не должно содержать подряд более трёх цифр, а также начинаться и заканчиваться цифрами, символами подчёркивания или тире.

---

Обеспечено покрытие тестами.
