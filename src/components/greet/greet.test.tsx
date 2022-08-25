import {render, screen} from '@testing-library/react';
import Great from './Greet'

test('Should render correctly', () => { 
    render(<Great />);
    const textElement = screen.getByText(/hello/i);
    expect(textElement).toBeInTheDocument();
 })

 test('Should render correctly with Name', () => { 
    render(<Great name="dili" />);
    const textElement = screen.getByText(/hello dili/i);
    expect(textElement).toBeInTheDocument();
 })