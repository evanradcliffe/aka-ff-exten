var akamaiPragmaHeaders = "akamai-x-cache-on, akamai-x-cache-remote-on, akamai-x-check-cacheable, akamai-x-get-cache-key, akamai-x-get-extracted-values, akamai-x-get-ssl-client-session-id, akamai-x-get-true-cache-key, akamai-x-serial-no, akamai-x-get-request-id,akamai-x-get-nonces,akamai-x-get-client-ip,akamai-x-feo-trace";

function rewriteUserAgentHeader(e) {
  return {
    ...e,
    requestHeaders: [
      ...e.requestHeaders,
      {
        name: "Pragma",
        value: akamaiPragmaHeaders
      }
    ]
  }
}

browser.webRequest.onBeforeSendHeaders.addListener(
  rewriteUserAgentHeader,
  {urls: ["<all_urls>"]},
  ["blocking", "requestHeaders"]
);
