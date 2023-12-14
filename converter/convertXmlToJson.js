const fs = require('fs').promises;
const xml2js = require('xml2js');
const util = require('util');




const convertXmlToJson = async () => {
    try {
        const xmlData = await fs.readFile('./fuentes-datos/CAT.xml', 'utf-8');
        const parseXml = util.promisify(xml2js.parseString);
        const result = await parseXml(xmlData, { explicitArray: false, mergeAttrs: true });

        const centros = result.response.row;        
        return centros;
    } catch (err) {
        console.error('Error al procesar el archivo XML:', err);
        throw err; // Propaga el error para que pueda ser manejado por el llamador
    }
}

module.exports = {convertXmlToJson}