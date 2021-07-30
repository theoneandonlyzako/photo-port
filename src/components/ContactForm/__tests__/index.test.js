import React from 'react';
// import { render, cleanup } from '../test-utils';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..';

afterEach(cleanup);

describe('Contact componenet renders', () => {
    // Baseline Test
    it('renders', () => {
        render(<Contact />);
    })

    // snapshot Test
    it('renders', () => {
        const { asFragment } = render(<Contact />);
        // Assert Value Comparison
        expect(asFragment()).toMatchSnapshot();
    });
})

it('renders', () => {
    const { queryByTestId } = render(<Contact />)
    expect(queryByTestId('h1tag')).toHaveTextContent('Contact me')
})

it('renders', () => {
    const { queryByTestId } = render(<Contact />)
    expect(queryByTestId('button')).toHaveTextContent('submit')
})