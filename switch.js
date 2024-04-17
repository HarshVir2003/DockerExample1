function about() {
        document.getElementById('about').style.display='flex';
        document.getElementById('c').style.display='none';
        document.getElementById('profile').style.display='none';
}

function profile() {
    document.getElementById('about').style.display='none';
    document.getElementById('c').style.display='none';
    document.getElementById('profile').style.display='flex';
}

function home() {
    document.getElementById('about').style.display='none';
    document.getElementById('c').style.display='flex';
    document.getElementById('profile').style.display='none';
}