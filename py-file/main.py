import webbrowser
import time

def flick_logo():
    print(r"""
    ####### #       ###  #####  #    #
    #       #        #  #     # #   # 
    #       #        #  #       #  #  
    #####   #        #  #       ###   
    #       #        #  #       #  #  
    #       #        #  #     # #   # 
    #       ####### ###  #####  #    # v1.5
    [ MULTI-LANGUAGE OSINT INTERFACE ]
    """)

def run_osint():
    flick_logo()
    target = input("\033[94m[?]\033[0m Enter Target Username: ")
    
    # Соцмережі для перевірки
    platforms = {
        "Telegram": f"https://t.me{target}",
        "Twitter": f"https://twitter.com{target}",
        "Facebook": f"https://facebook.com{target}",
        "VKontakte": f"https://vk.com{target}",
        "TikTok": f"https://tiktok.com@{target}",
        "YouTube": f"https://youtube.com@{target}"
    }

    print(f"\n[*] Scanning intelligence for: {target}...")
    time.sleep(1)

    for name, url in platforms.items():
        print(f"\033[92m[+]\033[0m {name}: {url}")

    choice = input("\n[?] Open all links in browser? (y/n): ")
    if choice.lower() == 'y':
        for url in platforms.values():
            webbrowser.open(url)
            time.sleep(0.5)

if __name__ == "__main__":
    run_osint()
