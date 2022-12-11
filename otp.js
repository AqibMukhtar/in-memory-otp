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

/**
 * This function still returns an otp lesser than 4 at default.
 * Because it generates 0 at the beginning some times
 * and if "0024" is passed to Number()
 * it returns 24, hence having an otp lesser than 4
 * 
 * Generating a number between 0 and 9 and adding 1 should fix this
 */
function getOTP() {
    let otp = '';
    for (let i = 0; i < otpDigits; i++ ) {
        otp += Math.floor(Math.random() * 9) + 1;
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