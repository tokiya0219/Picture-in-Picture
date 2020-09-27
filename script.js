const videoElement = document.getElementById('video');
const button = document.getElementById('button');

//Prompt to select media stream, pass to video element, then play
async function selectMediaStream() {
    try{
        const meadiaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = meadiaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch(err) {
        console.log('whoops, error here:', err);
    }
}

button.addEventListener('click', async () => {
    button.disabled = true;

    await videoElement.requestPictureInPicture();

    button.disabled = false;
});

selectMediaStream();