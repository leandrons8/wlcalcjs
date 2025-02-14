function addAnilhas(){
    const cor = parseInt(document.getElementById("cor").value)
    const padraoKgs = document.getElementById("anilhaKgs").checked
    const table = document.getElementById("anilhas")
    const row = table.insertRow()
    let kgs
    let lbs
    if (padraoKgs) {
        kgs = 5*(cor+1)
        lbs = kgs*2.2046
    } else {
        lbs = 10*(cor+1) + 5
        kgs = lbs/2.2046
    }
    row.insertCell(0).innerText = document.getElementById("cor").options[cor].innerText
    row.insertCell(1).innerText = ((padraoKgs) ? "Kgs" : "Lbs")
    const cellKgs = row.insertCell(2)
    cellKgs.dataset.w = kgs
    cellKgs.innerText = Math.round(kgs)
    const cellLbs = row.insertCell(3)
    cellLbs.dataset.w = lbs
    cellLbs.innerText = Math.round(lbs)
    const remove = row.insertCell(4)
    const button = document.createElement("button")
    button.className = "btn-close"
    button.onclick = function (){
        let row = this.parentNode.parentNode
        row.parentNode.removeChild(row)
        updateSoma()
    }
    remove.append(button)
    updateSoma()
}

function updateSoma(){
    const masculina = document.getElementById("masculina").checked
    const padraoKgs = document.getElementById("barraKgs").checked
    const rows = document.getElementById("anilhas").rows
    let kgs = ((masculina) ? ((padraoKgs) ? 20 : 45/2.2046) : ((padraoKgs) ? 15 : 35/2.2046))
    let lbs = ((masculina) ? ((padraoKgs) ? 20*2.2046 : 45) : ((padraoKgs) ? 15*2.2046 : 35))
    for (let row of rows){
        kgs += 2*parseFloat(row.getElementsByTagName("td")[2].dataset.w)
        lbs += 2*parseFloat(row.getElementsByTagName("td")[3].dataset.w)
    }
    kgs = Math.round(kgs)
    lbs = Math.round(lbs)
    document.getElementById("total").innerText = "Peso total da barra: " + kgs + "kgs | " + lbs + "lbs"
}

window.onload = updateSoma()
