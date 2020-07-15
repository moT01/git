const assert = require('assert');
const { getCommits } = require('./utils');

describe('tests', () => {
  let lastCommand, commits;
  before(async () => {
    commits = await getCommits();
    lastCommand = await getLastCommand();
  });

  it('should pass', async () => {
    const correctCommit = commits[0].message === 'my first commit' && commit[0].filesAdded[0].path === 'index.html';

    assert(correctCommit);
  });
});
