function myFunc() {
    document.write('<ul><li>Apple</li><li>Banana</li></ul>');

    document.write('<style> .even { background: red; }</style>');
    document.write('<style> .odd { background: yellow; }</style>');
    let dan = 4;
    document.write('<ul>')
    document.write('<table border="1">')
    for (let i = 1; i <= 10; i++) {
        if (i % 2 == 1) {
            document.write('<tr><td class="even">' + dan + ' X ' + i + '</td>' + '<td> = </td><td>' + (dan * i) + '</td></tr>');
        } else {
            document.write('<tr><td class="odd">' + dan + ' X ' + i + '</td>' + '<td> = </td><td>' + (dan * i) + '</td></tr>');
        }
    }
    document.write('</table>')
    document.write('</ul>')
}
