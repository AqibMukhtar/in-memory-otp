let otps = {};
let usedOTPs = [];
let otpDigits = 4; //default 4 digits

function startOTPTimer(currentTime) {
    setInterval(() => {
        currentTime += 1000;
        for (let user in otps) {
            if (otps[user].expiray <= currentTime)
                delete otps[user];
        }
    }, 1000);
}

function setOTPDigits(digits) {
    otpDigits = digits;
}

function generateOTP(username, expirayTime) {
    let otp = getOTP();
    while (usedOTPs.includes(otp))
        otp = getOTP();
    usedOTPs.push(otp);
    otps[username] = {
        otp,
        expiray: new Date().getTime() + (expirayTime * 60 * 1000)
    };
    return otp;
}

function getOTP() {
    let otp = '';
    for (let i = 0; i < otpDigits; i++ ) {
        otp += Math.floor(Math.random() * 10);
    }
    return Number(otp);
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
    validateOTP,
    setOTPDigits
}
