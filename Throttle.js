export function throttle(callBack, delay = 1000) {
  let shouldWait = false;
  let waitingArgs = null;
  const handleLastCall = () => {
    if (!waitingArgs) {
      shouldWait = false;
      return;
    }
    callBack(...waitingArgs);
    waitingArgs = null;
    setTimeout(handleLastCall, delay);
  };

  return (...args) => {
    if (shouldWait) {
      waitingArgs = args;
      return;
    }

    callBack(...args);
    shouldWait = true;
    setTimeout(handleLastCall, delay);
  };
}
