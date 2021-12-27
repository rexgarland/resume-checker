import PDFKit


let filePath = Bundle.main.path(forResource:"example", ofType: "pdf")!
let url = URL(fileURLWithPath: filePath)
let pdf = PDFDocument(url: url)
pdf?.string
