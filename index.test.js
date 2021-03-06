const Tinycron = require('./index.js');

const second = 1000;
const minute = 60 * second;
const hour = 60 * minute;
const day = 24 * hour;
const month = 30 * day;
const year = 365 * day;

describe('Spanish', () => {
  test("should return a 'Hace 8 días", () => {
    const date = new Date().getTime() - (day * 8 + hour);
    const tinycron = new Tinycron(new Date(date), 'es');
    const result = tinycron.toNow();
    expect(result).toBe('Hace 8 días');
  });

  test("should return a 'Hace 5 horas", () => {
    const date = new Date().getTime() - hour * 5;
    const tinycron = new Tinycron(new Date(date), 'es');
    const result = tinycron.toNow();
    expect(result).toBe('Hace 5 horas');
  });

  test("should return a 'Hace 2 minutos", () => {
    const date = new Date().getTime() - minute * 2;
    const tinycron = new Tinycron(new Date(date), 'es');
    const result = tinycron.toNow();
    expect(result).toBe('Hace 2 minutos');
  });

  test("should return a 'Hace unos segundos", () => {
    const date = new Date().getTime() - second * 6;
    const tinycron = new Tinycron(new Date(date), 'es');
    const result = tinycron.toNow();
    expect(result).toBe('Hace unos segundos');
  });

  test("should return a 'Hace una hora'", () => {
    const date = new Date().getTime() - hour;
    const tinycron = new Tinycron(new Date(date), 'es');
    const result = tinycron.toNow();
    expect(result).toBe('Hace una hora');
  });

  test("should return a 'Hace un minuto'", () => {
    const date = new Date().getTime() - minute;
    const tinycron = new Tinycron(new Date(date), 'es');
    const result = tinycron.toNow();
    expect(result).toBe('Hace un minuto');
  });

  test("should return a 'Hace un mes'", () => {
    const date = new Date().getTime() - month;
    const tinycron = new Tinycron(new Date(date), 'es');
    const result = tinycron.toNow();
    expect(result).toBe('Hace un mes');
  });

  test("should return a 'Hace 6 meses'", () => {
    const date = new Date().getTime() - month * 6;
    const tinycron = new Tinycron(new Date(date), 'es');
    const result = tinycron.toNow();
    expect(result).toBe('Hace 6 meses');
  });

  test("should return a 'Hace un año'", () => {
    const date = new Date().getTime() - year;
    const tinycron = new Tinycron(new Date(date), 'es');
    const result = tinycron.toNow();
    expect(result).toBe('Hace un año');
  });

  test("should return a 'Hace 22 años'", () => {
    const date = new Date(1998, 9, 19).getTime();
    const tinycron = new Tinycron(new Date(date), 'es');
    const result = tinycron.to(new Date(2021, 7, 10));
    expect(result).toBe('Hace 22 años');
  });
});

