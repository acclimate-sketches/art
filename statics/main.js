setTimeout(function () {

    for (let item of files_names) {
    let content = `
        <div class="card">
            <img src="statics/images/pr/${item}" alt="">
            <button onclick="contact_modal('0')">GET</button>
        </div>
    `;
    document.getElementById("content").innerHTML += content;
        }
    document.querySelector('#my_spinner').style.display = 'none';
    document.querySelector('#main_see').style.display = 'block';


    var typed = new Typed('#news_lines', {
        strings: [
            "Art is the silent poetry of the soul, and sketches are its rhythmic verses, revealing emotions in strokes and shades.",
            "In the dance between imagination and reality, sketches are the choreography, capturing the fleeting beauty of a moment's expression.",
            "A sketch is a snapshot of the mind's wanderings, a visual diary where thoughts and dreams converge on the canvas of creativity.",
            "Beyond the mere outlines and shadows, sketches are portals to worlds unseen, where every stroke unveils a new facet of artistic revelation.",
            "Sketches, like whispers in the language of visuals, tell stories that resonate across the spectrum of human experience, inviting us to explore the nuances of emotion and perception.",
            "Each sketch is a journey, a pilgrimage of the artist's hand guided by the compass of inspiration, navigating the vast landscapes of the imagination.",
            "The magic of sketches lies in their ability to distill complex ideas into simple lines, inviting viewers to decode the visual symphony orchestrated by the artist's hand.",
            "Sketches are the heartbeat of artistic spontaneity, where creativity flows uninhibited, unburdened by the constraints of perfection.",
            "Through sketches, we witness the genesis of ideas, the initial spark that ignites the flame of creation, evolving into the masterpiece that follows.",
            "Sketches are windows into the artist's universe, offering a glimpse of their unique perspective, inviting us to share in the beauty and chaos of their creative cosmos."

        ],
        typeSpeed: 18,
        backDelay: 4000,
    });
    

}, 2500);



function contact_modal(val) {
    content = `<div>
            <div class="nav_tab m-0" onclick="open_insta()">
                <i class="bi bi-instagram"></i>
                Instagram
            </div>
            <br>
            <div class="nav_tab m-0" onclick="open_facebook()">
                <i class="bi bi-facebook"></i>
                Facebook
            </div>
            <br>
            <div class="nav_tab m-0" onclick="open_mail()">
                <i class="bi bi-envelope"></i>
                Mail
            </div>
        </div>`
    if (val == '0') {
        document.getElementById('model_heading').innerText = "GET Details";
        document.getElementById('model_body').innerHTML = `<div style="color: #c0a05f; font-family: 'Archivo', sans-serif;">Take a screenshot and send it through any platform to receive prices or details .</div> <br>`;
        document.getElementById('model_body').innerHTML += content;
        $('#modal_active_btn').click();
    }
    else if (val == '1') {
        document.getElementById('model_heading').innerText = "CONTACT";
        document.getElementById('model_body').innerHTML = content;
        $('#modal_active_btn').click();
    }

}

function open_insta() {
    window.open('https://www.instagram.com/acclimate._.sketches', '_blank');
}

function open_facebook() {
    window.open('https://www.instagram.com/acclimate._.sketches', '_blank');
}

function open_mail() {
    var recipientEmail = 'acclimate.sketches@gmail.com';
    var mailtoUrl = 'mailto:' + recipientEmail;
    window.location.href = mailtoUrl;
}
