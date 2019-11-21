import chalk from 'chalk';
import MJML from './index';
const mjml = MJML({ beautify: true });

describe('mjml tag', () => {
  it('renders default HTML for <mjml/>', () => {
    expect(
      mjml`
        <mjml>
          <!-- content goes here -->
        </mjml>


      `,
    ).toMatchSnapshot();
  });

  it('renders HTML with simple substitutions', () => {
    const companyName = chalk`
    I love my
    My 🤘🏻 < {keyword('orange').bold Company}`;
    const textSize = 62;
    expect(
      mjml`
        <mjml>
          <mj-body>
            <!-- Company Header -->
            <mj-section background-color="#f0f0f0">
              <mj-column>
                <mj-text
                  font-family="inherit"
                  font-style="italic"
                  font-size="${textSize}px"
                  color="#626262"
                >
                  ${companyName}
                </mj-text>
              </mj-column>
            </mj-section>
          </mj-body>
        </mjml>
      `,
    ).toMatchSnapshot();
  });
});
