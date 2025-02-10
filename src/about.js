export function createAboutPage() {
    const main = document.createElement('main');
    main.innerHTML = `
        <section class="hero">
            <h1>ABOUT</h1>
            <p>THERE STREET 37</p>
            <p>089 28282833/p>
        </section>
    `;
    return main;
}