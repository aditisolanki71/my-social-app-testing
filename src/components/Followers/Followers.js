import FollowersList from "../FollowersList/FollowersList";
import Header from "../Headers/Headers";

const Followers = () => {
    return (
        <div className="followers">
            <Header title="Followers" />
            <FollowersList />
        </div>
    )
}
export default Followers;