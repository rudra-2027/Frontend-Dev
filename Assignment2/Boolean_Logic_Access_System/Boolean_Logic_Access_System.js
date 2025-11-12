let isDoorLocked = true;
let isWindowClosed = true;
let isAlarmOn = true;
let isOwnerInside = true;
if (isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside) {
  console.log("Granted");
} else {
  console.log("UnGranted");
}

isDoorLocked = false;
isWindowClosed = true;
isAlarmOn = true;
isOwnerInside = true;

if (isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside) {
  console.log("Secure");
} else {
  console.log("Unsafe");
}