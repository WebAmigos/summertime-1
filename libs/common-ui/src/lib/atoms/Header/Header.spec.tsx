import { render } from '@testing-library/react';
import { axe } from 'jest-axe';

import { Header } from './Header';

describe('Header component', () => {
  it('to have no violations', async () => {
    const { container } = render(<Header>Lorem ipsum</Header>);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
