import { render, screen } from "@testing-library/react"
import Header from "../Headers"

//Unit Test
test("should render same text passed into title props",() => {
    render(<Header title="my header"/>)
    const headingElement = screen.getByText(/my header/i)
    expect(headingElement).toBeInTheDocument();
});

it("should render same text passed into title props",async () => {
    render(<Header title="My Header"/>)
    const headingElement = screen.getByRole("heading", {name: "My Header"});
    expect(headingElement).toBeInTheDocument();
    //error 
    // const headingElement1 = screen.getByRole("paragraph");
    // expect(headingElement1).toBeInTheDocument();
});


it("should render same text passed into title props",async () => {
    render(<Header title="My Header"/>)
    const headingElement = screen.getByRole("heading", {name: "Aditi"});
    expect(headingElement).toBeInTheDocument();
});

//Semantic Test
it("should render same text passed into title props",async () => {
    render(<Header title="My Header"/>)
    const headingElement = screen.getByTitle("aditiTitle");
    expect(headingElement).toBeInTheDocument();
});

// test id
it("should render same text passed into title props",async () => {
    render(<Header title="Test"/>)
    const headingElement = screen.getByTestId("header-1");
    expect(headingElement).toBeInTheDocument();
});