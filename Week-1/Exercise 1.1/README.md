# Exercise 1.1

## The following steps shows how a browser works:

- It all starts with a user entering a URL into the address bar, click a link, submitting a form or doing some action on a webpage.
- Then DNS lookup will happen for the IP of the hostname which is fulfilled by a name server. The same IP is then get cached for sometime locally to speed up next request to same hostname.
- The next step is where [TCP](https://developer.mozilla.org/en-US/docs/Glossary/TCP_handshake) Handshake happens, where two entities can negotiate the parameters of the network TCP socket.
- The next step is [TLS](https://developer.mozilla.org/en-US/docs/Glossary/TLS) negotiation where client and server determines which cipher will be used to encrypt the communication for secure connections established over HTTPS by providing a valid digital certificate confirming its identity in order to establish a secure connection.

<p align="center">
  <img src="https://developer.mozilla.org/en-US/docs/Web/Performance/How_browsers_work/ssl.jpg">
</p>

- So, in total 8 round trips needed to established a secure connection.
- Now browser actually sends an intial HTTP GET request on behalf of the user to mainly get HTML file in the response and the first response packet from server will be of size 14KB to balance the network speed and it increses the size slowly till the netowork limit is hit.

## High Level components of a browser and its working

- User Interface – This is the visible portion of the browser like the display area, settings page, home button, back button etc.
- Browser engine – It is responsible connecting browser main window and rendering engine.
- Rendering engine – Its main role is to parse and display the different components of a webpage and show it on browser main window.
- Networking component - Its main responsibility is to perform HTTP request and response method to send and receive the data.
- Data storage component - This component help in saving the data like cookies locally either temporarilily for the session or for longer time accross the session using localStorage.

## Parsing and its importance

- Parsing is the step in which a web browser creates a DOM Tree out of the data we get in response for a webpage.
- The browser starts parsing the data as soon as it even if the page size is greater than the 14 KB.
- So, in order to parse and render the data as soon as possible we need to keep the rendering portion of the website in first 14 KB of data as the web page will not get rendered until all the html, css and javascript is parsed.
- Parsing speed also depends other factors like:
  - on number of nested elements, i.e. lower the nesting the better will be the rendering speed.
  - on number of blocking elements like <script> tag without async and defer attributes.

## The order of execution of the script

- Three different kinds of script executed in browser are:
  - Dynamic Script
    - Async Script - This kind of script is loaded by the browser in parallel with pasing step of the page. The browser in this case is free to run the script in any order and anytime by pausing the parser if it is running at that point of time.
    - Defer Script - This kind of script is run by browser after the parser is done parsing the page. The defer script runs in the order browser encounters it.
  - Non Dynamic Script - This is a normal inline or external script which browser runs as it encounters while parsing the page. The inline script in the page gets executed after all the external script which came before the inline script is executed.
  
  
  
# References:

- [https://developer.mozilla.org/en-US/docs/Web/Performance/How_browsers_work](https://developer.mozilla.org/en-US/docs/Web/Performance/How_browsers_work)
- [https://dev.to/lambdatest/what-are-the-major-components-of-a-modern-web-browser-3ih1](https://dev.to/lambdatest/what-are-the-major-components-of-a-modern-web-browser-3ih1)
- [https://www.w3schools.com/jsref/prop_win_localstorage.asp](https://www.w3schools.com/jsref/prop_win_localstorage.asp)
- [https://stackoverflow.com/questions/8996852/load-and-execute-order-of-scripts](https://stackoverflow.com/questions/8996852/load-and-execute-order-of-scripts)