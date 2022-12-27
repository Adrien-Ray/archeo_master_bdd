function csvToJson(csv) {
    // \n or \r\n depending on the EOL sequence
    const lines = csv.split('\n');
    const delimeter = ';';
    const result = [];
    const headers = lines[0].split(delimeter);
    for (const line of lines) {
        const obj = {};
        const row = line.split(delimeter);
        for (let i = 0; i < headers.length; i++) {
            const header = headers[i];
            obj[header] = row[i];
            if (obj[header] && !isNaN(obj[header])) {
                obj[header] = parseFloat(obj[header]);
            };
        };
        result.push(obj);
    };
    result.splice(0, 1);
    // return JSON.stringify(result, null, 2);
    return result;
};
export { csvToJson };
