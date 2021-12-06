const AdminView = () => {
    return (
        <div className="p-5">
            <div className="text-3xl">Administrator panel</div>
            <div className="p-6 grid grid-cols-1 gap-4">
                <input className="col-span-1 p-2 border-solid border-2 border-gray-300 text-gray-800 placeholder-gray-500 placeholder-opacity-100" type="text" placeholder="Username"/>
                <input className="col-span-1 p-2 border-solid border-2 border-gray-300 text-gray-800 placeholder-gray-500 placeholder-opacity-100" type="text" placeholder="Permissions"/>
                <input className="col-span-1 p-2 border-solid border-2 border-gray-300 text-gray-800 placeholder-gray-500 placeholder-opacity-100" type="text" placeholder="Zoeub"/>
                <button>Save</button>
            </div>
        </div>
    )
}

export default AdminView;