describe('English', () => {
  test("should return a '8 days ago", () => {
    const date = new Date().getTime() - (day * 8 + hour);
    const tinycron = new Tinycron(new Date(date));
    const result = tinycron.toNow();
    expect(result).toBe('8 days ago');
  });

  test("should return a '5 hours ago", () => {
    const date = new Date().getTime() - hour * 5;
    const tinycron = new Tinycron(new Date(date));
    const result = tinycron.toNow();
    expect(result).toBe('5 hours ago');
  });

  test("should return a '2 minutes ago", () => {
    const date = new Date().getTime() - minute * 2;
    const tinycron = new Tinycron(new Date(date));
    const result = tinycron.toNow();
    expect(result).toBe('2 minutes ago');
  });

  test("should return a 'Some seconds ago", () => {
    const date = new Date().getTime() - second * 6;
    const tinycron = new Tinycron(new Date(date));
    const result = tinycron.toNow();
    expect(result).toBe('Some seconds ago');
  });

  test("should return a 'An hour ago", () => {
    const date = new Date().getTime() - hour;
    const tinycron = new Tinycron(new Date(date));
    const result = tinycron.toNow();
    expect(result).toBe('An hour ago');
  });

  test("should return a 'A minute ago", () => {
    const date = new Date().getTime() - minute;
    const tinycron = new Tinycron(new Date(date));
    const result = tinycron.toNow();
    expect(result).toBe('A minute ago');
  });

  test("should return a 'A month ago", () => {
    const date = new Date().getTime() - month;
    const tinycron = new Tinycron(new Date(date));
    const result = tinycron.toNow();
    expect(result).toBe('A month ago');
  });

  test("should return a '6 months ago", () => {
    const date = new Date().getTime() - month * 6;
    const tinycron = new Tinycron(new Date(date));
    const result = tinycron.toNow();
    expect(result).toBe('6 months ago');
  });

  test("should return a 'A year ago", () => {
    const date = new Date().getTime() - year;
    const tinycron = new Tinycron(new Date(date));
    const result = tinycron.toNow();
    expect(result).toBe('A year ago');
  });

  test("should return a '22 years ago", () => {
    const date = new Date(1998, 9, 19).getTime();
    const tinycron = new Tinycron(new Date(date));
    const result = tinycron.to(new Date(2021, 7, 10));
    expect(result).toBe('22 years ago');
  });
});

describe('Portuguese Brazil', () => {
  test("should return a '8 dias atrás", () => {
    const date = new Date().getTime() - (day * 8 + hour);
    const tinycron = new Tinycron(new Date(date), 'pt-br');
    const result = tinycron.toNow();
    expect(result).toBe('8 dias atrás');
  });

  test("should return a '5 horas atrás", () => {
    const date = new Date().getTime() - hour * 5;
    const tinycron = new Tinycron(new Date(date), 'pt-br');
    const result = tinycron.toNow();
    expect(result).toBe('5 horas atrás');
  });

  test("should return a '2 minutos atrás", () => {
    const date = new Date().getTime() - minute * 2;
    const tinycron = new Tinycron(new Date(date), 'pt-br');
    const result = tinycron.toNow();
    expect(result).toBe('2 minutos atrás');
  });

  test("should return a 'Há alguns segundos", () => {
    const date = new Date().getTime() - second * 6;
    const tinycron = new Tinycron(new Date(date), 'pt-br');
    const result = tinycron.toNow();
    expect(result).toBe('Há alguns segundos');
  });

  test("should return a 'Há uma hora", () => {
    const date = new Date().getTime() - hour;
    const tinycron = new Tinycron(new Date(date), 'pt-br');
    const result = tinycron.toNow();
    expect(result).toBe('Há uma hora');
  });

  test("should return a 'Há um minuto", () => {
    const date = new Date().getTime() - minute;
    const tinycron = new Tinycron(new Date(date), 'pt-br');
    const result = tinycron.toNow();
    expect(result).toBe('Há um minuto');
  });

  test("should return a 'Há um mês", () => {
    const date = new Date().getTime() - month;
    const tinycron = new Tinycron(new Date(date), 'pt-br');
    const result = tinycron.toNow();
    expect(result).toBe('Há um mês');
  });

  test("should return a '6 meses atrás", () => {
    const date = new Date().getTime() - month * 6;
    const tinycron = new Tinycron(new Date(date), 'pt-br');
    const result = tinycron.toNow();
    expect(result).toBe('6 meses atrás');
  });

  test("should return a 'Há um ano", () => {
    const date = new Date().getTime() - year;
    const tinycron = new Tinycron(new Date(date), 'pt-br');
    const result = tinycron.toNow();
    expect(result).toBe('Há um ano');
  });

  test("should return a '22 anos atrás", () => {
    const date = new Date(1998, 9, 19).getTime();
    const tinycron = new Tinycron(new Date(date), 'pt-br');
    const result = tinycron.to(new Date(2021, 7, 10));
    expect(result).toBe('22 anos atrás');
  });
});
