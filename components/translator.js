const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {
  /**
   * Function that translates text from american to british
   * @param {String} locale 
   * @param {String} text 
   */
  translate(locale, text) {
    if (!['american-to-british', 'british-to-american'].includes(locale)) return { error: 'Invalid value for locale field' };

    let dictionary = locale === 'american-to-british' ? {
      ...americanOnly,
      ...americanToBritishSpelling,
      ...Object.fromEntries(Object.entries(americanToBritishTitles).map(
        item => [item[0], item[1][0].toLocaleUpperCase() + item[1].slice(1)]
      ))
    } : {
      ...britishOnly,
      ...Object.fromEntries(Object.entries(americanToBritishSpelling).map(
        item => [item[1], item[0]]
      )),
      ...Object.fromEntries(Object.entries(americanToBritishTitles).map(
        item => [item[1], item[0][0].toLocaleUpperCase() + item[0].slice(1)]
      ))
    }

    let translation = text;

    let timeRegEx = new RegExp(`\\d\\d?${locale === 'american-to-british' ? ':' : '\\.'}\\d\\d?`, 'g');
    for (const t of translation.matchAll(timeRegEx)) {
      translation = translation.replace(t[0], this._highlight(`${t[0].replace(/:|\./, t[0].includes(':') ? '.' : ':')}`));
    }

    for (const i in dictionary) {
      if (translation.toLowerCase().includes(i)) {
        translation = translation.replaceAll(new RegExp(`\\b${i.replace('.', '\\.')}(?=\\s|$|\\.)`, 'gi'), this._highlight(dictionary[i]));
      }
    }

    if (translation.match(/^[A-Za-z]/)) translation = translation[0].toUpperCase() + translation.slice(1);

    return {text, translation: translation === text ? 'Everything looks good to me!' : translation};
  }

  /**
   * Helper function to wrap a string in a span element with the class "highlight"
   * @param {String} str 
   * @returns 
   */
  _highlight(str) {
    return `<span class="highlight">${str}</span>`;
  }
}

module.exports = Translator;