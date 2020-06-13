var tags = ['div', 'p', 'h1', 'div'];
var classes = ['mainBlock', 'mainText', 'mainHeader', 'lastBlock'];
var style = document.head.appendChild(document.createElement('style'));
style.textContent = `
.${classes[0]}{width:200px;height:200px;background:#DC143C;margin-right:20px;margin-top:0;}
.${classes[1]}{width:200px;height:200px;background:#228B22;margin-right:20px;margin-top:0;}
.${classes[2]}{width:200px;height:200px;background:#FFFF00;margin-right:20px;margin-top:0;}
.${classes[3]}{width:200px;height:200px;background:#00BFFF;margin-right:20px;margin-top:0;}
body{display:flex; justify-content:start;}
`
for(var elem of tags){
    var elemHtml = document.body.appendChild(document.createElement(elem));
    var nameOfClass = classes.shift();
    elemHtml.setAttribute('class', nameOfClass);
}