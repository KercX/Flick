// Flick OSINT - Frontend Logic
const FlickUI = {
    init() {
        console.log("⚡ Flick JS Engine Active");
        this.bindEvents();
    },

    bindEvents() {
        const searchBtn = document.querySelector('.btn');
        if (searchBtn) {
            searchBtn.addEventListener('click', () => this.handleSearch());
        }
    },

    handleSearch() {
        const username = document.getElementById('target').value;
        if (!username) return alert("Enter target username!");

        console.log(`[*] Searching for: ${username}`);
        this.renderResults(username);
    },

    renderResults(user) {
        const results = document.getElementById('res');
        results.style.display = 'block';
        document.getElementById('targetName').innerText = user;

        // Оновлення лінків (VK, TG, TW, YT, FB)
        const platforms = ['tg', 'tw', 'fb', 'vk', 'tt', 'yt'];
        platforms.forEach(p => {
            const el = document.getElementById(p);
            if (el) {
                const baseUrl = this.getBaseUrl(p);
                el.href = `${baseUrl}${p === 'tt' || p === 'yt' ? '@' : ''}${user}`;
            }
        });
    },

    getBaseUrl(p) {
        const urls = {
            tg: 'https://t.me',
            tw: 'https://twitter.com',
            fb: 'https://facebook.com',
            vk: 'https://vk.com',
            tt: 'https://tiktok.com',
            yt: 'https://youtube.com'
        };
        return urls[p];
    }
};

window.onload = () => FlickUI.init();
