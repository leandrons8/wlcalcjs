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
    row.insertCell(2).innerHTML = kgs
    row.insertCell(3).innerHTML = lbs
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
        kgs += 2*parseFloat(row.getElementsByTagName("td")[2].innerHTML)
        lbs += 2*parseFloat(row.getElementsByTagName("td")[3].innerHTML)
    }
    kgs = Math.round(kgs)
    lbs = Math.round(lbs)
    document.getElementById("total").innerHTML = "Peso total da barra: " + kgs + "kgs | " + lbs + "lbs"
}

window.onload = updateSoma()
