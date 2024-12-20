// Get the URL parameter (?url=) from the current page URL
const urlParams = new URLSearchParams(window.location.search);
let url = urlParams.get('url'); // Get the 'url' parameter

// If there's no URL in the parameters, or it's just text without a period, do a Google search
if (!url) {
    // Default to Google search if 'url' is not in the query parameters
    url = "https://www.google.com/search?q=" + encodeURIComponent(urlParams.get('query') || ''); // Support both 'url' and 'query' params
} else if (!url.includes(".")) {
    // If 'url' is just text (not a URL), treat it as a search term for Google
    url = "https://www.google.com/search?q=" + encodeURIComponent(url);
} else {
    // If it's a valid URL but missing http:// or https://, add https://
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
        url = "https://" + url;
    }
}

// Now load the URL via the proxy
iframeWindow.src = __uv$config.prefix + __uv$config.encodeUrl(url);
