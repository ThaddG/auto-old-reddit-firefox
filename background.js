function changeURL(requestDetails) {
  const tabId = requestDetails.tabId;
  const url = requestDetails.url;
  const oldRedditUrl = url.replace('www', 'old');

  browser.tabs
    .update(tabId, { active: true, url: oldRedditUrl })
    .then(() => console.log('url updated'));
}

browser.webRequest.onBeforeRequest.addListener(changeURL, {
  urls: ['https://www.reddit.com/', 'https://www.reddit.com/r/*'],
});
