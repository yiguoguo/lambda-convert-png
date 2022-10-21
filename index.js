const axios = require("axios");
const pdfToPng = require("pdf-to-png-converter").pdfToPng;

const responseSuccess = function(data){
    return {
        "code":200,
        "message":"success",
        "data":data
    };
}
const responseError = function(message){
    return {
        "code":500,
        "message":message
    };
}

exports.handler = async (event) => {
    const pdfUrl = event.pdf;
    const labelResponse = await axios.get(pdfUrl,  { responseType: 'arraybuffer' })
    const pdfBuffer = Buffer.from(labelResponse.data, "utf-8");

    const pngPages = await pdfToPng(pdfBuffer, {
        disableFontFace: false, // When `false`, fonts will be rendered using a built-in font renderer that constructs the glyphs with primitive path commands. Default value is true.
        useSystemFonts: false, // When `true`, fonts that aren't embedded in the PDF document will fallback to a system font. Default value is false.
        viewportScale: 2.0, // The desired scale of PNG viewport. Default value is 1.0.
    }) 
    if(pngPages[0]){
        return responseSuccess({
            "png": pngPages[0].content.toString("base64")
        });
    }else{
        return responseError("convert fail")
    }
};