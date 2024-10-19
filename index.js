document.getElementById('leftButton').addEventListener('click', () => {
    document.querySelector('.leftPanel').style.width = '755px'
    document.querySelector('.rightPanel').style.width = '50px'
    document.getElementById('cat').style.width = '510px'
    document.getElementById('dog').style.width = '0px'
})

document.getElementById('rightButton').addEventListener('click', () => {
    document.querySelector('.leftPanel').style.width = '50px'
    document.querySelector('.rightPanel').style.width = '755px'
    document.getElementById('cat').style.width = '0px'
    document.getElementById('dog').style.width = '510px'
})

document.getElementById('bothButton').addEventListener('click', () => {
    document.querySelector('.leftPanel').style.width = '50%'
    document.querySelector('.rightPanel').style.width = '50%'
    document.getElementById('cat').style.width = '90%'
    document.getElementById('dog').style.width = '90%'
})
