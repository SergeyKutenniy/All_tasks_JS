// За сколько дней Улитка может выбраться с колодца
// За 1 день улитка проползает 7 м.
// За одну ночь сползает на 2 м.
// Функция calcDays() принимает глубину колодца в м.

function calcDays(depth) {
  let path = 0;
  let days = 0;
  while (depth > path) {
    path += 7;
    days += 1;
    if (depth <= path) {
      break;
    }
    path -= 2;
  }
  console.log(days);
}

calcDays(42);
calcDays(17);
calcDays(18);

// Вариант 2

const item = function (items) {
  const a = 7;
  const b = 2;

  let x = items / (a - b);

  return Math.round(x);
};

calcDays(42);
calcDays(17);
calcDays(18);
