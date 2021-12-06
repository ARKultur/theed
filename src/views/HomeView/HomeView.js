import HomeSideBar from "../../components/HomeSideBar/HomeSideBar";
import Map from "../../components/Map";

const HomeView = () => {
    return (
        <div className="grid grid-cols-6">
            <div className="col-span-1">
                <HomeSideBar/>
            </div>
            <div className="col-span-5">
                <Map />
            </div>
        </div>
    )
}

export default HomeView;