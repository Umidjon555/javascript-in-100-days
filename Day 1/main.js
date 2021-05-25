var click_btn = document.getElementById("modal_btn");

var close_btn = document.getElementsByClassName("close_btn")[0];

var modal = document.getElementById("modal");

var body = document.getElementsByTagName("body")[0];
function display_modal(){
    modal.style.display = "block";
  }

  function close_modal(){
      modal.style.display = "none";
  }

  function click_outside(e){
      if(e.target == modal){
        console.log("hello");
        close_modal();
      }

  }
click_btn.addEventListener("click", display_modal);

close_btn.addEventListener("click", close_modal);

window.addEventListener("click", click_outside);