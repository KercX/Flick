// Flick Interface Definition
const OsintTemplate = {
    target: {
        username: "",
        id: null,
        platform: ""
    },
    results: {
        found: false,
        links: [],
        timestamp: new Date().toISOString()
    },
    status: "IDLE" // SCANNING, COMPLETED, ERROR
};

function createScanObject(user) {
    let newScan = Object.assign({}, OsintTemplate);
    newScan.target.username = user;
    return newScan;
}
