const box = document.getElementById('count-up')
       const box2 = document.getElementById('count-up2')
       const box3 = document.getElementById('count-up3')

let count = 0

const countUp = setInterval(() => {
  let boxCount = box.dataset.count
  if(count == boxCount) clearInterval(countUp)
  box.innerHTML = count + box.dataset.unit
  count = count + Math.floor((boxCount/60))
  if(count > boxCount) count = boxCount
}, 20);


    let count2 = 0

    const countUp2 = setInterval(() => {
        let boxCount2 = box2.dataset.count
        if(count2 == boxCount2) clearInterval(countUp2)
        box2.innerHTML = count2 + box2.dataset.unit
        count2 = count2 + Math.floor((boxCount2/100))
        if(count2 > boxCount2) count2 = boxCount2
    }, 20);

    let count3 = 0

    const countUp3 = setInterval(() => {
        let boxCount3 = box3.dataset.count
        if(count3 == boxCount3) clearInterval(countUp3)
        box3.innerHTML = count3 + box3.dataset.unit
        count3 = count3 + Math.floor((boxCount3/30))
        if(count3 > boxCount3) count3 = boxCount3
    }, 20);



    function myFunction(x) {
        x.classList.toggle("fa-xmark");
      }