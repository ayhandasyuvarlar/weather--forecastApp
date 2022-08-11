let  imageName = document.getElementById('imageName')
let  desc = document.getElementById('desc')

function updateImg(){
    if(desc.innerText === 'r'){
        imageName.src = 'https://yastatic.net/weather/i/icons/funky/dark/ovc_ra.svg'
    }
}
updateImg()