
// Write a function which takes a message and time.The function should print that message every X interval.

const showRepeatedMsg = (msg, time) => {
   setInterval(
      () => console.log(msg), 
      time
   );
}
showRepeatedMsg('Apps', 2000)

//  Write a function which takes a number. 
//   Then print a countdown from that number to 0. At zero print "Bang Bang!"*/

const countDownTimer = num => {
	const bomb = setInterval(() => {
    if(num===0)
		  {
        console.log('Bang Bang')
        clearInterval(bomb);
      } 
    else if(num>0)
		  {
        console.log(num);
        num--;
      }
	}, 1000);
}
countDownTimer(5)

// Async Await Exercises

//print data on success

const fakeFetch = (msg, shouldReject) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (shouldReject) {
				reject(`error from server: ${msg}`)
			}
			resolve(`from server ${msg}`);
		}, 3000)
	})
}
const printData = async (msg, flag=0) => {
  try {
		const serverData = await fakeFetch(msg, flag)
	  console.log(serverData);
	} catch (err) {
	 console.log(err)
	}
}
printData("Hello");

// Create a function `getServerResponseLength(msg)` 
// This function will use `fakeFetch()` internally  with the message and 
// return the length of the response received by server.
// Note: Instead of returning the response from server this should return the length.*/


const getServerResponseLength = async (msg) => {
  try {
    const serverData = await fakeFetch(msg)
    const serverDataLen = serverData.length
    console.log(serverDataLen)
  } catch (error) {
    console.log(error)
  }
}
getServerResponseLength('message')


// Write a function `syncCallsToServer(msg1, msg2)` which will take two messages and call `fakeFetch()` with the second message only when the first message has returned from the server.

const syncCallsToServer = async (msg1, msg2) => {
  try {
    const serverData1 = await fakeFetch(msg1);
    const finalData = await fakeFetch(`${msg2} ${serverData1}`);
    console.log(finalData)
  } catch (error) {
    console.log(error)
  }
}
syncCallsToServer("Hello", "Shivam");

