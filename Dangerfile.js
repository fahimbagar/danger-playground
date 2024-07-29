const { schedule, danger, fail } = require("danger");

schedule(async () => {
  const commits = danger.git.commits;

  const commitRegex = /^[A-Z]+-\d+: [A-Z]/;
  commits.forEach(commit => {
    if (!commit.message.match(commitRegex)) {
      fail(`Commit message '${commit.message}' does not match the required format '<ticket-name>: XXXX'.`);
    }
  });
});

