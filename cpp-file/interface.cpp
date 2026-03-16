#include <string>
#include <vector>


class FlickInterface {
public:
    virtual void startScan(std::string target) = 0;
    virtual void stopScan() = 0;
    virtual ~FlickInterface() {}
};
