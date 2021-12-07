const ErrorView = () => {
  return (
    <div
      className="relative flex justify-center items-center mt-52">
      <div className="max-w-xl mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center pt-8 sm:justify-start sm:pt-0">
          <div className="px-4 text-6xl font-bold text-blue-500 border-r border-gray-400 tracking-wider">
            404
          </div>
          <div className="ml-4 text-4xl font-light text-gray-500 uppercase tracking-wider">
            Not Found
          </div>
        </div>
      </div>
    </div>
  )
}
export default ErrorView;