// to add a h1 element
var h = document.createElement('h1')
var myValue = document.createTextNode('Hello Guys!')
h.appendChild(myValue)
document.querySelector('h1').appendChild(h);

//removing dono todo

var ul = document.getElementById('list')
var li

var addButton = document.getElementById('add')
addButton.addEventListener('click', addItem)

var removeButton = document.getElementById('remove')
removeButton.addEventListener('click', removeItem)

var removeallButton = document.getElementById('removeall')
removeallButton.addEventListener('click', removeallItem)

function addItem(){
   var input = document.getElementById('input')
   var item = input.value
   ul = document.getElementById('list')
   var textnode = document.createTextNode(item)

   if(item === ''){
    var para = document.createElement('p')
    var mValue = document.createTextNode('enter a todo')
    para.appendChild(mValue)
    document.querySelector('p').appendChild(para);
   }else {
       //create li
       li = document.createElement('li')

       //create checkbox
       var checkbox = document.createElement('input')
       checkbox.type = 'checkbox'
       checkbox.setAttribute('id', 'check')
  
       //create label
       var label = document.createElement('label')
       
       //add these elements on web page

       ul.appendChild(label)
       li.appendChild(checkbox)
       label.appendChild(textnode)
       li.appendChild(label)
       ul.insertBefore(li, ul.childNodes[0])
     
     setTimeout(() => {
        li.className = 'visual'
     }, 4);
     input.value = ''
   }
}

function removeItem(){
        li = ul.children //store as array
        for(let index = 0; index < li.length; index++){
            while(li[index] && li[index].children[0].checked){
                ul.removeChild(li[index])
            }
            
        }
    }

function removeallItem(){
 while(ul.hasChildNodes()){
     ul.removeChild(ul.firstChild)
 }
}

