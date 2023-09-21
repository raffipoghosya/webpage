for (var i = 1; i <= 10; i++){
    var a = document.createElement("a");
    a.setAttribute("class","dropdown-item");
    a.title = "Simple Game";
    a.innerHTML = `Tutorial ${i}`;
    document.getElementById("men").appendChild(a);
    a.href = "https://sites.google.com/tumo.org/it423/home";
    if (i == 3){
      a.title = "Pseudo 3D Game";
      a.setAttribute("class", "dropdown-item active");
      a.href = "https://codepen.io/Faze_VrDo/pen/GRpQNpN";
    }
  }