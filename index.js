'use strict';

const nav = function () {
    return `<div>
    <a href="#/" class="btn black">Home</a>
    <a href="#/about" class="btn black">About</a>
    <a href="#/contact" class="btn black">Contact</a>
    <a href="#/admin" class="btn red">Admin</a>
</div>`
}

let onSaveClick = function (msg) {
    alert('i am '+msg);
}

const home = function () {
    return `<div>
    <h2>Home</h2>
    <div>This is home I am fine</div>
    <div>
    <span class="btn primary" onclick="onSaveClick('saved')">Save</span>
    <span class="btn red" onclick="onSaveClick('clear')">Clear</span>
    </div>
</div>`
}

const contact = function () {
    return `<div>
    <h2>Contact</h2>
    <div>This is Contact I am fine</div>
</div>`
}

const about = function () {
    return `<div>
    <h2>About</h2>
    <div>This is About I am fine</div>
</div>`
}

const admin = function () {
    return `<div>
    <h2>Admin</h2>
    <div>This is Amdin I am fine</div>
</div>`
}

let routes = {
    '/': home,
    '/contact': contact,
    '/about': about,
    '/admin': admin,
};

let router = (evt) => {
    const url = window.location.hash.slice(1) || "/";
    const routeResolved = routes[url];
    document.getElementById('root').innerHTML = nav() + '<br/>' + (routeResolved)(); //IIFE
};
// For first load or when routes are changed in browser url box.
window.addEventListener('load', router);
window.addEventListener('hashchange', router);
window.addEventListener('onpopstate', router);
