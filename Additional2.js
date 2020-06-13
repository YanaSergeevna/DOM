var style = document.head.appendChild(document.createElement('style'));
style.textContent = `.redBack{background-color: red!important;}`
var collectionChildrenBody = document.body.children
for(var obj of collectionChildrenBody){
    if(obj.tagName === 'SCRIPT')continue
    obj.classList.add('redBack');
}
// альтернатива
var style = document.head.appendChild(document.createElement('style'));
style.textContent = `.redBack{background-color: red!important;}`
var tags = ['header', 'footer', 'main', 'div', 'p' ];
for(var elem of tags){
    var collection = document.getElementsByTagName(elem);
    for(var tag of collection){
        tag.classList.add('redBack');
    }
}