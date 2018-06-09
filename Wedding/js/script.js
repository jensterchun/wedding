let today = new Date();
let dd = today.getDate();
let mm = today.getMonth()+1; //January is 0!
let yyyy = today.getFullYear();
if(dd<10) {
    dd = '0'+dd;
} 
if (mm<10) {
    mm = '0'+mm;
} 
today = mm + '.' + dd + '.' + yyyy;


function responseHandler() {
    document.getElementById('rsvpRadio1').checked ? 
    document.getElementById('menu').style.display = 'block' : 
    document.getElementById('menu').style.display = 'none';
}

let guestlist = [
    {name: "",
    email: "",
    rsvp: "",
    meal: "",
    note: ""}
];

function addName(name) {
    guestlist.name.push(name);
}

function addEmail(email) {
    guestlist.email.push(email);
}

function addReply (rsvp) {
    guestlist.rsvp.push(rsvp);
}

function insert(name) {
    let name = document.getElementById('name');
    guestlist.name.push(name);
}
