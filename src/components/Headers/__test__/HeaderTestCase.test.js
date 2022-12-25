import { render, screen } from "@testing-library/react"
import HeaderTestCase from "../HeaderTestCase";

//Unit Test
//GET BY
test("should render same text passed into title props",() => {
    render(<HeaderTestCase title="my header"/>)
    const headingElement = screen.getByText(/my header/i)
    expect(headingElement).toBeInTheDocument();
});

it("should render same text passed into title props",async () => {
    render(<HeaderTestCase title="My Header"/>)
    const headingElement = screen.getByRole("heading", {name: "My Header"});
    expect(headingElement).toBeInTheDocument();
    //error 
    // const headingElement1 = screen.getByRole("paragraph");
    // expect(headingElement1).toBeInTheDocument();
});


it("should render same text passed into title props",async () => {
    render(<HeaderTestCase title="My Header"/>)
    const headingElement = screen.getByRole("heading", {name: "Aditi"});
    expect(headingElement).toBeInTheDocument();
});

//FIND BY (ASYNC)
test("should render same text passed into title props",async () => {
    render(<HeaderTestCase title="moni"/>)
    const headingElement = await screen.findByText("moni")
    expect(headingElement).toBeInTheDocument();
});

//QUERY BY
//here getBy will be failed
test("should render same text passed into title props",async () => {
    render(<HeaderTestCase title="moni"/>)
    const headingElement = await screen.queryByText("no element match")
    expect(headingElement).not.toBeInTheDocument();
});

//Semantic Test
it("should render same text passed into title props",async () => {
    render(<HeaderTestCase title="My Header"/>)
    const headingElement = screen.getByTitle("aditiTitle");
    expect(headingElement).toBeInTheDocument();
});

//GETALLBY
it("should render same text passed into title props",async () => {
    render(<HeaderTestCase title="My Header"/>)
    const headingElements = screen.getAllByRole("heading");
    expect(headingElements.length).toBe(5);
    expect(headingElements.length).toBeGreaterThan(2);
    expect(headingElements.length).toBeLessThan(10);
});

// test id
it("should render same text passed into title props",async () => {
    render(<HeaderTestCase title="Test"/>)
    const headingElement = screen.getByTestId("header-1");
    expect(headingElement).toBeInTheDocument();
});