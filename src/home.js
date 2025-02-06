
export const greeting = "Hello, Odinite!";

// home.js
export function createHomePage() {
    const main = document.createElement('main');
    main.innerHTML = `
        <section class="hero">
            <h1>Welcome to Our Restaurant</h1>
            <p>Experience fine dining at its best</p>
            <p>Open daily from 5 PM to 11 PM</p>
        </section>
    `;
    return main;
}