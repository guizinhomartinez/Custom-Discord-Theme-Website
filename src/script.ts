const fonts = [
    "https://fonts.googleapis.com/css2?family=Fuzzy+Bubbles:wght@400;700&display=swap",
    "https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap",
    "https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
    "https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&display=swap"
];

fonts.forEach(font => {
    const link = document.createElement("link");
    link.href = font;
    link.rel = "stylesheet";
    document.head.appendChild(link);
});