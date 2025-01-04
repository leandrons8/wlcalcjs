function renderBody(){
    const body = document.body

    const nav = document.createElement("nav")
    nav.className = "navbar sticky-top bg-body-tertiary"

    const navcontainer = document.createElement("div")
    navcontainer.className = "container"

    const navbrand = document.createElement("span")
    navbrand.className = "navbar-brand"
    navbrand.innerText = "Calculadora de barra olímpica"

    const container = document.createElement("div")
    container.className = "container"

    const total = document.createElement("p")
    total.className = "fs-4"
    total.id = "total"
    total.innerText = "Peso total da barra: kgs | lbs"

    const pbar = document.createElement("p")
    pbar.className = "fs-5"
    pbar.innerText = "Barra olímpica"

    const rowbar = document.createElement("div")
    rowbar.className = "row"

    const colbarsex = document.createElement("div")
    colbarsex.className = "col-auto"

    const radiobarmale = document.createElement("div")
    radiobarmale.className = "form-check"

    const radiobarmaleinput = document.createElement("input")
    radiobarmaleinput.className = "form-check-input"
    radiobarmaleinput.type = "radio"
    radiobarmaleinput.name = "barraSexo"
    radiobarmaleinput.id = "masculina"
    radiobarmaleinput.onclick = function (){
        updateSoma()
    }
    radiobarmaleinput.checked = true

    const radiobarmalelabel = document.createElement("label")
    radiobarmalelabel.className = "form-check-label bi bi-gender-male"
    radiobarmalelabel.for = "flexRadioDefault1"

    const radiobarfemale = document.createElement("div")
    radiobarfemale.className = "form-check"

    const radiobarfemaleinput = document.createElement("input")
    radiobarfemaleinput.className = "form-check-input"
    radiobarfemaleinput.type = "radio"
    radiobarfemaleinput.name = "barraSexo"
    radiobarfemaleinput.id = "feminina"
    radiobarfemaleinput.onclick = function (){
        updateSoma()
    }

    const radiobarfemalelabel = document.createElement("label")
    radiobarfemalelabel.className = "form-check-label bi bi-gender-female"
    radiobarfemalelabel.for = "flexRadioDefault2"

    const colbarstd = document.createElement("div")
    colbarstd.className = "col-auto"

    const radiobarkgs = document.createElement("div")
    radiobarkgs.className = "form-check"

    const radiobarkgsinput = document.createElement("input")
    radiobarkgsinput.className = "form-check-input"
    radiobarkgsinput.type = "radio"
    radiobarkgsinput.name = "barraPadrao"
    radiobarkgsinput.id = "barraKgs"
    radiobarkgsinput.onclick = function (){
        updateSoma()
    }
    radiobarkgsinput.checked = true

    const radiobarkgslabel = document.createElement("label")
    radiobarkgslabel.className = "form-check-label"
    radiobarkgslabel.for = "flexRadioDefault1"
    radiobarkgslabel.innerText = "Kgs"

    const radiobarlbs = document.createElement("div")
    radiobarlbs.className = "form-check"

    const radiobarlbsinput = document.createElement("input")
    radiobarlbsinput.className = "form-check-input"
    radiobarlbsinput.type = "radio"
    radiobarlbsinput.name = "barraPadrao"
    radiobarlbsinput.id = "barraLbs"
    radiobarlbsinput.onclick = function (){
        updateSoma()
    }

    const radiobarlbslabel = document.createElement("label")
    radiobarlbslabel.className = "form-check-label"
    radiobarlbslabel.for = "flexRadioDefault2"
    radiobarlbslabel.innerText = "Lbs"

    const pplates = document.createElement("p")
    pplates.className = "fs-5"
    pplates.innerText = "Pares de anilhas"

    const rowplates = document.createElement("div")
    rowplates.className = "row align-items-center"

    const colplatescolor = document.createElement("div")
    colplatescolor.className = "col-auto"

    const platescolorselect = document.createElement("select")
    platescolorselect.className = "form-select"
    platescolorselect.id = "cor"

    const platecolorblack = document.createElement("option")
    platecolorblack.className = "text-bg-dark"
    platecolorblack.value = "0"
    platecolorblack.innerText = "Pretas"

    const platecolorgreen = document.createElement("option")
    platecolorgreen.className = "text-bg-success"
    platecolorgreen.value = "1"
    platecolorgreen.innerText = "Verdes"

    const platecoloryellow = document.createElement("option")
    platecoloryellow.className = "text-bg-warning"
    platecoloryellow.value = "2"
    platecoloryellow.innerText = "Amarelas"

    const platecolorblue = document.createElement("option")
    platecolorblue.className = "text-bg-primary"
    platecolorblue.value = "3"
    platecolorblue.innerText = "Azuis"

    const platecolorred = document.createElement("option")
    platecolorred.className = "text-bg-danger"
    platecolorred.value = "4"
    platecolorred.innerText = "Vermelhas"

    const colplatesstd = document.createElement("div")
    colplatesstd.className = "col-auto"

    const radioplateskgs = document.createElement("div")
    radioplateskgs.className = "form-check form-check-inline"

    const radioplateskgsinput = document.createElement("input")
    radioplateskgsinput.className = "form-check-input"
    radioplateskgsinput.type = "radio"
    radioplateskgsinput.name = "anilhaPadrao"
    radioplateskgsinput.id = "anilhaKgs"
    radioplateskgsinput.checked = true

    const radioplateskgslabel = document.createElement("label")
    radioplateskgslabel.className = "form-check-label"
    radioplateskgslabel.for = "flexRadioDefault1"
    radioplateskgslabel.innerText = "Kgs"

    const radioplateslbs = document.createElement("div")
    radioplateslbs.className = "form-check form-check-inline"

    const radioplateslbsinput = document.createElement("input")
    radioplateslbsinput.className = "form-check-input"
    radioplateslbsinput.type = "radio"
    radioplateslbsinput.name = "anilhaPadrao"
    radioplateslbsinput.id = "anilhaLbs"

    const radioplateslbslabel = document.createElement("label")
    radioplateslbslabel.className = "form-check-label"
    radioplateslbslabel.for = "flexRadioDefault2"
    radioplateslbslabel.innerText = "Lbs"

    const colplatesadd = document.createElement("div")
    colplatesadd.className = "col-auto"

    const buttonadd = document.createElement("button")
    buttonadd.className = "btn btn-primary"
    buttonadd.type = "button"
    buttonadd.onclick = function (){
        addAnilhas()
    }

    const buttonicon = document.createElement("i")
    buttonicon.className = "bi bi-plus-lg"

    const rowtable = document.createElement("div")
    rowtable.className = "row"

    const coltable = document.createElement("div")
    coltable.className = "col-auto"

    const table = document.createElement("table")
    table.className = "table"

    const thead = document.createElement("thead")

    const tr = document.createElement("tr")

    const thcolor = document.createElement("th")
    thcolor.innerText = "Cor"

    const thstd = document.createElement("th")
    thstd.innerText = "Padrão"

    const thkgs = document.createElement("th")
    thkgs.innerText = "Kgs"

    const thlbs = document.createElement("th")
    thlbs.innerText = "Lbs"

    const thremove = document.createElement("th")
    thremove.innerText = "Remover"

    const tbody = document.createElement("tbody")
    tbody.id = "anilhas"

    body.append(nav, container)
    nav.append(navcontainer)
    navcontainer.append(navbrand)
    container.append(total, pbar, rowbar, pplates, rowplates, rowtable)
    rowbar.append(colbarsex, colbarstd)
    colbarsex.append(radiobarmale, radiobarfemale)
    radiobarmale.append(radiobarmaleinput, radiobarmalelabel)
    radiobarfemale.append(radiobarfemaleinput, radiobarfemalelabel)
    colbarstd.append(radiobarkgs, radiobarlbs)
    radiobarkgs.append(radiobarkgsinput, radiobarkgslabel)
    radiobarlbs.append(radiobarlbsinput, radiobarlbslabel)
    rowplates.append(colplatescolor, colplatesstd, colplatesadd)
    colplatescolor.append(platescolorselect)
    platescolorselect.append(
        platecolorblack,
        platecolorgreen,
        platecoloryellow,
        platecolorblue,
        platecolorred
    )
    colplatesstd.append(radioplateskgs, radioplateslbs)
    radioplateskgs.append(radioplateskgsinput, radioplateskgslabel)
    radioplateslbs.append(radioplateslbsinput, radioplateslbslabel)
    colplatesadd.append(buttonadd)
    buttonadd.append(buttonicon)
    rowtable.append(coltable)
    coltable.append(table)
    table.append(thead, tbody)
    thead.append(tr)
    tr.append(thcolor, thstd, thkgs, thlbs, thremove)
}

