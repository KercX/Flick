package main

// FlickScanner визначає методи для Go-модуля
type FlickScanner interface {
    CheckPlatform(username string, platform string) string
    GetVersion() string
}
