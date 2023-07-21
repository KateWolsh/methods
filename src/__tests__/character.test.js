import { Character } from '../character';

describe('Validation data', () => {
    test('should create a character with valid types', () => {
        const types = ["Bowman", "Swordsman", "Magician", "Daemon", "Undead", "Zombie"];
        types.forEach(type => {
            const character = new Character('John', type);
            expect(character.name).toBe('John');
            expect(character.type).toBe(type);
            expect(character.health).toBe(100);
            expect(character.level).toBe(1);
        });
    });

    test('invalid name: too short', () => {
        expect(() => new Character('A', 'Bowman')).toThrow(Error('Название должно состоять из больше 2 и меньше 10 символов'));
    });

    test('invalid name: too long', () => {
        expect(() => new Character('David Backham', 'Bowman')).toThrow(Error('Название должно состоять из больше 2 и меньше 10 символов'));
    });

    test('invalid type', () => {
        expect(() => new Character('Alice', 'Warrior')).toThrow(Error('Такого типа не существует'));
    });

    test('empty name', () => {
        expect(() => new Character('', 'Swordsman')).toThrow(Error('Название должно состоять из больше 2 и меньше 10 символов'));
    });

    test('empty name', () => {
        expect(() => new Character('', 'Swordsman')).toThrow(Error('Название должно состоять из больше 2 и меньше 10 символов'));
    });

    test('should increase level by 1 and update attack and defence by 20%', () => {
        const character = new Character('John', 'Swordsman');

        // Уровень атаки и защиты до levelUp
        const attackBefore = character.attack;
        const defenceBefore = character.defence;

        character.levelUp();

        // Уровень атаки и защиты после levelUp
        const attackAfter = character.attack;
        const defenceAfter = character.defence;

        // Проверка, что уровень увеличился на 1
        expect(character.level).toBe(2);

        // Проверка, что уровень атаки и защиты увеличился на 20%
        expect(attackAfter).toBe(Math.round(attackBefore * 1.2));
        expect(defenceAfter).toBe(Math.round(defenceBefore * 1.2));
    });

    // Тест для метода damage(points)
    test('should update health correctly after taking damage', () => {
        const character = new Character('John', 'Swordsman');

        // Уровень здоровья до получения урона
        const healthBefore = character.health;

        // Применяем урон 30 единиц
        character.damage(30);

        // Уровень здоровья после получения урона
        const healthAfter = character.health;

        // Проверка, что уровень здоровья уменьшился правильно
        expect(healthAfter).toBe(Math.round(healthBefore - 30 * (1 - character.defence / 100)));
    });

    test('should update health correctly after taking damage', () => {
        const character = new Character('John', 'Swordsman');
        const healthBefore = 0;
        character.damage(30);
        expect("Нельзя рассчитать урон с нулевым здоровьем");

    });


});

