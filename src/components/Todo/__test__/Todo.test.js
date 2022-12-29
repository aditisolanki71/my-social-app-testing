import { fireEvent, render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom";
import Todo from "../Todo";

const MockTodo = () => {
    return (
        <BrowserRouter>
            <Todo/>
        </BrowserRouter>
    )
}

const addTask = (tasks) => {
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i)
    const buttonElement = screen.getByRole("button", { name: /Add/i });
    tasks.forEach(task => {
        fireEvent.change(inputElement, {target: { value: task}});
        fireEvent.click(buttonElement);
    });
    // tasks.array.forEach(task => {
    //     fireEvent.change(inputElement, {target: { value: task}});
    //     fireEvent.click(buttonElement);
    // });
}
describe("Todo", () => {
    it("should render same text passed into title prop", async () => {
        render(<MockTodo />)
        // const inputElement = screen.getByPlaceholderText(/Add a new task here.../i)
        // const buttonElement = screen.getByRole("button", { name: /Add/i });
        // fireEvent.change(inputElement, {target: { value: "new task"}});
        // fireEvent.click(buttonElement);

        addTask(["new task"])

        const divElement = screen.getByText(/new task/i)
        expect(divElement).toBeInTheDocument();
    });

    it("should render multiple items", async () => {
        render(<MockTodo />)
        addTask(["new task", "Aditi", "Moni"])
        const divElements = screen.getAllByTestId("task-container")
        expect(divElements.length).toBe(4);
    });

    it("task should have completed class when clicked", async () => {
        render(<MockTodo />)
        addTask(["new task"])
        const divElement = screen.getByText(/new task/i)
        fireEvent.click(divElement);
        expect(divElement).toHaveClass("todo-item-active");
    });
})