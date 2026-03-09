const express = require("express")
const cors = require("cors")

const AgentManager = require("../agents/agentManager")
const ManbookProtocol = require("../protocol/manbookProtocol")

const app = express()

app.use(cors())
app.use(express.json())

const agentManager = new AgentManager()
const protocol = new ManbookProtocol()

app.get("/", (req, res) => {
  res.json({ message: "MANBOOK Protocol API running" })
})

app.post("/agent", (req, res) => {

  const { name } = req.body

  const agent = agentManager.registerAgent(name)

  res.json(agent)
})

app.get("/agents", (req, res) => {
  res.json(agentManager.getAgents())
})

app.post("/share", (req, res) => {

  const { agent, data } = req.body

  const record = protocol.shareData(agent, data)

  res.json(record)
})

app.get("/data", (req, res) => {
  res.json(protocol.getAllData())
})

app.listen(3000, () => {
  console.log("ManBook API running on port 3000")
})
