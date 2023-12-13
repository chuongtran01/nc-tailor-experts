import { render, screen } from '@/test-utils';
import { Carousel } from './Carousel';

describe('Welcome component', () => {
  it('has correct Next.js theming section link', () => {
    render(<Carousel title="Contact" />);
    expect(screen.getByText('this guide')).toHaveAttribute(
      'href',
      'https://mantine.dev/guides/next/'
    );
  });
});
