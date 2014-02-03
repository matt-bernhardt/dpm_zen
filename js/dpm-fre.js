function windowOpener(url,name,args) {
if (typeof(popupWin) != "object"){
popupWin = window.open(url,name,args);
} else {
if (!popupWin.closed){
popupWin.location.href = url;
} else {
popupWin = window.open(url,name,args);
}
}
popupWin.focus();
}

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

function openpopupQuiz(){
var popurl="/sites/default/files/quiz-fre.html"
winpops=window.open(popurl,"","width=600,height=700,")
}

function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}






var activeSub=0;
var SubNum=0;

function reDo(){ window.location.reload() }
    window.onresize = reDo;


    //Define global variables

        var timerID = null;
        var timerOn = false;
        var timecount = 1000;
        var what = null;
        var newbrowser = true;
        var check = false;

        function test(){
        alert("Hi");
        }

        function init(){
        //  alert ("Running Init");
        dummyvar = "can i see this?";
          if (document.layers) {
                      //  alert ("Running Netscape 4");
                        layerRef="document.layers";
                        styleSwitch="";
                        visibleVar="show";
            screenSize = window.innerWidth;
            what ="ns4";


          }else if(document.all){
                      //  alert ("Running IE");
                        layerRef="document.all";
                        styleSwitch=".style";
                        visibleVar="visible";
            screenSize = document.body.clientWidth + 18;
            what ="ie";

          }else if(document.getElementById){
                      //  alert ("Running Netscape 6");
                        layerRef="document.getElementByID";
                        styleSwitch=".style";
                        visibleVar="visible";
            what="moz";
          
          }else{
            //alert("Older than 4.0 browser.");
            what="none";
            newbrowser = false;
          }
          
 
        //window.status='status bar text to go here';
        check = true;
        }

    // Turns the layers on and off
        function showLayer(layerName){
            if(check){
                if (what =="none"){
                    return;
                    }
                else if (what == "moz"){
                    document.getElementById(layerName).style.visibility="visible";
                    }
                else{
                  eval(layerRef+'["'+layerName+'"]'+styleSwitch+'.visibility="visible"');
                  }
         }
            else {// alert ("Please wait for the page to finish loading.");
                return;}
        }

        function hideLayer(layerName){
            if(check){
                if (what =="none"){
                    return;
                    }
                else if (what == "moz"){
                    document.getElementById(layerName).style.visibility="hidden";
                    }
                else{
                  eval(layerRef+'["'+layerName+'"]'+styleSwitch+'.visibility="hidden"');
                }
        
            }
            else {// alert ("Please wait for the page to finish loading.");
                return;}
        }


        function hideAll(){
                hideLayer('layer1');
                hideLayer('layer2');
                hideLayer('layer3');
                hideLayer('layer4');
                hideLayer('layer5');
                hideLayer('layer6');
                hideLayer('layer7');
                }


        function startTime() {
            if (timerOn == false) {
                timerID=setTimeout( "hideAll()" , timecount);
                timerOn = true;

            }

        }


        function stopTime() {
            if (timerOn) {
                clearTimeout(timerID);
                timerID = null;
                timerOn = false;
            }
        }

        function onLoad(){
            init();
            
            }
