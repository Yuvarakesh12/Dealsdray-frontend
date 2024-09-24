import { useRef, useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";

function Home({ onViewProfile, onLeave }) {
  const projects = [
    {
      deadline: "15 Sep 2024",
      title: "Project Orion",
      description: "Developing a new user interface for the application.",
      totalTasks: 25,
      profilePics: Array(5).fill("https://img.freepik.com/premium-photo/elevate-your-brand-with-friendly-avatar-that-reflects-professionalism-ideal-sales-managers_1283595-18531.jpg?ga=GA1.2.363602090.1724251130&semt=ais_hybrid"),
    },
    {
      deadline: "10 Oct 2024",
      title: "Project Zeus",
      description: "Implementing backend features for data management.",
      totalTasks: 30,
      profilePics: Array(5).fill("https://img.freepik.com/premium-photo/elevate-your-brand-with-friendly-avatar-that-reflects-professionalism-ideal-sales-managers_1283595-18531.jpg?ga=GA1.2.363602090.1724251130&semt=ais_hybrid"),
    },
    {
      deadline: "20 Oct 2024",
      title: "Project Titan",
      description: "Creating a marketing plan for the upcoming product launch.",
      totalTasks: 15,
      profilePics: Array(5).fill("https://img.freepik.com/premium-photo/elevate-your-brand-with-friendly-avatar-that-reflects-professionalism-ideal-sales-managers_1283595-18531.jpg?ga=GA1.2.363602090.1724251130&semt=ais_hybrid"),
    },
    {
      deadline: "05 Nov 2024",
      title: "Project Apollo",
      description: "Researching user feedback and analytics for improvement.",
      totalTasks: 18,
      profilePics: Array(5).fill("https://img.freepik.com/premium-photo/elevate-your-brand-with-friendly-avatar-that-reflects-professionalism-ideal-sales-managers_1283595-18531.jpg?ga=GA1.2.363602090.1724251130&semt=ais_hybrid"),
    },
  ];

  const containerRef = useRef(null);
  const [activeTab, setActiveTab] = useState("notification");

  const handleScrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -600, behavior: "smooth" });
    }
  };

  const handleScrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 600, behavior: "smooth" });
    }
  };

  return (
    <>
      <Navbar />
      <div className="p-4 mt-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div>
            {/* Additional content can go here if needed */}
          </div>
        </div>

        <div className="pt-4 grid lg:grid-cols-3 gap-4">
          <div className="flex flex-col items-center bg-gradient-to-r from-[#2A546D] to-[#2A546D] h-[310px] justify-center p-6 md:p-8 rounded-lg shadow-lg text-center">
            <img
              src="https://img.freepik.com/premium-photo/elevate-your-brand-with-friendly-avatar-that-reflects-professionalism-ideal-sales-managers_1283595-18531.jpg"
              className="rounded-full h-[70px] w-[70px] shadow-md"
              alt="Profile"
            />
            <h1 className="text-lg lg:text-xl font-bold text-white">Welcome Back, Yuvarakesh</h1>
            <p className="text-white mt-2 text-sm sm:text-base lg:text-lg px-2">You have 4 meetings today</p>
            <button
              onClick={onViewProfile}
              className="bg-white text-[#2A546D] w-auto px-10 py-2 rounded-[5px] mt-6"
            >
              View Profile
            </button>
          </div>

          <div className="bg-white rounded-lg p-4 shadow-md">
  <h1 className="text-[#2A546D] text-[16px] md:text-[18px] font-bold text-center">Attendance & Leaves</h1>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
    <div className="rounded-lg h-[70px] text-center flex items-center justify-center p-2">
      <h2 className="text-[#1B888F] text-[16px] md:text-[18px] font-semibold">
        <span className="block">5.5</span>
        <span className="text-nowrap font-normal text-[12px] md:text-[14px]">Leaves Taken</span>
      </h2>
    </div>
    <div className="rounded-lg h-[70px] text-center flex items-center justify-center p-2">
      <h2 className="text-[#FF0099] text-[16px] md:text-[18px] font-semibold">
        <span className="block">12</span>
        <span className="text-nowrap font-normal text-[12px] md:text-[14px]">Remaining</span>
      </h2>
    </div>
    <div className="rounded-lg h-[70px] text-center flex items-center justify-center p-2">
      <h2 className="text-[#4CAF50] text-[16px] md:text-[18px] font-semibold">
        <span className="block">18</span>
        <span className="text-nowrap font-normal text-[12px] md:text-[14px]">Days Present</span>
      </h2>
    </div>
    <div className="rounded-lg h-[70px] text-center flex items-center justify-center p-2">
      <h2 className="text-[#FF9800] text-[16px] md:text-[18px] font-semibold">
        <span className="block">30</span>
        <span className="text-nowrap font-normal text-[12px] md:text-[14px]">Total Days</span>
      </h2>
    </div>
    {/* New entries */}
    <div className="rounded-lg h-[70px] text-center flex items-center justify-center p-2">
      <h2 className="text-[#FF5722] text-[16px] md:text-[18px] font-semibold">
        <span className="block">3</span>
        <span className="text-nowrap font-normal text-[12px] md:text-[14px]">Sick Leaves Taken</span>
      </h2>
    </div>
    <div className="rounded-lg h-[70px] text-center flex items-center justify-center p-2">
      <h2 className="text-[#3F51B5] text-[16px] md:text-[18px] font-semibold">
        <span className="block">2</span>
        <span className="text-nowrap font-normal text-[12px] md:text-[14px]">Compensatory Offs</span>
      </h2>
    </div>
    {/* Additional Entries */}
    <div className="rounded-lg h-[70px] text-center flex items-center justify-center p-2">
      <h2 className="text-[#8E24AA] text-[16px] md:text-[18px] font-semibold">
        <span className="block">4</span>
        <span className="text-nowrap font-normal text-[12px] md:text-[14px]">Vacation Days Taken</span>
      </h2>
    </div>
    <div className="rounded-lg h-[70px] text-center flex items-center justify-center p-2">
      <h2 className="text-[#FFEB3B] text-[16px] md:text-[18px] font-semibold">
        <span className="block">1</span>
        <span className="text-nowrap font-normal text-[12px] md:text-[14px]">Pending Leave Requests</span>
      </h2>
    </div>
  </div>
  <div className="flex justify-center mt-4">
    <Link onClick={onLeave}>
      <button className="bg-[#2A546D] text-white font-semibold py-2 px-4 rounded-lg shadow hover:bg-[#1E3A4D] transition duration-300">
        Apply Leave
        <GoArrowUpRight className="inline-block ml-2 text-[16px]" />
      </button>
    </Link>
  </div>
</div>

<div className="bg-white shadow-md rounded-lg">
  <div className="flex flex-col h-full">
    <div className="flex justify-between items-center mb-4 px-2 md:px-4">
      <span className="text-[#2A546D] pt-5 text-[14px] md:text-[18px] font-bold">Weekly Working Hours</span>
      <select className="sm:block py-2 mt-10 bg-gradient-to-r from-[#2A546D] to-[#2A546D] outline-none text-white pl-2 rounded-lg md:mt-4">
        <option>This Week</option>
      </select>
    </div>
    {/* Weekly Working Hours Chart */}
    <div className="flex-grow p-4">
      <div className="bg-[#2A546D] rounded-lg p-4 text-white">
        <h2 className="text-lg font-semibold">Hours Worked</h2>
        <div className="flex justify-between mt-2">
          <div className="text-center">
            <p>Mon</p>
            <p>8</p>
          </div>
          <div className="text-center">
            <p>Tue</p>
            <p>7</p>
          </div>
          <div className="text-center">
            <p>Wed</p>
            <p>9</p>
          </div>
          <div className="text-center">
            <p>Thu</p>
            <p>6</p>
          </div>
          <div className="text-center">
            <p>Fri</p>
            <p>8</p>
          </div>
          <div className="text-center">
            <p>Sat</p>
            <p>0</p>
          </div>
          <div className="text-center">
            <p>Sun</p>
            <p>0</p>
          </div>
        </div>
      </div>
      {/* Bar Chart Representation */}
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-[#2A546D]">Weekly Overview</h3>
        <div className="flex justify-between mt-2">
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
            <div key={index} className="flex flex-col items-center">
              <div
                className={`bg-[#2A546D] rounded-lg`}
                style={{
                  height: '100px', // Fixed height for all bars
                  width: '30px',
                  display: 'flex',
                  alignItems: 'flex-end',
                  justifyContent: 'center',
                  position: 'relative',
                }}
              >
                {/* Conditional height representation */}
                <div
                  className="bg-white rounded-b-lg"
                  style={{
                    height: `${[8, 7, 9, 6, 8, 0, 0][index]}px`, // Inner bar height based on hours
                    width: '100%',
                    position: 'absolute',
                    bottom: 0,
                  }}
                />
              </div>
              <p className="text-xs mt-1">{day}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</div>
</div>

        <div className="bg-white shadow-lg mt-5 rounded-lg lg:h-[460px]">
          <div className="flex justify-between p-3">
            <h1 className="text-[#2A546D] font-semibold text-[18px]">On Going Projects</h1>
            <div className="flex items-center space-x-2">
              <FaCircleChevronLeft onClick={handleScrollLeft} className="text-[#2A546D] cursor-pointer text-xl lg:text-2xl" />
              <FaCircleChevronRight onClick={handleScrollRight} className="text-[#2A546D] cursor-pointer text-xl lg:text-2xl" />
            </div>
          </div>

          <div className="flex overflow-x-scroll py-4 mx-4 space-x-4" ref={containerRef}>
            {projects.map((project, index) => (
              <div key={index} className="bg-white shadow-lg w-[250px] sm:w-[300px] lg:w-[350px] min-h-[190px] flex-shrink-0">
                <div className="bg-[#2A546D] w-full h-[40px] rounded-br-lg">
                  <h1 className="text-white p-2">Deadline: {project.deadline}</h1>
                </div>
                <h1 className="text-[#2A546D] font-semibold p-2 text-[14px] sm:text-[16px]">{project.title}</h1>
                <p className="text-[#2A546D] text-[14px] sm:text-[16px] pl-3 pb-[20px]">{project.description}</p>
                <div className="flex pb-[20px] flex-wrap gap-2">
                  <button className="bg-[#2A546D] bg-opacity-25 ml-[10px] rounded-lg text-[#2A546D] h-[43px] w-[140px] sm:w-[150px]">
                    {project.totalTasks} total tasks
                  </button>
                  {project.profilePics.map((pic, picIndex) => (
                    <img key={picIndex} src={pic} alt={`Profile ${picIndex}`} className="rounded-full h-[30px] w-[30px] border-2 border-white -ml-2" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
