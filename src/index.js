const path = require('path');
const fs = require('fs');
const join = path.join;
function resolvePath (dir) {
  return path.resolve(__dirname, dir);
}
function getUtilsEntries (path) {
  let files = fs.readdirSync(resolvePath(path));
  const utilsEntries = files.reduce((ret, item) => {
    const itemPath = join(path, item);
    const isDir = fs.statSync(itemPath).isDirectory();
    if (isDir) {
      ret[item] = resolvePath(itemPath);
    } else {
      const [name] = item.split('.');
      ret[name] = resolvePath(`${itemPath}`);
    }
    return ret;
  }, {});
  return utilsEntries;
}