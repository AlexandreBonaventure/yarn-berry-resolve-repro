const resolve = require('resolve');
const promisify = require('util').promisify;
const resolvePromise = promisify(resolve);

(async function () {
    try {
        const opts = {
            basedir: __dirname,
            paths: [`src`],
        }        
        console.log(await resolvePromise('index.js', opts))
    } catch (e) {
        console.error(e)
    }
})();