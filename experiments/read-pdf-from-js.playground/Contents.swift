import JavaScriptCore
import Foundation

//// get the source
func getJSContext() -> JSContext {
    let filePath = Bundle.main.path(forResource:"main", ofType: "js")
    let data = FileManager.default.contents(atPath: filePath!)!
    let content = String(data: data, encoding: .utf8)!
    let context = JSContext()!
    context.evaluateScript(content)
    return context
}

// get the data
func readFile() -> [UInt8] {
    let filePath = Bundle.main.path(forResource:"example", ofType: "pdf")
    let data = FileManager.default.contents(atPath: filePath!)!
    return Array(data)
}

// attach the swift callback to the js context
let context = getJSContext()
let library = context.objectForKeyedSubscript("resumeChecker")!

// create a callback
let swiftHandler: @convention(block) (String) -> Void = {string in
        //do something
    print(string)
}
let swiftBlock = unsafeBitCast(swiftHandler, to: AnyObject.self)

let byteArray = readFile()

let fn = library.objectForKeyedSubscript("convertPDFToTextSwiftCallback")!
fn.call(withArguments: [byteArray, swiftBlock])
