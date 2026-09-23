const fs = require("fs");

let html = fs.readFileSync("index.html", "utf8");

// Decode HTML entities if present
html = html
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, "&");

describe("HTML5 Layout with Aside (50 Marks)", () => {

    test("Header exists", () => {
        expect(html).toMatch(/<header>/i);
    });

    test("Navigation exists", () => {
        expect(html).toMatch(/<nav>/i);
    });

    test("Section exists", () => {
        expect(html).toMatch(/<section>/i);
    });

    test("Aside exists", () => {
        expect(html).toMatch(/<aside>/i);
    });

    test("Footer exists", () => {
        expect(html).toMatch(/<footer>/i);
    });

    test("Navigation contains four links", () => {
        const nav = html.match(/<nav>([\s\S]*?)<\/nav>/i);
        expect(nav[1].match(/<a /gi).length).toBe(4);
    });

    test("Page heading exists", () => {
        expect(html).toMatch(/Murach HTML5 & CSS3 Layout Example/i);
    });

    test("Aside heading exists", () => {
        expect(html).toMatch(/<h2>\s*Aside\s*<\/h2>/i);
    });

    test("Footer copyright exists", () => {
        expect(html).toMatch(/2026/i);
    });

    test("CSS contains float layout", () => {
        expect(html).toMatch(/float\s*:\s*left/i);
        expect(html).toMatch(/float\s*:\s*right/i);
    });

});