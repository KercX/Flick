/**
 * FLICK OSINT ENGINE - Main TypeScript Controller
 * Version: 1.6.0
 */

// Визначаємо типи для результатів пошуку
interface SocialResult {
    name: string;
    url: string;
    icon: string;
}

class FlickApp {
    private targetInput: HTMLInputElement;
    private resultsContainer: HTMLElement;
    private displayUser: HTMLElement;

    constructor() {
        // Ініціалізація елементів DOM
        this.targetInput = document.getElementById('username') as HTMLInputElement;
        this.resultsContainer = document.getElementById('results') as HTMLElement;
        this.displayUser = document.getElementById('displayUser') as HTMLElement;

        this.initEventListeners();
        console.log("⚡ Flick Engine Initialized...");
    }

    private initEventListeners(): void {
        // Кнопка пошуку
        const searchBtn = document.querySelector('.btn') as HTMLButtonElement;
        searchBtn?.addEventListener('click', () => this.executeSearch());

        // Навігація по вкладках
        const navButtons = document.querySelectorAll('.nav-btn');
        navButtons.forEach(btn => {
            btn.addEventListener('click', (e) => this.handleTabSwitch(e as MouseEvent));
        });
    }

    private handleTabSwitch(event: MouseEvent): void {
        const target = event.currentTarget as HTMLButtonElement;
        const tabId = target.getAttribute('onclick')?.match(/'([^']+)'/)?.[1];

        if (!tabId) return;

        // Приховуємо всі вкладки
        const contents = document.querySelectorAll('.tab-content');
        contents.forEach(content => (content as HTMLElement).style.display = 'none');

        // Деактивуємо всі кнопки
        document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));

        // Активуємо потрібну
        const activeTab = document.getElementById(tabId);
        if (activeTab) activeTab.style.display = 'block';
        target.classList.add('active');
    }

    public executeSearch(): void {
        const username = this.targetInput.value.trim();

        if (!username) {
            alert("Please enter a username!");
            return;
        }

        // Оновлюємо інтерфейс
        this.displayUser.innerText = username;
        this.resultsContainer.style.display = 'block';

        const platforms: SocialResult[] = [
            { name: 'Telegram', url: `https://t.me{username}`, icon: '✈️' },
            { name: 'Twitter (X)', url: `https://twitter.com{username}`, icon: '🐦' },
            { name: 'VKontakte', url: `https://vk.com{username}`, icon: '🌐' },
            { name: 'TikTok', url: `https://tiktok.com{username}`, icon: '📱' },
            { name: 'YouTube', url: `https://youtube.com{username}`, icon: '🎥' },
            { name: 'Facebook', url: `https://facebook.com{username}`, icon: '📘' }
        ];

        this.renderResults(platforms);
    }

    private renderResults(platforms: SocialResult[]): void {
        const list = document.querySelector('.card .results-list') || this.resultsContainer;
        
        // Очищаємо старі результати, якщо потрібно, або просто оновлюємо href
        platforms.forEach(p => {
            const linkElement = document.querySelector(`[id^="res_${this.getShortName(p.name)}"]`) as HTMLAnchorElement;
            if (linkElement) {
                linkElement.href = p.url;
                linkElement.innerHTML = `<span class="icon-label">${p.icon}</span> ${p.name} Profile`;
            }
        });
    }

    private getShortName(name: string): string {
        if (name.includes('Telegram')) return 'tg';
        if (name.includes('Twitter')) return 'tw';
        if (name.includes('VK')) return 'vk';
        if (name.includes('TikTok')) return 'tt';
        if (name.includes('YouTube')) return 'yt';
        if (name.includes('Facebook')) return 'fb';
        return '';
    }
}

// Запуск програми при завантаженні сторінки
window.addEventListener('DOMContentLoaded', () => {
    new FlickApp();
});
