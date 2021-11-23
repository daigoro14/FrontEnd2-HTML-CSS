const descriptionDiv = document.getElementById('eventDescription')


descriptionDiv.style.display = "none";

function showEventDescription() {
    // $("#eventDescription").slideUp("fast");
    if (descriptionDiv.style.display === "none") {
        return descriptionDiv.style.display = "block"
    }
    console.log(descriptionDiv.style.display)
}

function hideEventDescription() {
    if(descriptionDiv.style.display === "block") {
        return descriptionDiv.style.display = "none"
    }
}
/*
window.onload = function() {
    const openDescription = document.getElementsByClassName("showDescription")
    document.onclick = function(e){
        if(e.target.id !== descriptionDiv){
            descriptionDiv.style.display = "none"
        }
        if(e.target === openDescription){
            descriptionDiv.style.display = "block"
        }
    }
}
*/


function messageRecieved(){
    document.getElementById('contactForm').style.display = "none"

    const contentDiv = document.getElementById('content')

    const thankYouDiv = document.createElement('div')
    thankYouDiv.id = 'messageRecievedDiv'

    const h2 = document.createElement('h2')
    h2.id = "thankYouMessaege"
    h2.innerHTML = 'Tack för ditt meddelande.' + "\n" + 'Vi återkopplar så fort vi kan!'

    contentDiv.appendChild(thankYouDiv)
    thankYouDiv.appendChild(h2)


    
    
}