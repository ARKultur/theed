const Header = () => {
    return (
        <div className="p-6 bg-white text-left shadow-md flex mb-4 align-middle">
            <div className="items-start w-3/4">
                <div className="text-4xl font-bold">Naboo</div>
                <div className="text-md font-light">Le dashboard ARKultur</div>
            </div>
            <div className="items-end w-1/4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Se connecter</button>
            </div>
        </div>
    )
}

export default Header;