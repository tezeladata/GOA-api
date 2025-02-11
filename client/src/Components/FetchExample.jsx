const FetchExample = ({ title, url }) => {
    return (
        <div className="w-full">
            <h2 className="text-2xl font-black py-4 max-[550px]:text-lg">{title}</h2>
            <div className="w-full bg-gray-500 shadow-[0px_0px_29px_3px_rgba(255,255,255,0.5)]">
                <pre className="p-4">
                    <code className="text-xl text-white max-[1900px]:text-lg max-[800px]:text-sm max-[650px]:text-xs max-[550px]:text-[8px]">
                        {`fetch('${url}')
    .then(res => res.json())
    .then(json => console.log(json));`}
                    </code>
                </pre>
            </div>
        </div>
    );
};

export default FetchExample;