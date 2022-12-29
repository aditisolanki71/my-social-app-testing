import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom";
import TodoFooter from "../TodoFooter";


const MockTodoFooter = ({numberOfIncompleteTasks}) => {
    return (
        <BrowserRouter>
            <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks}/>
        </BrowserRouter>
    )
}
test("should render correct amount of incomplete task", async () => {
    render(<MockTodoFooter numberOfIncompleteTasks={5}/>);
    const paragraphElement = screen.getByText(/5 tasks left/i)
    expect(paragraphElement).toBeInTheDocument();
});

test("should render 'task' when the number of incomplete tasks is one", async () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1}/>);
    const paragraphElement = screen.getByText(/1 task left/i)
    expect(paragraphElement).toBeInTheDocument();
});

test("should render 'task' when the number of incomplete tasks is one", async () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1}/>);
    const paragraphElement = screen.getByText(/1 task left/i)
    expect(paragraphElement).toBeTruthy();
    expect(paragraphElement).toBeVisible()
});

test("should check HTML tag is exist or not", async () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1}/>);
    const paragraphElement = screen.getByText(/1 task left/i)
    expect(paragraphElement).toContainHTML("p")
    expect(paragraphElement).toHaveTextContent("1 task left")
});

//assertion with test id
test("should check HTML Role and Content", async () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1}/>);
    const paragraphElement = screen.getByTestId("para");
    expect(paragraphElement).toHaveTextContent("1 task left")
});

//assertion with test id not
test("should check HTML Role and Content", async () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1}/>);
    const paragraphElement = screen.getByTestId("para");
    expect(paragraphElement).not.toBeFalsy();
    expect(paragraphElement.textContent).toBe("1 task left");
});