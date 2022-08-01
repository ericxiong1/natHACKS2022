
const dataDevices = new DataDevices()

dataDevices.load($i)
const button = document.createElement('button');
button.innerHTML = 'Bluetooth Connect'
button.style.zIndex = '1000';
button.style.position = 'fixed';
button.style.top = '0'
button.style.left = '0'
button.style.background = 'white'
button.style.borderRadius = '10%'
button.style.color = 'black';
document.body.appendChild(button);
const lightsOff = document.createElement('div');
lightsOff.style.width = '10000px'
lightsOff.style.height = '10000px'
lightsOff.style.position = 'absolute'
lightsOff.style.left = '0'
lightsOff.style.right = '0'
lightsOff.style.top= '0'
lightsOff.style.bottom = '0'
lightsOff.style.opacity = '0'
lightsOff.style.backgroundColor = 'black'
lightsOff.style.zIndex = '999'
lightsOff.style.pointerEvents = 'none'
document.body.appendChild(lightsOff)

button.onclick = () => {

    dataDevices.getUserDevice({
        label: 'muse', // declare which device you want to connect to (e.g. 'device', 'ganglion', 'muse')
    }).then(device => {
        button.innerHTML = 'Paired!'
        console.log(device.stream)
        device.stream.tracks.forEach(ontrack)
        device.stream.onaddtrack = (e) => ontrack(e.track)
    })

}
