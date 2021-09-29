$(document).ready(function(){
  var logs = 0;
  var money = 0;
  var logPlus = 1;
  var autoLogPlus = 0;
  var autoChopperPrice = 100;
  var logPrice = 1;
  var menu;

  $("#chop").click(function(){
    logs+=logPlus;
    changeInventory();
    //changeMarket();
  });

  $("#visit").click(function(){
    menu = switchMenu("marketplace");
  });

  $("#return").click(function(){
    menu = switchMenu("main");
  })

  function changeInventory(){
    $("#money").html("Money: $", money);

    if(logs == 1){
      $("#logs").html("You now own " + logs + " logs.");
    }else{
      $("#logs").html("You still own " + logs + " log.");
    }
  }

  function switchMenu(menu){
    $(".menus").children().css("display", "none");
    $("." + menu).css("display", "block");
    return menu;
  }

});