function addAnilhas(){
    let cor = parseInt(document.getElementById("cor").value)
    let padraoKgs = document.getElementById("anilhaKgs").checked
    let table = document.getElementById("anilhas")
    let row = table.insertRow()
    let kgs
    let lbs
    if (padraoKgs) {
        kgs = 5*(cor+1)
        lbs = kgs*2.2046
    } else {
        lbs = 10*(cor+1) + 5
        kgs = lbs/2.2046
    }
    row.insertCell(0).innerHTML = document.getElementById("cor").options[cor].innerHTML
    row.insertCell(1).innerHTML = ((padraoKgs) ? "Kgs" : "Lbs")
    let cellKgs = row.insertCell(2)
    cellKgs.dataset.w = kgs
    cellKgs.innerHTML = Math.round(kgs)
    let cellLbs = row.insertCell(3)
    cellLbs.dataset.w = lbs
    cellLbs.innerHTML = Math.round(lbs)
    row.insertCell(4).innerHTML = '<button onclick="deleteAnilha(this)" class="btn-close"></button>'
    updateSoma()
}

function deleteAnilha(button){
    let row = button.parentNode.parentNode
    row.parentNode.removeChild(row)
    updateSoma()
}

function updateSoma(){
    let masculina = document.getElementById("masculina").checked
    let padraoKgs = document.getElementById("barraKgs").checked
    let rows = document.getElementById("anilhas").rows
    let kgs = ((masculina) ? ((padraoKgs) ? 20 : 45/2.2046) : ((padraoKgs) ? 15 : 35/2.2046))
    let lbs = ((masculina) ? ((padraoKgs) ? 20*2.2046 : 45) : ((padraoKgs) ? 15*2.2046 : 35))
    for (let row of rows){
        kgs += 2*parseFloat(row.getElementsByTagName("td")[2].dataset.w)
        lbs += 2*parseFloat(row.getElementsByTagName("td")[3].dataset.w)
    }
    kgs = Math.round(kgs)
    lbs = Math.round(lbs)
    document.getElementById("total").innerHTML = "Peso total da barra: " + kgs + "kgs | " + lbs + "lbs"
}

renderBody()
window.onload = updateSoma()
