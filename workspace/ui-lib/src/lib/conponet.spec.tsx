import { render } from '@testing-library/react';

import Conponet from './conponet';

describe('Conponet', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Conponet />);
    expect(baseElement).toBeTruthy();
  });
});
