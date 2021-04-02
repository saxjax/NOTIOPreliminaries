const BLACK_KEYS = ['s','d','f','g','h','k','l']
const WHITE_KEYS = ['z','x','c','v','b','n','m']
const PressedKeys = {s:'C#',d:'D#',g:'F#',h:'G#',j:'A#',z:'C',x:'D',c:'E',v:'F',b:'G',n:'A',m:'B'}
const  whiteKeys = {z:'C',x:'D',c:'E',v:'F',b:'G',n:'A',m:'B'}
const keys =document.querySelectorAll('.key');

keys.forEach(key => {
  key.addEventListener('click',()=> playNote(key))
})

document.addEventListener('keydown',e =>{
  const key = e.key
  document.getElementById("SKRIV").innerHTML = PressedKeys[key]
  playKeyedNote(PressedKeys[key])
  
})

function playNote(key){
  const noteAudio = document.getElementById(key.dataset.note)
  noteAudio.currentTime = 0;
  noteAudio.play()
  key.classList.add('active')
  noteAudio.addEventListener('ended',()=>{
    key.classList.remove('active')
  } )
}

function playKeyedNote(keyed){
  const noteAudio = document.getElementById(keyed)
  noteAudio.currentTime = 0;
  noteAudio.play()
}