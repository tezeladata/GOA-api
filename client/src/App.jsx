import FetchExample from "../src/Components/FetchExample.jsx";

const App = () => {
    return (
        <section className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-gray-500 flex items-center gap-10 justify-between px-[10%] max-[1700px]:flex-col max-[1700px]:justify-center">
            <div className="w-[50%] flex flex-col justify-center items-center max-[1700px]:py-20 max-[1700px]:w-full">
                <h1 className="text-6xl font-black max-[550px]:text-4xl">Mentors</h1>
                <FetchExample title="Get all mentors" url="https://goa-api.onrender.com/mentors" />
                <FetchExample title="Get a single mentor" url="https://goa-api.onrender.com/mentors/Data Tezelashvili" />
                <FetchExample title="Get a speed counts" url="https://goa-api.onrender.com/mentors/speed_count" />
                <FetchExample title="Limit results" url="https://goa-api.onrender.com/mentors?limit=5" />
                <FetchExample title="Sort results" url="https://goa-api.onrender.com/mentors?sort=asc" />
            </div>

            <div className="w-[50%] flex flex-col justify-center items-center max-[1700px]:py-20 max-[1700px]:w-full">
                <h1 className="text-6xl font-black max-[550px]:text-4xl">Leaders</h1>
                <FetchExample title="Get all leaders" url="https://goa-api.onrender.com/leaders" />
                <FetchExample title="Get a single leader" url="https://goa-api.onrender.com/leaders/ვანო მოთიაშვილი" />
                <FetchExample title="Limit results" url="https://goa-api.onrender.com/leaders?limit=10" />
                <FetchExample title="Sort results" url="https://goa-api.onrender.com/leaders?sort=desc" />
                <FetchExample title="Get leader salaries" url="https://goa-api.onrender.com/leaders/salary" />
                <FetchExample title="Get leader squad member count" url="https://goa-api.onrender.com/leaders/members" />
            </div>
        </section>
    );
};

export default App;