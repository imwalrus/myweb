// page_166.js
function drawTable() {
        // let show = document.getElementById('show');
        // let h1 = document.createElement('h1');
        // h1.innerHTML = 'Hello';
        // show.append(h1);

        let show = document.getElementById('show');
        let h2 = document.createElement('h2');
        h2.innerHTML = '입력 양식 데이터 전송 버튼';
        show.append(h2);
        let p = document.createElement('p');
        let input = document.createElement('input');
        input.innerHTML;
        show.append(p, '이름: ', input);
        let p1 = document.createElement('p');
        let input1 = document.createElement('input');
        input1.innerHTML;
        show.append(p1, '학과: ', input1);
        let input2 = document.createElement('input');
        let br = document.createElement('br');
        input2.setAttribute('type', 'submit');
        input2.setAttribute('value', '전송');
        input2.innerHTML;
        show.append(br, input2);


        // document.write = '<h2>입력 양식 데이터 전송 버튼</h2>';
        // document.write = '<p>이름: ' + '<input type="text" name="name"></p>';
        // document.write = '<p>학과: ' + '<input type="text" name="major"></p>';
        // document.write = '<input type="submit" value="전송">';
        
}