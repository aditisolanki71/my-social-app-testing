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
    beforeEach(() => {
        console.log("***Running before each test***")
    })
    beforeAll(() => {
        console.log("***Run once before all tests***")
    })
    afterEach(() => {
        console.log("***Running after test***")
    })
    afterAll(() => {
        console.log("***Run once after all tests***")
    })
    test("should render follower items", async () => {
        render(<MOckedFollowersList/>)
        const followerDivElement = await screen.findByTestId("follower-item-0")
        screen.debug();
        expect(followerDivElement).toBeInTheDocument();
    });

    test("should render follower items", async () => {
        render(<MOckedFollowersList/>)
        const followerDivElement = await screen.findByTestId("follower-item-0")
        screen.debug();
        expect(followerDivElement).toBeInTheDocument();
    });

    test("should render follower items", async () => {
        render(<MOckedFollowersList/>)
        const followerDivElement = await screen.findByTestId("follower-item-0")
        screen.debug();
        expect(followerDivElement).toBeInTheDocument();
    });
    //without mock data
    // test("should render multiple follower items", async () => {
    //     render(<MOckedFollowersList/>)
    //     const followerDivElements = await screen.findAllByTestId(/follower-item/i)
    //     expect(followerDivElements.length).toBe(5);
    // });
});