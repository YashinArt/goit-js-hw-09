const form = document.querySelector('.form')
const resultDataForm = addEventListener('submit', onAction)


function onAction(event){
  event.preventDefault()  
  let delay = Number(event.target.delay.value);
  let step = Number(event.target.step.value);
  let amount = Number(event.target.amount.value);

    for(let position = 1; position <= amount; position += 1){
      createPromise(position, delay)
      .then(({ position, delay })=>{
        setTimeout(()=>{
          console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
          // Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
          console.log(delay)
        },delay)
    
      })
      .catch(({ position, delay })=>{
        setTimeout(()=>{
          console.log(`❌ Rejected promise ${position} in ${delay}ms`);
          // Notify.failure(`Rejected promise ${position} in ${delay} ms`);
        }, delay)
      })
      delay+=step
    }

}
function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  let promiseValue = { position, delay };
  const result = new Promise((resolve, reject)=>{
    if (shouldResolve) {
      resolve(promiseValue)
    }
    reject(promiseValue)
  });
  return result
}




createPromise(2, 1500)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });