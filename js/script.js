
// login pin conde functional 

let numberShow = document.querySelector('.number__value')

const number = (num)=> {
    numberShow.value += num
}

const cross = () => {
    numberShow.value = numberShow.value.slice(0, -1)
}
