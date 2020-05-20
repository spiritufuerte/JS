function letterCount(word, letter) {
    const wordLowerCase = word.toLowerCase();
    const letterLowerCase = letter.toLowerCase();
    const wordWithoutLetter = wordLowerCase.replace(new RegExp(letterLowerCase, "g"), '');
    return word.length - wordWithoutLetter.length;
}

letterCount("atata", "a");
