const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');

suite('Unit Tests', () => {
    let translator = new Translator();
    let testResult;

    test('Translate Mangoes are my favorite fruit. to British English', () => {
        testResult = translator.translate('american-to-british', 'Mangoes are my favorite fruit.');
        assert.equal(testResult.text, 'Mangoes are my favorite fruit.');
        assert.equal(testResult.translation, 'Mangoes are my <span class="highlight">favourite</span> fruit.');
    })
    test('Translate I ate yogurt for breakfast. to British English', () => {
        testResult = translator.translate('american-to-british', 'I ate yogurt for breakfast.');
        assert.equal(testResult.text, 'I ate yogurt for breakfast.');
        assert.equal(testResult.translation, 'I ate <span class="highlight">yoghurt</span> for breakfast.');
    })
    test('Translate We had a party at my friend\'s condo. to British English', () => {
        testResult = translator.translate('american-to-british', 'We had a party at my friend\'s condo.');
        assert.equal(testResult.text, 'We had a party at my friend\'s condo.');
        assert.equal(testResult.translation, 'We had a party at my friend\'s <span class="highlight">flat</span>.');
    })
    test('Translate Can you toss this in the trashcan for me? to British English', () => {
        testResult = translator.translate('american-to-british', 'Can you toss this in the trashcan for me?');
        assert.equal(testResult.text, 'Can you toss this in the trashcan for me?');
        assert.equal(testResult.translation, 'Can you toss this in the <span class="highlight">bin</span> for me?');
    })
    test('Translate The parking lot was full. to British English', () => {
        testResult = translator.translate('american-to-british', 'The parking lot was full.');
        assert.equal(testResult.text, 'The parking lot was full.');
        assert.equal(testResult.translation, 'The <span class="highlight">car park</span> was full.');
    })
    test('Translate Like a high tech Rube Goldberg machine. to British English', () => {
        testResult = translator.translate('american-to-british', 'Like a high tech Rube Goldberg machine.');
        assert.equal(testResult.text, 'Like a high tech Rube Goldberg machine.');
        assert.equal(testResult.translation, 'Like a high tech <span class="highlight">Heath Robinson device</span>.');
    })
    test('Translate To play hooky means to skip class or work. to British English', () => {
        testResult = translator.translate('american-to-british', 'To play hooky means to skip class or work.');
        assert.equal(testResult.text, 'To play hooky means to skip class or work.');
        assert.equal(testResult.translation, 'To <span class="highlight">bunk off</span> means to skip class or work.');
    })
    test('Translate No Mr. Bond, I expect you to die. to British English', () => {
        testResult = translator.translate('american-to-british', 'No Mr. Bond, I expect you to die.');
        assert.equal(testResult.text, 'No Mr. Bond, I expect you to die.');
        assert.equal(testResult.translation, 'No <span class="highlight">Mr</span> Bond, I expect you to die.');
    })
    test('Translate Dr. Grosh will see you now. to British English', () => {
        testResult = translator.translate('american-to-british', 'Dr. Grosh will see you now.');
        assert.equal(testResult.text, 'Dr. Grosh will see you now.');
        assert.equal(testResult.translation, '<span class="highlight">Dr</span> Grosh will see you now.');
    })
    test('Translate Lunch is at 12:15 today. to British English', () => {
        testResult = translator.translate('american-to-british', 'Lunch is at 12:15 today.');
        assert.equal(testResult.text, 'Lunch is at 12:15 today.');
        assert.equal(testResult.translation, 'Lunch is at <span class="highlight">12.15</span> today.');
    })
    test('Translate We watched the footie match for a while. to American English', () => {
        testResult = translator.translate('british-to-american', 'We watched the footie match for a while.');
        assert.equal(testResult.text, 'We watched the footie match for a while.');
        assert.equal(testResult.translation, 'We watched the <span class="highlight">soccer</span> match for a while.');
    })
    test('Translate Paracetamol takes up to an hour to work. to American English', () => {
        testResult = translator.translate('british-to-american', 'Paracetamol takes up to an hour to work.');
        assert.equal(testResult.text, 'Paracetamol takes up to an hour to work.');
        assert.equal(testResult.translation, '<span class="highlight">Tylenol</span> takes up to an hour to work.');
    })
    test('Translate First, caramelise the onions. to American English', () => {
        testResult = translator.translate('british-to-american', 'First, caramelise the onions.');
        assert.equal(testResult.text, 'First, caramelise the onions.');
        assert.equal(testResult.translation, 'First, <span class="highlight">caramelize</span> the onions.');
    })
    test('Translate I spent the bank holiday at the funfair. to American English', () => {
        testResult = translator.translate('british-to-american', 'I spent the bank holiday at the funfair.');
        assert.equal(testResult.text, 'I spent the bank holiday at the funfair.');
        assert.equal(testResult.translation, 'I spent the <span class="highlight">public holiday</span> at the <span class="highlight">carnival</span>.');
    })
    test('Translate I had a bicky then went to the chippy. to American English', () => {
        testResult = translator.translate('british-to-american', 'I had a bicky then went to the chippy.');
        assert.equal(testResult.text, 'I had a bicky then went to the chippy.');
        assert.equal(testResult.translation, 'I had a <span class="highlight">cookie</span> then went to the <span class="highlight">fish-and-chip shop</span>.');
    })
    test('Translate I\'ve just got bits and bobs in my bum bag. to American English', () => {
        testResult = translator.translate('british-to-american', 'I\'ve just got bits and bobs in my bum bag.');
        assert.equal(testResult.text, 'I\'ve just got bits and bobs in my bum bag.');
        assert.equal(testResult.translation, 'I\'ve just got <span class="highlight">odds and ends</span> in my <span class="highlight">fanny pack</span>.');
    })
    test('Translate The car boot sale at Boxted Airfield was called off. to American English', () => {
        testResult = translator.translate('british-to-american', 'The car boot sale at Boxted Airfield was called off.');
        assert.equal(testResult.text, 'The car boot sale at Boxted Airfield was called off.');
        assert.equal(testResult.translation, 'The <span class="highlight">swap meet</span> at Boxted Airfield was called off.');
    })
    test('Translate Have you met Mrs Kalyani? to American English', () => {
        testResult = translator.translate('british-to-american', 'Have you met Mrs Kalyani?');
        assert.equal(testResult.text, 'Have you met Mrs Kalyani?');
        assert.equal(testResult.translation, 'Have you met <span class="highlight">Mrs.</span> Kalyani?');
    })
    test('Translate Prof Joyner of King\'s College, London. to American English', () => {
        testResult = translator.translate('british-to-american', 'Prof Joyner of King\'s College, London.');
        assert.equal(testResult.text, 'Prof Joyner of King\'s College, London.');
        assert.equal(testResult.translation, '<span class="highlight">Prof.</span> Joyner of King\'s College, London.');
    })
    test('Translate Tea time is usually around 4 or 4.30. to American English', () => {
        testResult = translator.translate('british-to-american', 'Tea time is usually around 4 or 4.30.');
        assert.equal(testResult.text, 'Tea time is usually around 4 or 4.30.');
        assert.equal(testResult.translation, 'Tea time is usually around 4 or <span class="highlight">4:30</span>.');
    })
    test('Highlight translation in Mangoes are my favorite fruit.', () => {
        testResult = translator.translate('american-to-british', 'Mangoes are my favorite fruit.');
        assert.include(testResult.translation, '<span class="highlight">favourite</span>');
    })
    test('Highlight translation in I ate yogurt for breakfast.', () => {
        testResult = translator.translate('american-to-british', 'I ate yogurt for breakfast.');
        assert.include(testResult.translation, '<span class="highlight">yoghurt</span>');
    })
    test('Highlight translation in We watched the footie match for a while.', () => {
        testResult = translator.translate('british-to-american', 'We watched the footie match for a while.');
        assert.include(testResult.translation, '<span class="highlight">soccer</span>');
    })
    test('Highlight translation in Paracetamol takes up to an hour to work.', () => {
        testResult = translator.translate('british-to-american', 'Paracetamol takes up to an hour to work.');
        assert.include(testResult.translation, '<span class="highlight">Tylenol</span>');
    })
});
