import { newUnibeautify, Beautifier } from "unibeautify";
import beautifier from "../../src";
import * as path from "path";

const filePath: string = path.resolve(__dirname, "test.css");
const errorFilePath: string = path.resolve("nothing");

test("should successfully beautify CSS text with prefer_beautifier_config", () => {
  const unibeautify = newUnibeautify();
  unibeautify.loadBeautifier(beautifier);

  // tslint:disable no-trailing-whitespace
  const text = `.class {
    color: #fff;
      content: "";
}`;
  // tslint:enable no-trailing-whitespace
  const beautifierResult = `.class {
  color: #fff;
  content: '';
}`;

  return unibeautify
    .beautify({
      filePath,
      languageName: "CSS",
      options: {
        CSS: {
          stylelint: {
            prefer_beautifier_config: true,
          },
        } as any,
      },
      text,
    })
    .then(results => {
      expect(results).toBe(beautifierResult);
    });
});
