const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
}

function getChar(code) {
    let morseCode = []
    //get morse code
    for(let i = 0; i < code.length; i += 2) {
        let sub = code.substring(i, i + 2)
        if(sub == '10') morseCode.push('.')
        else if(sub == '11') morseCode.push('-')
    }
    return MORSE_TABLE[morseCode.join('')]
}

function decode(expr) {
    let words = expr.split('**********')
    
    // get word in phrase
    for(let wordNumber = 0; wordNumber < words.length; wordNumber++) {
        let chars = []
        
        //get char in word
        for(let charNumber = 0; charNumber < words[wordNumber].length / 10; charNumber++) {
            let code = words[wordNumber].substring(charNumber * 10, 10 * ( charNumber + 1 ))
            chars.push(getChar(code))
        }

        words[wordNumber] = chars.join('')
    }

    return words.join(' ')
}

module.exports = {
    decode
}