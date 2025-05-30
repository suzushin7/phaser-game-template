import JavaScriptObfuscator from "javascript-obfuscator";
import fs from "fs";
import path from "path";

const targetDir = "./dist/assets";

fs.readdirSync(targetDir).forEach((file) => {
  if (file.endsWith(".js")) {
    const filePath = path.join(targetDir, file);
    const code = fs.readFileSync(filePath, "utf8");

    const obfuscatedCode = JavaScriptObfuscator.obfuscate(code, {
      compact: true,
      controlFlowFlattening: false,
      deadCodeInjection: false,
      stringArray: true,
      rotateStringArray: true,
    }).getObfuscatedCode();

    fs.writeFileSync(filePath, obfuscatedCode);
    console.log(`🔒 Obfuscated: ${file}`);
  }
});
