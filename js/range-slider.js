const slider=document.getElementById("slider"),inputValues=[document.getElementById("min"),document.getElementById("max")];noUiSlider.create(slider,{start:[0,123],connect:!0,step:1,range:{min:[0],max:[140]},format:{to:function(e){return Number.isInteger(e)?e.toFixed(0):e.toFixed(1)},from:function(e){return parseFloat(e)}}}),slider.noUiSlider.on("update",(function(e,t,n){inputValues[t].value=e[t]}));