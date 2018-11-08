import { newUnibeautify, Beautifier } from "unibeautify";
import beautifier from "../../src";

test("should successfully beautify CSS text", () => {
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
}
`;

  return unibeautify
    .beautify({
      languageName: "CSS",
      options: {
        CSS: {
          indent_size: 2,
          quotes: "single",
          remove_trailing_whitespace: true,
          end_with_newline: true,
          wrap_line_length: 80,
        },
      },
      text,
    })
    .then(results => {
      expect(results).toBe(beautifierResult);
    });
});
