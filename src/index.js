import "./styles.css";
import { createHomePage } from "./home.js";
import { createMenuPage } from "./menu.js";

// Create a single instance of elements
 // Flag to prevent duplicate initialization

function createMain() {
    const main = document.createElement('main');
    main.innerHTML = `
        <h1>Welcome to Our Cafe</h1>
        <p>We serve the best coffee and fresh pastries in town!</p>
        <div class="feature">
            <h2>Today's Special</h2>
            <p>Try our new Caramel Latte with homemade almond cookies</p>
        </div>
    `;
    return main;
}

function initializePage() {
   
    
    const contentDiv = document.getElementById('content');
    contentDiv.appendChild(createMain());

    // Event listeners
    document.getElementById('homeBtn').addEventListener('click', () => {
        clearContent();
        contentDiv.appendChild(createHomePage());
    });

    document.getElementById('menuBtn').addEventListener('click', () => {
        clearContent();
        contentDiv.appendChild(createMenuPage());
    });

    
}

function clearContent() {
    const contentDiv = document.getElementById('content');
    while (contentDiv.firstChild) {
        contentDiv.removeChild(contentDiv.firstChild);
    }
}

// Use either DOMContentLoaded or window.onload, not both
document.addEventListener('DOMContentLoaded', initializePage); 