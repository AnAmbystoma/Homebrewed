var root = document.documentElement;
var popup = document.getElementById("popup");
var text = document.getElementById("popuptxt");
var header = document.getElementById("popupheader");
var image = document.getElementById("popupimg");
var confetti = document.getElementById("confetti");

function resizenav(){
    var w = Math.max(400,window.innerWidth);
    var disw =  Math.min(Math.max(400,window.innerWidth),600);
    var h = Math.max(700,window.innerHeight)*80/100*5/100;
    root.style.setProperty('--buttonsize', String(h) + 'px');
    root.style.setProperty('--buttontopmar', String((h*100/80 - h)/2.5) + 'px');
    root.style.setProperty('--btnsz', String(disw*19/100*98/100) + 'px');
    popup.style.fontSize = String(Math.min(window.innerWidth/35, window.innerHeight/40)) + 'px';
    root.style.setProperty('--col1align', String(document.getElementById('col2').clientHeight*21/100) + 'px');
    root.style.setProperty('--col3align', String(document.getElementById('col2').clientHeight*16/100) + 'px');
    root.style.setProperty('--steptreeh', String(document.getElementById('col2').clientHeight) + 'px');
    root.style.setProperty('--div3namemargin', String(-1*(disw*19/100*96/100+7)) + 'px');
    if (w>600) root.style.setProperty('--aligndiagram', String((w-600)/2 + w*1/100) + 'px');
    else root.style.setProperty('--aligndiagram', '1%');
}

resizenav();
window.addEventListener('resize',resizenav);

function showpopup(x){
    confetti.style.display = "none";
    header.innerHTML = x;
    if (x == 'Prepare Operating System'){
        image.style.backgroundImage = "url('css/Resources/download\ OS.png')";
        text.innerHTML = htmlpopup[x];
    }else if (x == 'Configure BIOS'){
        image.style.backgroundImage = "url('css/Resources/BIOS\ page.png')";
        text.innerHTML = htmlpopup[x];
    }else if (x == 'Prepare Motherboard'){
        image.style.backgroundImage = "url('css/Resources/Prepare\ motherboard2.jpg')";
        text.innerHTML = htmlpopup[x];
    }else if (x == 'Install Fan *OPTIONAL*'){
        image.style.backgroundImage = "url('css/Resources/fans.jpg')";
        text.innerHTML = htmlpopup[x];
    }else if (x == 'Congratulations!'){
        image.style.backgroundImage = "url('css/Resources/congrats.jpeg')";
        confetti.style.display = "block";
        text.innerHTML = htmlpopup[x];
    }else{
        image.style.backgroundImage = "url('css/Resources/blank.png')";
        text.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet nulla facilisi morbi tempus iaculis urna. Pharetra diam sit amet nisl suscipit adipiscing bibendum. Lorem ipsum dolor sit amet consectetur adipiscing. Dis parturient montes nascetur ridiculus mus mauris. Diam maecenas sed enim ut sem viverra. Nec dui nunc mattis enim ut tellus elementum sagittis. Facilisis magna etiam tempor orci eu lobortis elementum.';
    }
    popup.style.display = "block";
}

window.onclick = function(event){
    if(event.target == popup) {
        popup.style.display = "none";
    }
}

var htmlpopup = {
    'Prepare Operating System':'Use a flash drive that has a minimum of 8GB of space, and prepare it by wiping the disk and formatting it to an universal format. Go to the appropriate website to download the operating system you have decided on, and ensure you are downloading the software from an official distributor. Be sure that the version of the operating system is up to date and compatible with the hardware you have. Download the software onto the flash drive and keep it one side, we’ll only use it later.',
    'Configure BIOS':'Boot up the computer and press the debug key to enter the BIOS menu. Plug in the flash drive you prepared from the earlier step. From the BIOS menu navigate to the startup order, and select the flash drive. Prioritise the flash drive, either by dragging it above the disk drive selected, or by right clicking and pressing ‘prioritise’ (this varies between different motherboards). Then save changes and restart the computer, and it will boot up in the operating system you installed.',
    'Prepare Motherboard':'Setup the motherboard in a large flat area. Layout all the parts you will be installing, namely the CPU, its cooling system, RAM chips, SSD. Install the CPU into the CPU slot, apply a layer of cooling paste, and attach the cooling system on top. Plug the RAM chips into the RAM slots by holding them evenly above the slot, and pressing down gently on both ends.Try to alternate the occupied slots. Lastly, screw in the SSD into one of the extension slots, and be sure that it is connected to the port securely.',
    'Install Fan *OPTIONAL*':'If you bought any extra fans, plan out where on the casing you want to attach the fans. Make sure that the fans guide the air in a specific path, preferably over most of the components and then back out of the casing. Be sure to take into account the added fan that is built into the PSU, the fan that comes with the CPU, and the fans attached to the GPU. After planning, secure the fans to the casing with the screws and attach the wires to the PSU.',
    'Congratulations!':'Congratulations! You\'re Done!<br><br>If this helped you, please share it with others!<br><br><div id=\'links\'>Follow us @ <br><a href=\'https://youtube.com\'><img src=\'css/Resources/icon_youtube.png\'></a> <a href=\'https://discord.com\'><img src=\'css/Resources/icon_discord.png\'></a><a href=\'https://twitter.com\'><img src=\'css/Resources/icon_twitter.png\'></a><a href=\'https://facebook.com\'><img src=\'css/Resources/icon_facebook.png\'></a><a href=\'https://instagram.com\'><img src=\'css/Resources/icon_insta.png\'></a></div>'
}

