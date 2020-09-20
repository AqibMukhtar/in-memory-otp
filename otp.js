let otps = {};
let usedOTPs = [];

function startOTPTimer(currentTime) {
    setInterval(() => {
        currentTime += 1000;
        for (let user in otps) {
            if (otps[user].expiray <= currentTime)
                delete otps[user];
        }
    }, 1000);
}

function generateOTP(username, expirayTime) {
    let otp = Math.floor(Math.random() * 10000);
    while (usedOTPs.includes(otp))
        otp = Math.floor(Math.random() * 10000);
    usedOTPs.push(otp);
    otps[username] = {
        otp,
        expiray: new Date().getTime() + (expirayTime * 60 * 1000)
    };
    return otp;
}

function validateOTP(username, otp) {
    if (otps.hasOwnProperty(username))
        if (otps[username].otp === otp)
            return true;
    return false;
}

module.exports = {
    startOTPTimer,
    generateOTP,
    validateOTP
}
