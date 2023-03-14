export default () => {
    return (
        <nav className="bg-gray-800 flex justify-center w-full sm: space-x-4 py-2  mb-5">
            {[
                ['Home', '/#'],
                ['Projects', '/#/projects'],
            ].map(([title, url]) => (
                <a href={url} className="mx-2 rounded-lg px-3 py-2 text-gray-100 font-medium hover:text-gray-300">{title}</a>
            ))}
        </nav>
    )
}
