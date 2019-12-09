import attacksDesc from './app';

test('get special attacks', () => {
  const obj = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: [{
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон',
    },
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...',
      // <- обратите внимание, описание "засекречено"
    },
    ],
  };

  const expected = [
    [8, 'Двойной выстрел', 'http://...', 'Двойной выстрел наносит двойной урон'],
    [9, 'Нокаутирующий удар', 'http://...', 'Описание недоступно'],
  ];
  const recieved = attacksDesc(obj);

  expect(recieved).toStrictEqual(expected);
});
