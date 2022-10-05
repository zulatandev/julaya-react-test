export const getTotalScore = (agent) => {
  return agent.comments.length > 0 ? agent.comments.reduce((total, { score }) => total + score, 0) : 0;
};

export const getAverageScore = (agent) => {
  return agent.comments.length > 0
    ? (getTotalScore(agent) / (agent.comments.length)).toFixed(2)
    : 0;
};
