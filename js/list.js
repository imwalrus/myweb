function myFunc() {
    document.write("<ul><li>Apple</li><li>Banana</li></ul>");

    let dan = 4;
    document.write("<table border='1'>")
    for (let i = 1; i <= 10; i++) {
        if (i % 2 == 1) {
            document.write('<tr><td class="even">' + dan + " X " + i + "</td>" + "<td> = </td><b><td>" + (dan * i) + "</b></td></tr>");
        } else {
            document.write('<tr><td class="odd">' + dan + " X " + i + "</td>" + "<td> = </td><b><td>" + (dan * i) + "</b></td></tr>");
        }
    }
    document.write("</table>")
}