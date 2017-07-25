# CSRF + MXSS

This is code associated to an XSS I found during a pentest mission. The vulnerable application had an XSS input field which filtered the word script (server side).
Moreover the two vulnerable XSS fields had a length check (server side) which made writting an exploit quite difficult.
The XSS was self inflicted on the account in name parameters. Nevertheless, the account was poorly protected against CSRF as the anti-CSRF token was a cookie with no secure flag => An attacker impersonating the server app (through methods such as dns cache poisoning) could easily steal this cookie. The anti-CSRF token was the same for the whole session duration. I ommited the CSRF token from the exploit payload for simplicity.
