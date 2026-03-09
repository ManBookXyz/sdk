const API = "http://localhost:3000"

async function createAgent(){

  const name = document.getElementById("agentName").value

  const res = await fetch(API + "/agent",{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({name})
  })

  const data = await res.json()

  alert("Agent Created: " + data.name)
}

async function shareData(){

  const dataText = document.getElementById("dataInput").value

  await fetch(API + "/share",{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      agent:"human",
      data:dataText
    })
  })

  alert("Data shared to MANBOOK Protocol")
}
