import { render, screen } from "@testing-library/react"
import Header from "../Headers"

test("should render same text passed into title props",() => {
    render(<Header title="my header"/>)
    const headingElement = screen.getByText(/my header/i)
    expect(headingElement).toBeInTheDocument();
});

it("should render same text passed into title props",async () => {
    render(<Header title="My Header"/>)
    const headingElement = screen.getByRole("heading");
    expect(headingElement).toBeInTheDocument();
    //error 
    // const headingElement1 = screen.getByRole("paragraph");
    // expect(headingElement1).toBeInTheDocument();
});

