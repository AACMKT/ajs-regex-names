import Validator from '../nicknames_check';

test.each([
  ['numbers at the beiinning', { name: '99Ali_Baba', expects: false }],
  ['numbers at the end', { name: 'Ali_Baba99', expects: false }],
  ['underscore at the beiinning', { name: '_Ali_Baba99', expects: false }],
  ['underscore at the end', { name: 'Ali_Baba99_', expects: false }],
  ['dash at the beiinning', { name: '-Ali_Baba99', expects: false }],
  ['dash at the end', { name: 'Ali_Baba99-', expects: false }],
  ['contains cyrillic letters', { name: 'Али_Baba', expects: false }],
  ['contains more than three numbers in a row', { name: 'Ali_7777_Baba', expects: false }],
  ['proper nickname', { name: 'Ali_333_Baba-22-_Gassan_1_ibn_Hattab', expects: true }],
])('testing nicknames input for %s', (_, data) => {
  const checkResult = new Validator(data.name);
  expect(checkResult.validateUsername()).toBe(data.expects);
});
