import assert from 'assert';
import mjml2html from 'mjml';
import {
  TemplateTag,
  stripIndentTransformer,
  trimResultTransformer,
  splitStringTransformer,
  inlineArrayTransformer,
} from 'common-tags';
// import { encodeXML } from 'entities';
import Ansi2Html from 'ansi-to-html';
export default function MJML(
  mjmlRenderingOptions?: Parameters<typeof mjml2html>['1'],
): TemplateTag {
  const ansi2html = new Ansi2Html({
    newline: true,
    escapeXML: true,
    stream: true,
  });
  return new TemplateTag([
    stripIndentTransformer('all'),
    splitStringTransformer('\n'),
    inlineArrayTransformer(),
    trimResultTransformer(),
    {
      onSubstitution(substitution: string): string {
        const str =
          typeof substitution === 'string'
            ? substitution
            : String(substitution);
        return ansi2html.toHtml(str);
      },
      onEndResult(res: string): string {
        assert.ok(
          res.startsWith('<mjml>') && res.endsWith('</mjml>'),
          'MJML string must be wrapped in <mjml/> tag',
        );
        return mjml2html(res, {
          ...mjmlRenderingOptions,
          validationLevel: 'strict',
        }).html;
      },
    },
  ]);
}
