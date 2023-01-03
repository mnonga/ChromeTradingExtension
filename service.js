//https://developer.chrome.com/docs/extensions/reference/webRequest/
//https://chromeenterprise.google/policies/url-patterns/
/*chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    console.log("1xbet");
    return { cancel: true };
  },
  { urls: ["https://1xbet.cd/*", "https://1xbet.com/*"] },
  ["blocking"]
);*/

//The following example illustrates how to delete the User-Agent header from all requests:
/* chrome.webRequest.onBeforeSendHeaders.addListener(
  function (details) {
    for (var i = 0; i < details.requestHeaders.length; ++i) {
      if (details.requestHeaders[i].name === "User-Agent") {
        details.requestHeaders.splice(i, 1);
        break;
      }
    }
    return { requestHeaders: details.requestHeaders };
  },
  { urls: ["<all_urls>"] },
  ["blocking", "requestHeaders"]
);
 */

// https://developer.chrome.com/docs/extensions/reference/declarativeWebRequest/

var rule2 = {
  conditions: [
    new chrome.declarativeWebRequest.RequestMatcher({
      url: { hostSuffix: "1xbet.com" },
    }),
    new chrome.declarativeWebRequest.RequestMatcher({
      url: { hostSuffix: "1xbet.cd" },
    }),
  ],
  actions: [new chrome.declarativeWebRequest.CancelRequest()],
};

chrome.declarativeWebRequest.onRequest.addRules([rule2]);

