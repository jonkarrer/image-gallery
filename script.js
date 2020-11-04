/* Make boxes flex*/
function toggleOpen(item) {
if (item.className == "flex-close"){
  
  const flexOpen = document.querySelectorAll(".flex-open");
    flexOpen.forEach(el=> el.className ="flex-close");
  
  
  item.className = "flex-open";

}else {
  item.className = "flex-close";
}
}

