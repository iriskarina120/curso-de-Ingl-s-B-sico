function openBook() {
    document.getElementById('cover').style.transform = 'rotateY(-180deg)';
    setTimeout(() => {
        document.getElementById('cover').classList.add('hidden');
        document.getElementById('page1-right').classList.remove('hidden');
    }, 1000);
}

function turnPage(currentId, nextLeftId, nextRightId, audioId) {
    document.getElementById(currentId).style.transform = 'rotateY(-180deg)';
    setTimeout(() => {
        document.getElementById(currentId).classList.add('hidden');
        document.getElementById(nextLeftId).classList.remove('hidden');
        document.getElementById(nextRightId).classList.remove('hidden');
        playAudio(audioId);
    }, 1000);
}

function closeBook() {
    document.getElementById('page6-left').style.transform = 'rotateY(-180deg)';
    document.getElementById('back-cover').style.transform = 'rotateY(-180deg)';
    setTimeout(() => {
        document.getElementById('page6-left').classList.add('hidden');
        document.getElementById('back-cover').classList.add('hidden');
        document.getElementById('cover').classList.remove('hidden');
    }, 1000);
}

function playAudio(audioId) {
    const audio = document.getElementById(audioId);
    audio.play();
}
