class AgentManager {

  constructor() {
    this.agents = []
  }

  registerAgent(name) {

    const agent = {
      id: this.agents.length + 1,
      name
    }

    this.agents.push(agent)

    return agent
  }

  getAgents() {
    return this.agents
  }

}

module.exports = AgentManager
