import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom";
import FollowersList from "../FollowersList";

const MOckedFollowersList = () => {
    return (
        <BrowserRouter>
            <FollowersList />
        </BrowserRouter>
    )
}

describe("Followers List", () => {
    test("should render follower items", async () => {
        render(<MOckedFollowersList/>)
        const followerDivElement = await screen.findByTestId("follower-item-0")
        expect(followerDivElement).toBeInTheDocument();
    });
    test("should render multiple follower items", async () => {
        render(<MOckedFollowersList/>)
        const followerDivElements = await screen.findAllByTestId(/follower-item/i)
        expect(followerDivElements.length).toBe(5);
    });
});