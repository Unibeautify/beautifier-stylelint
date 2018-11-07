import { BeautifierLanguageOptions } from "unibeautify";

const styleOptions: BeautifierLanguageOptions = {
  "no-missing-end-of-source-newline": "end_with_newline",
  "no-eol-whitespace": "remove_trailing_whitespace",
  "max-line-length": "wrap_line_length",
  "string-quotes": "quotes",
  indentation: [
    ["indent_size", "indent_style"],
    (options): any => {
      if (options.indent_size) {
        return [options.indent_size];
      } else if (options.indent_style === "tab") {
        return ["tab"];
      }

      return undefined; // TODO: use Unibeautify default
    },
  ],
};

const options = {
  Style: styleOptions,
};

export default options;
