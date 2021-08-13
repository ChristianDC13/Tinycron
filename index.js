const locales = require('./src/locales.json');

module.exports = class Tinycron {
  constructor(date, lang = 'en') {
    this.date = date;
    this.locale = locales[lang];
  }

  toNow() {
    return this.to(new Date());
  }

  to(date) {
    const diff = date.getTime() - this.date.getTime();

    const seconds = diff / 1000;
    const minutes = seconds / 60;
    const hours = minutes / 60;
    const days = hours / 24;
    const months = days / 30;
    const years = days / 365;

    if (Math.floor(years) && Math.floor(years) < 2) {
      return this.locale.oneYear;
    }

    if (Math.floor(years)) {
      return this.locale.years.replace('$y', Math.floor(years));
    }

    if (Math.floor(months) && Math.floor(months) <= 2) {
      return this.locale.oneMonth;
    }

    if (Math.floor(months)) {
      return this.locale.months.replace('$M', Math.floor(months));
    }

    if (Math.floor(days) && Math.floor(days) <= 2) {
      return this.locale.oneDay;
    }

    if (Math.floor(days)) {
      return this.locale.days.replace('$d', Math.floor(days));
    }

    if (Math.floor(hours) && Math.floor(hours) <= 2) {
      return this.locale.oneHour;
    }
    if (Math.floor(hours)) {
      return this.locale.hours.replace('$h', Math.floor(hours));
    }

    if (Math.floor(minutes) == 1) {
      return this.locale.oneMinute;
    }

    if (Math.floor(minutes)) {
      return this.locale.minutes.replace('$m', Math.floor(minutes));
    }
    if (Math.floor(seconds)) {
      return this.locale.seconds.replace('$s', Math.floor(seconds));
    }

    return date.toLocaleDateString();
  }
};