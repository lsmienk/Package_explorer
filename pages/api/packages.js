import fs from 'fs'

export default (req, res) => {
    fs.readFile(process.env.filePath, 'utf8', function(err, data) {
        let packages = data.split('\n\n');
        packages.sort();
        const result = packages.reduce((acc, current) => {
            // REGEX MAGIC

            const pairs = current.split(/(?<=^|[\r\n])([A-Z][^:]*): ([^\r\n]*(?:[\r\n]+(?![A-Z].*:).*)*)/);
            let i = 0;
            const obj = {};
            while(pairs[i] !== undefined) {
                if (pairs[i] == '' || '\n') {
                    i++;
                    obj[pairs[i++]] = pairs[i++];
                }
            }
            acc.push(obj);
            return acc;
        }, []).slice(1);
        res.end(JSON.stringify(result));
    })
}