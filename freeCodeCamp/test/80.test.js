const assert = require('assert');
const { getStagedFiles } = require('./utils');

describe('tests', () => {
  let stagedFiles;
  before(async () => {
    stagedFiles = await getStagedFiles();
  });

  it('should pass', async () => {
    const fileAdded =
      stagedFiles.findIndex(item => {
        return item.filename === 'index.html' && item.status === 'Added';
      }) >= 0;

    assert(fileAdded);
  });
});
