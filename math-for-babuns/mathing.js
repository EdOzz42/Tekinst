/*Addition*/

function addt() {
    const button = document.querySelectorAll('.button')
    const inputs = document.querySelectorAll('.input')
    let resWrite = document.querySelectorAll('.result')

    button[0].onclick = () => {
        let stTerm = inputs[0].value
        let sdTerm = inputs[1].value
        let res = ~~stTerm + ~~sdTerm
        resWrite[0].innerText = `${stTerm} plus ${sdTerm} is equal to ${res}` 
    }

}

/*Multiplication*/

function mult() {
    const button = document.querySelectorAll('.button')
    const inputs = document.querySelectorAll('.input')
    let resWrite = document.querySelectorAll('.result')

    button[1].onclick = () => {
        let stTerm = inputs[2].value
        let sdTerm = inputs[3].value
        let res = ~~stTerm * ~~sdTerm
        resWrite[1].innerText = `${stTerm} multiplied by ${sdTerm} is equal to ${res}` 
    }
}

/*Difference*/

function subt() {
    const button = document.querySelectorAll('.button')
    const inputs = document.querySelectorAll('.input')
    let resWrite = document.querySelectorAll('.result')

    button[2].onclick = () => {
        let stTerm = inputs[4].value
        let sdTerm = inputs[5].value
        let res = ~~stTerm - ~~sdTerm
        resWrite[2].innerText = `The difference between ${stTerm} and ${sdTerm} is equal to ${res}` 
    }
}

/*Division*/

function divi() {
    const button = document.querySelectorAll('.button')
    const inputs = document.querySelectorAll('.input')
    let resWrite = document.querySelectorAll('.result')

    button[3].onclick = () => {
        let stTerm = inputs[6].value
        let sdTerm = inputs[7].value
        let res = ~~stTerm / ~~sdTerm
        resWrite[3].innerText = `${stTerm} divided by ${sdTerm} is equal to ${res}` 
    }
}

addt();
mult();
subt();
divi()