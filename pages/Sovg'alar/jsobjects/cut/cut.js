export default {
  formatBase64Data: (base64Data) => {
    return base64Data.replace(/^data:image\/[^;]+;base64,/, "");
  }	
}