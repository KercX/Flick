package main

import (
	"fmt"
	"net/http"
	"os"
	"sync"
	"time"
)

// Platform structure for OSINT targets
type Platform struct {
	Name string
	URL  string
}

// FlickEngine implementation
type FlickEngine struct {
	Version string
	Target  string
}

func (e *FlickEngine) Banner() {
	fmt.Printf("\033[36m" + `
   ####### #       ###  #####  #    #
   #       #        #  #     # #   # 
   #       #        #  #       #  #  
   #####   #        #  #       ###   
   #       #        #  #       #  #  
   #       #        #  #     # #   # 
   #       ####### ###  #####  #    # v` + e.Version + "\033[0m\n")
}

// Parallel check of social media status
func (e *FlickEngine) ScanTarget(platforms []Platform) {
	var wg sync.WaitGroup
	fmt.Printf("[*] Starting Concurrent Scan for: %s\n\n", e.Target)

	for _, p := range platforms {
		wg.Add(1)
		go func(p Platform) {
			defer wg.Done()
			fullURL := fmt.Sprintf(p.URL, e.Target)
			
			client := &http.Client{Timeout: 5 * time.Second}
			resp, err := client.Get(fullURL)
			
			if err != nil {
				fmt.Printf("\033[31m[!] %-10s: Connection Error\033[0m\n", p.Name)
				return
			}
			defer resp.Body.Close()

			if resp.StatusCode == 200 {
				fmt.Printf("\033[32m[+] %-10s: FOUND -> %s\033[0m\n", p.Name, fullURL)
			} else {
				fmt.Printf("\033[37m[-] %-10s: Not Found (404)\033[0m\n", p.Name)
			}
		}(p)
	}
	wg.Wait()
}

func main() {
	engine := FlickEngine{
		Version: "1.9.5",
	}
	engine.Banner()

	if len(os.Args) < 2 {
		fmt.Println("\n[!] Usage: go run main.go <username>")
		os.Exit(1)
	}

	engine.Target = os.Args[1]

	// Список платформ для Flick (включаючи VK)
	platforms := []Platform{
		{"Telegram", "https://t.me"},
		{"Twitter",  "https://twitter.com"},
		{"VK",       "https://vk.com"},
		{"TikTok",   "https://tiktok.com"},
		{"YouTube",  "https://youtube.com"},
		{"Facebook", "https://facebook.com"},
		{"GitHub",   "https://github.com"},
	}

	start := time.Now()
	engine.ScanTarget(platforms)
	
	fmt.Printf("\n[*] Scan finished in: %v\n", time.Since(start))
}
