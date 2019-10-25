function addItem() {
	var item = document.createTextNode(document.getElementById("item").value) ;
	
	if(item.length > 0) {
		var node = document.createElement("li") ;
		var btn = document.createElement("button") ;
		btn.innerText = "Remove" ;
		
		btn.setAttribute("style","border-radius:10px","border:none","padding:0.4rem") ;
		node.appendChild(item);
		node.appendChild(btn) ;
		

		btn.addEventListener("click",function() {
			this.parentNode.remove() ;
		})
		
		// node.setAttribute("style",)
		document.getElementById("itemlist").appendChild(node) ;  
		document.getElementById("item").value="" ;
	}
	
	else {
		alert("Enter a Task to do") ;
	}
	
	
}