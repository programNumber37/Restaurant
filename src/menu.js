


// home.js
export function createMenuPage() {
    const main = document.createElement('main');
    main.innerHTML = `
        <section class="hero">
            <h1>THIS IS A MENU</h1>
            <p>Experience fine dining at its best</p>
            <p>Open daily from 5 PM to 11 PM</p>
        </section>
    `;
    return main;
}