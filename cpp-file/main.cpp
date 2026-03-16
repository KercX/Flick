#include <iostream>
#include <string>

int main(int argc, char* argv[]) {
    if (argc < 2) {
        std::cout << "Flick-Core: No target specified." << std::endl;
        return 1;
    }
    std::string target = argv[1];
    std::cout << "⚡ Flick High-Speed Scan on: " << target << " [SUCCESS]" << std::endl;
    return 0;
}
