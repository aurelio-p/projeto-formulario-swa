function geografia3() {
    var url = new URL(window.location.href)
    var recebido = url.searchParams.get('geografia3')
    var checkbox = document.querySelector('[value="'+recebido+'"]')
    if (checkbox.checked != true){
        checkbox.checked = true
        checkbox.className='erro'
    }
}

function geografia2() {
    var url = new URL(window.location.href)
    var recebido = url.searchParams.get('geografia2')
    var checkbox = document.querySelector('[value="'+recebido+'"]')
    if (checkbox.checked != true){
        checkbox.checked = true
        checkbox.className='erro'
    }
}

function geografia1() {
    var url = new URL(window.location.href)
    var recebido = url.searchParams.get('geografia1')
    var checkbox = document.querySelector('[value="'+recebido+'"]')
    if (checkbox.checked != true){
        checkbox.checked = true
        checkbox.className='erro'
    } 
}

function historia3() {
    var url = new URL(window.location.href)
    var recebido = url.searchParams.get('historia3')
    var checkbox = document.querySelector('[value="'+recebido+'"]')
    if (checkbox.checked != true){
        checkbox.checked = true
        checkbox.className='erro'
    }
}

function historia2() {
    var url = new URL(window.location.href)
    var recebido = url.searchParams.get('historia2')
    var checkbox = document.querySelector('[value="'+recebido+'"]')
    if (checkbox.checked != true){
        checkbox.checked = true
        checkbox.className='erro'
    }
}

function historia1() {
    var url = new URL(window.location.href)
    var recebido = url.searchParams.get('historia1')
    var checkbox = document.querySelector('[value="'+recebido+'"]')
    if (checkbox.checked != true){
        checkbox.checked = true
        checkbox.className='erro'
    }
}

function matematica3() {
    var url = new URL(window.location.href)
    var recebido = url.searchParams.get('matematica3')
    var checkbox = document.querySelector('[value="'+recebido+'"]')
    if (checkbox.checked != true){
        checkbox.checked = true
        checkbox.className='erro'
    }
}

function matematica2() {
    var url = new URL(window.location.href)
    var recebido = url.searchParams.get('matematica2')
    var checkbox = document.querySelector('[value="'+recebido+'"]')
    if (checkbox.checked != true){
        checkbox.checked = true
        checkbox.className='erro'
    }
}

function matematica1() {
    var url = new URL(window.location.href)
    var recebido = url.searchParams.get('matematica1')
    var checkbox = document.querySelector('[value="'+recebido+'"]')
    if (checkbox.checked != true){
        checkbox.checked = true
        checkbox.className='erro'
    }
}

geografia1()
geografia2()
geografia3()
historia3()
historia2()
historia1()
matematica3()
matematica2()
matematica1()