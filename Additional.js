var tags = [
        {
                name: 'div',
                attrs: { className:'mainBlock'},
                text: 'Hаведи на меня курсор'
        },
        {
                name: "p", 
                attrs: { className: 'mainText'},
                text: 'Hаведи на меня курсор'
        },
        {
                name: 'h1', 
                attrs: { className: 'mainHeader' },
                text: 'Кликни на меня'
        },
        {
                name: 'section', 
                attrs: { className: 'lastBlock' },
                text: 'Кликни на меня'
        }
]
var style = document.head.appendChild(document.createElement('style'));
style.textContent = `
.mainBlock{width:200px;height:200px;background:#DC143C;margin-right:20px;margin-top:0;}
.mainText{width:200px;height:200px;background:#228B22;margin-right:20px;margin-top:0;}
.mainHeader{width:200px;height:200px;background:#FFFF00;margin-right:20px;margin-top:0;}
.lastBlock{width:200px;height:200px;background:#00BFFF;margin-right:20px;margin-top:0;}
body{display:flex; justify-content:start;}
`
for(var elem of tags){
    var elemHtml = document.body.appendChild(document.createElement(elem.name));
    for(var attr in elem.attrs){
         elemHtml.setAttribute('class', elem.attrs[attr])
    }
    elemHtml.innerText = elem.text
    var text = document.createTextNode('My name is Yana');
    elemHtml.appendChild(text);
    elemHtml.id = `${elem.name}Elem`
}
var mainEven = document.getElementById('divElem');
mainEven.onmouseover = function(event) {
    event.target.style.background = 'red';
}
mainEven.onmouseout = function(event) {
    event.target.style.background = '#DC143C';
}
var pEvem = document.getElementById('pElem');
pEvem.onmouseenter = function(event) {
    event.target.style.background = '#00FF7F';
}
pEvem.onmouseleave = function(event) {
    event.target.style.background = '#228B22';
}
var h1Even = document.getElementById('h1Elem');
h1Even.onmouseenter = function(event) {
    event.target.style.background = '#FFD700';
}
h1Even.onmouseleave= function(event) {
    event.target.style.background = '#FFFF00';
}
var sectionEven = document.getElementById('sectionElem');
sectionEven.onmouseover = function(event) {
    event.target.style.background = '#4682B4';
}
sectionEven.onmouseout = function(event) {
    event.target.style.background = '#00BFFF';
}
