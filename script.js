window.onload = function() {
    var urls = [
        'https://forms.office.com/e/2cZGXt8Xrm',
        'https://forms.office.com/e/1Ja2daJX3U',
        'https://forms.office.com/e/wVEnT3tiYk',
        'https://forms.office.com/e/KfBRaZYV1v'
    ];
    var randomUrl = urls[Math.floor(Math.random() * urls.length)];
    window.location.href = randomUrl;
};
