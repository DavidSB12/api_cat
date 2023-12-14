
const {convertXmlToJson} = require("../converter/convertXmlToJson")


const getJsonData = async (req, res) => {
    const jsonContent = await convertXmlToJson();
    res.status(200).json(jsonContent.row)    
}

module.exports = {getJsonData}