import { render, screen } from '@testing-library/react';
import Great from './Greet'


describe('Greet Component', () => {
    test('Should render correctly', () => {
        render(<Great />);
        const textElement = screen.getByText(/Hello/i);
        expect(textElement).toBeInTheDocument();
    })
});

// describe('Greet Compenent 1', () => {
//     test('Should render correctly with Name', () => {
//         render(<Great name="dili" />);
//         const textElement = screen.getByText(/hello dili/i);
//         expect(textElement).toBeInTheDocument();
//     })
// })