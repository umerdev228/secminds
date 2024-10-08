/**
 * This file is loaded via the <script> tag in the index.html file and will
 * be executed in the renderer process for that window. No Node.js APIs are
 * available in this process because `nodeIntegration` is turned off and
 * `contextIsolation` is turned on. Use the contextBridge API in `preload.js`
 * to expose Node.js functionality from the main process.
 */

const BASE_URL = 'https://stegsecbackend.onrender.com/api';
const STEG_URL = 'https://stegsecapp.onrender.com/api'

function goToSelectionPage() {
    document.getElementById('section-page').click()
}
function goToHidePage() {
    window.location.href = "./hide-data.html";
}
function goToExtractData() {
    window.location.href = "./extract-data.html";
}
function logout() {
    localStorage.clear();
    window.location.href = "./login.html";
}