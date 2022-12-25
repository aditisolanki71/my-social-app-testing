import { render, screen } from "@testing-library/react"
import Header from "../Headers"

//Unit Test
test("should render same text passed into title props",() => {
    render(<Header title="my header"/>)
    const headingElement = screen.getByText(/my header/i)
    expect(headingElement).toBeInTheDocument();
});

//Semantic Test
it("should render same text passed into title props",async () => {
    render(<Header title="Semantic Test"/>)
    const headingElement = screen.getByTitle("headerTitle",{name: "Semantic Test"});
    expect(headingElement).toBeInTheDocument();
});

// test id
it("should render same text passed into title props",async () => {
    render(<Header title="Test Id"/>)
    const headingElement = screen.getByTestId("headerTestId", {name: "Test Id"});
    expect(headingElement).toBeInTheDocument();
});