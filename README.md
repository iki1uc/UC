 
Site Status Checker

A small, self-contained diagnostic tool for websites. It checks which pages/sections of a site are reachable, classifies their status, and compares pairs of sections to see how compatible they are.

What it does
Checks a fixed list of pages on the site (via HTTP HEAD requests).
Classifies each page's status as one of: OK, MISSING (wrong path), NETWORK ERROR, READY, COMPATIBLE, FIXED, DONE, HELP NEEDED, UNCLEAR.
Computes a small set of properties for each status (a priority score, a category label, likely cause, likely effect, and an estimated impact/horizon score).
Compares pairs of pages and rates how well they "pair up" (HOT / SYNC / START / LOW / FAIL) based on how similar their status, category, and impact score are.
Displays the results as a readable report in the browser.
Files
File	Purpose
index.html	Landing page with the human-readable status report
404.html	Automatic diagnostic scanner, can be used as a custom 404 page
translate.md	Full list of internal short codes and their plain-language meaning
README.md	This file
LICENSE	MIT License
Usage

Open index.html in a browser to see the status report. To use 404.html as a real 404 page on GitHub Pages: repository Settings → Pages → Source: branch main, folder /.

Why the internal short codes?

The tool uses short internal codes (a few letters, e.g. RDY, FIT, MISS) to keep the data compact and easy to process in code. A translation table (translate.md) maps every code to a plain-language label, so the output stays readable for anyone viewing the page, without needing to know the internal codes.

License

MIT — free to use and modify. Author credit (© iki1uc wieimmer) must be retained per the license terms. See LICENSE.
