const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your "sql_reference.json" file', () => {
  let rebaseFile;
  before(async () => {
    rebaseFile = await getFileContents('../sql_reference/.git/rebase-merge/done');
  });

  it('should have the correct properties and values', async () => {
    assert(/^(r|reword) .[^ ]* feat: add \.gitignore and sample\.env/gm.test(rebaseFile));
  });
});
