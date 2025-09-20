const fontUrl = './NotoSansJP-Regular.ttf';
const fontBytes = await fetch(fontUrl).then(res => res.arrayBuffer());
const jpFont = await pdfLibDoc.embedFont(fontBytes, { subset: true });