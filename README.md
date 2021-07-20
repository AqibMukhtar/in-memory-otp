***In the name of Allah, the Most Gracious, the most Merciful***
# What is it?
`in-memory-otp` is a lightweight JavaScript package for generating and validating OTP (One Time Password) maintaining high performance using on demand in-memory database. Feel free to open [issues](https://github.com/AqibMukhtar/in-memory-otp/issues) and/or creating [pull requests](https://github.com/AqibMukhtar/in-memory-otp/pulls).

# Installation

Install `in-memory-otp` by running any of the following commands at terminal

`npm install in-memory-otp`


`npm install in-memory-otp --save`

# Usage

```javascript
// Importing the OTP functionality
const otp = require('in-memory-otp');

// Start OTP functionality
otp.startOTPTimer(new Date().getTime());

//Set otp digits as 6
otp.setOTPDigits(6);

// Generate OTP for user1
const user1OTP = otp.generateOTP('user1', 5);
console.log('Generated OTP for user1 is:', user1OTP);

// Generate OTP for user2
const user2OTP = otp.generateOTP('user2', 5);
console.log('Generated OTP for user2 is:', user2OTP);

// Validate user1 OTP
otp.validateOTP('user1', user1OTP);
// Validate user2 OTP
otp.validateOTP('user2', user2OTP); 

```

# Functions Description
## startOTPTimer(currentTime)
This function starts the OTP functionality in the program. It only requires time at which the functionality to begin. OTPs will be verified correctly if this function is called before generating any OTP. Its good to start the OTP functionality using the following line
```javascript
otp.startOTPTimer(new Date().getTime());
```
## otp.setOTPDigits(noOfDigits)
This function set the number of digits of OTP generated. This is an optional method, by default the number of digits is set to 4.

## otp.generateOTP(uniqueIndentifierOfUser, expirayTimeInMinutes)
This function generates and returns the OTP against the unique identifier of the user/customer. Its first parameter is the identifier and send parameter is the amount of time (in minutes) for which we want to generate OTP.

## otp.validateOTP(uniqueIndentifierOfUser, OTP);
This function validates the OTP generated against the customer/user. It returns `true` if the correct OTP is passed as send parameter with in the expiray time, allocated while creating the OTP. If the time is expired and/or incorrect OTP is passed, then `false` is returned.

# Benefits
* No database is required.
* OTP will be created only when it is necessary.
* OTP will be removed from the memory (RAM) when its time is expired.
* Efficient and fast because no read/write operation is performed on the disk.

